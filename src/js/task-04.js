let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', decrementBtnClickHandler);
incrementBtn.addEventListener('click', incrementBtnClickHandler);


function decrementBtnClickHandler() {
    counterValue = counterValue - 1;    
    document.getElementById('value').textContent = counterValue;
}


function incrementBtnClickHandler() {
    counterValue = counterValue + 1;    
    const incrementValue = document.querySelector('#value');
    incrementValue.textContent = counterValue;
}