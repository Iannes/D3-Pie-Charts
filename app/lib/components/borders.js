export const border = (element) => {

  element.append("rect")
    .attr('class', 'border')
    .attr("x", "-25%")
    .attr("y", 200)
    .attr("height", '1px')
    .attr("width", '70%')
    .style("stroke", 'grey')
    .style("opacity", '0.2')
    .style("fill", "none")
    .style("stroke-width", '3px')

}