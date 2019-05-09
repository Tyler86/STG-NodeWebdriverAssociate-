
var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var By = webdriver.By;
var links = [];
var driver;
site_url='';

module.exports = {
    setVariables,
    getLinks


}
function setVariables(new_driver, new_site_url='') {
    driver = new_driver;
    site_url=new_site_url;
}
async function getLinks() {
    await driver.wait(until.elementLocated(By.tagName('a')),10000);
    var links = [];
    var links__elements = [];
    var links__location = By.xpath("//a[contains(@href,'"+site_url+"')]")
    links__elements = await driver.findElements(links__location);  



    var link__url = "";

    links__elements.forEach(async link__element  => {
        link__url = await link__element.getAttribute("href");
        if (links.indexOf(link__url) === -1) {
            links.push(link__url);
        }
    });

    console.log(links)

}

// function wait_till_page_load() {
//     var interval = setInterval(function () {
//         if (document.readyState === 'complete') {
//             clearInterval(interval);
//             done();
//         }
//     }, 100);

// }





