export const renderNumbers = (element, devices) => {

  devices.map(device => {
    const number = device == 'Tablet' ? 0 : 1
    const dx = device == 'Tablet' ? -170 : 150


    element
      .append("text")
      .attr("class", "percentage")
      .text(d => `${d[number]}%`)
      .attr("dy", 180)
      .attr("dx", dx)
      .attr("text-anchor", 'end')
  })
}


