let str = "IampiyushTyagi";

function reverseString(str){
    str = str.split('');
    let len = str.length;
    let halflen = Math.floor(len /2);
    
    for(let i = 0; i< halflen; i++){
        let temp = str[i];
        str[i] = str[len-i-1];
        str[len-i-1] = temp;
    }
    return str.join('');
}

console.log(reverseString(str));