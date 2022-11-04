// В першому завданні ремендую використовувати firstElementChild
// та lastElementChild для навігації по DOM вузлам.
// У вас дуже багато зайвого коду.

const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});





// const categoriesEl = document.querySelectorAll(".item");
// console.log('Number of categories:', categoriesEl.length);

// const categoriesRef = document.querySelector('#categories');

// const AnimalsEl = categoriesRef.children[0];
// const ProductsEl = categoriesRef.children[1];
// const TechnologiesEl = categoriesRef.children[2];

// const AnimalsCat = AnimalsEl.children[0].textContent;
// const AnimalsElem = AnimalsEl.children[1].children.length;
// console.log('Category:', AnimalsCat);
// console.log('Elements:', AnimalsElem);

// const ProductsCat = ProductsEl.children[0].textContent;
// const ProductsElem = ProductsEl.children[1].children.length;  
// console.log('Category:', ProductsCat);
// console.log('Elements:', ProductsElem);

// const TechnologiesCat = TechnologiesEl.children[0].textContent;
// const TechnologiesElem = TechnologiesEl.children[1].children.length; 
// console.log('Category:', TechnologiesCat);
// console.log('Elements:', TechnologiesElem);