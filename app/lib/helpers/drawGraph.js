import * as d3 from "d3";
// UNUSED -> TODO Refatcor so it draws nested svgs in pie charts
export const drawGraph = (selector, color) => {

  const lineData = [{ "x": 10, "y": 5 }, { "x": 20, "y": 10 },
  { "x": 40, "y": 10 }, { "x": 60, "y": 30 },
  { "x": 80, "y": 5 }, { "x": 100, "y": 10 }];

  const lineFunction = d3.line()
        .x(d => d.x)
        .y(d => d.y)

  //The SVG Container
  const svgContainer = d3.select(selector).append("svg")
    .attr("width", 100)
    .attr("height", 100)
    .attr('x', 110)
    .attr('y', 225)

  //The line SVG Path we draw
  const lineGraph = svgContainer.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", color)
    .attr("stroke-width", 7)
    .attr("fill", "#f2f2f2");
}
