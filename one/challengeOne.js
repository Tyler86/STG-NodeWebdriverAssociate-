require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;


describe("challenge1 suite", function(){
   this.timeout(60000);
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

    it("test search functionality", function(){
        
        setTimeout(() => {
             return driver.findElement(By.xpath('//input[contains(@class,"newsearch")]')).sendKeys("exotic")
                .then (function(){
                    return driver.findElement(By.xpath('//button[@data-uname="homepageHeadersearchsubmit"]')).click()
                        .then(function(){
                            return  driver.findElement(By.xpath('//div[@id="serverSideDataTable_wrapper"]')).getAttribute('innerHTML')
                                .then(function(bodyText){
                                    assert.equal("a","b","failed to get a match")
                                });
                    });
                });
            }, 15000);
    });

    

    // it("find search term", function(done){

    //     setTimeout(() => {
       
    //         return driver.getPageSource().then(function(bodyText){
    //             bodyText.includes("PORSCHE");
    //             assert.equal(bodyText,true,"Failed to find a porsche");
    //         })    
        
    //     }, 15000);
        
    // });

});











