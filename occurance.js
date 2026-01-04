const  str = "Piyush ttyaugfbrjbdhgnjycy  is here";

function getmostoccurance(s){
    s = s.trim();
    s = s.split("");
    const obj = {};
    for(let i =0; i < s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1;
        }
        else{
            obj[s[i]] = obj[s[i]] + 1;
        }
    }

    let max=0; 
    let maxkey = 0
    for(let key in obj){
        if(obj[key] > max)
        {
            maxkey = key;
            max = obj[key]
        }
    }
    return [maxkey, max];
}

console.log(getmostoccurance(str))