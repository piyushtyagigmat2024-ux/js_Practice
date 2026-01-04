let str = "tygsivalueafrfgfdgjdgjfjgjfdjsjserompiyush";



function getmaxCount(){

    let objs = {};

    str = str.trim();
    str = str.trim();

    for(let i= 0; i < str.length; i++)
    {
        if(!objs[str[i]]){
            objs[str[i]] = 1;
        }
        else{
            objs[str[i]] = objs[str[i]] +1;
        }
    }

    max = 0 ; 
    va = "";
    for(let key in objs){
        if(objs[key] > max){
            max = objs[key]
            va = key
        }
    }

    return [max, va];
}

console.log(getmaxCount());