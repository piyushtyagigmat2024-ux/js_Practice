const arr = [2,3,4,4,5,7];


function summofAllNumber(i){

    if(i==0){
        return arr[i];
    }

    return arr[i] +summofAllNumber(i-1); 
}


console.log(summofAllNumber(arr.length-1));