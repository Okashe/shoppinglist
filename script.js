const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', (e)=>{
        //console.log(e.target);
        e.target.remove();
    })
})


