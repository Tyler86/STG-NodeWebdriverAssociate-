module.exports = {
    convertNumberToString: function (number){
        if(number ===0){
            return "Zero";
        }
        // var single = ['', ' One',' Two',' Three',' Four',' Five',' Six',' Seven',' Eight',' Nine',' Ten',' Eleven',' Twelve',' Thirteen',' Forteen',' Fifteen',' Sixteen',' Seventeen',' Eighteen',' Nineteen']
        // var tens = ['', '', ' Twenty',' Thirty',' Forty',' Fifty',' Sixty',' Seventy',' Eighty',' Ninety']
        // var FirstPosition = ['',' Thousand',' Million',' Billion',' Trillion' , ' Quad', ," Pent"];

        var single = ['', ' One',' Two',' Three',' Four',' Five',' Six',' Seven',' Eight',' Nine',' Ten',' Eleven',' Twelve',' Thirteen',' Forteen',' Fifteen',' Sixteen',' Seventeen',' Eighteen',' Nineteen']
        var tens = ['', '', ' Twenty',' Thirty',' Forty',' Fifty',' Sixty',' Seventy',' Eighty',' Ninety']
        var FirstPosition = ['',' Thousand',' Million',' Billion',' Trillion' , ' Quad', ," Pent"];
        
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
}