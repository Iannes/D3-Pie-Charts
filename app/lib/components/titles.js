export const titles = (element, titlesArr, dy, dx, textAnchor) => {
  element.append("text")
    .attr("class", "title")
    .text((d, i) => `${titlesArr[i]}`)
    .attr("dy", dy)
    .attr("dx", dx)
    .attr("text-anchor", textAnchor)

  element.append("text")
    .attr("class", "total-amount")
    .text((d) => d[6])
    .attr("dy", dy + 50)
    .attr("dx", dx)
    .attr("text-anchor", textAnchor)
}
