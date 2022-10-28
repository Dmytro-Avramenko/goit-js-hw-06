// В третьому завданні потрібно створити колекцію елементів,
// та потім вставити її в розмітку за одну операцію.
// Також потрібно використовувати тільки метод insertAdjacentHTML,
// метод append не потрібно.


// Третій спосіб працює)
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery");

const makeGallery = images
  .map((image) =>
      `<li class="gallery__item"><img class="gallery__image"; 
      src="${image.url}"; alt="${image.alt}" width="320"></li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", makeGallery);


// Перший спосіб працює)
// const firstImgEl = document.createElement('img');
// firstImgEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// firstImgEl.alt = 'White and Black Long Fur Cat';
// firstImgEl.width = 320;

// const liFirstImgEl = document.createElement('li');
// liFirstImgEl.appendChild(firstImgEl);  


// const secondImgEl = document.createElement('img');
// secondImgEl.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'; 
// secondImgEl.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// secondImgEl.width = 320;

// const liSecondImgEl = document.createElement('li');
// liSecondImgEl.appendChild(secondImgEl);


// const thirdImgEl = document.createElement('img');
// thirdImgEl.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// thirdImgEl.alt = 'Group of Horses Running';
// thirdImgEl.width = 320;

// const liThirdImgEl = document.createElement('li');
// liThirdImgEl.appendChild(thirdImgEl);

// const galleryRef = document.querySelector('ul');
// galleryRef.append(liFirstImgEl, liSecondImgEl, liThirdImgEl);
// console.log(galleryRef);


// Другий спосіб)
// const galleryEl = document.querySelector('.gallery');

// const makeGallery = items => {
//   return items.map(item => {
//     const galleryItem = document.createElement('li');
    
//     galleryItem.insertAdjacentHTML('beforeend', `<img src=${item.url} alt=${item.alt} width="320">`);

//     return galleryItem;
//   });
// };

// const elements = makeGallery(images);
// galleryEl.append(...elements);