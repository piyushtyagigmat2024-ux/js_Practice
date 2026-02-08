let arr = [0, 1, 2, 4, 5,6];

function findMissingNumber(arr){
    arr = arr.sort((a, b)=> a-b);
    for(let i = arr[0]; i< arr[arr.length -1]; i++){
        if(arr[i] !== i){
            return i;
        }
    }
    return -1;
}


console.log(findMissingNumber(arr))