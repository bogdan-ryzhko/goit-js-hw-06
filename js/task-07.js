const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSize = () => {
	text.style.fontSize = fontSizeControl.value + 'px';
}

fontSizeControl.addEventListener('input', changeFontSize);