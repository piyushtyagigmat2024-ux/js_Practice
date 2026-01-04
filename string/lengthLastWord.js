
var lenghtoflastword = function(s){
    let n = s.length - 1; 
    // this is getting the last position of number.

    while(n>=0){
        if(s[n] === " "){
            --n;
        }else{
            break;
        }
    }
    // n is the poing where my last word start. 
    
        let count = 0; 
     while(n>=0){
        if(s[n] !== " ")break;{
            count++
            --n;
        }
     }
     return count;
    
}


console.log(lenghtoflastword("this is from piyush tyagi     "));