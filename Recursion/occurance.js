
function Occurance(arr, tartget){
    let obj = {}

    for(let i = 0; i< arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1; 
        }
        else{
            obj[arr[i]]++;
        }
    }
    let sortedObj = Object.keys(obj).sort((a,b) => obj[b] - obj[a] );
    return sortedObj.slice(0,tartget).map(Number);
}

console.log(Occurance([1,2,2,3,3,3], 2));
