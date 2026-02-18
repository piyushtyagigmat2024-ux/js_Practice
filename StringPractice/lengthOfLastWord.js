
let value = 'I am Piyush Tyagi';

function lastword(str){ 
    str = str.split(' ');
    let n = str.length -1; 
    while(n>=0){
        while(s[n]!= ' '){
            break;
        }
        --n;
    }
    let count = 0; 
    while(n>=0){
        while(s[n] == ' '){
            break;
        }
        --n;
        ++count;
    }
    return count;
}
console.log(lastword(value));