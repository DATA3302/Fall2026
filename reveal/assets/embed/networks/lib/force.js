const svg = d3.select('svg');
const colors = ['var(--accent)', 'var(--slide-blue, #3b7494)', 'var(--slide-orange, #b66a00)', 'var(--slide-magenta, #a25176)'];
const nodes = d3.range(28).map(id => ({ id, group: Math.floor(id / 7) }));
// Explicit, synthetic topology: four rings, internal chords, and three bridges.
const pairs = [];
for (let group = 0; group < 4; group++) {
    for (let i = 0; i < 7; i++) pairs.push([group * 7 + i, group * 7 + (i + 1) % 7]);
    pairs.push([group * 7, group * 7 + 3], [group * 7 + 1, group * 7 + 5]);
}
pairs.push([3, 7], [10, 14], [17, 21]);
const links = pairs.map(([source, target]) => ({ source, target }));
const edges = svg.append('g').selectAll('line').data(links).join('line').attr('class', 'link');
const dots = svg.append('g').selectAll('circle').data(nodes).join('circle')
    .attr('class', 'node force-node').attr('r', 11).attr('fill', d => colors[d.group]);
dots.append('title').text(d => `Synthetic node ${d.id + 1}, group ${d.group + 1}`);
const simulation = d3.forceSimulation(nodes).randomSource(d3.randomLcg(0.42))
    .force('link', d3.forceLink(links).id(d => d.id).distance(65))
    .force('charge', d3.forceManyBody().strength(-180))
    .force('center', d3.forceCenter(450, 310))
    .force('collide', d3.forceCollide(18))
    .on('tick', () => {
        for (const d of nodes) {
            d.x = Math.max(20, Math.min(880, d.x));
            d.y = Math.max(20, Math.min(600, d.y));
        }
        edges.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
        dots.attr('cx', d => d.x).attr('cy', d => d.y);
    });
let paused = false;
dots.call(d3.drag()
    .on('start', (event, d) => {
        if (!paused && !event.active) simulation.alphaTarget(0.2).restart();
        d.fx = d.x; d.fy = d.y;
    })
    .on('drag', (event, d) => {
        d.fx = Math.max(20, Math.min(880, event.x));
        d.fy = Math.max(20, Math.min(600, event.y));
        if (paused) { d.x = d.fx; d.y = d.fy; simulation.tick(); simulation.on('tick')(); }
    })
    .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
    }));
const charge = document.querySelector('#charge');
charge.addEventListener('input', () => {
    document.querySelector('output').value = charge.value;
    simulation.force('charge').strength(-Number(charge.value));
    if (!paused) simulation.alpha(0.7).restart();
});
const pause = document.querySelector('#pause');
pause.addEventListener('click', () => {
    paused = !paused;
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused ? 'Resume' : 'Pause';
    if (paused) simulation.stop(); else simulation.alpha(0.5).restart();
});
document.querySelector('#reset').addEventListener('click', () => {
    nodes.forEach((d, i) => {
        const a = i * Math.PI * (3 - Math.sqrt(5));
        d.x = 450 + 12 * Math.sqrt(i) * Math.cos(a);
        d.y = 310 + 12 * Math.sqrt(i) * Math.sin(a);
        d.vx = 0; d.vy = 0; d.fx = null; d.fy = null;
    });
    charge.value = '180'; charge.dispatchEvent(new Event('input'));
    paused = false; pause.textContent = 'Pause'; pause.setAttribute('aria-pressed', 'false');
    simulation.alpha(1).restart();
});
window.addEventListener('pagehide', () => simulation.stop());
document.body.dataset.ready = 'true';
