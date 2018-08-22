function isPrime(a){
    if(a === 1){
        return false;
    }
    let i = 2;
    while(i < a){
        if( a % i === 0){
           return false; 
        }
        i++
    }
    return true;      
}

