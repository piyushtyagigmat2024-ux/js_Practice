

const arr = [1,2,3,4,4,5,2,343,3];



function RemoveElment(s, target){
    let x =0;
    for(let i=0 ; i < s.length; i++){
        if(s[i] != target){
            s[x] = s[i];
            x= x+1;
        }
    }
    return s; 
}

console.log(RemoveElment(arr, 4));