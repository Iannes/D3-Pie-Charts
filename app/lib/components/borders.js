export const border = (element) => {

  element.append("rect")
    .attr('class', 'border')
    .attr("x", "-35%")
    .attr("y", 200)
    .attr("height", '1px')
    .attr("width", '80%')
    .style("stroke", 'grey')
    .style("opacity", '0.2')
    .style("fill", "none")
    .style("stroke-width", '3px')

}