require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var setup = require('../common/setup');
var wait = require('../common/customWaits');

var tearDown = require('../common/tearDown');
var screenshot = require('../common/takeScreenShots');
var driver;


var axios = require('axios');


describe("challenge 8", function () {
   this.timeout(200000); // this test has 3 minutes and 20 seconds to run before it is forced to stop


   before(async function () {

   });

   after(async function () {
   });

   it("get service data from copart for cars", async function () {

      var searchTerm = "honda";
      let response = await axios.post('https://www.copart.com/public/lots/search/?free=true&query=' + searchTerm);
      console.log(response.data.data.results.content[0])
   });
});