function getClosestToZero(){
    let minNumber = arguments[0];
    let i;
    for (i = 0; i < arguments.length; i++){
        let arg = arguments[i];
        if( Math.abs(arg) < Math.abs(minNumber) ){
            minNumber = arg;
        }     
    }
    return minNumber;
}