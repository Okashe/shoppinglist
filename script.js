const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    heading.textContent = e.target.value;
}
function onChecked(e){
    //console.log(e.target.checked);
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not checked';
}

// itemInput.addEventListener('input', onInput);
//priorityInput.addEventListener('input', onInput);

//change will do the same thing , but not suggested
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
