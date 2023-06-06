const clearBtn = document.getElementById('clear');
// function onClear(){
//     alert('Clear Items');
// }


// // Javascript event listener
// clearBtn.onclick = function(){
//   alert('Clear Items');
// }


//this is the recommended way, as you can have a many events as you want
//alert is a blocking operation
clearBtn.addEventListener('click', ()=>{
  alert('clear items');
});

