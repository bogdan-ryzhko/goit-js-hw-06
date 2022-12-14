const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output')

const getInputName = () => inputName.value === ''
	? outputName.textContent = 'Anonymous'
	: outputName.textContent = inputName.value;

inputName.addEventListener('input', getInputName);