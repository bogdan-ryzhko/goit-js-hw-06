const validationInputRef = document.querySelector('#validation-input');
const lengthOfInput = validationInputRef.getAttribute('data-length');

const getValidInput = event => {
	const validationInput = event.currentTarget;

	if (validationInput.value.length === Number(lengthOfInput)) {
		validationInput.classList.remove('invalid');
		validationInput.classList.add('valid');
	} else {
		validationInput.classList.add('invalid');
	}
}

validationInputRef.addEventListener('input', getValidInput);
validationInputRef.addEventListener('blur', getValidInput);