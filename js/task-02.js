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
console.log(ulEl);
ingredients.forEach(ingredient => {
  console.log(ingredient);
  const liEl = document.createElement('li')
  console.log(liEl)
  liEl.classList.add('item')
  liEl.textContent = ingredient;
  liArray.push(liEl);
})
console.log(liArray);
ulEl.prepend(...liArray)
