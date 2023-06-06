const clearBtn = document.querySelector('#clear');


function onClear(){
   const itemList = document.querySelector('ul');
   //first way of doing it
   itemList.innerHTML ='';
}


// // Javascript event listener
// clearBtn.onclick = function(){
//   alert('Clear Items');
// }


//this is the recommended way, as you can have a many events as you want
//alert is a blocking operation
// clearBtn.addEventListener('click', ()=>{
//   alert('clear items');
// });

clearBtn.addEventListener('click', onClear);

// asynchromous js funtion takes in a fucntion and no of milliseconds
//After 5 seconds the event will be removed and and alert won't pop up
//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
setTimeout(() => clearBtn.click(), 5000);
