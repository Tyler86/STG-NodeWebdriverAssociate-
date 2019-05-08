require('chromedriver');
var webdriver = require('selenium-webdriver');
var request = require('request');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var setup = require('../common/setup');

var tearDown = require('../common/tearDown.js');
var screenshot = require('../common/takeScreenShots.js');
var customWaits = require('../common/customWaits.js');

var driver;


describe("challenge1 suite", function () {
   this.timeout(200000); // this test has 3 minutes and 20 seconds to run before it is forced to stop


   before(async function () {

   });

   after(async function () {
   });



   it("connect to service", async function () {
        var headers 
   });




});