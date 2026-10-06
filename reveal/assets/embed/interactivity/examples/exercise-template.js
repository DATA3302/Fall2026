// Template for your solution

// Construct initial state
const width = 500;
const height = 200;
const r = 50;

const svg = fig.append("svg").attr("width", width).attr("height", height);

const circle = svg
  .append("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", r)
  .attr("cy", height * 0.5)
  .transition() //These transitions should only be applied in the interaction handlers
  .duration(1000)
  .attr("cx", width - r)
  .transition()
  .duration(1000)
  .attr("cx", r);

//TODO add in components for dragging in the initial state

// Handle events and updates

//TODO add in event handlers and animated transtions to state properties
