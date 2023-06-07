const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault(); 
    const { email, password } = evt.currentTarget.elements;
  
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены!");
    } else {
        const data = {
        email: email.value,
        password: password.value,
        }
        evt.currentTarget.reset();
        console.dir(data)
    }
    
}

