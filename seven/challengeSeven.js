require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var setup = require('./common/setup');
var tearDown = require('./common/tearDown.js');
var screenshot = require('./common/takeScreenShots.js');
var customWaits = require('./common/customWaits.js');
var driver;


describe("challenge1 suite", function(){
   this.timeout(40000);


   before(async function(){
      var url = "https://copart.com";
      driver  =await  setup.setup(url);
   });

   after(async function(){
   // await tearDown.teardown(driver);
    });

 it("getting menu options", async function(){
   console.log("chanllenge 8")
   

});




});