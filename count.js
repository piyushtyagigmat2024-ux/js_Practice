const js = 123456789;



function count(value){
    var a = 0;
    while(value > 1){
        value= value / 10;
       a++;
    }
    console.log(a);
    return a;
}

 const countvalue = count(js);
 console.log(countvalue);