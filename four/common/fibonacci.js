module.exports = {
    fibonacci: function (sequenceNumber){
        var a=0;
        var b=0;
        var temp=0;
    
        for(let i = 0; i<sequenceNumber; i++){
            if(i==1){
                temp=1;
            }
            c=a
            a=a+temp
            temp=c
        }
        return a;
    }
}