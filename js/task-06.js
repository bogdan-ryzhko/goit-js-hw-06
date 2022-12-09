const validationInput = document.querySelector('#validation-input');
const lengthOfInput = validationInput.getAttribute('data-length');

const getValidInput = () => validationInput.value.length === Number(lengthOfInput)
	? validationInput.classList.add('valid')
	: validationInput.classList.add('invalid');

validationInput.addEventListener('blur', getValidInput);