

var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;


module.exports = {

  waitFive: async function (driver){
    try {
        await driver.wait(until.elementLocated(By.xpath("//div[@something = 'wait']")),5000);
      }catch{
        console.log("completed wait");
      }
  
  },

  waitTen : async function (driver){
    try {
        await driver.wait(until.elementLocated(By.xpath("//div[@something = 'wait']")),10000);
      }catch{
        console.log("completed wait");
      }
  
  }
}