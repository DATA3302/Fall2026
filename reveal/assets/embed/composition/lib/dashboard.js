import {
    d3, svgRoot, drawAxis, chartFrame, axisTitle,
    ink, muted, blue, orange, magenta, green, gold, red, serif,
} from "./chart.js";

// The capstone example: one dashboard that nests all four operators.
//
//   scatterplot matrix   -> Repeat, two-dimensional (a field pair per panel)
//   monthly average bars -> Repeat over rows, each panel a Layer of bars + a mean rule
//   weather histograms   -> Facet, one panel per value of `weather`
//   the dashboard itself -> Concatenate of those three regions
//
// All three slides that show this dashboard — plain, annotated, and cross-linked — are built by
// this one function, so "the same dashboard, now responding to interaction" is true by
// construction rather than by my having drawn it twice. `linked` is the only mode that adds
// marks; the plain and annotated paths render exactly what they always did.

const SPLOM_FIELDS = { cols: ["temp_max", "precipitation", "wind"], rows: ["wind", "precipitation", "temp_max"] };
const WEATHER = ["drizzle", "fog", "rain", "snow", "sun"];
const WEATHER_COLOR = {
    drizzle: "#8ab0d9",
    fog: muted,
    rain: blue,
    snow: magenta,
    sun: gold,
};
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const meanByMonth = (rows, field) => {
    const byMonth = d3.rollup(rows, (v) => d3.mean(v, (d) => d[field]), (d) => d.date.getMonth());
    return d3.range(12).map((m) => byMonth.get(m) ?? 0);
};

