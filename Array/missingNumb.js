const nums = [3,0,1];

function getmissingnum(nums){
    const len = nums.length;
    const sum = (len * (len+1))/ 2;
    let partialsum = 0;
    for(let i = 0 ; i< nums.length; i++){
        partialsum = partialsum + nums[i]; 
    }

    return sum - partialsum;

}

console.log(getmissingnum(nums))




//[0,1,3];