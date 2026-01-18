const arr = [ 23, 45, 0, 65 , 67 ,76 ];

function movezeros(arr){
    let x = 0;
    for(let i =0; i< arr.length; i++)
    {
        if(arr[i] != 0 ){
            arr[x++] = arr[i];
        }
    }
    
    for(; x< arr.length; x++){
        arr[x] = 0;
    }
    return arr;

}

console.log(movezeros(arr));



