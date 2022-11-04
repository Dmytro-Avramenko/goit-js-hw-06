// У дев'ятому завданні виклик функції getRandomHexColor
// потрібно записати в змінну та потім її використовувати
// для зміни фону і текстового значення тегу span.
// У вашому випадку функція викликається два рази,
// тому колір фону буде відрізнятись від коду кольору в спані. 

// У дев'ятому завданні краще присвоїти в textValue.textContent 
// виклик функції getRandomHexColor. Потім його використати
// для зміни кольору бекграунду. У вас навпаки.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBody = document.querySelector('body');
const refButton = document.querySelector('.change-color');
const textValue = document.querySelector('.color');

refButton.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick() {
  textValue.textContent = getRandomHexColor(); 
  refBody.style.backgroundColor =textValue.textContent;

  // console.log(refBody.style.backgroundColor)
  // console.log(textValue.textContent)
  // console.log(`клік`)
}

