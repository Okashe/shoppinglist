//const clearBtn = document.querySelector('#clear');
const logo = document.querySelector('img');

//const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log("double click event");

//make it do something
const onDoubleClick = () => {
    document.body.style.backgroundColor ='purple';
   
};
//const onClick = () => console.log('click event');
//logo.addEventListener('click', onClick);

logo.addEventListener("dblclick", onDoubleClick);

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
