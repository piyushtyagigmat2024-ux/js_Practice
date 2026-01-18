const arr = [2,4,4,4,5,5,7];

function remopvedup(arr){
    let x =0; 
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i] >= arr[x])
        {
            arr[x++] = arr[i];
        }
    }
    return arr.slice(0,x);
}

console.log(remopvedup(arr));