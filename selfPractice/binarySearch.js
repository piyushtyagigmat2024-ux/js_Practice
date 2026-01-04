const arr = [2,3,4,5,6,6,43,343,45,343,5,3]

const sortedarr = arr.sort((a,b) => a-b);
console.log(sortedarr);

function binarysearch(nums, target){
    let l =0; 
    let r = nums.length - 1; 
    while (r> l){
        let middle = Math.floor((r+l)/2);
        if(nums[middle] === target){
            return middle;
        }else if(target > nums[middle]){
            l = middle +1
        }
        else{
            r = middle-1;
        }
    }
}
console.log(binarysearch(sortedarr, 43));


