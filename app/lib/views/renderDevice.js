export const renderDevice = (element, devices) => {

    devices.map(device => {

      const colorNum = device == 'Tablet' ? 2 : 3;

      const dx = device == 'Tablet' ? -70 : 260

      element
        .append("text")
        .attr("class", d => `device title-${d[colorNum]}`)
        .text(d => device)
        .attr("dy", '140px')
        .attr("dx", dx)
        .attr("text-anchor", 'end')
    })
}


