const e = require("cors");

let arr =[2, 3, 4, 5, 8, 11, 18]
let target = 8;

function twosumSorted(arr, target){
    let left =0; 
    let right = arr.length-1;

    while(left< right){
        let result = arr[left] + arr[right];
        if(result > target){
            right--;
        }
        else if(result < target){
            left++;
        }        
        else{
            return [left, right];
        }

    }
    return[-1, -1];
}

console.log(twosumSorted(arr,8));