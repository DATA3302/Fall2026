import { d3, topojson, sphere, svgFigure, observeSize, button, select, slider, fail } from './common.js';

const params = new URLSearchParams(location.search);
const requested = params.get('view') || 'transitions';
const view = ['transitions', 'azimuthal', 'conic', 'usa', 'mercator', 'cylindrical', 'plane'].includes(requested) ? requested : 'transitions';
const centered = view === 'azimuthal' || view === 'plane';
document.body.classList.toggle('controls-off', params.get('controls') === 'off');
function coordinate(name, fallback, min, max) {
    const value = params.get(name);
    return value === null || value.trim() === '' || !Number.isFinite(+value) ? fallback : Math.max(min, Math.min(max, +value));
}
const initialLongitude = coordinate('lon', 0, -180, 180);
const initialLatitude = centered ? coordinate('lat', view === 'azimuthal' ? 90 : 0, -90, 90) : 0;
const svg = svgFigure(`${view} projection with real coastlines and graticule`);
const factories = {
    mercator: ['Mercator', d3.geoMercator],
    equal: ['Equal Earth', d3.geoEqualEarth],
    natural: ['Natural Earth', d3.geoNaturalEarth1],
    plate: ['Equirectangular', d3.geoEquirectangular],
    conic: ['Conic equal-area', d3.geoConicEqualArea],
};
let width = 960, height = 500, longitude = initialLongitude, latitude = initialLatitude, parallels = [0, 60];
let kind = 'mercator', projection, morphing = false;
let longitudeControl, latitudeControl, firstParallel, secondParallel, projectionControl;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

try {
    if (view === 'usa') await usa();
    else await world();
    document.body.dataset.ready = 'true';
} catch (error) { fail(error); }

