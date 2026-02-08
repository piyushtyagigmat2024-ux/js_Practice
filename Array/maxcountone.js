const arr = [0,0,1,1,1,0,0,0,1,1,1,1];

function countmaxone(arr){
    let curr = 0; 
    let maxcount = 0 ; 
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == 1){
            curr++;
        }
        else{
            maxcount = Math.max(curr, maxcount);
            curr = 0;
        }
    }
    return Math.max(curr, maxcount);
}


console.log(countmaxone(arr));