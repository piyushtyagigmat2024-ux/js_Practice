const arr = 'this is from piyush ';


function reversesrting(s){
    s = s.trim();
    console.log(s);
     
    s = s.split("");
    let strhalf = s.length / 2; 
    
    for(let i = 0; i < strhalf; i++ ){
        let temp = s[i];
        s[i] = s[s.length-i-1];
        s[s.length-1-i] = temp;
    }
    return s.join("");
}

console.log(reversesrting(arr));