async function world() {
    const atlas = await d3.json('data/countries-50m.json');
    // Atlas rings already use D3's spherical winding (clockwise exteriors).
    // Keep them unchanged: planar/RFC-7946 rewinding would fill the oceans instead.
    const land = topojson.feature(atlas, atlas.objects.land);
    const borders = topojson.mesh(atlas, atlas.objects.countries, (a, b) => a !== b);
    const outline = svg.append('path').datum(sphere).attr('class', 'outline');
    const grid = svg.append('path').datum(d3.geoGraticule10()).attr('class', 'graticule');
    const coast = svg.append('path').datum(land).attr('class', 'land');
    const boundaries = svg.append('path').datum(borders).attr('class', 'borders');
    const center = view === 'azimuthal' ? svg.append('circle').attr('r', 3).style('fill', 'var(--gold)') : null;
    let rhumbLine, rhumbHeads, rhumbClip, rhumbEnd, rhumbAngle;
    if (view === 'mercator') {
        // Approximate recovered PDF endpoints, not a known route or named cities.
        const start = [-76, 40], end = [-5, 46], radians = Math.PI / 180;
        const mercatorY = lat => Math.log(Math.tan(Math.PI / 4 + lat * radians / 2));
        const y0 = mercatorY(start[1]), y1 = mercatorY(end[1]);
        const n = Math.ceil(Math.abs(end[0] - start[0]) / .1);
        const rhumb = { type: 'LineString', coordinates: d3.range(n + 1).map(i => {
            const t = i / n, y = y0 + t * (y1 - y0);
            return [start[0] + t * (end[0] - start[0]), (2 * Math.atan(Math.exp(y)) - Math.PI / 2) / radians];
        }) };
        rhumbEnd = end;
        rhumbAngle = Math.atan2(-(y1 - y0), (end[0] - start[0]) * radians) / radians;
        rhumbClip = svg.append('defs').append('clipPath').attr('id', 'rhumb-map-clip')
            .append('path').datum(sphere);
        const label = 'Illustrative constant-bearing (rhumb) arrow: approximate endpoints (−76°, 40°) to (−5°, 46°), recovered from PDF p. 40. Not named cities; the original exact route is unknown.';
        const overlay = svg.append('g').attr('class', 'rhumb-overlay').attr('role', 'img')
            .attr('aria-label', label).attr('clip-path', 'url(#rhumb-map-clip)');
        overlay.append('title').text(label);
        rhumbLine = overlay.append('path').datum(rhumb).attr('class', 'rhumb-line');
        // Wrap the small screen-space arrowhead too, so a tip on the seam is
        // clipped into edge fragments rather than lost or drawn across the map.
        rhumbHeads = overlay.selectAll('.rhumb-head').data([-1, 0, 1]).join('path')
            .attr('class', 'rhumb-head').attr('d', 'M0,0L-9,-4L-9,4Z');
    }

    function make(key = kind) {
        let p;
        if (view === 'azimuthal') p = d3.geoAzimuthalEquidistant().clipAngle(179.99);
        else if (view === 'plane') p = d3.geoOrthographic();
        else if (view === 'cylindrical') p = d3.geoEquirectangular();
        else if (view === 'conic') p = d3.geoConicEqualArea().parallels(parallels);
        else if (view === 'mercator') p = d3.geoMercator();
        else p = factories[key][1]();
        // Fit the unrotated sphere, so changing the center never changes the zoom.
        p.precision(.25).fitExtent([[8, 8], [width - 8, height - 8]], sphere);
        return p.rotate([-longitude, -latitude]);
    }
    function draw(p = projection) {
        const path = d3.geoPath(p).digits(2);
        for (const layer of [outline, grid, coast, boundaries]) layer.attr('d', path);
        if (rhumbLine) {
            // geoPath streams the dense rhumb samples through the projection's
            // antimeridian clipper; never connect the wrapped endpoints directly.
            rhumbLine.attr('d', path);
            rhumbClip.attr('d', path);
            const [x, y] = p(rhumbEnd), period = 2 * Math.PI * p.scale();
            rhumbHeads.attr('transform', wrap => `translate(${x + wrap * period},${y}) rotate(${rhumbAngle})`);
        }
        if (center) {
            const xy = p([longitude, latitude]);
            center.attr('cx', xy[0]).attr('cy', xy[1]);
        }
    }
    function redraw() {
        svg.interrupt(); morphing = false;
        projection = make(); draw();
    }
    function transitionTo(next) {
        if (morphing) { svg.interrupt(); projection = make(); }
        const fromKind = kind, from = projection.rotate([0, 0]);
        kind = next;
        const to = make().rotate([0, 0]);
        if (reducedMotion) { projection = to.rotate([-longitude, -latitude]); draw(); return; }
        // Interpolate projected positions, not SVG strings (which have different
        // point counts after antimeridian clipping and adaptive resampling).
        const radiansToDegrees = 180 / Math.PI;
        // Mercator's raw function is infinite at the poles; its usual stream
        // clips to this latitude. Apply the same limit during the morph.
        const project = (p, key, point) => p(key === 'mercator' ? [point[0], Math.max(-85.05112878, Math.min(85.05112878, point[1]))] : point);
        const fromOrigin = from([0, 0]), toOrigin = to([0, 0]);
        const interpolate = d3.geoProjectionMutator(t => (lambda, phi) => {
            const point = [lambda * radiansToDegrees, phi * radiansToDegrees];
            const a = project(from, fromKind, point), b = project(to, next, point);
            // Raw projections are recentered at (0°, 0°) by D3. Keep canvas
            // translation out of the raw coordinates and restore it explicitly.
            return [(a[0] - fromOrigin[0]) * (1 - t) + (b[0] - toOrigin[0]) * t,
                -(a[1] - fromOrigin[1]) * (1 - t) - (b[1] - toOrigin[1]) * t];
        });
        const tween = interpolate(0).scale(1).translate(fromOrigin).rotate([-longitude, -latitude]).precision(.25);
        morphing = true;
        svg.transition().duration(950).ease(d3.easeCubicInOut)
            .tween('projection', () => t => {
                            interpolate(t).translate([
                                fromOrigin[0] * (1 - t) + toOrigin[0] * t,
                                fromOrigin[1] * (1 - t) + toOrigin[1] * t,
                            ]);
                            draw(tween);
                        })
            .on('end', () => { projection = to.rotate([-longitude, -latitude]); morphing = false; draw(); });
    }
    if (view === 'transitions') {
        projectionControl = select('Projection', Object.entries(factories).map(([k, [name]]) => [k, name]), kind, transitionTo);
        button('Next', () => {
            const keys = Object.keys(factories), next = keys[(keys.indexOf(kind) + 1) % keys.length];
            projectionControl.value = next; transitionTo(next);
        });
    }
    longitudeControl = slider(centered ? 'Center lon' : 'Longitude', -180, 180, initialLongitude, 1, value => { longitude = value; redraw(); });
    if (centered) latitudeControl = slider('Center lat', -90, 90, initialLatitude, 1, value => { latitude = value; redraw(); });
    if (view === 'conic') {
        // Nonnegative parallels keep the cone away from the degenerate antipodal case.
        firstParallel = slider('Parallel 1', 0, 60, 0, 1, value => { parallels[0] = value; redraw(); });
        secondParallel = slider('Parallel 2', 1, 80, 60, 1, value => { parallels[1] = value; redraw(); });
    }
    button('Reset', () => {
        longitude = initialLongitude; latitude = initialLatitude; parallels = [0, 60]; kind = 'natural';
        longitudeControl.set(initialLongitude); latitudeControl?.set(initialLatitude); firstParallel?.set(0); secondParallel?.set(60);
        if (projectionControl) projectionControl.value = kind;
        redraw();
    });
    svg.attr('class', 'rotatable').attr('tabindex', 0)
        .attr('aria-label', `${view} map. Drag horizontally to rotate, or use left and right keys. ${centered ? 'Drag vertically or use up and down keys to move the center latitude.' : ''}`)
        .call(d3.drag().on('drag', event => {
            longitude = ((longitude - event.dx * 180 / width + 540) % 360) - 180;
            if (latitudeControl) latitude = Math.max(-90, Math.min(90, latitude + event.dy * 180 / height));
            longitudeControl.set(Math.round(longitude)); latitudeControl?.set(Math.round(latitude)); redraw();
        }))
        .on('keydown', event => {
            if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
            event.preventDefault(); event.stopPropagation();
            if (event.key === 'ArrowLeft') longitude -= 5;
            if (event.key === 'ArrowRight') longitude += 5;
            if (latitudeControl && event.key === 'ArrowUp') latitude = Math.min(90, latitude + 5);
            if (latitudeControl && event.key === 'ArrowDown') latitude = Math.max(-90, latitude - 5);
            longitude = ((longitude + 540) % 360) - 180;
            longitudeControl.set(Math.round(longitude)); latitudeControl?.set(Math.round(latitude)); redraw();
        });
    observeSize(svg, (w, h) => { width = w; height = h; redraw(); });
}

