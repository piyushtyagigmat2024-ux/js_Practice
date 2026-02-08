const nums = [0,1,0,3,12];

function moveAllZeros(arr){
    let x = 0 ;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] != 0  ){
            
            arr[x] = arr[i];
            x++;
        }
    }
    return arr.slice(0,x);
}


console.log(moveAllZeros(nums));



