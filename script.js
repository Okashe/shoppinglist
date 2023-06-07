const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

//when you press button you get alert message Button was clicked 
//When you press ok you get alert Div was clicked
//this is called Event Bubbling: when we fire off click event it bubbles up
// and then any of its parent that has a click event listener it fires that too.
button.addEventListener('click' , ()=>{
    alert('Button was clicked');
});

div.addEventListener('click', ()=>{
    alert('Div was clicked');
});



