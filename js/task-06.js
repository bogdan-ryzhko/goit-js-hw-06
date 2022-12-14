const validationInput = document.querySelector('#validation-input');
const lengthOfInput = validationInput.getAttribute('data-length');

const getValidInput = () => {
	if (validationInput.value.length === Number(lengthOfInput)) {
		validationInput.classList.remove('invalid');
		validationInput.classList.add('valid')
	} else {
		validationInput.classList.add('invalid');
	}
}

validationInput.addEventListener('blur', getValidInput);