async function usa() {
    const atlas = await d3.json('data/counties-10m.json');
    const states = topojson.feature(atlas, atlas.objects.states).features.filter(d => +d.id <= 56);
    const nation = topojson.feature(atlas, atlas.objects.nation);
    const counties = topojson.mesh(atlas, atlas.objects.counties, (a, b) => a !== b);
    const borders = topojson.mesh(atlas, atlas.objects.states, (a, b) => a !== b);
    projection = d3.geoAlbersUsa();
    const clip = svg.append('defs').append('clipPath').attr('id', 'us-land').append('path').datum(nation);
    const shapes = svg.append('g').selectAll('path').data(states).join('path').attr('class', 'land');
    shapes.append('title').text(d => d.properties.name);
    const grid = svg.append('path').datum(d3.geoGraticule().step([5, 5])()).attr('class', 'graticule').attr('clip-path', 'url(#us-land)');
    const countyLines = svg.append('path').datum(counties).attr('class', 'counties');
    const stateLines = svg.append('path').datum(borders).attr('class', 'borders');
    function highlight(id) { shapes.classed('highlight', d => d.id === id); }
    const stateControl = select('State', [['', 'All states'], ...states.slice().sort((a, b) => d3.ascending(a.properties.name, b.properties.name)).map(d => [d.id, d.properties.name])], '', highlight);
    shapes.style('cursor', 'pointer').on('click', (_, d) => { stateControl.value = stateControl.value === d.id ? '' : d.id; highlight(stateControl.value); });
    button('Reset', () => { stateControl.value = ''; highlight(''); });
    observeSize(svg, (w, h) => {
        projection.fitExtent([[8, 8], [w - 8, h - 8]], { type: 'FeatureCollection', features: states });
        const path = d3.geoPath(projection).digits(2);
        for (const layer of [clip, shapes, grid, countyLines, stateLines]) layer.attr('d', path);
    });
}
