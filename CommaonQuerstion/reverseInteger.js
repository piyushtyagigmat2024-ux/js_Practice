let value = 123456567; 

function reverstring(value){
    let newnum = 0 
    while(value > 0 ){
        let rem = value % 10 ; 
        newnum = newnum * 10 + rem; 
        value = Math.floor(value / 10 );
    }

    return newnum
}

console.log(reverstring(value));