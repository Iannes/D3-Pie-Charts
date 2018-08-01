import * as d3 from "d3";
import {appendPath, titles, border, cross} from './components';
import {renderDevice, renderNumbers, renderTotals} from './views';

export default class App {

  renderPieCharts (m, r, width, height) {
    // TODO -> set dotenv and set base_url according to environment
    const data = [];
    const base_url = 'http://localhost:8080'
    const db_path = `${base_url}/db.json`;
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
              // .attr("viewBox", "-100 0 600 500")
              .attr('viewBox','-100 0 '+ Math.min(width, height) * 2 +' '+ Math.min(width,height) )
              .attr("preserveAspectRatio", "xMinYMin meet")
              .attr("width", (r + m) * 4)
              .attr("height", (r + m) * 3)
              .attr("class", () => `doughnut-chart`)
              //Dynamically create id s to style with css
              .attr("id", (d, i) => `doughnut-chart-${i}`)
              .append("g")
              .attr("id", (d, i) => `doughnut-chart-g-${i}`)
              .attr("transform", "translate(" + (r + m )+ "," + (r + m) + ")");

        const pie = d3.pie()
          .value(d => d)
          .sort(null);

        const arc = d3.arc()
          .outerRadius(radius - 60)
          .innerRadius(radius - 50)

        // Call all helper functions to sprinkle our data
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


  init () {
    console.log('App Initialized!')
    this.renderPieCharts(40,100,300,300);
  }

}