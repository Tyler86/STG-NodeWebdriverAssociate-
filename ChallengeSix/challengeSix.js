require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var driver;

describe("challenge1 suite", function(){
   this.timeout(40000);

   before(function(){
       setup();
   });

   after(function(){
       teardown()
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

var model_damage = 'damage';

switch (model_damage) {
  case 'model':
        await getModels();
    break;
    case 'damage':
      await getDamage();
      break;
  default:

}

})

});


 //-------------------get the models of the cars off of the seach results page-----------
async function getModels(){
  var modelXpath= '//span[@data-uname="lotsearchLotmodel"]';
  await driver.wait(until.elementLocated(By.xpath(modelXpath)),10000);
  var listOfModelsElements = await driver.findElements(By.xpath(modelXpath));
  var models = {};

   for(let i=0; i<listOfModelsElements.length; i++){
      let temp = (await listOfModelsElements[i].getText());

      if(models.hasOwnProperty(temp) ){
          models[temp] = models[temp] + 1;
      }else if(temp !==''){
        models[temp] = 1;
      }

   }
  console.log('--------- Car Models -----------');
  console.log(models)
  console.log('--------- Complete -------------');

}


//---get the type  of damages for the cars off of the seach results page-----

async function getDamage(){
  var damageXpath = '//span[@data-uname="lotsearchLotdamagedescription"]';
  await driver.wait(until.elementLocated(By.xpath(damageXpath)),10000);
  var listOfDamagesElements = await driver.findElements(By.xpath(damageXpath));
  var damages = {
    'REAR END':0,
    'FRONT END':0,
    'MINOR DENT/SCRATCHES':0,
    'UNDERCARRIAGE':0,
    'MISC':0



  };

  for (let y = 0; y < listOfDamagesElements.length; y++) {

   let temp = await listOfDamagesElements[y].getAttribute('innerHTML');

    if(damages.hasOwnProperty(temp)){
      damages[temp]= damages[temp] + 1;

    }else if(temp !=='[[ dd ]]'){
      damages["MISC"] = damages["MISC"] + 1;
    }

  }
  console.log('--------- Car Damages -----------');
  console.log(damages);
  console.log('--------- Complete -----------');

}






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
