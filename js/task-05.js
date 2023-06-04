const form = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
form.addEventListener('input', onInputChange);
function onInputChange(event) {
    span.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
