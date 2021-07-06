function strikeThroughFirstItem() {
    const firstItem = document.querySelector('ul#arguments > li:first-child');
    firstItem.style.textDecoration = 'line-through';
}

strikeThroughFirstItem()

function addImageUrl(id, url) {
    const image = document.querySelector(id);
    image.src = url;
    image.style.height = '300px';
}

addImageUrl('#image-1', 'google.jpg')
addImageUrl('#image-2', 'yearight.jpg')
addImageUrl('#image-3', 'only-god.jpg')

function removeLastLi() {
    const lastLi = document
    .querySelector('ul#arguments')
    .lastElementChild;
    lastLi.remove();
}

removeLastLi();
removeLastLi();

function changeFontSize(element, newFontSize) {
    element.style.fontSize = newFontSize;
}

const thing2 = document.querySelector('#thing-2');
changeFontSize(thing2, '15px');

function addToList(element, list) {
    list.appendChild(element);
}


function addToArgumentsList(element) {
    document.querySelector('ul#arguments').appendChild(element)
}

const newImage = document.createElement('img');
newImage.src = 'muhaha.jpg';
newImage.style.height = '200px';

addToArgumentsList(newImage);

function makeImgSmall(image) {
    image.style.height = '30px';
}

const image2 = document.querySelector('#image-2');
makeImgSmall(image2);

function makeInvisible(element) {
    element.className = 'invisible';
}

const disappearingTextField = document.querySelector('input');
makeInvisible(disappearingTextField);

function makeTodo(todoText) {
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;
    return newTodo;
}

const newTodo = makeTodo('hello')
addToArgumentsList(newTodo);

function makeHeader(text, size) {
    const header = document.createElement('h' + size);
    header.innerText = text;
    return header;
}

const header = makeHeader('I\'m a header', 3);
addToArgumentsList(header);