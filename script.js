const itemForm = document.getElementById('item-form');
const itemInput= document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items = document.querySelectorAll('li');


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

 

  const button = createButton('remove-item btn-link text-red');
  
  li.appendChild(button);


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
        e.target.parentElement.parentElement.remove();  
    };
   
}
function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

//checking state 
//you wil need to run this in a few places
function checkUI(){
    //if we conosle log the items we realize nodelist is 0
    //console.log(items)//  bcoz items are defined up globally
    if(items.length===0){
      clearButton.style.display ='none';
      itemFilter.style.display ='none';
    }else{
        clearButton.style.display ='block';
        itemFilter.style.display ='block';
    }
}
//event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);

//only running on global scope now
//runs only when the page loads
//does not run every time you add an item
checkUI();
