
function findworldcounting(arr, text){
    let res = [];
    for(let i = 0 ; i <= arr.length -1; i++ ){
       for(let j =0; j< arr[i].length; j++){
            if(words[i][j] === text ){
                res.push(i);
            }
       }
    }
    return stack;               
}

const words = ["Piyush", "tyagi"];

console.log(findworldcounting(words, 'a'));πππ