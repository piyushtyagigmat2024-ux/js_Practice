const val = '{([]){}}';

function checkPair(s){
    const pairbracket = {
        '(':')',
        '{':'}',
        '[':']',
        '}':'{',
        ']':'[',
        ')':')'
    }

    s = s.split("");
    arrlength = s.length;
    let  value = undefined
    for(let i = 0; i < arrlength; i++ )
    {
        if(s.includes(pairbracket[s[i]])){
            s.filter(s.indexOf(pairbracket[s[i]])); 
            console.log(s);
            value = true;
        }
        else{
            value = false;  
        }
    } s
    return value;
}



console.log(checkPair(val));