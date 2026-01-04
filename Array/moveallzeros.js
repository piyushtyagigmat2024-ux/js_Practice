const nums = [0,1,0,3,12];


function movezeros(nums){
    let x = 0; 

    for(let i =0 ; i< nums.length; i++)
    {
        if(nums[i] !==0)
        {
            nums[x] = nums[i];
            x++;
        }
    }
    for(let y = x ; y< nums.length; y++){
        nums[y] = 0;
    }
    return nums;
}

console.log(movezeros(nums, 0));