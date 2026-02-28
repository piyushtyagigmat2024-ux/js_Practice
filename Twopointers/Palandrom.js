function checkpalndrom(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0; 
    let right = str.length-1; 
    while(left< right){
        if(str[left] != str[right])
        {
            return false;
        }
        right--;
        left++;
    } 
    return true;
}



console.log(checkpalndrom('Was it a car or a cat I saw'));