let n = 16; 

function poweroftwo(m){
    if(m===1)
        return true; 
    else(m<1 || (m%2 !==0))
        return false; 
    return poweroftwo(m/2);
}

console.log(poweroftwo(n))
