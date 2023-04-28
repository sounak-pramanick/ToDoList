const inputBox = document.querySelector('#input-box');
const button = document.querySelector('button');
const listContainer = document.querySelector('#list-container');

button.addEventListener('click', () => {
    const item = inputBox.value;
    if(item === '') {
        alert('Please enter something!');
        return;
    }
    
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    li.innerHTML = '<i class="fa-sharp fa-regular fa-circle"></i>';
    li.append(item);
    li.append(span);
    
    listContainer.append(li);
    inputBox.value = '';
    
    saveData();
})

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        e.target.children[0].classList.toggle('fa-sharp');
        e.target.children[0].classList.toggle('fa-regular');
        e.target.children[0].classList.toggle('fa-solid');
        // saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        // saveData();
    }
    else if(e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove();
        // saveData();
    }
    saveData();
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
getData();