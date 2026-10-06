const iris_data = await d3.csv("data/iris.csv", d3.autoType);

// Inputs: one selector per axis
const columns = ["sepalLength", "sepalWidth", "petalLength", "petalWidth"];
const controls = fig.append("div").style("margin-bottom", "15px");

function selector(label, value) {
  const select = controls
    .append("label")
    .style("margin-right", "15px")
    .text(`${label} `)
    .append("select");
  select
    .selectAll("option")
    .data(d3.sort(columns))
    .join("option")
    .text((d) => d)
    .property("selected", (d) => d === value);
  return select;
}

const x_axis_selector = selector("X Axis", "sepalLength");
const y_axis_selector = selector("Y Axis", "sepalWidth");

// Construct the initial state once
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(iris_data, (d) => d.species).keys(),
  d3.schemeCategory10
);
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(iris_data, (d) => d.sepalLength))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(iris_data, (d) => d.sepalWidth))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the SVG container.
const scatter_svg = fig
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

// Append the axes.
const x_axis = scatter_svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80));

const y_axis = scatter_svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale));

// Add the scatterplot symbols.
const scatter_points = scatter_svg
  .append("g")
  .selectAll("circle")
  .data(iris_data, (d) => d)
  .join("circle")
  .attr("r", 5)
  .attr("fill", (d) => color(d.species))
  .attr("cx", (d) => x_scale(d.sepalLength))
  .attr("cy", (d) => y_scale(d.sepalWidth));

// Update: respond to the input without redrawing everything
function update() {
  const x_axis_variable = x_axis_selector.property("value");
  const y_axis_variable = y_axis_selector.property("value");

  const x_scale = d3
    .scaleLinear()
    .domain(d3.extent(iris_data, (d) => d[x_axis_variable]))
    .nice()
    .range([margin.left, width - margin.right]);

  const y_scale = d3
    .scaleLinear()
    .domain(d3.extent(iris_data, (d) => d[y_axis_variable]))
    .nice()
    .range([height - margin.bottom, margin.top]);

  x_axis
    .transition()
    .duration(3000)
    .call(d3.axisBottom(x_scale).ticks(width / 80));

  y_axis.transition().duration(3000).call(d3.axisLeft(y_scale));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cx", (d) => x_scale(d[x_axis_variable]))
    .attr("cy", (d) => y_scale(d[y_axis_variable]));
}

x_axis_selector.on("change", update);
y_axis_selector.on("change", update);
