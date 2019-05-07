require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var links = {};
var driver ;


module.exports = {
    setDriver,
    crawl_links,
    navigateTo
}

function setDriver(new_driver){
    driver = new_driver;
}


async function crawl_links (){
    var makes_models__location = By.xpath('//div[@ng-if="popularSearches"]');
    await driver.wait(until.elementLocated(makes_models__location),10000);


    var links__locations = By.xpath('//div[@ng-if="popularSearches"]//a');
    await driver.wait(until.elementLocated(links__locations),10000);

    var links__elements = await driver.findElements(links__locations);

  for (let i = 0; i < links__elements.length; i++) {
      let element = links__elements[i];
      let name = (await element.getText()).toLowerCase();
      let link =   await element.getAttribute("href")
      links[name] = link;        
  }
}


async function navigateTo(link, validation_text){
    driver.get(links[(link.toLowerCase())]);
    await driver.wait(until.titleContains(validation_text),10000)

}