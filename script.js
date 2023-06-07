//const clearBtn = document.querySelector('#clear');
const logo = document.querySelector('img');




//make it do something
const onDoubleClick = () => {
   if(document.body.style.backgroundColor !== 'purple') {
      document.body.style.backgroundColor='purple';
      document.body.style.color = 'white';
   }else{
    document.body.style.backgroundColor='white';
    document.body.style.color = 'black';
   }
   
};
const onClick = () => console.log('click event');
//const onDoubleClick = () => console.log("double click event");
const onRightClick = () => console.log('right click event');

const onMouseDown= () => console.log('mouse down event');
const onMouseUp= () => console.log('mouse up event');
const onMouseWheel= () => console.log('mouse wheel event');
const onMouseOver= () => console.log('mouse over event');
const onMouseOut= () => console.log('mouse out event');
const onDragStart= () => console.log('drag start event');
const onDrag= () => console.log('drag event');
const onDragEnd= () => console.log('drag end event');

logo.addEventListener('click', onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);

//even if you don't it keeps firing
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
//logo.dispatchEvent(new Event("click"));
// function onClear(){
//    const itemList = document.querySelector('ul');
//    const items = itemList.querySelectorAll('li');
//    //first way of doing it
//    //itemList.innerHTML ='';

//    //second way of doing it
//    //items.forEach((item) => item.remove());

//    //most performing way
//    while(itemList.firstChild){
//      itemList.removeChild(itemList.firstChild);
//    }
// }

// // Javascript event listener
// clearBtn.onclick = function(){
//   alert('Clear Items');
// }

//this is the recommended way, as you can have a many events as you want
//alert is a blocking operation
// clearBtn.addEventListener('click', ()=>{
//   alert('clear items');
// });

// clearBtn.addEventListener('click', onClear);

// // asynchromous js funtion takes in a fucntion and no of milliseconds
// //After 5 seconds the event will be removed and and alert won't pop up
// //setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
// setTimeout(() => clearBtn.click(), 5000);
