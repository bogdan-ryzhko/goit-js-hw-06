const form = document.querySelector('.login-form');
const inputEmail = form.querySelector('input[name="email"]');
const inputPassword = form.querySelector('input[name="password"]');

const onFormSubmit = e => {
	e.preventDefault();

	const currentTarget = e.currentTarget;
	const emailValue = currentTarget.elements.email.value;
	const pwdValue = currentTarget.elements.password.value;

	if (emailValue === '' || pwdValue === '') {
		alert('Все поля должны быть заполнены.');
		return;
	}

	const formData = new FormData(currentTarget);

	const userInfo = {}

	formData.forEach((value, name) => {
		return userInfo[name] = value;
	});

	console.log(userInfo);

	currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);