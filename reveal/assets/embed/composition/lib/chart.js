import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
export { d3 };

// Palette entries are emitted as `var(--slide-*)` strings and must be applied with .style(),
// never .attr(): deck-builder.js copies the deck's palette onto each figure iframe's
// documentElement on the iframe's load event, which happens *after* this module runs. A var()
// inside a style declaration re-resolves when that lands (and renders the literal fallback until
// then); a var() in a presentation attribute would not resolve at all.
export const ink = "var(--slide-ink, #282722)";
export const muted = "var(--slide-muted, #817d72)";
// Halfway between `muted` and the page background — the weight a structural line (a chart frame)
// wants, distinct from text or data. `.chart-frame` in lib/figure.css computes this same mix as
// its own default; this export exists for the rarer case of overriding one side of a frame in JS
// (see chartFrame's `sideColors`) and needing to fall back to it explicitly.
export const mutedLight = "color-mix(in srgb, var(--slide-muted, #817d72) 50%, var(--slide-background, #fbfaf3) 50%)";
export const hairline = "var(--slide-rule, #d8d5ca)";
export const paper = "var(--slide-background, #fbfaf3)";
export const serif = "var(--slide-serif, 'EB Garamond', Garamond, Georgia, serif)";

export const blue = "var(--slide-blue, #345a94)";
export const orange = "var(--slide-orange, #c47c16)";
export const magenta = "var(--slide-magenta, #823363)";
export const green = "var(--slide-green, #2c9b43)";
export const gold = "var(--slide-gold, #c7a900)";
// The reference deck's red threshold/highlight marks; `accent-red` from the course Typst theme.
export const red = "#b52b20";

export const SPECIES = ["setosa", "versicolor", "virginica"];

// Altair's default category scheme runs blue / orange / red across these three species. The
// deck's blue, orange and magenta are the closest equivalents inside the template's own palette.
const SPECIES_COLOR = { setosa: blue, versicolor: orange, virginica: magenta };
export const speciesColor = (name) => SPECIES_COLOR[name] ?? ink;

export function svgRoot(width, height) {
  return d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .style("font-family", serif)
    .style("color", ink);
}

// The `.chart-axis` class carries the default text styling (see lib/figure.css) and hides the tick
// marks and domain line d3-axis draws by default — the data rectangle a chart-frame() call draws
// once per chart already delineates the plot, so a per-side domain line and a forest of tick marks
// would only repeat that boundary. It applies even after a re-`.call(axis)` regenerates the tick
// text, since the class lives on the persistent outer `g`, not on the elements d3-axis re-creates.
// A `color` option is still an explicit override for figures where the axis itself is the data
// encoding (e.g. the dual-axis illustrations tint each axis's tick labels to match the line it
// belongs to).
export function drawAxis(parent, axis, transform, options = {}) {
  const { size = 17, color } = options;
  const g = parent.append("g").attr("class", "chart-axis").attr("transform", transform).call(axis);
  g.selectAll("text").style("font-family", serif).style("font-size", `${size}px`);
  if (color) g.selectAll("text").style("fill", color);
  return g;
}

// The rectangle that delineates a chart's data space, drawn at the same stroke weight as the (now
// hidden) domain line it replaces (see `.chart-frame` in lib/figure.css). Reads its bounds straight
// from the scales already in play, so a caller never has to restate the margins it used to build
// them; works for any scale whose `.range()` returns a two-element pixel extent (linear, band,
// point, …). `sideColors` overrides one or more edges — e.g. a dual-axis chart, where the left and
// right borders sit right against an axis of their own and read better tinted to match it — by
// drawing a colored line for that edge on top of the base rectangle.
export function chartFrame(parent, x, y, sideColors = {}) {
  const { top: topColor, right: rightColor, bottom: bottomColor, left: leftColor } = sideColors;
  const [x0, x1] = x.range();
  const [y0, y1] = y.range();
  const left = Math.min(x0, x1), right = Math.max(x0, x1);
  const top = Math.min(y0, y1), bottom = Math.max(y0, y1);
  const rect = parent
    .append("rect")
    .attr("class", "chart-frame")
    .attr("x", left)
    .attr("y", top)
    .attr("width", right - left)
    .attr("height", bottom - top);

  const side = (x1v, y1v, x2v, y2v, color) => {
    if (!color) return;
    parent
      .append("line")
      .attr("class", "chart-frame")
      .attr("x1", x1v)
      .attr("y1", y1v)
      .attr("x2", x2v)
      .attr("y2", y2v)
      .style("stroke", color);
  };
  side(left, top, right, top, topColor);
  side(right, top, right, bottom, rightColor);
  side(left, bottom, right, bottom, bottomColor);
  side(left, top, left, bottom, leftColor);

  return rect;
}

// Vega-Lite's default light horizontal gridlines. Off by default across the composition figures —
// call this only where the grid itself is the point, e.g. the dual-axis illustrations, where a
// reader needs to trace a line back to the scale it belongs to. `color` overrides the default
// `.chart-gridline` hairline for figures that tint one grid per series (see lib/dual.js).
export function gridY(parent, y, x0, x1, ticks = 6, color) {
  const g = parent
    .append("g")
    .attr("class", "chart-gridline")
    .selectAll("line")
    .data(y.ticks(ticks))
    .join("line")
    .attr("x1", x0)
    .attr("x2", x1)
    .attr("y1", (d) => y(d))
    .attr("y2", (d) => y(d));
  if (color) g.style("stroke", color);
  return g;
}

