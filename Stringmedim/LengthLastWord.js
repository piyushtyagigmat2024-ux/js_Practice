
function lengthcount(str){
        let count = str.length-1;
        console.log(count);
        while(count>0){
            if(str[count] === " ")
            {
                --count;
            }else{
                break;
            }
        }
        console.log(count);
        let c = 0;
        while(count>0){
            if(str[count]===" "){
                break;
            }
            else{
                c++;
                --count;
            }
        } 
        return c;
}




const value = lengthcount("this is from piyush");
console.log(value);