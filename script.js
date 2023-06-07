const form = document.getElementById('item-form');

function onSubmit(e){
   e.preventDefault();

   const item = document.getElementById('item-input').value;
   const priority = document.getElementById('priority-input').value

   if(item === '' ||priority==='0'){
    //it console logs this because you are not returning
    alert('please fill in all fields');
    //but if you return then it won't console log
    return;
   }
   console.log(item, priority);
}

form.addEventListener('submit', onSubmit);