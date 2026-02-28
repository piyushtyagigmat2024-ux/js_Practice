// Find FirstUniqCahr 

const str = 'this isPiyus';

function getchar(str){
    str = str.split('');
    
    let obj = {};
    for(let i=0; i< str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++;
        }
    }
    if(obj[str[i]]===1) return obj[i];
    for(let i= 0;  i<str.length; i++){
    }
    return -1;
}


console.log(getchar(str));