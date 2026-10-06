const values = ["B", "A", "Z", "Z", "⚠️F", "D", "G", "G", "G", "⚠️Q"];
const disabled = ["⚠️F", "⚠️Q"];

// sort: true, unique: true
const options = d3.sort(new Set(values));

let checkout = ["B"]; // value: "B"

const form = fig.append("form");
form.append("div").text("Choose categories:");
const output = fig.append("pre").text(JSON.stringify(checkout));

const choice = form
  .selectAll("label")
  .data(options)
  .join("label")
  .style("display", "block");

choice
  .append("input")
  .attr("type", "checkbox")
  .property("disabled", (d) => disabled.includes(d))
  .property("checked", (d) => checkout.includes(d))
  .on("change", () => {
    checkout = choice
      .selectAll("input")
      .filter(function () {
        return this.checked;
      })
      .data();
    output.text(JSON.stringify(checkout));
  });

choice.append("span").text((d) => ` ${d}`);
