import * as topojson from './topojson-client.js';
export { topojson };
export const d3 = window.d3;
export const sphere = { type: 'Sphere' };
export const controls = document.querySelector('.controls');
export function svgFigure(label) {
    return d3.select('main').append('svg').attr('role', 'img').attr('aria-label', label);
}
export function observeSize(svg, render) {
    const observer = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        if (width < 1 || height < 1) return;
        svg.attr('viewBox', [0, 0, width, height]);
        render(width, height);
    });
    observer.observe(document.querySelector('main'));
}
export function button(text, click) {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = text; b.addEventListener('click', click);
    controls.append(b); return b;
}
export function select(label, entries, value, change) {
    const l = document.createElement('label'), s = document.createElement('select');
    l.append(document.createTextNode(label));
    s.setAttribute('aria-label', label);
    for (const [v, name] of entries) s.add(new Option(name, v));
    s.value = value; s.addEventListener('change', () => change(s.value));
    l.append(s); controls.append(l); return s;
}
export function slider(label, min, max, value, step, change, suffix = '°') {
    const l = document.createElement('label'), i = document.createElement('input'), o = document.createElement('output');
    i.type = 'range'; i.min = min; i.max = max; i.step = step; i.value = value;
    i.setAttribute('aria-label', label);
    const update = () => { o.value = `${i.value}${suffix}`; };
    i.addEventListener('input', () => { update(); change(+i.value); });
    update(); l.append(document.createTextNode(label), i, o); controls.append(l);
    return { input: i, set(v) { i.value = v; update(); } };
}
export function checkbox(label, checked, change) {
    const l = document.createElement('label'), i = document.createElement('input');
    i.type = 'checkbox'; i.checked = checked;
    i.addEventListener('change', () => change(i.checked));
    l.append(i, document.createTextNode(label)); controls.append(l); return i;
}
export function fail(error) {
    console.error(error);
    const p = document.createElement('p'); p.className = 'error'; p.setAttribute('role', 'alert');
    p.textContent = 'Map data could not load. Serve this directory over HTTP (not file://), then reload.';
    document.querySelector('main').replaceChildren(p);
}
export function seeded(seed) {
    return () => { seed |= 0; seed = seed + 0x6d2b79f5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
