var webdriver = require('selenium-webdriver');

 module.exports = {
     setup 
 }
 function setup(url) {

    // initializing chrome driver
    var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    driver.manage().window().maximize();
    driver.get(url);
    return driver;
 }