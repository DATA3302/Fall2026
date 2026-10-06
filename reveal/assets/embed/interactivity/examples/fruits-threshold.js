const fruits = [
  { name: "🍊", count: 21 },
  { name: "🍇", count: 13 },
  { name: "🍏", count: 8 },
  { name: "🍌", count: 5 },
  { name: "🍐", count: 3 },
  { name: "🍋", count: 2 },
  { name: "🍎", count: 1 },
  { name: "🍉", count: 1 },
];

const min = d3.min(fruits, (d) => d.count) - 1;
const max = d3.max(fruits, (d) => d.count) + 1;

const label = fig.append("label").text("Threshold ");
const threshold_input = label
  .append("input")
  .attr("type", "range")
  .attr("min", min)
  .attr("max", max)
  .attr("step", 1)
  .attr("value", min);
const threshold_value = label.append("span").text(` ${min}`);

const chart = fig.append("div");

// Redraw the whole chart for the current threshold
function render(threshold) {
  chart.selectAll("*").remove();

  const height = 250;
  const margin = 30;
  const x_scale = d3
    .scaleLinear()
    .domain([0, d3.max(fruits, (d) => d.count)])
    .range([0, width - 2 * margin])
    .interpolate(d3.interpolateRound);

  const y_scale = d3
    .scaleBand()
    .domain(fruits.map((d) => d.name))
    .range([0, height - 2 * margin])
    .padding(0.1)
    .round(true);

  const svg = chart.append("svg").attr("width", width).attr("height", height);

  const g = svg.append("g").attr("transform", `translate(${margin},${margin})`);
  const left_axis = g.append("g").call(d3.axisLeft(y_scale));
  const top_axis = g.append("g").call(d3.axisTop(x_scale));

  const color = (d) => (d.count <= threshold ? "steelblue" : "red");

  const fruit_bars = g
    .selectAll("rect")
    .data(fruits)
    .join("rect")
    .style("fill", (d) => color(d))
    .attr("x", 0)
    .attr("y", (d) => y_scale(d.name))
    .attr("width", (d) => x_scale(d.count))
    .attr("height", 15);
}

threshold_input.on("input", (event) => {
  const threshold = +event.target.value;
  threshold_value.text(` ${threshold}`);
  render(threshold);
});

render(min);
