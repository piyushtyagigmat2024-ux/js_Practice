const arr = [23,34,534,4334];

const updatedArr = (arr)=>{
    return arr.filter((item)=>item != 534 );
};

console.log(updatedArr(arr))