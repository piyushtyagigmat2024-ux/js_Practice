const str = 'this fderom for piyush'; 

function wordcontain(str, x){
    str = str.split(' ');
   let res = [];
   for(let i = 0 ; i< str.length; i++){
        if(str[i].includes(x)){
            res.push(str[i]);
        }
   }
   return res;
}


console.log(wordcontain(str, 'p'));