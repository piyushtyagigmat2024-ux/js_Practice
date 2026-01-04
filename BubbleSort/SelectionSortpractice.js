const arr = [2,4,5,6,7,8,45,4]


function selectionSor(arr){

    for(let i =0; i<arr.length -1; i++){
        let min = i; 
        for(let j = i;j< arr.length; j++ )
        {
            if(arr[i]< arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


console.log(selectionSor(arr))