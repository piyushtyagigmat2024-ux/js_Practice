let arr = [3, 0,1];

function countmax(arr){
    
    let s = arr.sort((a,b) => a-b);
    let first = s[0];
    let last = s[s.length-1];
    for(let i = first; i<= last; i++){
        if(s[i-first] != i){
            return i; 
        }
    }
    return -1; 
}


console.log(countmax(arr));