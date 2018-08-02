import * as d3 from "d3";
import {appendPath, titles, border, cross} from './components';
import { renderParts } from './helpers/renderParts.js';

export default class App {

  renderPieCharts (m, r, width, height) {
    // TODO -> set dotenv and set base_url according to environment
    const data = [];
    const base_url = 'http://localhost:8080'
    const db_path = `${base_url}/db.json`;
    const titlesArr = ['Revenue', 'Impressions', 'Visits']
    const devices = ['Tablet', 'Smartphone']
    const radius = Math.min(width, height) / 2;

    // Retrieve our data from the database
    d3.json(db_path)
      .then(response => {

        response.map(object => data.push(Object.values(object)))// Map through all objects and push their values in data array

        const svg = d3.select("#pieData").selectAll("div")
              .data(data)
            .enter()
              .append("svg")
                .attr('viewBox','-100 0 '+ Math.min(width, height) * 2 +' '+ Math.min(width,height) )
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("width", (r + m) * 4)
                .attr("height", (r + m) * 3)
                .attr("class", () => `doughnut-chart`)
                .attr("id", (d, i) => `doughnut-chart-${i}`) //Dynamically create id s to style with css

              .append("g")
                .attr("id", (d, i) => `doughnut-chart-g-${i}`)
                .attr("transform", "translate(" + (r + m )+ "," + (r + m) + ")")

        const pie = d3.pie()
          .value(d => d)
          .sort(null);

        const arc = d3.arc()
          .outerRadius(radius - 60)
          .innerRadius(radius - 50)
        // Append path
        appendPath(svg, pie, arc)
        // Append titles to the center of the piecharts
        titles(svg, titlesArr, -30, 0, 'middle')
        // Append a border under each piechart
        border(svg)
        // TODO -> create a helper function to call this only once
        cross(svg, -90, 0)
        cross(svg, 88 , 0)
        cross(svg, 0, -90)
        cross(svg, 0, 85)
        // Call three separate functions that accept the same arguments i.e svg, devices
        renderParts(svg, devices)
    })
    .catch((error) => console.error(`There was an error with your request ${error}`))
  }

 // This method is called on our main.js and renders the Pie charts
  init () {
    console.log('App Initialized!')
    this.renderPieCharts(40,100,300,300);
  }

}