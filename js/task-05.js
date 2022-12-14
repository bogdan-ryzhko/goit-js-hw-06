const inputNameRef = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output')

const getInputName = event => {
	const inputName = event.currentTarget;

	return inputName.value === ''
		? outputName.textContent = 'Anonymous'
		: outputName.textContent = inputName.value;
}

inputNameRef.addEventListener('input', getInputName);