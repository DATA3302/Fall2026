import { d3, svgFigure, observeSize, select, checkbox, slider, fail } from './common.js';
const svg = svgFigure('Digitized elevation contours of Maungawhau / Mount Eden');
try {
    const rows = d3.csvParseRows(await d3.text('data/volcano.csv')).slice(1).map(row => row.map(Number));
    const nx = rows[0].length, ny = rows.length, values = rows.flat();
    let interval = 10, filled = false, selected = 150;
    const g = svg.append('g');
        // d3-contour closes polygons through an artificial outside-of-grid value.
        // Clip to sample centers so the survey boundary is not drawn as an isoline.
        g.append('defs').append('clipPath').attr('id', 'survey').append('rect')
            .attr('x', .501).attr('y', .501).attr('width', nx - 1.002).attr('height', ny - 1.002);
        const fills = g.append('g').attr('clip-path', 'url(#survey)'), lines = g.append('g').attr('clip-path', 'url(#survey)'), labels = g.append('g');
    const color = d3.scaleSequential(d3.interpolateRgbBasis(['#f4f7ef', '#bcd7a9', '#73ad63', '#c7a900'])).domain([90, 195]);
    const path = d3.geoPath(d3.geoIdentity());
    function render() {
        const contours = d3.contours().size([nx, ny]).thresholds(d3.range(100, 196, interval))(values);
        fills.selectAll('path').data(filled ? contours : []).join('path').attr('d', path).style('fill', d => color(d.value));
        lines.selectAll('path').data(contours).join('path').attr('d', path).style('fill', 'none')
            .style('stroke', d => d.value === selected ? 'var(--gold)' : 'var(--accent)')
            .style('stroke-width', d => d.value === selected ? 1.8 : .7).style('vector-effect', 'non-scaling-stroke')
            .selectAll('title').data(d => [d]).join('title').text(d => `${d.value} m elevation`);
        // Label one point on each index contour, avoiding a second map legend.
        const indexLabels = contours.filter(d => d.value % 20 === 0).map(d => ({
            value: d.value,
            point: d.coordinates[0][0].find(([x, y]) => x > 3 && x < nx - 3 && y > 3 && y < ny - 3),
        })).filter(d => d.point);
        labels.selectAll('text').data(indexLabels).join('text')
            .attr('x', d => d.point[0]).attr('y', d => d.point[1])
            .style('font-size', '1.5px').style('fill', 'var(--ink)').style('paint-order', 'stroke')
            .style('stroke', 'white').style('stroke-width', '.45px').text(d => `${d.value}`);
    }
    select('Interval', [[5, '5 m'], [10, '10 m'], [20, '20 m']], interval, v => { interval = +v; render(); });
    checkbox('Elevation color', filled, v => { filled = v; render(); });
    slider('Highlight', 100, 190, selected, 10, v => { selected = v; render(); }, ' m');
    render();
    observeSize(svg, (w, h) => {
        const k = Math.min((w - 12) / nx, (h - 12) / ny);
        g.attr('transform', `translate(${(w - nx * k) / 2},${(h - ny * k) / 2}) scale(${k})`);
    });
    document.body.dataset.ready = 'true';
} catch (error) { fail(error); }
