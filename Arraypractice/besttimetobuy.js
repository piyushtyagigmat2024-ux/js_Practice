const price = [2,4,7,2,9];


function besttimebuySell(price){
    let maxprofit = 0; 
    let min = 0 ; 
    for(let i = 0 ; i< price.length; i++){
        if(price[i] - min > maxprofit){
            maxprofit = price[i] - min;
            if(min < price[i])
            min = price[i];
        }
    }
    return maxprofit;
}


console.log(besttimebuySell(price))