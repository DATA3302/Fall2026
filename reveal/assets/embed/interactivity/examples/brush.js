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

// Add brushing
svg.call(
  d3
    .brush() // Add the brush feature using the d3.brush function
    .on("start brush end", ({ selection }) => {
      if (selection) {
        const [[x0, y0], [x1, y1]] = selection;

        scatter_points.attr("fill", (d) => {
          const isBrushed =
            x0 <= x_scale(d[x_axis_variable]) &&
            x1 >= x_scale(d[x_axis_variable]) &&
            y0 <= y_scale(d[y_axis_variable]) &&
            y1 >= y_scale(d[y_axis_variable]);

          return isBrushed ? color(d.species) : "#CCCCCC22";
        });
      } else {
        scatter_points.attr("fill", (d) => color(d.species));
      }
    })
);
