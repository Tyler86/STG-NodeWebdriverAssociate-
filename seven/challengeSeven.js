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
var navigateTo = require("./common/navigateTo")

var driver;


describe("challenge 7", function () {
   this.timeout(200000); // this test has 3 minutes and 20 seconds to run before it is forced to stop


   before(async function () {
      var url = "https://copart.com";
      driver = await setup.setup(url);
      navigateTo.setDriver(driver)
   });

   after(async function () {
      await tearDown.teardown(driver);
   });

   it("check to see if homepage loaded", async function () {
      await driver.wait(until.titleContains("Copart USA"), 10000, " Page title does not match");
   });

   it("get links", async function () {
      await navigateTo.crawl_links(driver);
   });


   it("navigate to sonata", async function () {
      let link_to_navigate_to = 'sonata';
      let validation_text = 'sonata'
      await navigateTo.navigateTo(link_to_navigate_to, validation_text)

   });


   it("navigate to elantra", async function () {
      let link_to_navigate_to = 'elantra';
      let validation_text = 'elantra'
      await navigateTo.navigateTo(link_to_navigate_to, validation_text)

   });


   it("navigate to toyota", async function () {
      let link_to_navigate_to = 'toyota';
      let validation_text = 'toyota'
      await navigateTo.navigateTo(link_to_navigate_to, validation_text)

   });

   it("navigate to ford", async function () {
      let link_to_navigate_to = 'ford';
      let validation_text = 'ford'
      await navigateTo.navigateTo(link_to_navigate_to, validation_text)

   });

   it("navigate to gmc", async function () {
      let link_to_navigate_to = 'gmc';
      let validation_text = 'gmc'
      await navigateTo.navigateTo(link_to_navigate_to, validation_text)

   });


});