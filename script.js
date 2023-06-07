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

// using form data object
function onSubmit2(e){
    e.preventDefault();
    const formData = new FormData(form);

    //object .. If you check the protypes you get bunch of methods to access values
    //console.log(formData);

    const  item = formData.get('item');
    const priority = formData.get('priority');

    console.log(item, priority);
    //you can also get entries
    const entries = formData.entries(); //it's a method
    console.log(entries);
    for(let entry of entries){
        console.log(entry);
    }

}

//form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);