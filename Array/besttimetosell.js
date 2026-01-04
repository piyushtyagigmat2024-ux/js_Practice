const arr = [2,3,5,6,7,3, 52];



function maxprofit(arr){
    let  maxprofit = 0 ;
    let min = arr[0];
    for(let i =0; i < arr.length; i++ ){
        
        if(arr[i]-min > maxprofit){
            maxprofit = arr[i]-min
        }
        
        if( arr[i]< min){
            min = arr[i]
        }
    }
    return maxprofit
}

console.log(maxprofit(arr))