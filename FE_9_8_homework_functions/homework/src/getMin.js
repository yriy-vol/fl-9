function getMin(){
    let min = arguments[0];
    let i;
    for (i = 0; i < arguments.length; i++){
        let arg = arguments[i];
        if(arg < min ){
            min = arg;
        }     
    }
    return min;
}

