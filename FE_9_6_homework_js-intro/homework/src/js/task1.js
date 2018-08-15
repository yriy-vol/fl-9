let prise = +prompt('enter the prise'); 

let discount = +prompt('enter the discoun' );

if(checking(prise)||checking(discount)){

    if(checking(prise) && !checking(discount)){
        console.log('INVALID DATA: enter valid value PRISE');

    }else if(!checking(prise) && checking(discount)){
        console.log(' INVALID DATA: enter valid value DISCOUNT ');

    }else {
        console.log('INVALID DATA: enter valid value DISCOUNT and PRISE');
    }

}else{
    let saved = prise * discount / 100;

    console.log(`
        Price without discount: ${prise} 
        Discount: ${discount}%
        Price with discount: ${prise-saved}
        Saved: ${saved}
    `);
}

function checking(elem){
    if(elem === discount){
        return isNaN(elem) || elem === null || elem <= 0 || elem > 100
    }
        return isNaN(elem) || elem === null || elem <= 0
}
