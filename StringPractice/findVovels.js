let str = 'this is from piyush';



function maxsequence(){
    str = str.split('');
    str = str.join(' ');
    let obj = {};
    for(let i =  0 ; i< str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = 1;
        }
        else{
            ++obj[str[i]];
        }
    }
    let volvearr = ['a','e','i','o','u'];
    for(let i =0; i< obj.length; i++ ){
        if(volvearr.includes(obj[volvearr[i]])){
            
        }
    }
    return obj;
}


console.log(maxsequence(str))