require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var driver;
var fs = require('fs');

describe("challenge 6", function(){
   this.timeout(40000);

   before(function(){
       setup();
   });

   after(function(){
       teardown()
    });

 it("searching for a make and checking for a model particular model", async function(){
     let make = 'nissan';
     let model = 'skyline';

     await searchForMake(make)

     //await checkForModel(model);  // searched thru the fist page models for your model

     await openModelFilter();
     await enterModelIntoFilter(model);
     await checkFilterOptionsForModel(model);
     await delayPage();
})
});

 //------------------get the models of the cars off of the seach results page-----------
async function checkForModel(model){

  try {
    var modelXpath= '//span[@data-uname="lotsearchLotmodel"]';
    await driver.wait(until.elementLocated(By.xpath(modelXpath)),10000);
    var listOfModelsElements = await driver.findElements(By.xpath(modelXpath));
    var models = [];

     for(let i=0; i<listOfModelsElements.length; i++){
        let temp = (await listOfModelsElements[i].getText());
        models.push(temp);
     }
     if(models.indexOf(model)===-1){
        throw 'err'
     }
  } catch (e) {
    takeScreenShot()
    console.log("failed to find model");
  }
}

async function searchForMake(make){

  let searchFieldXpath= '//input[contains(@class,"newsearch")]';
  await driver.findElement(By.xpath(searchFieldXpath)).sendKeys(make);
  let searchButtonXpath = '(//button[@ng-click="search()"])[2]';
  await driver.findElement(By.xpath(searchButtonXpath)).click();


  await driver.wait(until.titleContains(make), 10000, " Page title does not match");
  await driver.wait(until.elementLocated(By.id('serverSideDataTable')),10000);

}

async function  openModelFilter(){
  var openFilterXpath = '//a[@data-uname="ModelFilter"]';
  await driver.wait(until.elementLocated(By.xpath(openFilterXpath)),10000);
  console.log("opening model filter");
  await driver.findElement(By.xpath(openFilterXpath)).click();
}

async function  enterModelIntoFilter(model){
  var modelSearchBox = '(//input[@ng-model="filter.searchText"])[4]';
  await driver.wait(until.elementLocated(By.xpath(modelSearchBox)),10000);
  console.log("entering model  - " + model);
  await driver.findElement(By.xpath(modelSearchBox)).sendKeys(model);
}


async function  checkFilterOptionsForModel(model){
  model = model.charAt(0).toUpperCase() + model.slice(1);// uppercases the first letter
  var modelSearchBox = "//input[@value='"+model+"']";
  try {
    console.log("checking filter for model " + model);
  await driver.wait(until.elementLocated(By.xpath(modelSearchBox)),10000).click();

  console.log("succuessfully found the model " + model);
  } catch (error) {
      console.log("failed to find " + model + " in the filter");
      takeScreenShot("Failed_to_Find_"+ model);
      assert.failed();
  }
}

async function delayPage(){
  try {
      await driver.wait(until.elementLocated(By.xpath("//div[@something = 'wait']")),5000);
    }catch{
      console.log("completed wait");
    }

}

function takeScreenShot(name){
  let currentTime  ;// =new Date().getMilliseconds || ""; //converts date into a string
  //let imageName = '.\/screenshots\/'+ name +currentTime+'.jpg'
  let imageName = '.\/screenshots\/'+ name +currentTime+'.jpg'

  driver.takeScreenshot().then(function (base64Image) {
    var decodedImage = new Buffer(base64Image, 'base64');
    fs.writeFile(imageName, decodedImage, function(err) {});
    console.log('screenshot taken name - ' + imageName);
});

}




function setup(){

    // initializing chrome driver
    driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    driver.manage().window().maximize();
    driver.get("https://www.copart.com");
 }

 function teardown(){
       return driver.close();

 }
