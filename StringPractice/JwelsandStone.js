let jwewls= "aA";
let Stone = "aAAbbbb";

function jwellStone(j, s){
    let jSet = new Set();
    for(let i=0; i< j.length; i++){
        jSet.add(j[i]);
    }

    let count= 0; 
    for(let i =0; i<s.length; i++){
        if(jSet.has(s[i])){
            ++count;
        }
    }

}


console.log(jwellStone(jwellStone, Stone));