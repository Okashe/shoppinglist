const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
    //when you tap once
    console.log('keypress')
};
const onKeyUp = (e) => {
    console.log('keyup');
}

const onKeyDown = (e) => {
   //key
    console.log(e.key);
    document.querySelector('h1').innerText = e.key; //replaces h1 with whateveer you type
   //keyCode

   //code
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);