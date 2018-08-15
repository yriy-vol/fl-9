const a = +prompt('enter the side a');
const b = +prompt('enter the side b');
const angle = +prompt('enter the engle');

if (checking(a)||checking(b)||checking(angle)){
    
    if(checking(a) && !checking(b) && !checking(angle)){
        console.log('INVALID DATA: enter valid value <<a>>');

    }else if(!checking(a)&& checking(b) && !checking(angle)){
        console.log('INVALID DATA: enter valid value <<b>>');

    }else if (!checking(a) && !checking(b) && checking(angle)){ 
        console.log('INVALID DATA: enter valid value <<angle>>');

    }else{
        console.log('INVALID DATA: Two or three values are not correct');
    }
    
}else{

    let deg = 180;
      
    let cos = Math.PI / deg * angle;
    
    let c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(cos));
    
    let perimeter = a + b + c;
    
    let square = Math.sqrt(perimeter/2 * (perimeter/2 - a) * (perimeter/2 - b) * (perimeter/2 - c));

    console.log(`
    Length side C -->   ${c.toFixed(2)};
    Perimeter -->   ${perimeter.toFixed(2)};
    Square -->   ${square.toFixed(2)};
    `);
}

function checking(elem){
let MaxDeg = 179;

    if(elem === angle){
        return elem < 1 || elem > MaxDeg || isNaN(elem) || elem === null

    }else{
        return isNaN(elem) || elem === null || elem <= 0 
    }
}

// ****************************************************
//          without console 
// // ****************************************************

// var a = +prompt("enter the side a");
// checking(a, "A");

// var b = +prompt("enter the side b");
// checking(b, "B");

// var angle = +prompt("enter the engle");
// checking(angle, "ANGLE");

// function checking(elem, el){

//     if(elem == angle ){
//         while(elem < 1 || elem > 179 || isNaN(elem) || elem == null ){
//             alert("<< Invalid data >> Enter the correct value '"+ el +"'");
//             elem = +prompt("enter the angle" );
//         }
      
//     }else{
//         while(isNaN(elem) || elem == null || elem <= 0 ){
//             alert("<< Invalid data >> Enter the correct value '"+ el +"'");
//             elem = +prompt("enter the side " + el );
//         }
        
//     }

//     return elem; 
// }

// var cos = Math.cos((angle * Math.PI) / 180);

// var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * cos );

// var perimeter = a + b + c;

// var square =  1 / 2 * a * b * Math.sin((angle * Math.PI) / 180);

// console.log(`
// Length side C -->   ${c.toFixed(2)};
// Perimeter -->   ${perimeter.toFixed(2)};
// Square -->   ${square.toFixed(2)};
// `);
