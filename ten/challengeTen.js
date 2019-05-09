require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var setup = require('../common/setup').setup;
var tearDown = require('../common/tearDown').teardown;
var screenshot = require('../common/takeScreenShots');
var crawler = require('../common/crawler');



var axios = require('axios');


describe("challenge 10", function () {
    this.timeout(400000); // this test has 3 minutes and 20 seconds to run before it is forced to stop
    var driver

    before(async function () {
        url = "https://copart.com"
        url = "https://google.com"

        driver = setup(url)
        crawler.setVariables(driver,url)
    });

    after(async function () {
        tearDown(driver)
    });

    it("web crawler", async function () {
       await crawler.getLinks();
    });
});
