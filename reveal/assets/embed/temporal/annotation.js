const d3 = window.d3;
const reference = document.querySelector('.reference');
const stage = document.querySelector('#recreation');
const staticButton = document.querySelector('[data-mode=static]');
const localButton = document.querySelector('[data-mode=local]');
const checkbox = document.querySelector('#annotations');
const status = document.querySelector('[role=status]');
let chart = null;
let loading = null;
let mode = 'static';

async function buildChart() {
    const [source, marks] = await Promise.all([
        d3.xml('../../images/temporal/page-33-annotation.svg'),
        d3.json('data/annotation-marks.json')
    ]);
    const root = document.importNode(source.documentElement, true);
    // Keep the source's vector axes and tick glyphs; replace only its 43 marks.
    root.querySelectorAll('path[fill="#ffa500"], path[stroke="#ffffff"]').forEach(path => path.remove());
    root.setAttribute('role', 'img');
    root.setAttribute('aria-label', 'Local D3 recreation of source chart mark positions with switchable historical annotations.');
    root.removeAttribute('width');
    root.removeAttribute('height');
    const svg = d3.select(root);
    svg.append('g').attr('class', 'source-marks').selectAll('circle')
        .data(marks.points).join('circle')
        .attr('cx', d => d[0]).attr('cy', d => d[1]).attr('r', 9.217)
        .attr('fill', '#ffa500').attr('stroke', 'white').attr('stroke-width', 2);

    // Annotation geometry and wording are taken from source page 34.
    const annotations = svg.append('g').attr('class', 'annotations');
    annotations.append('rect').attr('x', 1068.986).attr('y', 97.36)
        .attr('width', 71.745).attr('height', 816.93).attr('fill', '#f27200').attr('opacity', .1494);
    annotations.append('line').attr('x1', 1510.313).attr('x2', 1510.313)
        .attr('y1', 88.065).attr('y2', 909.833).attr('stroke', '#f27200').attr('stroke-width', 3);
    for (const label of [
        { x: 1058, y: 450, anchor: 'end', lines: ['Shorter', '3-Point Line'] },
        { x: 1524, y: 589, anchor: 'start', lines: ['Steph Curry First', 'All-Star Season'] }
    ]) {
        const text = annotations.append('text').attr('x', label.x).attr('y', label.y)
            .attr('text-anchor', label.anchor).attr('fill', '#f27200')
            .attr('font-family', 'Arial, sans-serif').attr('font-size', 34);
        text.selectAll('tspan').data(label.lines).join('tspan')
            .attr('x', label.x).attr('dy', (_, i) => i ? '1.15em' : 0).text(d => d);
    }
    stage.replaceChildren(root);
    return svg;
}
function update() {
    reference.hidden = mode !== 'static';
    stage.hidden = mode === 'static';
    staticButton.setAttribute('aria-pressed', String(mode === 'static'));
    localButton.setAttribute('aria-pressed', String(mode === 'local'));
    checkbox.disabled = mode !== 'local';
    chart?.select('.annotations').attr('display', checkbox.checked ? null : 'none');
}
staticButton.addEventListener('click', () => {
    mode = 'static';
    status.textContent = 'Static source reference selected.';
    update();
});
localButton.addEventListener('click', async () => {
    mode = 'local';
    try {
        loading ??= buildChart().catch(error => { loading = null; throw error; });
        chart = await loading;
        // A pending load must not override a subsequent click on Static.
        if (mode === 'local') status.textContent = 'Local D3 recreation selected. Toggle the historical annotations.';
        update();
    } catch (error) {
        mode = 'static';
        status.textContent = 'Local recreation could not load. Showing the static source reference; try Local D3 again.';
        console.error(error);
        update();
    }
});
checkbox.addEventListener('change', update);
document.body.dataset.ready = 'true';
