function reverseNumber(a){
    let str = String(a);  
    let array = str.split('')
    let reverMas = reverse(array);
    let num = reverMas.join('');
    if(num.includes('-')){
        num = num.substring(0, num.length - 1);
        num = Number(-num);
        return num;
    }
    return +num;
}

function reverse(mas){
    let masReverse = [];
    for(let i=1; i<= mas.length; i++){
        masReverse.push(mas[mas.length-i]);
    }
    return masReverse;
}