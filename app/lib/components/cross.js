export const cross = (element,x,y) => {
      element.append("rect")
      .attr('class', 'cross')
      .attr("x", x)
      .attr("y", y)
      .attr("height", 5)
      .attr("width", 2)
      .style("stroke", 'grey')
      .style("opacity", '1')
      .style("fill", "none")
      .style("stroke-width", '2px')
}