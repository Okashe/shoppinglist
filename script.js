const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('item');
const heading = document.querySelector('h1');

function onInput(e){
    heading.textContent = e.target.value;
}

// itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
