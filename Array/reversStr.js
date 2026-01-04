const arr = ['P','I','Y','U','S','H','T','Y','A','G','I']


function reversStr(){
    for(let i =0; i<arr.length/2;i++)
    {
        let temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
    
    }
    return arr;
}

console.log(reversStr());
