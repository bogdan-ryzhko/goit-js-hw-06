const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const decrementEvent = event => counterValue.textContent = Number(counterValue.textContent) - 1;

const incrementEvent = event => counterValue.textContent = Number(counterValue.textContent) + 1;

decrementButton.addEventListener('click', decrementEvent);
incrementButton.addEventListener('click', incrementEvent);