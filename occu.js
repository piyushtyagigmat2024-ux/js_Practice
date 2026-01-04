const str = 'this is the occurance of the key';

const arr = function(n){
    n = n.trim();
    n= n.split("");
    const obj ={};
    for(let k = 0; k <= n.length; k++){

        if(!obj[n[k]]){
            obj[n[k]] = 1;
        }
        else{
            obj[n[k]] = obj[n[k]] + 1 ;
        }
    }

    let  key; 
    let maxvalue = 0;
    for(let k in obj){
        if(obj[k] >  maxvalue){
            maxvalue = obj[k];
            key = k 
        }
    }
    return [key, maxvalue]
}


console.log(arr(str).length);