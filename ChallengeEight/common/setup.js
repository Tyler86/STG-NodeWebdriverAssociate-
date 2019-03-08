var webdriver = require('selenium-webdriver');

 module.exports = {
     setup : function() {

        // initializing chrome driver
        var driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
        driver.manage().window().maximize();
        return driver;
     }
 }