let  height = [1,8,6,2,5,4,8,3,7]
function maxArea(height){
    let result = 0;
    height.forEach(element => {
        result = result+element;
    }); 

    let left = 0; 
    let right = height.length -1;
    let container = 0;
    while(left < right){
        let min =  Math.min(height[left], height[right]);
        container = ((result - min) < container) ? result - min : container;
        left++;
        right--; 
    }
    return container;
}


console.log(maxArea(height));