const arr = [ 2, 5, 10 , 1 ,2 ];

var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    
    // Left pass: prefix products
    let left = 1;
    for (let i = 0; i < n; i++) {
        res[i] = left;
        left *= nums[i];
    }
    console.log(res)
    
    // Right pass: suffix products
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    
    return res;
};


console.log(productExceptSelf(arr));