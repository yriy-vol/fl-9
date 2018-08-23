
//1
function findType(param){
    return typeof param;
}
// 2
function eacheFunc(arr, func){
    arr.forEach(func);  
}
// 3
function funcMap(arr, func){
    let transfomedArr = arr.map(func);
    return transfomedArr;
}
// 4
function funcFilter(arr, func){
    let filterArr = arr.filter(func);
    return filterArr;
}
// 5
let inputData = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'age': 39,
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'age': 2,
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'age': 17,
      'eyeColor': 'green',
      'name': 'Weiss',
      'favoriteFruit': 'banana'
    }
  ]

function getAdultAppleLovers(array){
    let values = [];
    eacheFunc(array, function(el){
        if (el.favoriteFruit === 'apple' && el.age > 18){
          values.push(el.name);
        }
    });
    return values
}
// 6
function keysArr(obj){
    let returnArr = [];
    let key;
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            returnArr.push(key);
        }
    }
    return returnArr
}
// 7
function valuesArr(obj){
    let returnArr = [];
    let key;
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            returnArr.push(obj[key]);
        }
    }
    return returnArr
}    
 // 8
function showFormattedDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let nameMont = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let showDate = ` 'It is ${day} of ${nameMont[month]}, ${year}' `
    
    return showDate
}
