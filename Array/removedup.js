const arr = [23,34,54,55,56,56,67];


function dupe(arr){
    let y = 0 ; 

    for(let x = 0; x< arr.length; x++){
        if( arr[y] != arr[x]){
            y = y+1;
            arr[y] = arr[x];
        }
        
    }
    return arr;
}

console.log(dupe(arr));