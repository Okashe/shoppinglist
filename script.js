const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// deleting
list.addEventListener('click', (e)=>{
    //target gives you what click on
    //console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})
//change to red when hovered over
list.addEventListener('mouseover', (e)=>{
    if(e.target.tagName==='LI'){
        e.target.style.color = 'red';
    }
});


