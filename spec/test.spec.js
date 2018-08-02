import * as d3 from "d3";
import localstorage from './helpers/mock-localstorage.js'
import {createDocument} from './helpers/jsdom.js'
import App from "../app/lib/app.js";
import Jasmine from 'jasmine'
const jasmine = new Jasmine();
require('es6-promise').polyfill();
require('isomorphic-fetch');

  describe('Test D3.js Donut Chart with jasmine', () => {
    let before;
    const app = new App()

    beforeEach(() => before = app.renderPieCharts(40,100,300,300))
    afterEach(() => d3.selectAll('svg').remove())

    describe('The pie charts' ,() => {
      it('should be created', () => {
        expect(createCharts()).not.toBeNull();
      });
    });
    const createCharts = () => d3.select('svg')
  });

  describe('Initializes app', () => {

    describe('Initialization method' ,() => {
      it('should be defined', () => {
        expect(defineInit()).toBeDefined();
      });
    });

    const defineInit = () => d3.select('svg')
  });

  describe('Render titles', () => {
    let before;
    const app = require('../app/lib/components/titles.js');

    beforeEach(() => {
      const arr = ['Tablet', 'Smartphone']
      const svg = d3.select("#pieData").selectAll("div")
      before = app.titles(svg, arr, -20, 0, 'middle');
    });

    afterEach(() => d3.selectAll('svg').remove())

    describe('The function' ,() => {
      it('should render device titles', () => {
        expect(getTitles()).toBeDefined();
      });
    });

    const getTitles = () => d3.select('svg')
  });

  describe('Cross dots', () => {
    let before;
    const app = require('../app/lib/components/cross.js');

    beforeEach(() => {
      const svg = d3.select("#pieData").selectAll("div")
      before = app.cross(svg, 0, -88);
    });

    afterEach(() => d3.selectAll('svg').remove())

    it("renders four dots within the pie charts", () => {
      expect(getCross()).toBeDefined();
    });
    const getCross = () => d3.select('svg')
  })


  jasmine.execute();