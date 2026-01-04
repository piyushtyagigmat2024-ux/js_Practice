
const arr = [2,2,3,4,5,3,5];

function removeelement(arr, target){
    let x =0;
    for(let i=0; i< arr.length; i++){
       if(arr[i] !== target ){
            arr[x] = arr[i];
            x = x + 1;
       }
    }
    return arr
}

console.log(removeelement(arr,3))
