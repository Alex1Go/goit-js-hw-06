const form = document.querySelector('#validation-input');
form.addEventListener("blur", onFormBlur);

function onFormBlur(event) {
    if (event.currentTarget.value.length === Number(form.dataset.length)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}