let arr = [2,3,3,4]

function removetargetelement(arr, value){
    let x = 0; 
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] != value){
             arr[x] = arr[i]
             x++;    
        }
    }
    return arr.slice(0,x);
}

console.log(removetargetelement(arr, 3));