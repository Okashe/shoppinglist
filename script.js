const logo = document.querySelector('img');

function onClick(e){
    //you will see image twice, as it is the same thing.
    // console.log(e.target);
    // console.log(e.currentTarget);
    // e.target.style.backgroundColor = 'black';
    // console.log(e.type);
    //time event was triggered
    // console.log(e.timeStamp);//changes whenever you click
    // console.log(e.clientX);  //x position of the mouse click relative to the window
    // console.log(e.clientY);//y position of the mouse click relative to the window
    
    //coordinates of where you click
    // console.log(e.offsetX); //x position of the mouse click relative to the element
    // console.log(e.offsetY);//y position of the mouse click relative to the element
    // console.log(e.pageX);//x position of the mouse click relative to the page
    // console.log(e.pageY);//y position of the mouse click relative to the page
    console.log(e.screenX);//x position of the mouse click relative to the screen
    console.log(e.screenY);//y position of the mouse click relative to the screen
}

logo.addEventListener('click', onClick);

// here is the difference though
// document.body.addEventListener('click', function(e){
//     //they will return different things: 
//     //currentTarget return whaterver event is attached to i.e body
//     //The target is whatever you clicked
//     console.log(e.target);
//     console.log(e.currentTarget);
// });