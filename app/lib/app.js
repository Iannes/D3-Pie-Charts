import * as d3 from "d3";
import { appendPath } from './components/path.js'
import { titles } from './components/titles.js'
import { border } from './components/borders.js'
import { cross } from './components/cross.js'
import { renderDevice } from './views/renderDevice.js'
import { renderNumbers } from './views/numbers.js'
import { renderTotals } from './views/totals.js'

export default class App {

  renderPieCharts (m, r, width, height) {

    const data = [];
    // TODO -> set dotenv and set base_url according to environment
    const base_url = 'http://localhost:8080'
    const db_path = `${base_url}/db.json`;
    // TODO -> Use Object.keys from to generate titles directly from the database
    const titlesArr = ['Revenue', 'Impressions', 'Visits']
    const devices = ['Tablet', 'Smartphone']

    const radius = Math.min(width, height) / 2;

    d3.json(db_path)
      .then(response => {
        // Map through all objects and push their values in data array
        response.map(object => data.push(Object.values(object)))

        // Use the data array to draw our charts
        const svg = d3.select("#pieData").selectAll("div")
              .data(data)
            .enter()
              .append("svg")
              .attr("width", (r + m) * 5)
              .attr("height", (r + m) * 5)
              .attr("class", () => `doughnut-chart`)
              //Dynamically create id s to style with css | TODO -> Create array of colors to assign them dynamically using D3
              .attr("id", (d, i) => `doughnut-chart-${i}`)
              .append("g")
              .attr("id", (d, i) => `doughnut-chart-g-${i}`)
              // TODO -> Use viewbox and make all pies responsive
              .attr("transform", "translate(" + (r + m )+ "," + (r + m) + ")");

        const pie = d3.pie()
          .value(d => d)
          .sort(null);

        const arc = d3.arc()
          .outerRadius(radius - 60)
          .innerRadius(radius - 50);
        // Call all helper functions to sprinkle data
        appendPath(svg, pie, arc)
        titles(svg, titlesArr, -20, 0, 'middle')
        border(svg)
        // TODO -> make use of a helper function to call this only once
        cross(svg, -88, 0)
        cross(svg, 88, 0)
        cross(svg, 0, -88)
        cross(svg, 0, 85)
        renderDevice(svg, devices)
        renderTotals(svg, devices)
        renderNumbers(svg, devices)
    })
    .catch((error) => console.error(`There was an error with your request ${error}`))
  }
}