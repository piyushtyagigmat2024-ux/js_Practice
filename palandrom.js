const value = 12321;

function palandrom(value){
    var reserved =0 
    var a = value ;
    while(a> 0)
    {
        var b = a%10;
        reserved = reserved * 10 + b;
        a = Math.floor(a/10);
    }
    if(reserved == value){
        console.log("palandrom");
        return true;
    }
    else{
        console.log("not palandrom");
        return false;
    }
}

const palandromvalue = palandrom(value);
console.log(palandromvalue);