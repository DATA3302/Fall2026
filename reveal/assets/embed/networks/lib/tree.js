// Synthetic hierarchy chosen to expose depth, ordering, and isomorphic subtrees.
const data = { name: 'Root', children: [
    { name: 'A', children: [{ name: 'A1', children: [{ name: 'A1a' }, { name: 'A1b' }] }, { name: 'A2' }] },
    { name: 'B', children: [{ name: 'B1', children: [{ name: 'B1a' }, { name: 'B1b' }] }, { name: 'B2' }] },
    { name: 'C', children: [{ name: 'C1' }, { name: 'C2' }, { name: 'C3' }] }
] };
const root = d3.hierarchy(data);
root.eachBefore((d, i) => { d.id = i; d.allChildren = d.children; });
const group = d3.select('#tree');
const layout = document.querySelector('#layout');
const initialCollapse = new URLSearchParams(location.search).has('collapsed');
function reset() {
    root.eachBefore(d => { d.children = d.allChildren; });
    if (initialCollapse) root.children.forEach(d => { d.children = null; });
    layout.value = 'tree'; draw();
}
function draw(focusId) {
    const radial = layout.value === 'radial';
    const algorithm = layout.value === 'cluster' ? d3.cluster() : d3.tree();
    algorithm.size(radial ? [2 * Math.PI, 245] : [530, 690])(root);
    group.attr('transform', radial ? 'translate(450,310)' : 'translate(70,45)');
    const position = d => radial
        ? [Math.sin(d.x) * d.y, -Math.cos(d.x) * d.y]
        : [d.y, d.x];
    const link = radial ? d3.linkRadial().angle(d => d.x).radius(d => d.y)
        : d3.linkHorizontal().x(d => d.y).y(d => d.x);
    group.selectAll('path').data(root.links(), d => d.target.id).join('path')
        .attr('class', 'link').attr('d', link);
    const nodes = group.selectAll('g').data(root.descendants(), d => d.id).join('g')
        .attr('transform', d => `translate(${position(d)})`);
    nodes.selectAll('circle').data(d => [d]).join('circle')
        .attr('class', d => `tree-node${d.allChildren ? ' branch' : ''}${d.allChildren && !d.children ? ' collapsed' : ''}`)
        .attr('r', 9).attr('tabindex', d => d.allChildren ? 0 : null)
        .attr('role', d => d.allChildren ? 'button' : null)
        .attr('aria-label', d => `${d.data.name}: ${d.children ? 'collapse' : 'expand'} branch`)
        .attr('aria-expanded', d => d.allChildren ? String(Boolean(d.children)) : null)
        .on('click', (event, d) => toggle(d))
        .on('keydown', (event, d) => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(d); }
        });
    nodes.selectAll('text').data(d => [d]).join('text').attr('class', 'tree-label')
        .attr('x', d => radial ? (d.x > Math.PI ? -15 : 15) : (d.children ? -15 : 15))
        .attr('text-anchor', d => radial ? (d.x > Math.PI ? 'end' : 'start') : (d.children ? 'end' : 'start'))
        .attr('dy', '0.35em').text(d => d.data.name);
    if (focusId !== undefined) nodes.filter(d => d.id === focusId).select('circle').node()?.focus();
}
function toggle(d) {
    if (!d.allChildren) return;
    d.children = d.children ? null : d.allChildren;
    draw(d.id);
}
layout.addEventListener('change', () => draw());
document.querySelector('#expand').addEventListener('click', () => {
    // Traverse the complete hierarchy, including branches currently hidden from descendants().
    function expand(d) { d.children = d.allChildren; d.children?.forEach(expand); }
    expand(root); draw();
});
document.querySelector('#reset').addEventListener('click', reset);
reset();
document.body.dataset.ready = 'true';
