const arr = [1, 0, 2, 0, 0, 7];

function MoveAllZeros(arr){
    let X = 0; 

    for(let i =0; i< arr.length; i++){
        if(arr[i] !== 0){
            arr[X] = arr[i];
            X++;
        }
    }
    while(X< arr.length){
        arr[X] = 0; 
        X++;
    }
    return arr;
}


console.log(MoveAllZeros(arr));