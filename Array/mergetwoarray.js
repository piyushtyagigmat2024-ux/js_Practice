let arr1 = [1,2,3,0,0,0];
let arr2 = [4, 5, 6];

function mergetwoArray(arr1, arr2){
    let m1 = arr1.length - arr2.length - 1; 
    let m2 = arr2.length - 1;
    let final = arr1;
    for(let i = arr1.length-1; i>=0; i--){
        if( m2 < 0){
            break; 
        }
        if(m1 >= 0 && arr1[m1] > arr2[m2] ){
            final[i] = arr1[m1];
            m1--; 
        }
        else{
            final[i] = arr2[m2];
            m2--;
        }
    }
    
    return final;
}

console.log(mergetwoArray(arr1, arr2));



