import * as topojson from '../../geospatial/lib/topojson-client.js';

const d3 = window.d3;
const mode = ['all', 'selected', 'paths'].includes(new URLSearchParams(location.search).get('mode'))
  ? new URLSearchParams(location.search).get('mode') : 'all';
const $ = id => document.getElementById(id);
const svg = d3.select('svg');
const tooltip = $('tooltip');
const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180;

// Only recorded origin -> destination edges enter the graph; counts are not costs.
export function buildGraph(routes) {
  const graph = new Map();
  for (const route of routes) {
    if (!graph.has(route.origin)) graph.set(route.origin, new Set());
    graph.get(route.origin).add(route.destination);
  }
  return new Map([...graph].map(([id, neighbors]) => [id, [...neighbors].sort()]));
}

export function shortestPath(graph, origin, destination) {
  if (origin === destination) return [origin];
  const queue = [origin], previous = new Map([[origin, null]]);
  for (let i = 0; i < queue.length; i++) {
    for (const next of graph.get(queue[i]) || []) {
      if (previous.has(next)) continue;
      previous.set(next, queue[i]);
      if (next === destination) {
        const path = [next];
        while (previous.get(path[0]) !== null) path.unshift(previous.get(path[0]));
        return path;
      }
      queue.push(next);
    }
  }
  return null;
}

function showTip(event, text) {
  tooltip.textContent = text;
  tooltip.hidden = false;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX || rect.x + rect.width / 2;
  const y = event.clientY || rect.y + rect.height / 2;
  tooltip.style.left = `${Math.max(4, Math.min(innerWidth - tooltip.offsetWidth - 8, x + 12))}px`;
  tooltip.style.top = `${Math.max(4, Math.min(innerHeight - tooltip.offsetHeight - 8, y + 12))}px`;
}

