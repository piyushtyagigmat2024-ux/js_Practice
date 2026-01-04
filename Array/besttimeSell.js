const arr = [2,2,3,5,54,6,6];



function maxProfit(){   
    let min = arr[0];
    let maxProfit = 0;
    for(let i=0; i< arr.length; i++){
        if(arr[i]-min > maxProfit){
            maxProfit = arr[i]-min 
        }
        if(arr[i]< min){
            min = arr[i];
        }
    }

        return maxProfit;
}

console.log(maxProfit());


