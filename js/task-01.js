const listEls = document.querySelectorAll('.item')
console.log(`Number of categories: ${listEls.length}`)

listEls.forEach(listEl => {
    console.log(`Category: ${listEl.firstElementChild.textContent}`);
    console.log(`Elements: ${listEl.querySelector('ul').children.length}`)
})