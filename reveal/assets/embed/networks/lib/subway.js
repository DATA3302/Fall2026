const d3 = window.d3;
const svg = d3.select('svg');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let requested = 1;
let renderLayout = () => {};

// Reveald3 discovers navigation steps before the station data finishes loading.
function requestLayout(value) {
    requested = value;
    renderLayout(value, true);
}
window._transitions = [{
    transitionForward: () => requestLayout(0),
    transitionBackward: () => requestLayout(1),
}];

try {
    const data = await d3.json('data/subway.json');
    if (data.stations.some(d => !Number.isFinite(d.latitude) || !Number.isFinite(d.longitude))) throw Error('Missing sourced station coordinates');
    const nodes = data.stations;
    const byId = new Map(nodes.map(d => [d.id, d]));
    const edges = data.lines.flatMap(line => line.stations.slice(1).map((id, i) => ({
        line: line.id, color: line.color, source: byId.get(line.stations[i]), target: byId.get(id),
    })));
    if (edges.some(d => !d.source || !d.target)) throw Error('Unknown station in route');
    nodes.forEach(d => { d.lines = data.lines.filter(l => l.stations.includes(d.id)).map(l => l.id); });
    const routes = svg.append('g').selectAll('path').data(edges).join('path')
        .attr('class', 'route').attr('stroke', d => d.color).attr('data-line', d => d.line);
    const stations = svg.append('g').selectAll('circle').data(nodes).join('circle')
        .attr('class', 'station').attr('r', d => d.lines.length > 1 ? 5 : 3.2)
        .attr('tabindex', 0).attr('role', 'img').attr('aria-label', d => `${d.name}, line ${d.lines.join(' / ')}`)
        .attr('data-station', d => d.id);
    let amount = requested, width = 900, height = 500;
    // A shared local equirectangular scale preserves the geographic aspect ratio.
    const latitude = d3.mean(nodes, d => d.latitude) * Math.PI / 180;
    nodes.forEach(d => { d.geo = [d.longitude * Math.cos(latitude), -d.latitude]; });
    function fit(key) {
        const [x0, x1] = d3.extent(nodes, d => d[key][0]);
        const [y0, y1] = d3.extent(nodes, d => d[key][1]);
        const scale = Math.min(Math.max(1, width - 40) / (x1 - x0), Math.max(1, height - 40) / (y1 - y0));
        return d => [(d[key][0] - (x0 + x1) / 2) * scale + width / 2, (d[key][1] - (y0 + y1) / 2) * scale + height / 2];
    }
    function draw() {
        const geo = fit('geo'), schematic = fit('schematic');
        nodes.forEach(d => {
            const a = geo(d), b = schematic(d);
            d.position = [a[0] + (b[0] - a[0]) * amount, a[1] + (b[1] - a[1]) * amount];
        });
        svg.attr('viewBox', `0 0 ${width} ${height}`).attr('data-progress', amount.toFixed(4));
        routes.attr('d', d => `M${d.source.position}L${d.target.position}`);
        stations.attr('cx', d => d.position[0]).attr('cy', d => d.position[1]);
    }
    renderLayout = (value, animate = true) => {
        svg.interrupt();
        svg.attr('data-layout', value === 0 ? 'geographic' : 'schematic').attr('aria-busy', 'false');
        if (!animate || reduced.matches) { amount = value; draw(); return; }
        const start = amount;
        svg.attr('aria-busy', 'true').transition().duration(1800).ease(d3.easeCubicInOut)
            .tween('positions', () => t => { amount = start + (value - start) * t; draw(); })
            .on('end', () => svg.attr('aria-busy', 'false'));
    };
    reduced.addEventListener('change', () => { if (reduced.matches) renderLayout(requested, false); });
    new ResizeObserver(entries => {
        const r = entries[0].contentRect;
        width = Math.max(1, r.width); height = Math.max(1, r.height); draw();
    }).observe(document.querySelector('main'));
    renderLayout(requested, false);
    svg.attr('data-ready', 'true');
} catch (error) {
    document.querySelector('#status').textContent = `Unable to load Prague data: ${error.message}`;
    console.error(error);
}
