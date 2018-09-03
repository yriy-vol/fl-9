let rootNode = document.getElementById('root');

let ul = document.createElement('ul');
setAttributes(ul, {class: 'list', id: 'list'});
rootNode.appendChild(ul);

let img = document.createElement('img');
setAttributes(img, {class: 'img', src: 'assets/img/cat.png'});
rootNode.appendChild(img);

function createNewElement(){
    let inputValue = document.getElementById('input').value;

    let li = document.createElement('li');
    setAttributes(li, {class: 'item draggable'});
    li.draggable = true;

    let check_box_outline = document.createElement('i');
    setAttributes(check_box_outline, {class: 'material-icons'});
    let textList = document.createTextNode('check_box_outline_blank');
    check_box_outline.appendChild(textList);

    let check_box = document.createElement('i');
    setAttributes(check_box, {class: 'material-icons done'});
    let textL = document.createTextNode('check_box');
    check_box.appendChild(textL);
   
    let textItem = document.createElement('p');
    setAttributes(textItem, {class: 'text'});
    let text = document.createTextNode(inputValue);
    textItem.appendChild(text);

    let deleteItem = document.createElement('i');
    setAttributes(deleteItem, {class: 'material-icons delete'});
    let textLi = document.createTextNode('delete');
    deleteItem.appendChild(textLi);

    li.appendChild(check_box_outline);
    li.appendChild(check_box);
    li.appendChild(textItem);
    li.appendChild(deleteItem);
   
    let addItem = document.getElementById('add_item');
    let fullList = document.getElementsByClassName('item');
    let warningText = document.getElementById('root_warningText');
    let deleteListItem = document.getElementsByClassName('delete');
    const limitItem = 10;

    if(inputValue === '' || fullList.length >= limitItem){
        addItem.disabled = true;
    }else{
        ul.appendChild(li);
    }
       
    if(fullList.length >= limitItem ){
        warningText.style.display = 'block'; 
    }
    
    document.getElementById('input').value = '';
   
    for (let i = 0; i < deleteListItem.length; i++){
        deleteListItem[i].onclick = function(){
            this.parentElement.remove();
            document.getElementById('input').value = '' 
            if(deleteListItem.length < limitItem){
                warningText.style.display = 'none';
            }
        }
    }
 
    let ull = document.getElementById('list')
    ull.onclick = function (event){
        if(event.target.innerText === 'check_box_outline_blank'){
            event.target.innerText = 'check_box';
        }
    }

}

function setAttributes(el, attrs){
    for(let key in attrs){
        if (attrs.hasOwnProperty(key)){
            el.setAttribute(key, attrs[key]);
        }
    }
}

// const list = rootNode.querySelector(`ul`);

// let dragSrcEl = null;

// function handleDragStart(e) {
//     let target = e.target;
//     if (target.classList.contains('draggable')) {
//         dragSrcEl = target;

//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/html', target.outerHTML);

//         target.classList.add('dragging');
//     }
// }

// function handleDragOver(e) {
//     let target = e.target;
//     if (target.classList.contains('draggable')) {
//         if (e.preventDefault) {
//             e.preventDefault();
//         }
//         target.classList.add('dragging-end');

//         e.dataTransfer.dropEffect = 'move';

//     }
//     return false;
// }

// function handleDragLeave(e) {
//     e.target.classList.remove('dragging-end');
// }

// function handleDrop(e) {
//     let target = e.target;
//     if (target.classList.contains('draggable')) {
//         e.stopPropagation();
//         if (dragSrcEl !== target) {
//             target.parentNode.removeChild(dragSrcEl);
//             let dropHTML = e.dataTransfer.getData('text/html');
//             target.insertAdjacentHTML('beforebegin', dropHTML);
//             let dropElem = target.previousSibling;
//             dropElem.classList.remove('dragging');
//         }
//     }
//     target.classList.remove('dragging-end');
//     return false;
// }

// function handleDragEnd() {
//     this.classList.remove('dragging-end');
// }

// function addDnDHandlers(elem) {
//     elem.addEventListener('dragstart', handleDragStart, false);
//     elem.addEventListener('dragover', handleDragOver, false);
//     elem.addEventListener('dragleave', handleDragLeave, false);
//     elem.addEventListener('drop', handleDrop, false);
//     elem.addEventListener('dragend', handleDragEnd, false);
// }

// addDnDHandlers(list);
