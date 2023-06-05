function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
btn.addEventListener('click', onClickBtn);
function onClickBtn(event) {
      const color = getRandomHexColor();
      document.body.style.backgroundColor = color;
      span.textContent = color;
    };





