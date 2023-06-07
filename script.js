const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
    //when you tap once
    console.log('keypress')
};
// const onKeyUp = (e) => {
//     console.log('keyup');
// }

const onKeyDown = (e) => {
    //keeps firing off when you hold down until you release
    console.log('keydown');
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);