const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liArray = []

const ulEl = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.textContent = ingredient;
  liArray.push(liEl);
})
console.log(liArray);
ulEl.prepend(...liArray)
