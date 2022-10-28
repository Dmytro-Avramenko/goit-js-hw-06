const refs = {
input: document.querySelector('#name-input'),
nameAnonymous: document.querySelector('#name-output')  
}; 

refs.input.addEventListener ('input', onInputChange); 

function onInputChange(event) {
    refs.nameAnonymous.textContent = event.currentTarget.value.trim () 
    !== '' ? event.target.value : 'Anonymous';
}