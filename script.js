const itemForm = document.getElementById('item-form');
const itemInput= document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;
    //Validate Input
    if(itemInput.value === ''){
        alert('Please add an item');
        return;
    }

   //Create list item
  const li =   document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  //console.log(li);

  const button = createButton('remove-item btn-link text-red');
  //console.log(button);
  li.appendChild(button);
  //console.log(li);

  //add it to the DOM
  itemList.appendChild(li);
  itemInput.value='';//clear value
}
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e){
  
    if(e.target.parentElement.classList.contains('remove-item')){
        //console.log('click');
        e.target.parentElement.parentElement.remove();  
    };
   
}
//event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);