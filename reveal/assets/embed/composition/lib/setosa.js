import { d3, svgRoot, drawAxis, chartFrame, gridY, axisTitle, blue, orange, hairline, binOne, loadIris } from "./chart.js";

// Every dual-axis slide in the reference is built from the same setosa-only subset: sepalLength
// binned finely (maxbins=10 over 4.3–5.8 lands on a 0.2 step), against mean sepalWidth and mean
// petalWidth — two fields whose natural ranges differ by an order of magnitude. That mismatch is
// the entire reason the sequence exists.
export async function setosaSeries() {
    const iris = await loadIris();
    return {
        sepal: binOne(iris, { yField: "sepalWidth" }),
        petal: binOne(iris, { yField: "petalWidth" }),
    };
}

export const X_TICKS = d3.range(4.2, 5.91, 0.2);
export const xScale = (left, right) => d3.scaleLinear().domain([4.15, 5.95]).range([left, right]);

export function line(x, y) {
    return d3.line().curve(d3.curveBasis).x((d) => x(d.mid)).y((d) => y(d.mean));
}

export function drawXAxis(svg, x, width, margin, height) {
    drawAxis(
        svg,
        d3.axisBottom(x).tickValues(X_TICKS).tickFormat(d3.format(".2f")),
        `translate(0,${height - margin.bottom})`,
    );
    axisTitle(svg, "sepalLength (binned)", {
        x: (margin.left + width - margin.right) / 2,
        y: height - 14,
    });
}

export { d3, svgRoot, drawAxis, chartFrame, gridY, axisTitle, blue, orange, hairline };
