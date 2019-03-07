require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;


describe("challenge1 suite", function(){
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

   it("enter search term",function(done){
 
    setTimeout(function(){
        
        console.log('pausing');
 
  // mocha will wait for done to be called before exiting function.
        done();     
    }, 3000);

})
    it("enter search term",function(done){
 
        setTimeout(function(){
            
            console.log('another pausing');
     
      // mocha will wait for done to be called before exiting function.
            done();     
        }, 3000);
 })
   
   
   
   
   
//    function(){
//     let searchFieldXpath= '//input[contains(@class,"newsearch")]';

//     return driver.findElement(By.xpath(searchFieldXpath)).then(unction(searchField){
//         searchField.sendKeys("exotic" + Key.ENTER)
//     })

//    })


//     it("waiting for search page to load", async function(){
//         await driver.wait(until.titleContains('exotic'), 10000, " Page title does not match");
//         await driver.wait(until.elementLocated(By.id('serverSideDataTable')),10000);
//         var dataTable = await driver.findElement(By.id('serverSideDataTable')).getText();

//         assert.equal(dataTable.includes('PORSCHE'),true);
//    })

});








