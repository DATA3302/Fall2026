const d3 = window.d3;
const svg = d3.select('svg');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const attrs = (selection, attributes) => Object.entries(attributes).forEach(([key, value]) => selection.attr(key, value));
let requestedStage = 0;
let renderStage = () => {};

// Register before fetching data so Reveald3 can discover all three navigation steps.
function setStage(stage) {
    requestedStage = stage;
    renderStage(stage, true);
}
window._transitions = Array.from({ length: 3 }, (_, i) => ({
    transitionForward: () => setStage(i + 1),
    transitionBackward: () => setStage(i),
}));

async function initialize() {
    const data = await d3.json('data/pivotgraph.json');
    const nodes = new Map(data.nodes.map(n => [n.id, n]));
    const categories = new Map(data.categories.map(c => [c.id, c]));
    const root = svg.append('g');
    // Source order matters: the original SVG draws white node outlines before its links.
    const originalNodes = root.append('g').attr('class', 'original-nodes').selectAll('g').data(data.nodes).join('g');
    originalNodes.each(function(n) {
        const group = d3.select(this);
        attrs(group.append('path'), n.vector);
        attrs(group.append('path'), n.border);
        group.append('title').text(`${n.id}: ${n.category.replace('-', ' ')}`);
    });
    const originalEdges = root.append('g').attr('class', 'original-edges').selectAll('path').data(data.links).join('path');
    const aggregateEdges = root.append('g').attr('class', 'aggregate-edges').selectAll('path').data(data.aggregateLinks).join('path')
        .attr('fill', 'none').attr('stroke', '#5e5e5e');
    const aggregateNodes = root.append('g').attr('class', 'aggregate-nodes').selectAll('g').data(data.categories).join('g');
    aggregateNodes.each(function(c) {
        const group = d3.select(this);
        const sample = nodes.get(c.members[0]);
        group.append(sample.shape === 'square' ? 'rect' : 'circle').attr('class', 'category-shape')
            .attr('fill', sample.color).attr('stroke', 'white').attr('stroke-width', 10);
        group.append('text').attr('class', 'category-label').text(c.count);
        group.append('title').text(`${c.id.replace('-', ' ')}: ${c.count} original nodes`);
    });
    const position = n => categories.get(n.category);
    const lerpPoint = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
    function connection(e) {
        const a = categories.get(e.source), b = categories.get(e.target);
        if (a === b) {
            const radius = 58.8086 * Math.sqrt(a.count);
            return `M${a.x - radius},${a.y - radius * .5} C${a.x - 240},${a.y - 100} ${a.x - 240},${a.y + 100} ${a.x - radius},${a.y + radius * .5}`;
        }
        return `M${a.x},${a.y}L${b.x},${b.y}`;
    }
    function draw([move, grow, weight]) {
        originalNodes.attr('display', grow > 0 ? 'none' : null).attr('transform', n => {
            const c = position(n);
            return `translate(${(c.x - n.x) * move},${(c.y - n.y) * move})`;
        });
        originalEdges.attr('display', weight > 0 ? 'none' : null);
        originalEdges.each(function(e) {
            const path = d3.select(this);
            if (move === 0) {
                attrs(path, e.vector);
            } else {
                const a = position(nodes.get(e.source)), b = position(nodes.get(e.target));
                const start = lerpPoint(e.start, [a.x, a.y], move);
                const end = lerpPoint(e.end, [b.x, b.y], move);
                path.attr('transform', null).attr('d', `M${start}L${end}`).attr('fill', 'none').attr('stroke', '#929292').attr('stroke-width', 7);
            }
        });
        aggregateNodes.attr('display', grow > 0 ? null : 'none').attr('transform', c => `translate(${c.x},${c.y})`);
        aggregateNodes.each(function(c) {
            const size = 117.6172 * Math.sqrt(1 + (c.count - 1) * grow);
            const group = d3.select(this);
            group.select('rect').attr('x', -size / 2).attr('y', -size / 2).attr('width', size).attr('height', size);
            group.select('circle').attr('r', size / 2);
            group.select('text').attr('opacity', grow);
        });
        aggregateEdges.attr('display', weight > 0 ? null : 'none').attr('d', connection)
            .attr('stroke-width', e => 7 + (10 * e.count - 7) * weight);
    }
    let current = [0, 0, 0];
    renderStage = (stage, animate) => {
        root.interrupt();
        const target = [stage >= 1 ? 1 : 0, stage >= 2 ? 1 : 0, stage >= 3 ? 1 : 0];
        svg.attr('data-stage', stage).attr('aria-busy', 'false');
        if (!animate || reducedMotion.matches) {
            current = target;
            draw(current);
            return;
        }
        const interpolate = d3.interpolateArray(current, target);
        svg.attr('aria-busy', 'true');
        root.transition().duration(1500).ease(d3.easeCubicInOut)
            .tween('stage', () => t => { current = [...interpolate(t)]; draw(current); })
            .on('end', () => svg.attr('aria-busy', 'false'));
    };
    reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) renderStage(requestedStage, false);
    });
    renderStage(requestedStage, false);
    svg.attr('data-ready', 'true');
}
initialize().catch(error => {
    document.querySelector('#status').textContent = `Unable to load the local graph data: ${error.message}.`;
    console.error(error);
});
