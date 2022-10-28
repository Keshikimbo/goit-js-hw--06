const itemEl = document.querySelectorAll('.item');
console.log(`В списку ${itemEl.length} категорії.`);

itemEl.forEach(element => {
  const titleText = element.firstElementChild.textContent;
  const categoriesQuantity = element.lastElementChild.children.length;

  return console.log(
    `Категорія: ${titleText}, кількість елементів: ${categoriesQuantity};`,
  );
});