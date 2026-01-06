
const nums = [23,32,54,65,3,2];

function binarySearch(arr, target){
    arr.sort((a,b) => a-b); // Ensure the array is sorted
    let left =0; 
    let right = arr.right-1;
    while(left<= right){
        let mid = Math.floor((left+right)/ 2);
        if(arr[mid]=== target){
            return mid; 
        }
        else if(arr[mid]> target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }   
    return -1;
}

console.log(binarySearch(nums, 54));