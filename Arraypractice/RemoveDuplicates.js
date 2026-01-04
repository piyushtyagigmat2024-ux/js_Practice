const arr = [1,2,3,4,4,5,6]

function removeDuplicate(s){

    let x = 0 ; 
    for(let i = 0; i< s.length; i++){
        if(s[i] > s[x] ){
            x= x+1;
            s[x] = s[i]
        }
    }
    return x+1;
}


console.log(removeDuplicate(arr));
