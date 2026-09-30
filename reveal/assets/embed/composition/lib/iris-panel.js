import {
    d3, svgRoot, drawAxis, chartFrame, axisTitle, legend,
    SPECIES, binBySpecies, meanBandPanel, loadIris,
} from "./chart.js";

// The three Layer-section charts (line only, band only, both) are the same panel with different
// layers switched on, which is the whole point of the sequence — so they share one builder.
export async function irisMeanBand(options = {}) {
    const {
        band = true,
        line = true,
        width = 900,
        height = 560,
        showLegend = true,
        yLabel,
    } = options;

    const iris = await loadIris();
    const series = binBySpecies(iris, { yField: "sepalWidth" });

    const margin = { top: 22, right: showLegend ? 190 : 34, bottom: 58, left: 84 };
    const x = d3.scaleLinear().domain([4, 8]).range([margin.left, width - margin.right]);
    const y = d3.scaleLinear().domain([0, 4.5]).range([height - margin.bottom, margin.top]);

    const svg = svgRoot(width, height);
    meanBandPanel(svg, { series, x, y, band, line });

    chartFrame(svg, x, y);
    drawAxis(svg, d3.axisBottom(x).ticks(8), `translate(0,${height - margin.bottom})`);
    drawAxis(svg, d3.axisLeft(y).ticks(9), `translate(${margin.left},0)`);
    axisTitle(svg, "sepalLength (binned)", {
        x: (margin.left + width - margin.right) / 2,
        y: height - 16,
    });
    axisTitle(svg, yLabel ?? (band && line ? "Mean, Q1, Q3 of sepalWidth" : band ? "Q1, Q3 of sepalWidth" : "Mean of sepalWidth"), {
        x: 24,
        y: (margin.top + height - margin.bottom) / 2,
        rotate: -90,
    });
    if (showLegend) {
        legend(svg, {
            x: width - margin.right + 34,
            y: margin.top + 18,
            title: "species",
            items: SPECIES,
        });
    }
    return svg;
}
