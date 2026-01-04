const str = "Piyush tyagi is my name";



function getmaxCount(s){
    const object = {
    }
    s = s.trim();
    s = s.split("");
    for(let i=0; i< s.length;  i++)
    {
        if(!object[s[i]]){
            object[s[i]] = 1;
        }   
        object[s[i]]= object[s[i]]+ 1;
        
    }
    let maxvalue = 0;
    for(let key in object){
        if(object[key] > maxvalue){
            maxvalue = object[key];
        }
    }
    return maxvalue;
}

console.log(getmaxCount(str));