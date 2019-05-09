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


describe("challenge 9", function () {
    this.timeout(200000); // this test has 3 minutes and 20 seconds to run before it is forced to stop


    before(async function () {

    });

    after(async function () {
    });

    it("get service data and validate formats", async function () {

        var data = { query: "civic", page: 0, size: 50, start: 0, watchListOnly: false, freeFormSearch: true }

        let response = await axios.post('https://www.copart.com/public/lots/search');
        var car =response.data.data.results.content[0];
       // console.log(response.data.data.results.content[0]);
        validateData(car);
    });

});

function validateData(car) {
    if (typeof car.lotNumberStr === "number") {
        console.log(" lot number is formated incorrectly, expected a string but found " + typeof car.lotNumberStr)
    }
    if (typeof car.mkn === "number") {
        console.log("Vehicle Make is formated incorrectly expected a string but found " + typeof car.mkn)
    }

    if (typeof car.ln === "number ") {
        console.log("Vehicle ln is formated incorrectly expected a number but found " + typeof car.ln)
    }


var keys = Object.keys(car)

keys.forEach(key => {
    console.log(key + "....." + typeof key)
    
    //console.log("field:"+key + " -- type:" + typeof key)
});






}