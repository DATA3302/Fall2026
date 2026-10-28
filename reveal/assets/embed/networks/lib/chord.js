const d3 = window.d3;
const $ = id => document.getElementById(id);
const svg = d3.select('svg');
const tooltip = $('tooltip');
const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180;

function showTip(event, text) {
  tooltip.textContent = text;
  tooltip.hidden = false;
  const r = event.currentTarget.getBoundingClientRect();
  tooltip.style.left = `${Math.max(4, Math.min(innerWidth - tooltip.offsetWidth - 8, (event.clientX || r.x + r.width / 2) + 12))}px`;
  tooltip.style.top = `${Math.max(4, Math.min(innerHeight - tooltip.offsetHeight - 8, (event.clientY || r.y + r.height / 2) + 12))}px`;
}

async function start() {
  const {labels, matrix, year} = await d3.json('data/chord.json');
  if (matrix.length !== labels.length || matrix.some(row => row.length !== labels.length || row.some(v => !Number.isFinite(v) || v < 0))) throw Error('Expected a finite, nonnegative export matrix');
  // Source values are thousands of current USD; preserve both directions of trade.
  const value = v => `US$${d3.format(',.3f')(v / 1e6)}B`;
  const pairValues = d => `${year}\n${labels[d.source.index]} → ${labels[d.target.index]}: ${value(d.source.value)}\n${labels[d.target.index]} → ${labels[d.source.index]}: ${value(d.target.value)}`;
  const colors = ['#4189b0', '#ed9746', '#75a97b', '#b86bb0', '#c85353', '#b4ad45', '#5cb9c3', '#956fad', '#dc8cba', '#8f9da6'];
  const color = d3.scaleOrdinal(labels.map((_, i) => i), colors);
  const totals = matrix.map(row => d3.sum(row));
  const chords = d3.chord().padAngle(.026).sortSubgroups(d3.descending).sortChords(d3.ascending)(matrix);
  const root = svg.append('g').attr('transform', 'translate(480,360)');
  const arc = d3.arc().innerRadius(244).outerRadius(261);
  const ribbon = d3.ribbon().radius(241);
  let selected = null, hovered = null;
  const ribbons = root.append('g').selectAll('path').data(chords).join('path')
    .attr('class', 'chord-ribbon').attr('d', ribbon).attr('fill', d => color(d.source.index))
    .attr('data-source', d => labels[d.source.index]).attr('data-target', d => labels[d.target.index]).attr('data-value', d => d.source.value).attr('data-reverse-value', d => d.target.value)
    .attr('tabindex', 0).attr('role', 'button').attr('aria-label', pairValues)
    .on('pointerenter pointermove focus', (event, d) => {
      hovered = {source: d.source.index, target: d.target.index};
      highlight();
      showTip(event, pairValues(d));
    })
    .on('pointerleave blur', () => { hovered = null; tooltip.hidden = true; highlight(); })
    .on('click', (event, d) => select(d.source.index))
    .on('keydown', (event, d) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); select(d.source.index); } });
  const groups = root.append('g').selectAll('g').data(chords.groups).join('g');
  const arcs = groups.append('path').attr('class', 'chord-group').attr('d', arc).attr('fill', d => color(d.index))
    .attr('tabindex', 0).attr('role', 'button').attr('aria-pressed', 'false').attr('data-country', d => labels[d.index])
    .attr('aria-label', d => `${labels[d.index]}: ${value(totals[d.index])}, ${year}`)
    .on('pointerenter pointermove focus', (event, d) => {
      hovered = d.index; highlight(); showTip(event, `${year}\n${labels[d.index]}: ${value(totals[d.index])}`);
    })
    .on('pointerleave blur', () => { hovered = null; tooltip.hidden = true; highlight(); })
    .on('click', (event, d) => select(d.index))
    .on('keydown', (event, d) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); select(d.index); } });
  groups.append('text').attr('class', 'chord-label').attr('dy', '.35em')
    .attr('transform', d => {
      const angle = (d.startAngle + d.endAngle) / 2;
      return `rotate(${angle * 180 / Math.PI - 90}) translate(278)${angle > Math.PI ? ' rotate(180)' : ''}`;
    }).attr('text-anchor', d => (d.startAngle + d.endAngle) / 2 > Math.PI ? 'end' : 'start').text(d => labels[d.index]);
  // Ticks mark export values at US$50 billion intervals.
  groups.each(function(d) {
    const scale = (d.endAngle - d.startAngle) / d.value;
    d3.select(this).selectAll('line').data(d3.range(0, d.value, 50e6)).join('line')
      .attr('transform', value => `rotate(${(d.startAngle + value * scale) * 180 / Math.PI - 90}) translate(262,0)`)
      .attr('x2', 5).attr('stroke', '#71808b').attr('stroke-width', .7);
  });
  d3.select('#country').selectAll('option.country').data(labels).join('option').attr('class', 'country').attr('value', (_, i) => i).text(d => d);
  $('country').addEventListener('change', () => { selected = $('country').value === '' ? null : +$('country').value; hovered = null; tooltip.hidden = true; update(); });
  $('reset').addEventListener('click', () => { selected = null; hovered = null; tooltip.hidden = true; update(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); selected = null; hovered = null; tooltip.hidden = true; update(); } });

  function select(index) { selected = selected === index ? null : index; update(); }
  function highlight() {
    const current = hovered ?? selected;
    const connected = d => current === null || (typeof current === 'object'
      ? d.source.index === current.source && d.target.index === current.target
      : d.source.index === current || d.target.index === current);
    ribbons.interrupt().transition().duration(duration).style('opacity', d => connected(d) ? 1 : .055);
    arcs.interrupt().transition().duration(duration).style('opacity', d => current === null || (typeof current === 'object'
      ? d.index === current.source || d.index === current.target : d.index === current) ? 1 : .45);
  }
  function update() {
    $('country').value = selected === null ? '' : String(selected);
    arcs.attr('aria-pressed', d => String(d.index === selected));
    $('status').textContent = selected === null
      ? `${year}: ${value(d3.sum(totals))}`
      : `${labels[selected]}, ${year}: ${value(totals[selected])}`;
    svg.attr('data-ready', 'true').attr('data-selected', selected === null ? '' : labels[selected]);
    highlight();
  }
  update();
}
start().catch(error => {
  $('status').className = 'ac-status';
  $('status').dataset.state = 'error';
  $('status').textContent = `Unable to load chord figure: ${error.message}. Serve this folder over HTTP.`;
  console.error(error);
});
