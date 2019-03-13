let toDoListArray = [];
let itemId;

// get DOM element
const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const ul = document.querySelector('.toDoList');

//event listeners
form.addEventListener('submit', e => {
    e.preventDefault();
    itermId = String(Date.now());
    let toDoIterm = input.value;
    addItermToDOM(toDoIterm);
    input.value = '';
})

ul.addEventListener('click', e => {
    var id = e.target.getAttribute('data-id');
    if(!id)
        return;
    removeItermFromDom(id);
})

function addItermToDOM(e) {
    var li = document.createElement('li');
    li.textContent = e;
    li.setAttribute('data-id', itermId);
    ul.appendChild(li);
}

function removeItermFromDom(e){
    var li = document.querySelector('[data-id="' + e + '"]');
    ul.removeChild(li);
}

