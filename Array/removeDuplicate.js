const arr = [0,0,0,1,1,2,2,2,3,4,4];


function remvoedup(){
    let x1 = 0; 
    for(let x2=0; x2 < arr.length; x2++){
        if(arr[x2] > arr[x1] )
        {
            x1 = x1+1;
            arr[x1] = arr[x2];
        }
    }
    return x1+1; 
}



console.log(remvoedup());