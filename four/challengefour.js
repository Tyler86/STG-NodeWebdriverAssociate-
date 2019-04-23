require('chromedriver');
var numberstowords = require('@rajch/numberstowords');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var fibonacci = require("./common/fibonacci").fibonacci;
var convertNumberToString = require("./common/numberToString").convertNumberToString;



describe("challenge1 suite", function(){
   before(function () {
   });

   after(function () {
   });



   it("call the fibanacci function", function() {
       var fibNumber;
    for (let i = 0; i < 25; i++) {
        fibNumber = fibonacci(i);
        console.log("sequence: "+i+" - Fib: " +fibNumber + " - " + convertNumberToString(fibNumber));
   
    }

       //let = results =  numberstowords.toInternationalWords(fibanacci(sequencenumber));
       //console.log("Using npm file --- " + results)
      
    });  
});






