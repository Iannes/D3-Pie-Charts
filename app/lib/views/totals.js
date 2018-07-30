
export const renderTotals = (element, devices) => {
    // Loop through array and render data for each device
    devices.map(device => {

      const total = device == 'Tablet' ? 4 : 5
      const dx = device == 'Tablet' ? 25 : 260

      element
        .append("text")
        .attr("class", "amount")
        .text(d => `${d[total]}`)
        .attr("dy", '180px')
        .attr("dx", dx)
        .attr("text-anchor", 'end')
    })
}


