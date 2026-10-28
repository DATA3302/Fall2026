const d3 = window.d3;
const svg = d3.select('svg');
const status = document.querySelector('#status');
const sort = document.querySelector('#sort');
const highlight = document.querySelector('#highlight');
const reset = document.querySelector('#reset');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const attrs = (selection, attributes) => Object.entries(attributes).forEach(([key, value]) => selection.attr(key, value));

async function initialize() {
    const data = await d3.json('data/food-web.json');
    const nodes = new Map(data.nodes.map(n => [n.id, n]));
    const root = svg.append('g');
    const edges = root.append('g').attr('class', 'food-links').selectAll('g').data(data.links).join('g');
    edges.append('path').attr('class', 'shaft');
    edges.append('path').attr('class', 'arrowhead');
    edges.append('title').text(e => `${e.source} preys on ${e.target}`);
    const marks = root.append('g').attr('class', 'food-nodes').selectAll('g').data(data.nodes).join('g');
    marks.each(function(n) {
        const group = d3.select(this);
        attrs(group.append('path'), n.vector);
        group.append('title').text(`${n.id}: ${n.category}${data.answer.includes(n.id) ? ', no predators' : ''}`);
    });
    const answers = root.append('g').attr('class', 'answers').selectAll('g').data(data.nodes.filter(n => data.answer.includes(n.id))).join('g');
    answers.append('rect').attr('class', 'answer-ring').attr('x', -60).attr('y', -45).attr('width', 120).attr('height', 90).attr('rx', 30);
    answers.append('text').attr('class', 'answer-label').attr('y', -58).text('No predators');
    let sorted = false, highlighted = false, busy = false, generation = 0;
    const center = (n, t) => [n.x + (n.sorted[0] - n.x) * t, n.y + (n.sorted[1] - n.y) * t];
    // Rectangle boundary intersection; rounded corners do not change the graph topology.
    function endpoints(e, t) {
        const a = center(nodes.get(e.source), t), b = center(nodes.get(e.target), t);
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const scale = Math.min(50 / Math.max(Math.abs(dx), .0001), 35 / Math.max(Math.abs(dy), .0001));
        return [[a[0] + dx * scale, a[1] + dy * scale], [b[0] - dx * scale, b[1] - dy * scale]];
    }
    function draw(t) {
        marks.attr('transform', n => `translate(${(n.sorted[0] - n.x) * t},${(n.sorted[1] - n.y) * t})`);
        answers.attr('transform', n => `translate(${center(n, t)})`).attr('display', highlighted ? null : 'none');
        edges.each(function(e) {
            const group = d3.select(this);
            if (t === 0) {
                attrs(group.select('.shaft'), e.vector);
                attrs(group.select('.arrowhead'), e.arrow);
                return;
            }
            const [a, b] = endpoints(e, t);
            // Follow the moving nodes, fading only the source's boundary-rounding correction.
            const [originalA, originalB] = endpoints(e, 0);
            const start = a.map((v, i) => v + (e.start[i] - originalA[i]) * (1 - t));
            const end = b.map((v, i) => v + (e.end[i] - originalB[i]) * (1 - t));
            const angle = Math.atan2(end[1] - start[1], end[0] - start[0]);
            const base = [end[0] - 27.6 * Math.cos(angle), end[1] - 27.6 * Math.sin(angle)];
            group.select('.shaft').attr('transform', null).attr('fill', 'none').attr('stroke', '#5e5e5e').attr('stroke-width', 7)
                .attr('d', `M${start}L${base}`);
            group.select('.arrowhead').attr('transform', null).attr('fill', '#5e5e5e')
                .attr('d', `M${end}L${base[0] - 13.8 * Math.sin(angle)},${base[1] + 13.8 * Math.cos(angle)}L${base[0] + 13.8 * Math.sin(angle)},${base[1] - 13.8 * Math.cos(angle)}Z`);
        });
    }
    function controls() {
        sort.disabled = busy;
        highlight.disabled = busy;
        reset.disabled = false;
        sort.setAttribute('aria-pressed', sorted);
        highlight.setAttribute('aria-pressed', highlighted);
        sort.textContent = sorted ? 'Original layout' : 'Sort layout';
        svg.attr('aria-busy', busy ? 'true' : 'false').attr('data-layout', sorted ? 'sorted' : 'original');
    }
    function announce() {
        status.textContent = highlighted ? 'Answer: 1 herbivore has no predators (dashed outline). It has no incoming predation arrows.' : `${sorted ? 'Sorted by category' : 'Original layout'} · 16 nodes, 28 predation links`;
    }
    sort.addEventListener('click', async () => {
        if (busy) return;
        busy = true;
        const token = ++generation;
        const from = sorted ? 1 : 0, to = 1 - from;
        controls();
        status.textContent = 'Moving the same nodes; all 28 predation links are preserved…';
        try {
            await root.transition().duration(reducedMotion.matches ? 0 : 1400).ease(d3.easeCubicInOut)
                .tween('layout', () => t => draw(from + (to - from) * t)).end();
        } catch { return; }
        if (token !== generation) return;
        sorted = !sorted;
        busy = false;
        controls();
        announce();
    });
    highlight.addEventListener('click', () => {
        if (busy) return;
        highlighted = !highlighted;
        draw(sorted ? 1 : 0);
        controls();
        announce();
    });
    reset.addEventListener('click', () => {
        ++generation;
        root.interrupt();
        sorted = highlighted = busy = false;
        draw(0);
        controls();
        announce();
    });
    draw(0);
    controls();
    announce();
}
initialize().catch(error => {
    status.textContent = `Unable to load the local food web: ${error.message}. Serve this figure over HTTP.`;
});
