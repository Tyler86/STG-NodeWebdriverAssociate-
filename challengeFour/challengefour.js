require('chromedriver');
var numberstowords = require('@rajch/numberstowords');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;


describe("challenge1 suite", function(){
   before(function () {
   });

   after(function () {
   });



   it("call the fibanacci function", function() {
       var sequencenumber = 18;

       let fibNumber = fibanacci(sequencenumber)
       console.log('Fib Number ---- '+fibNumber);

       let stringNumber =convertNumberToString(fibNumber)
       console.log('String Number --- '+stringNumber);
       
       let = results =  numberstowords.toInternationalWords(fibanacci(sequencenumber));
       console.log("Using npm file --- " + results)
      
    });  


});

function fibanacci(sequenceNumber){
    var a=0;
    var b=0;
    var c=0;

    for(let i = 0; i<sequenceNumber; i++){
        if(i==1){
            b=1;
        }
        c=a
        a=a+b
        b=c
    }
    return a;
}

function convertNumberToString(number){
    if(number ===0){
        return "Zero";
    }

    var single = ['', ' One',' Two',' Three',' Four',' Five',' Six',' Seven',' Eight',' Nine',' Ten',' Eleven',' Twelve',' Thirteen',' Forteen',' Fifteen',' Sixteen',' Seventeen',' Eighteen',' Nineteen']
    var tens = ['', '', ' Twenty',' Thirty',' Forty',' Fifty',' Sixty',' Seventy',' Eighty',' Ninety']
    var FirstPosition = ['',' Thousand',' Million',' Billion',' Trillion'];
    var numberArray = number.toString().split("").map(Number).reverse();  // gets the number converts it to a string then an array and then reverses the array   
    var results = "";
    for(let i = 0; i<numberArray.length; i+=3){

        let numOne = numberArray[i];
        let numTwo = numberArray[i+1];
        let numThree = numberArray[i+2];
        
        if(numTwo ===1){
            results = single[numOne+10] + FirstPosition.shift() + results;
        }
        if(numTwo !==1 && numTwo !==undefined ){
            results =  tens[numTwo]+ single[numOne] + FirstPosition.shift() + results;
        }
        if(numTwo == undefined ){
            results = single[numOne] + FirstPosition.shift() + results;
        }



       
        if(numThree !== undefined && numThree !==0){
            results = single[numThree] + " hundred" + results
        }
    }
    return results;

}


