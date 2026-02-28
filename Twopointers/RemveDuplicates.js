const arr = [0, 0, 1, 1, 1, 2, 2];

function RemoveDuplite(arr){
    let x = 0 ; 
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i]!= arr[x]){
            x = x+1; 
            arr[x] = arr[i];
        }
    }
    return arr.slice(0,x+1);
}

console.log(RemoveDuplite(arr));