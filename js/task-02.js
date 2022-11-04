// У другому завданні потрібно скористатись
// перебираючим методом масиву.
// У другому завданні потрібно створити пустий 
// масив (за межами циклу forEach), потім
// наповнити його в циклі forEach і після цього
// вставити його за одну операцію також за межами циклу forEach. 

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const items = document.createElement('li');
  items.classList.add('item');
  items.textContent = el;

  return items;
});

listRef.append(...createItemEl);






// const listRef = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const items = document.createElement('li');
//   items.textContent=`${ingredient}`;
//   items.classList.add('item');

//   listRef.append(items);
// })


// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const navPotatoesEl = document.createElement('li');
// navPotatoesEl.textContent = "Potatoes";
// navPotatoesEl.classList.add(`item`);

// const navMushroomsEl = document.createElement('li');
// navMushroomsEl.textContent = "Mushrooms";
// navMushroomsEl.classList.add(`item`);

// const navGarlicEl = document.createElement('li');
// navGarlicEl.textContent = "Garlic";
// navGarlicEl.classList.add(`item`);

// const navTomatosEl = document.createElement('li');
// navTomatosEl.textContent = "Tomatos";
// navTomatosEl.classList.add(`item`);

// const navHerbsEl = document.createElement('li');
// navHerbsEl.textContent = "Herbs";
// navHerbsEl.classList.add(`item`);

// const navCondimentsEl = document.createElement('li');
// navCondimentsEl.textContent = "Condiments";
// navCondimentsEl.classList.add(`item`);


// const ingredientsRef = document.querySelector('ul');
// ingredientsRef.append(navPotatoesEl, navMushroomsEl, navGarlicEl, navTomatosEl, navHerbsEl, navCondimentsEl);
// console.log(ingredientsRef);

 