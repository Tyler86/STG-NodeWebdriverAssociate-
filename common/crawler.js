
var webdriver = require('selenium-webdriver');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var axios = require('axios');
var until = webdriver.until;
var By = webdriver.By;
var driver;

var links = [];
var three_O_Ones = []
var three_O_Twos = [];
var badLinks = [];
var failedToCheckUrlStatus = [];

var site_url = '';

module.exports = {
    setVariables,
    crawlPages,
    printReport


}
function setVariables(new_driver, starting_Url) {
    driver = new_driver;
    site_url = starting_Url;
    links.push(site_url)
}

async function getLinks() {
    try {


        console.log("gathering links on this page.");

        //wait for a link to be available on the page
        await driver.wait(until.elementLocated(By.xpath("//a[contains(@href,'')]")), 10000);

        //get all the links from the page 
        var links__location = By.xpath("//a[contains(@href,'')]")
        var elements = await driver.findElements(links__location);
        return elements
    } catch (error) {
        return [];
    }
}

async function FilterLinks() {
    try {
        console.log("started filtering links");
        var link__elements = await getLinks();

        //loops thru the elements and gets the links from them 
        for (let i = 0; i < link__elements.length; i++) {
            let link__URL = '';


            try {
            driver.wait(until.elementIsVisible(link__elements[i]));
        } catch (error) {
            console.log(error)
            console.log(error)
        }
            link__URL = await link__elements[i].getAttribute("href");


            let notDuplicate = checkForDuplicate(link__URL);
            if (notDuplicate) {
                let domainSpecific = checkDomain(link__URL);
                let validUrl = await CheckUrlStatus(link__URL);
                if (domainSpecific && validUrl) {
                    links.push(link__URL)
                }
            }
        }
    } catch (error) {

        console.log("failed to fitler results")
    }
}

function checkForDuplicate(link) {
    try {


        if (links.indexOf(link) === -1)
            return true;
        return false;
    } catch (error) {
        console.log("failed to check domain list for duplicity ");
        return false;

    }

}
function checkDomain(link) {
    try {


        //formats the domain to allow for any domain with the domain.com in the url to be kept
        var domain = site_url.replace("https://", "").replace("www.", "");

        if (link.includes(domain))
            return true;
        return false
    } catch (error) {
        console.log("failed to check if like is part of the domain");
        return false;
    }

}

async function CheckUrlStatus(link) {
    try {

        return true;
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', link, false);
        // xhr.send(null);
        // let status = xhr.status;

        // if (status == 301) {
        //     three_O_Ones.push(link);
        // }
        // if (status == 302) {
        //     three_O_Twos.push(link);
        // }
        // if (status == 200 || status == 301 || status == 302) {
        //     return true;
        // }
        // return false;

    } catch (error) {
        console.log("failed to get url status")
        failedToCheckUrlStatus.push(link);
        return false
    }
}



async function crawlPages() {

    for (let i = 0; i < links.length; i++) {
        try {


            console.log("started crawling");
            let link = links[i];
            let currentNumberOfLinks = links.length;
            console.log("current number Of links -- " + currentNumberOfLinks)
            console.log("checking link " + (i + 1) + " " + link)
            await driver.get(link);

            await FilterLinks();

            console.log("New Links added -- " + (links.length - currentNumberOfLinks));
        } catch (error) {
            console.log("failed to crawl pages ", error);
        }
    }

}

function printLinks(PrintOnlyCount) {
    console.log("links length --------" + links.length)
    if (!PrintOnlyCount)
        links.forEach(myLink => {
            console.log("" + myLink);
        });
}



function printReport() {
    try {


        console.log("-------crawl Report-------")
        console.log("Total working links...." + links.length)
        console.log("#  of 301...." + three_O_Ones.length)
        console.log("# of 302...." + three_O_Twos.length)
        console.log("# of bad links...." + badLinks.length)
        console.log("# of links failed to check...." + failedToCheckUrlStatus.length)

        console.log("----- end crawl Report-----")

    } catch (error) {
        console.log("failed to print results")
    }

}



