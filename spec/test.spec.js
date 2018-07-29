import App from "../app/lib/app.js";
// import {repeat} from "../app/lib/helpers/repeat.js";
const Jasmine = require('jasmine');
const jasmine = new Jasmine();
require('es6-promise').polyfill();
require('isomorphic-fetch');
global.fetch = require('node-fetch');

// Todo ->  Learn Jasmine and integrate into workflow
describe('Render Pie Charts', () => {
  const app = new App();
  it('Should render three pie charts', () => {
    console.log(app.renderPieCharts(40, 100, 330, 330));
  })
})

jasmine.execute();