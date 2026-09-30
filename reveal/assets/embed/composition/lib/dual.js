import { setosaSeries, xScale, line, drawXAxis, d3, svgRoot, drawAxis, chartFrame, axisTitle, gridY } from "./setosa.js";
import { blue, orange } from "./chart.js";

// The plain and the cleaned-up dual-axis charts are the same layered chart with different axis
// styling — `resolve_scale(y='independent')` in the reference. Keeping them in one builder makes
// the only real difference (can you tell which line reads against which axis?) explicit.
export async function dualAxis({ clean = false, width = 980, height = 560 } = {}) {
    const { sepal, petal } = await setosaSeries();
    const margin = { top: 26, right: 110, bottom: 62, left: 104 };
    const x = xScale(margin.left, width - margin.right);
    const yPetal = d3.scaleLinear().domain([0, 0.4]).range([height - margin.bottom, margin.top]);
    const ySepal = d3.scaleLinear().domain([0, 4.5]).range([height - margin.bottom, margin.top]);

    const petalColor = clean ? blue : blue;
    const sepalColor = clean ? orange : blue;

    const svg = svgRoot(width, height);

    // The dual-axis illustration is exactly the case gridlines are for: cleaned up, each axis
    // carries its own faint gridlines in its own hue so a reader can follow a line to the scale it
    // belongs to. Plain, there is one neutral grid and no such cue.
    if (clean) {
        gridY(svg, yPetal, margin.left, width - margin.right, 8, blue).style("stroke-opacity", 0.22);
        gridY(svg, ySepal, margin.left, width - margin.right, 9, orange).style("stroke-opacity", 0.22);
    } else {
        gridY(svg, ySepal, margin.left, width - margin.right, 9);
    }

    svg.append("path").attr("d", line(x, yPetal)(petal))
        .style("fill", "none").style("stroke", petalColor).style("stroke-width", 2.8);
    svg.append("path").attr("d", line(x, ySepal)(sepal))
        .style("fill", "none").style("stroke", sepalColor).style("stroke-width", 2.8);

    chartFrame(svg, x, yPetal, clean ? { left: blue, right: orange } : {});
    drawXAxis(svg, x, width, margin, height);
    drawAxis(svg, d3.axisLeft(yPetal).ticks(8).tickFormat(d3.format(".2f")),
        `translate(${margin.left},0)`, { color: clean ? blue : undefined });
    drawAxis(svg, d3.axisRight(ySepal).ticks(9).tickFormat(d3.format(".1f")),
        `translate(${width - margin.right},0)`, { color: clean ? orange : undefined });

    const midY = (margin.top + height - margin.bottom) / 2;
    axisTitle(svg, clean ? "Mean of Petal Width (mm)" : "Mean of petalWidth",
        { x: 26, y: midY, rotate: -90, color: clean ? blue : undefined });
    axisTitle(svg, clean ? "Mean of Sepal Width (cm)" : "Mean of sepalWidth",
        { x: width - 22, y: midY, rotate: 90, color: clean ? orange : undefined });

    return svg;
}
