const arr = "2233144444";


function countandSay(arr){
    let map = {}
    arr = arr.split("");

    for(let i = 0; i< arr.length; i++){
        if(map[arr[i]] == null){
            map[arr[i]] = 1; 
        }
        else{
            map[arr[i]] = map[arr[i]] + 1;
        }
    }   
    
    let str = ""
    for(let [key, value] of Object.entries(map)){
        console.log(key, value);
        str = str+key+value;
    }
    return str;
}



console.log(countandSay(arr));