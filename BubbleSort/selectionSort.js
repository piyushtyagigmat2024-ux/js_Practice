const nums = [23,54,2,5,8,2];


function selectionSort(arr){
    for(let i =0; i<=nums.length-1; i++){
        min = i
        for(let j=0+i; j< nums.length ; j++){
            if(arr[j]< arr[min]){
                min = j; 
            }
        }
        let temp = arr[min]; 
        arr[i] = arr[min];
        arr[i] = temp;
    }
    return  arr;
}


console.log(selectionSort(nums));