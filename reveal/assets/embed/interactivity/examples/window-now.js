const info = fig.append("div");

function update() {
  info.html(
    `Window width: ${window.innerWidth}<br>Current time (epoch): ${Date.now()}`
  );
}

d3.select(window).on("resize", update); // Try resizing your window and see the value change
d3.interval(update, 1000);
update();
