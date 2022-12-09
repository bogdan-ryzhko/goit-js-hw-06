function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const btnChangeBackGroundColorOfBody = document.querySelector('.change-color');

const changeBG = () => body.style.backgroundColor = getRandomHexColor();

btnChangeBackGroundColorOfBody.addEventListener('click', changeBG)