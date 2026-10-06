// Load Data
const data = await d3.csv("data/iris.csv", d3.autoType);

// Specify the chart’s dimensions.
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

let x_axis_variable = "sepalLength";
let y_axis_variable = "sepalWidth";

const chart = fig.append("div");

// Create the positional scales.
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[x_axis_variable]))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[y_axis_variable]))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(data, (d) => d.species).keys(),
  d3.schemeCategory10
);

// Create the SVG container.
const svg = chart
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

// Add a clipPath: everything out of this area won't be drawn.
const clip = svg
  .append("defs")
  .append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("width", width - margin.right - margin.left)
  .attr("height", height - margin.bottom - margin.top)
  .attr("x", margin.left)
  .attr("y", margin.top);

// Add the scatterplot symbols.
const scatter_points = svg
  .append("g")
  .attr("clip-path", "url(#clip)")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale(d[x_axis_variable]))
  .attr("cy", (d) => y_scale(d[y_axis_variable]))
  .attr("fill", (d) => color(d.species))
  .attr("class", (d) => d.species);

// Append the axes.
const x_axis = svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80))
  .call((g) =>
    g
      .append("text")
      .attr("class", "x_axis_label")
      .attr("x", width)
      .attr("y", margin.bottom - 4)
      .attr("fill", "currentColor")
      .attr("text-anchor", "end")
      .text(`${x_axis_variable} (cm) →`)
  );

const y_axis = svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale))
  .call((g) =>
    g
      .append("text")
      .attr("class", "y_axis_label")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(`↑ ${y_axis_variable} (cm)`)
  );

const zoom = d3.zoom().scaleExtent([0.5, 2]).on("zoom", zoomed);

svg.call(zoom).call(zoom.transform, d3.zoomIdentity);

function zoomed({ transform }) {
  const zoomed_x_scale = transform
    .rescaleX(x_scale)
    .interpolate(d3.interpolateRound);

  const zoomed_y_scale = transform
    .rescaleY(y_scale)
    .interpolate(d3.interpolateRound);

  scatter_points.attr("transform", transform);

  x_axis.call(d3.axisBottom(zoomed_x_scale).ticks(width / 80));
  y_axis.call(d3.axisLeft(zoomed_y_scale));
}
