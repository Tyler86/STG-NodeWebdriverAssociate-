require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var driver;

describe("challenge1 suite", function(){
   this.timeout(20000);
   
   before(function(){
       setup();
   });

   after(function(){
       teardown()
    });



//    it("I open the copart website", function() {
//        return driver.get("https://www.copart.com");

//    });  

   it("load homepage and popular makes field",async function(){
       var popularItemsContainerXpath ='//div[@ng-if="popularSearches"]'
       await driver.wait(until.elementLocated(By.xpath(popularItemsContainerXpath)),10000);
       console.log("complete");
    

   })

   it("get list of popular items and their  urls and print them to the screen",async function(){
    var popularItemsXpath ='//div[@ng-if="popularSearches"]//a'
    var listOfpopularElements = await driver.findElements(By.xpath(popularItemsXpath));
    console.log("Total popular Makes/Models: " + listOfpopularElements.length);
    
    
    var PopularMakesModels ={};
  
    for(var i =0; i< listOfpopularElements.length; i++){

        PopularMakesModels[await listOfpopularElements[i].getText()] = await listOfpopularElements[i].getAttribute("href");        
    }
    
    var keys = Object.keys(PopularMakesModels);
    
    console.log("-------------Printing List "+ keys.length +" Items-------------------------")
    for(let x =0; x<keys.length; x++){
        console.log( x+1 +" " +keys[x] + " ---- " + PopularMakesModels[keys[x]]);
    }
    

    console.log(" -------------------- complete ------------------- ");
})

 
});




function setup(){

    // initializing chrome driver
    driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    driver.get("https://www.copart.com");
    //driver.manage.window.maximize();
 
 }
 function teardown(){
       return driver.close();
 }