async function start() {
  const [airports, routes, topology] = await Promise.all([
    d3.csv('data/airports.csv', d => ({...d, latitude: +d.latitude, longitude: +d.longitude})),
    d3.csv('data/flights-airport.csv', d => ({...d, count: +d.count})),
    d3.json('../geospatial/data/counties-10m.json')
  ]);
  const byId = new Map(airports.map(d => [d.iata, d]));
  if (routes.some(d => !byId.has(d.origin) || !byId.has(d.destination))) throw Error('Route endpoint missing from airport table');
  const graph = buildGraph(routes);
  const endpointIds = new Set(routes.flatMap(d => [d.origin, d.destination]));
  const departures = d3.rollup(routes, a => d3.sum(a, d => d.count), d => d.origin);
  const projection = d3.geoAlbersUsa().scale(1150).translate([485, 290]);
  const caribbean = d3.geoMercator().center([-66.2, 18.2]).scale(1950).translate([885, 536]);
  for (const d of airports) {
    d.xy = projection([d.longitude, d.latitude]);
    if (!d.xy && d.longitude >= -68.5 && d.longitude <= -64 && d.latitude > 17 && d.latitude < 20) {
      d.xy = caribbean([d.longitude, d.latitude]);
    }
  }
  if (routes.some(d => !byId.get(d.origin).xy || !byId.get(d.destination).xy)) throw Error('A route endpoint cannot be mapped');
  const radius = d3.scaleSqrt().domain([0, d3.max(departures.values())]).range([1.7, 12]);
  const states = topojson.feature(topology, topology.objects.states);
  const geo = d3.geoPath(projection);
  svg.append('g').attr('aria-hidden', 'true').selectAll('path').data(states.features).join('path').attr('class', 'map-land').attr('d', geo);
  svg.append('path').attr('class', 'map-boundary').attr('d', geo(topojson.mesh(topology, topology.objects.states, (a, b) => a !== b)));
  const inset = svg.append('g').attr('aria-hidden', 'true');
  inset.append('rect').attr('x', 790).attr('y', 485).attr('width', 192).attr('height', 88).attr('rx', 3).attr('fill', '#f5f7f8').attr('stroke', '#d9e0e3');
  inset.append('text').attr('class', 'map-note').attr('x', 800).attr('y', 500).text('Puerto Rico / U.S. Virgin Islands');
  svg.append('text').attr('class', 'map-note').attr('x', 26).attr('y', 594).text('Albers USA · Alaska & Hawaii repositioned; Caribbean inset · Lines show routes, not flight trajectories');
  const defs = svg.append('defs');
  for (const [id, color] of [['route-arrow', '#bd5828'], ['path-arrow', '#6d43a5'], ['all-arrow', '#49758e']]) {
    defs.append('marker').attr('id', id).attr('viewBox', '0 -3 6 6').attr('refX', 6).attr('refY', 0)
      .attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto').attr('markerUnits', 'userSpaceOnUse')
      .append('path').attr('d', 'M0,-3L6,0L0,3Z').attr('fill', color);
  }
  const routeLayer = svg.append('g').attr('aria-label', 'Directed routes');
  const nodeLayer = svg.append('g').attr('aria-label', 'Airports');
  const labelLayer = svg.append('g').attr('aria-hidden', 'true');
  const label = d => `${d.iata} — ${d.name} (${d.city}, ${d.state})`;
  const ordered = [...airports].sort((a, b) => d3.ascending(a.iata, b.iata));
  for (const id of ['origin', 'destination']) {
    const select = d3.select(`#${id}`);
    select.append('option').attr('value', '').text('No selection');
    for (const active of [true, false]) {
      select.append('optgroup').attr('label', active ? 'Airports in the route table' : 'No recorded routes (not inferred)')
        .selectAll('option').data(ordered.filter(d => endpointIds.has(d.iata) === active)).join('option')
        .attr('value', d => d.iata).text(label);
    }
  }
  $('destination-control').hidden = mode !== 'paths';
  $('click-control').hidden = mode !== 'paths';
  $('destination-key').hidden = mode !== 'paths';
  const headings = {all: 'U.S. airports · All recorded routes', selected: 'U.S. airports · Selected outgoing routes', paths: 'U.S. airports · Shortest directed path'};
  $('heading').textContent = headings[mode];
  $('instructions').textContent = mode === 'paths'
    ? 'Choose two airports. BFS finds one fewest-leg path, following route direction; map clicks alternate origin and destination.'
    : mode === 'selected' ? 'Choose an airport or click a node to reveal its outgoing routes. Reverse links are not assumed.'
      : 'Every recorded directed route is drawn. Choose an airport to highlight its outgoing links.';
  const defaultOrigin = mode === 'paths' ? 'ADQ' : mode === 'all' ? '' : 'SFO';
  const defaultDestination = mode === 'all' ? '' : 'JFK';
  let origin = defaultOrigin, destination = defaultDestination;
  if (mode === 'paths') $('route-key').textContent = 'Purple arrows: shortest directed path';

  function routeShape(d) {
    const a = byId.get(d.origin), b = byId.get(d.destination);
    const [x1, y1] = a.xy, [x2, y2] = b.xy;
    const length = Math.hypot(x2 - x1, y2 - y1) || 1;
    const ux = (x2 - x1) / length, uy = (y2 - y1) / length;
    const trimA = Math.min(length / 4, radius(departures.get(a.iata) || 0) + 1);
    const trimB = Math.min(length / 4, radius(departures.get(b.iata) || 0) + 2);
    return `M${x1 + ux * trimA},${y1 + uy * trimA}Q${(x1 + x2) / 2 - uy * 4},${(y1 + y2) / 2 + ux * 4} ${x2 - ux * trimB},${y2 - uy * trimB}`;
  }
  const dots = nodeLayer.selectAll('circle').data(airports.filter(d => d.xy)
    .sort((a, b) => (departures.get(a.iata) || 0) - (departures.get(b.iata) || 0))).join('circle')
    .attr('class', d => `airport-dot${endpointIds.has(d.iata) ? '' : ' inactive'}`)
    .attr('data-id', d => d.iata).attr('cx', d => d.xy[0]).attr('cy', d => d.xy[1])
    .attr('r', d => endpointIds.has(d.iata) ? radius(departures.get(d.iata) || 0) : .85)
    .attr('aria-label', label)
    .on('pointerenter pointermove', (event, d) => showTip(event, `${label(d)}\n${(departures.get(d.iata) || 0).toLocaleString()} departing flights · ${(graph.get(d.iata) || []).length} outgoing routes\nClick to set ${mode === 'paths' ? $('click-target').value : 'origin'}`))
    .on('pointerleave', () => { tooltip.hidden = true; })
    .on('click', (event, d) => {
      event.stopPropagation();
      if (mode === 'paths' && $('click-target').value === 'destination') { destination = d.iata; $('click-target').value = 'origin'; }
      else { origin = d.iata; if (mode === 'paths') $('click-target').value = 'destination'; }
      tooltip.hidden = true;
      render();
    });
  dots.append('title').text(label);

  function render() {
    $('origin').value = origin;
    $('destination').value = destination;
    $('origin-legend').textContent = `Origin: ${origin || 'none'}`;
    $('destination-legend').textContent = `Destination: ${destination || 'none'}`;
    const path = mode === 'paths' && origin && destination ? shortestPath(graph, origin, destination) : null;
    const pathEdges = new Set(path?.slice(1).map((id, i) => `${path[i]}>${id}`));
    const outgoing = routes.filter(d => d.origin === origin);
    const visibleRoutes = mode === 'all' ? routes : mode === 'selected' ? outgoing : routes.filter(d => pathEdges.has(`${d.origin}>${d.destination}`));
    const lines = routeLayer.selectAll('path').data(visibleRoutes, d => `${d.origin}>${d.destination}`).join('path')
      .attr('data-origin', d => d.origin).attr('data-destination', d => d.destination)
      .attr('data-count', d => d.count).attr('d', routeShape)
      .attr('class', d => `route${mode === 'paths' ? ' path-route' : d.origin === origin ? ' active' : ''}`)
      .attr('marker-end', d => `url(#${mode === 'paths' ? 'path-arrow' : d.origin === origin ? 'route-arrow' : 'all-arrow'})`);
    lines.filter(d => d.origin === origin).raise();
    lines.on('pointerenter pointermove', (event, d) => showTip(event, `${label(byId.get(d.origin))}\n→ ${label(byId.get(d.destination))}\n${d.count.toLocaleString()} recorded flights (2008)`))
      .on('pointerleave', () => { tooltip.hidden = true; });
    dots.classed('is-origin', d => d.iata === origin).classed('is-destination', d => mode === 'paths' && d.iata === destination)
      .interrupt().transition().duration(duration).attr('r', d => d.iata === origin || (mode === 'paths' && d.iata === destination) ? Math.max(6, radius(departures.get(d.iata) || 0)) : endpointIds.has(d.iata) ? radius(departures.get(d.iata) || 0) : .85);
    dots.filter(d => d.iata === origin || (mode === 'paths' && d.iata === destination)).raise();
    const ids = mode === 'paths' ? [...new Set([origin, ...(path || []), destination])] : [origin];
    const labeled = ids.map(id => byId.get(id)).filter(d => d?.xy);
    labelLayer.selectAll('circle').data(labeled, d => d.iata).join('circle').attr('class', 'airport-halo')
      .attr('cx', d => d.xy[0]).attr('cy', d => d.xy[1]).attr('r', d => Math.max(6, radius(departures.get(d.iata) || 0)) + 3)
      .style('stroke', d => mode === 'paths' && d.iata !== origin ? (d.iata === destination ? '#6d43a5' : '#5c8eab') : '#c05a23');
    labelLayer.selectAll('text').data(labeled, d => d.iata).join('text').attr('class', 'airport-label')
      .attr('x', d => d.xy[0] + 9).attr('y', d => d.xy[1] - 11).text(d => d.iata);
    const status = $('status');
    status.dataset.state = 'ready';
    if (mode === 'paths') {
      if (!origin || !destination) { status.dataset.state = 'awaiting-selection'; status.textContent = 'Choose an origin and destination to show a path.'; }
      else if (!path) { status.dataset.state = 'no-route'; status.textContent = `No directed route from ${origin} to ${destination} in this dataset. No reverse or missing links are invented.`; }
      else if (path.length === 1) status.textContent = `${origin} → ${destination}: same airport · 0 legs. No flight required.`;
      else status.textContent = `${path.join(' → ')} · ${path.length - 1} ${path.length === 2 ? 'leg' : 'legs'} · One shortest path by number of flights, not distance or frequency. Equal-length ties use airport ID order.`;
    } else if (!origin) {
      status.textContent = mode === 'all' ? `${routes.length.toLocaleString()} directed routes; no airport selected.` : 'Choose an airport to show outgoing routes.';
    } else {
      status.textContent = `${mode === 'all' ? `${routes.length.toLocaleString()} directed routes · ${endpointIds.size} route airports · ` : ''}${origin}: ${outgoing.length} outgoing routes · ${d3.sum(outgoing, d => d.count).toLocaleString()} departing flights (2008).`;
      if (!outgoing.length) { status.dataset.state = 'no-route'; status.textContent += ' No outgoing route recorded; absence is not evidence of no real-world service.'; }
    }
    const offMap = ids.filter(id => id && !byId.get(id).xy);
    if (offMap.length) status.textContent += ` Outside map extent: ${offMap.join(', ')}.`;
    svg.attr('data-mode', mode).attr('data-path', path ? path.join(',') : '').attr('data-ready', 'true');
  }
  for (const id of ['origin', 'destination']) $(id).addEventListener('change', () => {
    origin = $('origin').value; destination = $('destination').value; tooltip.hidden = true; render();
  });
  document.addEventListener('click', event => {
    if (event.target.closest('header, .ac-controls, footer, .airport-dot')) return;
    origin = ''; destination = ''; $('click-target').value = 'origin'; tooltip.hidden = true; render();
  });
  $('reset').addEventListener('click', () => { origin = defaultOrigin; destination = defaultDestination; $('click-target').value = 'origin'; tooltip.hidden = true; render(); });
  render();
}
start().catch(error => {
  $('status').className = 'ac-status';
  $('status').dataset.state = 'error';
  $('status').textContent = `Unable to load airport figure: ${error.message}. Serve this folder over HTTP and check the local data files.`;
  console.error(error);
});
