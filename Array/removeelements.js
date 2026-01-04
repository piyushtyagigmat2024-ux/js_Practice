
const arr = [3,3,1,5,3,4,8,3];
const value = 3; 

function removeelemnt(){
   let x =0; 
   for(let i =0; i<arr.length; i++)
   {
        if(arr[i] != value){
            arr[x] = arr[i];
            x=x+1;
        }
   } 
   return x+1;
}


console.log(removeelemnt());