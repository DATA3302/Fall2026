const height = 100;
const r = 50;

const button = fig
  .append("button")
  .text("Replay Animation")
  .style("margin-bottom", "15px")
  .on("click", replay);

const svg = fig.append("svg").attr("width", width).attr("height", height);

function replay() {
  svg.selectAll("circle").remove();

  const circle = svg
    .append("circle")
    .style("fill", "orange")
    .attr("r", r)
    .attr("cx", r)
    .attr("cy", height * 0.5)
    .transition()
    .duration(1000)
    .attr("cx", width - r)
    .transition()
    .duration(1000)
    .attr("cx", r);
}

replay(); // run once at the start, then whenever the button is clicked
