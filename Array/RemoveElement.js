
const arr = [3,3,1,5,3,4,8,3];
const value = 3; 


function removeelement(arr, value){

    let x1=0; jj
    for(let x2=0; x2< arr.length; x2++)
    {
        if(arr[x2] != value)
        {
            arr[x1] = arr[x2];
            x1++;
        }
    }
    return  x1+1;
}



console.log(removeelement(value,arr));


