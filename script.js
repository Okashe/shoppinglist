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
    // if(e.key === 'Enter'){
    //     alert('you pressend enter'); //blocks the event 
    // }
   //keyCode
   //https://www.toptal.com/developers/keycode/table-of-all-keycodes
if(e.keyCode ===13){
    alert('you pressed enter')
}

   //code
   //console.log(e.code);
   if(e.code=== 'Digit1'){//fires off whenever you input 1
    console.log('You pressed 1');
   }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);