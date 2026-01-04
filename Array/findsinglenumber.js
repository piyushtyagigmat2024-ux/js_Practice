const arr = ['{','}','[',']','('];


function singlenumber (arr){
    const openpair = {'{':'}','[':']','(':')'};
    const open = [];
    const closed = [];
   for(let i = 0 ; i< arr.length ; i++){
        if(['{','[','('].includes(arr[i])){
            open.push(arr[i]);
        }
        else{
            closed.push(arr[i]);
        }
   }
   
   for(let char of open){
    const indexof = closed.indexOf(openpair[char]);
    if(indexof == -1){
        return openpair[char]
    }
   }
}

console.log(singlenumber(arr));