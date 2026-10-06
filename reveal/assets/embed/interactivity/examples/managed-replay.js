const height = 100;
const r = 50;

// Construct initial state
const animation = fig.append("div");

const button = animation
  .append("button")
  .text("Replay!")
  .style("margin-bottom", "15px")
  .on("click", replay);

const svg = animation.append("svg").attr("width", width).attr("height", height);

const circle = svg
  .append("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", r)
  .attr("cy", height * 0.5);

// Handle events and updates

function replay() {
  circle
    .transition()
    .duration(1000)
    .attr("cx", width - r)
    .transition()
    .duration(1000)
    .attr("cx", r);
}
