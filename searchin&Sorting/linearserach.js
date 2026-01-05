let arr = [3,4,5,6,4,3,2];
function linearSearch(arr, target){
    for(let i = 0; i< arr.length; i++ ){
        if(arr[i]=== target){
            return i;
        }
    }
    return -1;
}


console.log(linearSearch(arr,4));