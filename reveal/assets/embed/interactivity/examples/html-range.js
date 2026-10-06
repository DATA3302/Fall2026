const input = fig
  .append("input")
  .attr("min", 1)
  .attr("max", 15)
  .attr("step", 1)
  .attr("type", "range");

let n = +input.property("value");
const output = fig.append("div").text(n);

input.on("input", (event) => {
  n = +event.target.value;
  output.text(n);
});
