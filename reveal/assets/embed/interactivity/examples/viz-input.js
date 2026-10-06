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

const x_selector = chart
  .append("select")
  .on("change", update_x_axis)
  .style("margin-bottom", "15px");
x_selector
  .selectAll("option")
  .data(["sepalLength", "sepalWidth", "petalLength", "petalWidth"])
  .join("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .attr("selected", (d) => {
    if (d == x_axis_variable) {
      return "selected";
    }
  });

const y_selector = chart
  .append("select")
  .on("change", update_y_axis)
  .style("margin-bottom", "15px")
  .style("margin-left", "15px");
y_selector
  .selectAll("option")
  .data(["sepalLength", "sepalWidth", "petalLength", "petalWidth"])
  .join("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .attr("selected", (d) => {
    if (d == y_axis_variable) {
      return "selected";
    }
  });

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

const background = svg
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "#00000000");

// Add the scatterplot symbols.
const scatter_points = svg
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale(d[x_axis_variable]))
  .attr("cy", (d) => y_scale(d[y_axis_variable]))
  .attr("fill", (d) => color(d.species))
  .attr("class", (d) => d.species);

function remove_highlight_handlers() {
  background.on("click", null);
  scatter_points.on("mouseover", null).on("mouseout", null).on("click", null);
}
function add_highlight_handlers() {
  background.on("click", (event) => {
    svg
      .selectAll("circle")
      .transition()
      .duration(100)
      .attr("fill", (d) => color(d.species));
  });
  scatter_points
    .on("mouseover", function (e, d) {
      d3.select(this).transition().duration(100).attr("r", 15);
    })
    .on("mouseout", function (e, d) {
      d3.select(this).transition().duration(100).attr("r", 5);
    })
    .on("click", function (e, d) {
      svg
        .selectAll("circle")
        .transition()
        .duration(100)
        .attr("fill", "#CCCCCC22");

      svg
        .selectAll(`.${d.species}`)
        .transition()
        .duration(100)
        .attr("fill", (d) => color(d.species));
    });
}
add_highlight_handlers();

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

function update_x_axis(event) {
  remove_highlight_handlers();

  const new_axis = event.target.value;
  const x_scale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[new_axis]))
    .nice()
    .range([margin.left, width - margin.right]);

  x_axis
    .transition()
    .duration(3000)
    .call(d3.axisBottom(x_scale).ticks(width / 80))
    .call((g) => g.select(".x_axis_label").text(`${new_axis} (cm) →`));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cx", (d) => x_scale(d[new_axis]))
    .on("end", add_highlight_handlers);
}

function update_y_axis(event) {
  remove_highlight_handlers();

  const new_axis = event.target.value;
  const y_scale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[new_axis]))
    .nice()
    .range([height - margin.bottom, margin.top]);

  y_axis
    .transition()
    .duration(3000)
    .call(d3.axisLeft(y_scale))
    .call((g) => g.select(".y_axis_label").text(`↑ ${new_axis} (cm)`));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cy", (d) => y_scale(d[new_axis]))
    .on("end", add_highlight_handlers);
}
