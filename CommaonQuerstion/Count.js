function countDigits(i)
{
    let count = 0; 
    while(i > 0){
        i = Math.floor(i/10);
        count++;
    }
    return count;
}


let i = 1234; 
console.log(countDigits(i));