import * as d3 from "d3";
import {createDocument} from './helpers/jsdom.js'
import App from "../app/lib/app.js";
import Jasmine from 'jasmine'
// const jasmine = new Jasmine();
// require('es6-promise').polyfill();
// require('isomorphic-fetch');



describe('Test if borders render', () => {

  // const svg = d3.select("#pieData").selectAll("div")

  describe('Borders under the piecharts' ,() => {
    it("is defined", () => {
      expect(getBorder).not.toBeUndefined();
    });
  });

  const getBorder = () => {
    return d3.select('svg');
  }
});

// jasmine.execute();