export async function buildDashboard({ annotate = false, linked = false } = {}) {
    const raw = await d3.csv("data/seattle-weather.csv", (row) => ({
        date: new Date(row.date),
        precipitation: +row.precipitation,
        temp_max: +row.temp_max,
        wind: +row.wind,
        weather: row.weather,
    }));

    const width = 1240, height = 790;
    const svg = svgRoot(width, height);

    svg.append("text").attr("class", "chart-title").attr("x", 26).attr("y", 30)
        .style("font-family", serif).style("font-size", "22px").text("Seattle Weather Dashboard");

    const domain = Object.fromEntries(
        ["temp_max", "precipitation", "wind"].map((f) => [f, d3.extent(raw, (d) => d[f])]),
    );

    // ---- Region 1: the scatterplot matrix (Repeat, 2-D) -------------------------------------
    const splom = { x: 78, y: 96, w: 600, h: 380 };
    const cellW = (splom.w - 2 * 26) / 3, cellH = (splom.h - 2 * 30) / 3;
    const splomG = svg.append("g");
    const splomPanels = [];

    SPLOM_FIELDS.rows.forEach((rowField, ri) => SPLOM_FIELDS.cols.forEach((colField, ci) => {
        const ox = splom.x + ci * (cellW + 26), oy = splom.y + ri * (cellH + 30);
        const panel = splomG.append("g").attr("transform", `translate(${ox},${oy})`);
        const x = d3.scaleLinear().domain(domain[colField]).nice().range([0, cellW]);
        const y = d3.scaleLinear().domain(domain[rowField]).nice().range([cellH, 0]);

        const circles = panel.append("g").selectAll("circle").data(raw).join("circle")
            .attr("cx", (d) => x(d[colField])).attr("cy", (d) => y(d[rowField])).attr("r", 1.9)
            .style("fill", blue).style("opacity", 0.55);

        chartFrame(panel, x, y);
        // Repeat, 2-D: x is shared down a column (every row uses the same colField and domain)
        // and y is shared across a row (every column uses the same rowField and domain) — so only
        // the panels sitting on the splom's true bottom/left edge need tick values or a title;
        // an interior panel's axis would just repeat one its neighbor already shows.
        if (ri === SPLOM_FIELDS.rows.length - 1) {
            drawAxis(panel, d3.axisBottom(x).ticks(4), `translate(0,${cellH})`, { size: 11 });
            axisTitle(panel, colField, { x: cellW / 2, y: cellH + 26, size: 12 });
        }
        if (ci === 0) {
            drawAxis(panel, d3.axisLeft(y).ticks(3), "translate(0,0)", { size: 11 });
            axisTitle(panel, rowField, { x: -34, y: cellH / 2, rotate: -90, size: 12 });
        }

        splomPanels.push({ panel, x, y, rowField, colField, nodes: circles.nodes() });
    }));

    // ---- Region 2: monthly averages (Repeat over rows, each panel a Layer) -------------------
    const bars = { x: 770, y: 96, w: 250, h: 380 };
    const barCellH = (bars.h - 2 * 30) / 3;
    const barsG = svg.append("g");
    const barPanels = [];

    const BAR_FIELDS = ["wind", "precipitation", "temp_max"];
    BAR_FIELDS.forEach((field, i) => {
        const oy = bars.y + i * (barCellH + 30);
        const panel = barsG.append("g").attr("transform", `translate(${bars.x},${oy})`);
        const monthly = meanByMonth(raw, field);
        const overall = d3.mean(raw, (d) => d[field]);

        const x = d3.scaleBand().domain(d3.range(12)).range([0, bars.w]).padding(0.12);
        const y = d3.scaleLinear().domain([0, d3.max(monthly)]).nice().range([barCellH, 0]);

        // Linked only: the full year stays on screen as a faint backdrop, so a selection is read
        // against the whole rather than against a rescaled chart with no reference frame.
        const backdrop = linked
            ? panel.append("g").selectAll("rect").data(monthly).join("rect")
                .attr("x", (_, m) => x(m)).attr("width", x.bandwidth())
                .attr("y", (v) => y(v)).attr("height", (v) => y(0) - y(v))
                .style("fill", blue).style("opacity", 0.16)
            : null;

        // Layer 1 — the bars.
        const solid = panel.append("g").selectAll("rect").data(monthly).join("rect")
            .attr("x", (_, m) => x(m)).attr("width", x.bandwidth())
            .attr("y", (v) => y(v)).attr("height", (v) => y(0) - y(v))
            .style("fill", blue);
        // Layer 2 — the overall-mean rule.
        const rule = panel.append("line").attr("x1", 0).attr("x2", bars.w)
            .attr("y1", y(overall)).attr("y2", y(overall))
            .style("stroke", red).style("stroke-width", 1.6);

        chartFrame(panel, x, y);
        // Repeat over rows: every panel shares the same month axis, so only the bottom panel — the
        // one actually sitting on the region's exterior edge — needs its tick values or title.
        // Each panel's own field lives on y, so that axis is never shared and always shows.
        if (i === BAR_FIELDS.length - 1) {
            drawAxis(panel, d3.axisBottom(x).tickValues([0, 4, 8]).tickFormat((m) => MONTHS[m]),
                `translate(0,${barCellH})`, { size: 11 });
            axisTitle(panel, "date (month)", { x: bars.w / 2, y: barCellH + 26, size: 12 });
        }
        const axisY = drawAxis(panel, d3.axisLeft(y).ticks(3), "translate(0,0)", { size: 11 });
        axisTitle(panel, `Average of ${field}`, { x: -36, y: barCellH / 2, rotate: -90, size: 12 });

        // Linked only: a transparent full-height strip per month, so a month is clickable even
        // where its bar is short.
        const hits = linked
            ? panel.append("g").selectAll("rect").data(d3.range(12)).join("rect")
                .attr("x", (m) => x(m)).attr("width", x.bandwidth())
                .attr("y", 0).attr("height", barCellH)
                .style("fill", "transparent").style("cursor", "pointer")
            : null;

        barPanels.push({ field, panel, x, y, solid, backdrop, rule, axisY, hits, fullMax: d3.max(monthly) });
    });

    // ---- Region 3: temp_max by weather condition (Facet) -------------------------------------
    const facet = { x: 78, y: 560, w: 1000, h: 180 };
    const facetCellW = (facet.w - 4 * 22) / 5;
    const facetG = svg.append("g");
    const facetPanels = [];

    const step = 5;
    const binOf = (t) => Math.floor(t / step) * step;
    const counts = d3.rollups(raw, (rows) => rows.length, (d) => d.weather, (d) => binOf(d.temp_max));
    const countMap = new Map(counts.map(([w, bins]) => [w, new Map(bins)]));
    const maxCount = d3.max(counts, ([, bins]) => d3.max(bins, ([, n]) => n));
    const tempBins = d3.range(-5, 41, step);

    const fx = d3.scaleLinear().domain([-5, 40]).range([0, facetCellW]);
    const fy = d3.scaleLinear().domain([0, maxCount]).nice().range([facet.h - 40, 0]);

    svg.append("text").attr("class", "chart-label").attr("x", facet.x + facet.w / 2).attr("y", facet.y - 26).attr("text-anchor", "middle")
        .style("font-family", serif).style("font-size", "14px").text("weather");

    WEATHER.forEach((name, i) => {
        const panel = facetG.append("g")
            .attr("transform", `translate(${facet.x + i * (facetCellW + 22)},${facet.y})`);
        const bins = countMap.get(name) ?? new Map();

        const backdrop = linked
            ? panel.append("g").selectAll("rect").data(tempBins).join("rect")
                .attr("x", (t) => fx(t)).attr("width", Math.max(1, fx(step) - fx(0) - 1))
                .attr("y", (t) => fy(bins.get(t) ?? 0))
                .attr("height", (t) => fy(0) - fy(bins.get(t) ?? 0))
                .style("fill", WEATHER_COLOR[name]).style("opacity", 0.18)
            : null;

        const solid = panel.append("g").selectAll("rect").data(tempBins).join("rect")
            .attr("x", (t) => fx(t)).attr("width", Math.max(1, fx(step) - fx(0) - 1))
            .attr("y", (t) => fy(bins.get(t) ?? 0))
            .attr("height", (t) => fy(0) - fy(bins.get(t) ?? 0))
            .style("fill", WEATHER_COLOR[name]);

        const title = panel.append("text").attr("class", "chart-title").attr("x", facetCellW / 2).attr("y", -8).attr("text-anchor", "middle")
            .style("font-family", serif).style("font-size", "13px").text(name);
        chartFrame(panel, fx, fy);
        drawAxis(panel, d3.axisBottom(fx).tickValues([0, 10, 20, 30, 40]),
            `translate(0,${facet.h - 40})`, { size: 11 });
        axisTitle(panel, "temp_max (binned)", { x: facetCellW / 2, y: facet.h - 10, size: 12 });
        if (i === 0) {
            drawAxis(panel, d3.axisLeft(fy).ticks(3), "translate(0,0)", { size: 11 });
            axisTitle(panel, "Number of days", { x: -34, y: (facet.h - 40) / 2, rotate: -90, size: 12 });
        }

        const hit = linked
            ? panel.append("rect").attr("x", 0).attr("y", -22)
                .attr("width", facetCellW).attr("height", facet.h - 18)
                .style("fill", "transparent").style("cursor", "pointer")
            : null;

        facetPanels.push({ name, panel, solid, backdrop, title, hit, fy, binOf, tempBins, facetCellW });
    });

    // ---- The annotation pass ------------------------------------------------------------------
    if (annotate) {
        const regions = [
            { box: splom, color: orange, label: "Repeat", pad: 34 },
            { box: bars, color: magenta, label: "Repeat + Layer", pad: 34 },
            { box: facet, color: green, label: "Facet", pad: 30 },
        ];
        regions.forEach(({ box, color, label, pad }) => {
            svg.append("rect")
                .attr("x", box.x - pad).attr("y", box.y - pad + 6)
                .attr("width", box.w + pad * 1.4).attr("height", box.h + pad)
                .attr("rx", 6)
                .style("fill", "none").style("stroke", color).style("stroke-width", 3);
            svg.append("text")
                .attr("class", "chart-title")
                .attr("x", box.x - pad + 6).attr("y", box.y - pad - 4)
                .style("font-family", serif).style("font-size", "18px")
                .style("fill", color).text(label);
        });

        svg.append("rect")
            .attr("x", 18).attr("y", 46).attr("width", width - 40).attr("height", height - 66)
            .attr("rx", 8)
            .style("fill", "none").style("stroke", blue).style("stroke-width", 2.4)
            .style("stroke-dasharray", "10 7");
        svg.append("text")
            .attr("class", "chart-title")
            .attr("x", width - 30).attr("y", 34).attr("text-anchor", "end")
            .style("font-family", serif).style("font-size", "18px")
            .style("fill", blue).text("Concatenate");
    }

    if (!linked) return svg;

    // ---- Cross-linking ------------------------------------------------------------------------
    // Composition decided what is on the screen; this decides what the views do to each other.
    // One selection state, three views, and a single update() that every view reads from — the
    // standard brushing-and-linking arrangement.
    const state = { brush: null, weather: null, month: null };

    const passes = (d) => {
        if (state.weather && d.weather !== state.weather) return false;
        if (state.month !== null && d.date.getMonth() !== state.month) return false;
        if (state.brush) {
            const { colField, rowField, x0, x1, y0, y1 } = state.brush;
            if (d[colField] < x0 || d[colField] > x1) return false;
            if (d[rowField] < y0 || d[rowField] > y1) return false;
        }
        return true;
    };

    const status = svg.append("text").attr("class", "chart-label").attr("x", 26).attr("y", height - 14)
        .style("font-family", serif).style("font-size", "15px");

    svg.append("text").attr("class", "chart-label").attr("x", width - 150).attr("y", height - 14).attr("text-anchor", "end")
        .style("font-family", serif).style("font-size", "15px")
        .text("Drag in any scatterplot · click a weather panel or a month");

    const reset = svg.append("g").style("cursor", "pointer").attr("transform", `translate(${width - 132},${height - 30})`);
    reset.append("rect").attr("width", 104).attr("height", 24).attr("rx", 5)
        .style("fill", "none").style("stroke", muted).style("stroke-width", 1);
    reset.append("text").attr("class", "chart-label").attr("x", 52).attr("y", 17).attr("text-anchor", "middle")
        .style("font-family", serif).style("font-size", "15px").text("Reset");

    function update() {
        const active = state.brush !== null || state.weather !== null || state.month !== null;
        const flags = raw.map(passes);
        const rows = raw.filter((_, i) => flags[i]);

        // The scatterplot matrix keeps every point in place and only changes which ones are lit —
        // position is the shared encoding, so dimming rather than removing preserves context.
        // Written against raw nodes: this runs on every brush move, over 9 panels x 1461 points.
        splomPanels.forEach(({ nodes }) => {
            for (let i = 0; i < nodes.length; i++) {
                const style = nodes[i].style;
                if (!active) {
                    style.fill = blue;
                    style.opacity = 0.55;
                } else if (flags[i]) {
                    style.fill = blue;
                    style.opacity = 0.85;
                } else {
                    style.fill = muted;
                    style.opacity = 0.1;
                }
            }
        });

        barPanels.forEach(({ field, y, solid, axisY, fullMax }) => {
            const monthly = meanByMonth(rows, field);
            // The full year is always inside the domain, so the axis only grows when a selection
            // genuinely exceeds it (all-rain months really are wetter than the annual mean).
            y.domain([0, Math.max(fullMax, d3.max(monthly) ?? 0)]).nice();
            solid.data(monthly)
                .attr("y", (v) => y(v))
                .attr("height", (v) => Math.max(0, y(0) - y(v)));
            // Re-`.call()`ing the axis regenerates its tick text/lines, but they land back inside
            // the same `g.chart-axis` — the CSS in lib/figure.css re-applies with no extra styling.
            axisY.call(d3.axisLeft(y).ticks(3)).selectAll("text").style("font-size", "11px");
        });

        facetPanels.forEach(({ name, solid, title, fy }) => {
            const bins = d3.rollup(
                rows.filter((d) => d.weather === name),
                (v) => v.length,
                (d) => binOf(d.temp_max),
            );
            solid.attr("y", (t) => fy(bins.get(t) ?? 0))
                .attr("height", (t) => fy(0) - fy(bins.get(t) ?? 0));
            title.style("font-weight", state.weather === name ? 600 : 400)
                .style("fill", state.weather === name ? ink : muted);
        });

        status.text(active
            ? `${rows.length} of ${raw.length} days selected`
            : `${raw.length} days`);
    }

    // A brush on every panel; starting one anywhere clears the others, so there is only ever a
    // single spatial selection to reason about.
    const brushes = [];
    splomPanels.forEach((p) => {
        const brush = d3.brush()
            .extent([[0, 0], [cellW, cellH]])
            .on("start", (event) => {
                if (!event.sourceEvent) return;
                brushes.forEach((other) => {
                    if (other.panel !== p.panel) other.group.call(other.brush.move, null);
                });
            })
            .on("brush end", (event) => {
                if (!event.sourceEvent) return;
                if (!event.selection) {
                    state.brush = null;
                } else {
                    const [[px0, py0], [px1, py1]] = event.selection;
                    state.brush = {
                        colField: p.colField,
                        rowField: p.rowField,
                        x0: p.x.invert(px0), x1: p.x.invert(px1),
                        y0: p.y.invert(py1), y1: p.y.invert(py0),
                    };
                }
                update();
            });
        const group = p.panel.append("g").attr("class", "brush").call(brush);
        group.selectAll(".selection")
            .style("fill", ink).style("fill-opacity", 0.08)
            .style("stroke", ink).style("stroke-opacity", 0.5);
        brushes.push({ panel: p.panel, brush, group });
    });

    facetPanels.forEach(({ name, hit }) => {
        hit.on("click", () => {
            state.weather = state.weather === name ? null : name;
            update();
        });
    });

    barPanels.forEach(({ hits }) => {
        hits.on("click", (event, m) => {
            state.month = state.month === m ? null : m;
            update();
        });
    });

    reset.on("click", () => {
        state.brush = null;
        state.weather = null;
        state.month = null;
        brushes.forEach(({ group, brush }) => group.call(brush.move, null));
        update();
    });

    update();
    return svg;
}
