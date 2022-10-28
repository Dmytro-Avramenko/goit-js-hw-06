// У шостому завданні після введення неправильної
// кількості символів та повторного введення правильної 
// кількості колір бордера не змінюється на зелений.

const refInput = document.querySelector('#validation-input');

refInput.addEventListener('blur', targetOnInputChange);

function targetOnInputChange(event) {
    if (Number(refInput.dataset.length) === event.currentTarget.value.length) {     
        refInput.classList.add("valid");
        refInput.classList.remove("invalid");
    }
    else {
        refInput.classList.add("invalid");        
        refInput.classList.remove("valid");        
    }
}


// не правильний спосіб????
// const refInput = document.querySelector('#validation-input'); 

// refInput.addEventListener('blur', targetOnInputChange);

// function targetOnInputChange(event) {
//     const inputLength = Number(refInput.dataset.length);
//     // console.log(inputLength);
    
//     if (event.currentTarget.value.length === inputLength) {
//         refInput.classList.add ('valid');
//     } else {
//         refInput.classList.add ('invalid');
//     };
// }