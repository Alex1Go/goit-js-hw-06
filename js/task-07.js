
const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("input", textSize)
    
function textSize(event) {
    span.style.fontSize += 1;
    span.style.fontSize = input.value + "px";
}