// Shared helpers for the interactivity deck's figures. Palette and chart conventions come from
// the composition deck's library so every embedded figure in the course reads as one system.
export {
    d3, svgRoot, drawAxis, chartFrame, ink, muted, mutedLight, hairline, paper, serif,
    blue, orange, magenta, green, gold, red,
} from "../../composition/lib/chart.js";

// The reference slides draw every SVG canvas as a flat light-gray square.
export const canvasFill = "color-mix(in srgb, var(--slide-muted, #817d72) 28%, var(--slide-background, #faf9f6))";
export const mono = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

// URL query parameters, so one figure file can serve several slides (?mode=..., ?step=...).
export const params = new URLSearchParams(location.search);

// Register reveald3 steps. reveald3 reads `window._transitions` when the iframe loads, so this
// runs synchronously, before any await, and `render` may be swapped in later once data is ready.
// `render(state, animate)` draws state 0..n-1; arrow keys step forward and back through them.
export function stepper(n, initial = 0) {
    const s = { state: initial, render: () => {} };
    window._transitions = Array.from({ length: n - 1 }, (_, i) => ({
        transitionForward: () => { s.state = i + 1; s.render(s.state, true); },
        transitionBackward: () => { s.state = i; s.render(s.state, true); },
    }));
    // A small row of dots (current one filled) so students can see that the figure has more states.
    const dots = document.createElement("div");
    dots.style.cssText = "position:fixed;right:4px;bottom:2px;display:flex;gap:6px;z-index:5;pointer-events:none";
    for (let i = 0; i < n; i++) {
        const d = document.createElement("span");
        d.style.cssText = "width:9px;height:9px;border-radius:50%;border:1.5px solid var(--slide-muted,#817d72)";
        dots.append(d);
    }
    const mark = () => [...dots.children].forEach((d, i) => (d.style.background = i === s.state ? "var(--slide-muted,#817d72)" : "transparent"));
    document.addEventListener("DOMContentLoaded", () => document.body.append(dots));
    s.set = (render) => { s.render = (st, a) => { render(st, a); mark(); }; s.render(s.state, false); };
    return s;
}

// Replay an animation each time its slide becomes current. Iframes are preloaded before they are
// visible, so an animation that only ran on load would already be over when the slide appears.
export function onShow(play) {
    window._transitions = [{ index: "onShow", transitionForward: play, transitionBackward: play }];
}

// Seeded random numbers, so a figure looks the same on every load.
export function mulberry32(a) {
    return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// A labelled button in the corner of a figure (e.g. "Replay"), so a student can rerun an animation
// from its starting configuration without leaving the slide.
export function addButton(label, onClick) {
    let bar = document.querySelector(".fig-controls");
    if (!bar) {
        bar = document.createElement("div");
        bar.className = "fig-controls";
        document.body.append(bar);
        document.documentElement.classList.add("has-button-bar"); // figure.css reserves a strip for it
    }
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", (e) => { e.stopPropagation(); onClick(); button.blur(); });
    bar.append(button);
    return button;
}
