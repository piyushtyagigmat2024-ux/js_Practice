const arr = 12345; 

function countDigit(arr){
    let count= 0;
    let newnum = 0;
    while(arr> 0){
            let rem = Math.floor(arr%10);
            newnum = newnum * 10 + rem;
        arr = Math.floor(arr / 10 );       
    }

    return newnum; 
}

console.log(countDigit(arr));