require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;


describe("challenge2 suite", function(){
   this.timeout(20000);
   var driver;
   before(function () {
       // initializing chrome driver
       driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
   });

   after(function () {
       return driver.close();
   });



   it("I open the copart website", function() {
       return driver.get("https://www.copart.com");
   });  

   it("enter search term",function(){
    let searchFieldXpath= '//input[contains(@class,"newsearch")]';
    return driver.findElement(By.xpath(searchFieldXpath)).sendKeys("exotic" + Key.ENTER);

   })


    it("waiting for search page to load", async function(){
        await driver.wait(until.titleContains('exotic'), 10000, " Page title does not match");
        await driver.wait(until.elementLocated(By.id('serverSideDataTable')),10000);
        var pageText = await driver.findElement(By.id('serverSideDataTable')).getText();

        assert.equal(pageText.includes('PORSCHE'),true);
   })

});





