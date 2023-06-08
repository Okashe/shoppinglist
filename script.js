const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');
//when you press button you get alert message Button was clicked 
//When you press ok you get alert Div was clicked
//this is called Event Bubbling: when we fire off click event it bubbles up
// and then any of its parent that has a click event listener it fires that too.
button.addEventListener('click' , (e)=>{
    alert('Button was clicked');

    //you can stop the propagation
    e.stopPropagation()

   
});

div.addEventListener('click', ()=>{
    alert('Div was clicked');
});


form.addEventListener('click', ()=>{
    alert('Form was clicked');
});

document.body.addEventListener('click', ()=>{
 alert('Body was clicked');
});



