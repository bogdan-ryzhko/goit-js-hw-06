const value = document.querySelector('#value');

const counter = {
	counterValue: 0,

	decrement() {
		this.counterValue -= 1;
	},

	increment() {
		this.counterValue += 1;
	},
}

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const onDecrementButtonClick = () => {
	counter.decrement();
	value.textContent = counter.counterValue;
}

const onIncrementButtonClick = () => {
	counter.increment();
	value.textContent = counter.counterValue;
}

decrementButton.addEventListener('click', onDecrementButtonClick);

incrementButton.addEventListener('click', onIncrementButtonClick);