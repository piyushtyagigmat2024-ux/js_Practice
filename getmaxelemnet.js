const arr = [3,1,3,4];


function maxFinalelement(arr){

    arr.sort((a,b)=>a-b);
    if(arr[0]!=1 )
        arr[0] =1;

    for(let i =1; i< arr.length ; i++)
    {
        if(arr[i] - arr[i-1] >1){
            arr[i]= arr[i-1]+1;
        }
    }
    
    return arr[arr.length -1];
}




console.log(maxFinalelement(arr))