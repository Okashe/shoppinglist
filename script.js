const logo = document.querySelector('img');

function onClick(e){
    //you will see image twice, as it is the same thing.
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.style.backgroundColor = 'black';
}

logo.addEventListener('click', onClick);

// here is the difference though
document.body.addEventListener('click', function(e){
    //they will return different things: 
    //currentTarget return whaterver event is attached to i.e body
    //The target is whatever you clicked
    console.log(e.target);
    console.log(e.currentTarget);
});