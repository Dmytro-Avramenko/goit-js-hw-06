const startRange = document.querySelector('#font-size-control');
// console.log(startRange);

startRange.addEventListener('input', onStartRangeInput);

function onStartRangeInput(event) {
    const spanText = document.querySelector('#text');
    // console.log(spanText);
    spanText.style.fontSize = event.currentTarget.value + 'px';
}