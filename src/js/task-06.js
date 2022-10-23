const refInput = document.querySelector('#validation-input'); 

refInput.addEventListener('blur', targetOnInputChange);

function targetOnInputChange(event) {
    const inputLength = Number(refInput.dataset.length);
    // console.log(inputLength);
    
    if (event.currentTarget.value.length === inputLength) {
        refInput.classList.add ('valid');
    } else {
        refInput.classList.add ('invalid');
    };
}