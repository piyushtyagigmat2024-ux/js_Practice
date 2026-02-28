const arr = [1,1,2,3,3,0,0];

function singlenumberr(){
    let obj = {}
    for(let i = 0; i< arr.length; i++ ){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]] = obj[arr[i]] + 1; 
        }
    }

    for(let cha in obj){
        if(obj[cha] != 2 ){
            return cha;
        }
    }
}


console.log(singlenumberr(arr));