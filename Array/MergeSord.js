const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3; 



function mergeSort(nums1, m , nums2, n){
    let p1 = m-1; 
    let p2 = n -1; 
    for(let i = m+n-1; i>=0; i--){
        if(nums2[p2] > nums1[p1]){
            nums1[i] = nums2[p2];
            p2--;
        }
        else{
            nums1[i] = nums1[p1];
            p1--;
        }
    }
    return nums1;
}

console.log(mergeSort(nums1, m, nums2, n ))
