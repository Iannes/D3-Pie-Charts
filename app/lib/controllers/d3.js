// import * as d3 from "d3";
// import { appendPath } from '../components/path.js'
// import { drawGraph } from '../components/drawGraph.js'
// import { titles } from '../components/titles.js'
// import { border } from '../components/borders.js'
// import { renderDevice } from './renderDevice.js'
// import { renderNumbers } from './numbers.js'
// import { renderTotals } from './totals.js'

// const data = [];
// const db_path = '../../db.json';
// const titlesArr = ['Revenue', 'Impressions', 'Visits']

// export const renderPieCharts = (m, r, width, height) => {

//   const radius = Math.min(width, height) / 2;

//   d3.json(db_path)
//     .then(response => {
//       // Map through all objects and push their values in data array
//       response.map(object => data.push(Object.values(object)))
//       // Use the data array to draw our charts
//   const svg = d3.select("#pieData").selectAll("div")
//       .data(data)
//     .enter()
//       .append("svg")
//         .attr("width", (r + m) * 9)
//         .attr("height", (r + m) * 5)
//         .attr("class", () => `doughnut-chart`)
//             //Dynamically create id s to style with css | TODO -> Create array of colors to assign them dynamically using D3
//         .attr("id", (d,i) => `doughnut-chart-${i}`)
//       .append("g")
//         .attr("id", (d,i) => `doughnut-chart-g-${i}`)
//         .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

//     const pie = d3.pie()
//       .value(d => d)
//       .sort(null);

//     const arc = d3.arc()
//       .outerRadius(radius - 60)
//       .innerRadius(radius - 50);
//       // Call all helper functions to sprinkle data
//       appendPath(svg, pie, arc)
//         titles(svg, titlesArr, -20, 0, 'middle')
//         border(svg)
//         drawGraph('.doughnut-chart', '#c9dee4')
//         renderDevice(svg, 'Tablet', -48, 'end')
//         renderDevice(svg, 'Smartphone', 220, 'end')
//         renderNumbers(svg,'Tablet')
//         renderTotals(svg,'Tablet')
//         renderTotals(svg,'Smartphone')
//         renderNumbers(svg,'Smartphone')

//   })
// }
