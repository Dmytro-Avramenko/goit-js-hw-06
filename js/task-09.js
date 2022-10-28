function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBody = document.querySelector('body');
const refButton = document.querySelector('.change-color');
const textValue = document.querySelector('.color');

refButton.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick() {
  refBody.style.backgroundColor = getRandomHexColor();
  textValue.textContent = getRandomHexColor();

  // console.log(refBody.style.backgroundColor)
  // console.log(textValue.textContent)
  // console.log(`клік`)
}