const itemForm = document.getElementById('item-form');
const itemInput= document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');



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

  checkUI();

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
        if(confirm('Are you sure to delete?')){
            e.target.parentElement.parentElement.remove(); 
            //we have to check ui again. 
            checkUI();
        }
        
    };
   
}
function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

//checking state 
//you wil need to run this in a few places
function checkUI(){
    //if we conosle log the items we realize nodelist is 0
    //console.log(items)//  bcoz items are defined up globally
    //so we need to define items here
    //We need to account for everything we do when writing vanialla js
    const items = document.querySelectorAll('li');
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