export function axisTitle(parent, text, options = {}) {
  const { x, y, rotate = 0, size = 19, color, anchor = "middle" } = options;
  const t = parent
    .append("text")
    .attr("class", "chart-label")
    .attr("transform", `translate(${x},${y})${rotate ? ` rotate(${rotate})` : ""}`)
    .attr("text-anchor", anchor)
    .style("font-family", serif)
    .style("font-size", `${size}px`)
    .text(text);
  if (color) t.style("fill", color);
  return t;
}

// A Vega-Lite-style legend: bold title over a column of swatch + label rows.
export function legend(parent, options = {}) {
  const {
    x,
    y,
    title,
    items,
    size = 17,
    swatch = "circle",
    rowHeight = 24,
    color = speciesColor,
  } = options;
  const g = parent.append("g").attr("transform", `translate(${x},${y})`);
  if (title) {
    g.append("text")
      .attr("class", "chart-title")
      .style("font-family", serif)
      .style("font-size", `${size}px`)
      .text(title);
  }
  const rows = g
    .selectAll("g.row")
    .data(items)
    .join("g")
    .attr("class", "row")
    .attr("transform", (_, i) => `translate(0,${(title ? 1 : 0) * 8 + (i + 1) * rowHeight - 6})`);
  if (swatch === "square") {
    rows
      .append("rect")
      .attr("x", 0)
      .attr("y", -8)
      .attr("width", 13)
      .attr("height", 13)
      .style("fill", (d) => color(d));
  } else if (swatch === "hollow") {
    rows
      .append("circle")
      .attr("cx", 7)
      .attr("cy", -2)
      .attr("r", 5.5)
      .style("fill", "none")
      .style("stroke", (d) => color(d))
      .style("stroke-width", 1.6);
  } else {
    rows
      .append("circle")
      .attr("cx", 7)
      .attr("cy", -2)
      .attr("r", 6)
      .style("fill", (d) => color(d));
  }
  rows
    .append("text")
    .attr("class", "chart-label")
    .attr("x", 22)
    .attr("y", 3)
    .style("font-family", serif)
    .style("font-size", `${size}px`)
    .text((d) => d);
  return g;
}

// Altair's `alt.X(field).bin()` defaults to maxbins=10 and snaps to a "nice" step. For iris
// sepalLength (4.3–7.9) that lands on 0.5-wide bins starting at 4.0; a binned continuous axis
// plots each bin at its midpoint, which is why the reference lines start at 4.25 rather than 4.3.
export function binBySpecies(rows, options = {}) {
  const { xField = "sepalLength", yField, step = 0.5, origin = 4.0 } = options;
  const out = new Map();
  for (const name of SPECIES) {
    const subset = rows.filter((row) => row.species === name);
    if (!subset.length) continue;
    const groups = d3
      .groups(subset, (row) => Math.floor((row[xField] - origin) / step))
      .sort((a, b) => a[0] - b[0]);
    out.set(
      name,
      groups.map(([index, values]) => {
        const ys = values.map((row) => row[yField]).sort(d3.ascending);
        return {
          mid: origin + (index + 0.5) * step,
          mean: d3.mean(ys),
          q1: d3.quantile(ys, 0.25),
          q3: d3.quantile(ys, 0.75),
          n: ys.length,
        };
      }),
    );
  }
  return out;
}

// One species, finer bins — the setosa-only subset the dual-axis slides are built from.
export function binOne(rows, options = {}) {
  const { species = "setosa", xField = "sepalLength", yField, step = 0.2, origin = 4.2 } = options;
  const binned = binBySpecies(rows.filter((row) => row.species === species), {
    xField,
    yField,
    step,
    origin,
  });
  return binned.get(species) ?? [];
}

// The mean line and the interquartile band, drawn from the same binned series into the same
// coordinate space. Every Layer-section figure is some subset of this: band only, line only, or
// both — which is exactly the point the reference slides are making.
export function meanBandPanel(parent, options = {}) {
  const {
    series,
    x,
    y,
    band = true,
    line = true,
    curve = d3.curveBasis,
    color = speciesColor,
    lineWidth = 2.6,
    bandOpacity = 0.25,
  } = options;

  const area = d3
    .area()
    .curve(curve)
    .x((d) => x(d.mid))
    .y0((d) => y(d.q1))
    .y1((d) => y(d.q3));
  const path = d3
    .line()
    .curve(curve)
    .x((d) => x(d.mid))
    .y((d) => y(d.mean));

  const g = parent.append("g");
  if (band) {
    g.append("g")
      .selectAll("path")
      .data([...series])
      .join("path")
      .attr("d", ([, points]) => area(points))
      .style("fill", ([name]) => color(name))
      .style("opacity", bandOpacity);
  }
  if (line) {
    g.append("g")
      .selectAll("path")
      .data([...series])
      .join("path")
      .attr("d", ([, points]) => path(points))
      .style("fill", "none")
      .style("stroke", ([name]) => color(name))
      .style("stroke-width", lineWidth)
      .style("stroke-linecap", "round");
  }
  return g;
}

export function loadIris() {
  return d3.json("data/iris.json");
}
