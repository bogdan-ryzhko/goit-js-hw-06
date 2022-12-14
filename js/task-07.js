const fontSizeControlRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSize = event => {
	const fontSizeControl = event.currentTarget;

	text.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControlRef.addEventListener('input', changeFontSize);