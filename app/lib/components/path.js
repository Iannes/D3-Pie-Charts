export const appendPath = (svg, pie, arc) => {
   svg.selectAll("path")
      .data(pie)
      .enter()
      .append("path")
      .attr("id", (d, i) => `doughnut-chart-path-${i}`)
      .attr("d", arc)
      .attr("transform", "rotate(145)")

}