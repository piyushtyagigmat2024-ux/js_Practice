
const n = 12345; 

function palandrom(n){
    let  rev = 0 ;
    let original = n ; 
    while(n > 0){
        let rem = n % 10 ;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10); 
    }
    return rev == original ? true : false;
}


console.log(palandrom(n));