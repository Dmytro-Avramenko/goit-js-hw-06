// У дев'ятому завданні виклик функції getRandomHexColor
// потрібно записати в змінну та потім її використовувати
// для зміни фону і текстового значення тегу span.
// У вашому випадку функція викликається два рази,
// тому колір фону буде відрізнятись від коду кольору в спані. 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBody = document.querySelector('body');
const refButton = document.querySelector('.change-color');
const textValue = document.querySelector('.color');

refButton.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick() {
  refBody.style.backgroundColor = getRandomHexColor();
  textValue.textContent = refBody.style.backgroundColor;

  // console.log(refBody.style.backgroundColor)
  // console.log(textValue.textContent)
  // console.log(`клік`)
}