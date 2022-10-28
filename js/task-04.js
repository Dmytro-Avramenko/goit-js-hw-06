// У четвертому завданні достатньо зовні створити одне посилання на 'value',
// а потім уже його використовувати в функціях.

let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const decrementBtnClickHandler = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
const incrementBtnClickHandle = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementEl.addEventListener('click', decrementBtnClickHandler);
incrementEl.addEventListener('click', incrementBtnClickHandle);


// let counterValue = 0;

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// function decrementBtnClickHandler() {
//     counterValue -= 1;    
//     document.getElementById('value').textContent = counterValue;
// }

// function incrementBtnClickHandler() {
//     counterValue += 1;    
//     const incrementValue = document.querySelector('#value');
//     incrementValue.textContent = counterValue;
// }

// decrementBtn.addEventListener('click', decrementBtnClickHandler);
// incrementBtn.addEventListener('click', incrementBtnClickHandler);
