
const nums = [23,32,54,65,3,54,2];

function binarysearch(arr, target){
    let l= 0; 
    let m = arr.length -1; 
     while (m >= l){
        let middle = Math.floor(m+l/2);
        if(arr[middle] == target){
                return middle;
        }
        else if(target < arr[middle]){
            m = middle-1;
        }
        else{
            l = middle+1;
        }
     }  
     return -1; 
}


console.log(binarysearch(nums, 24))