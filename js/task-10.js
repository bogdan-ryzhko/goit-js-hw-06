function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsInput = document.querySelector('#controls').firstElementChild;
const boxesEl = document.querySelector('#boxes');

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');


const createBoxes = amount => {
  let countSize = 30;
  const divList = [];

  for (let i = 0; i < amount; i += 1) {
    divList.push(`<div class="boxes-items" style="
    width: ${countSize}px;
    height: ${countSize}px;
    background-color: ${getRandomHexColor()};
    margin-bottom: 10px"></div>`);

    countSize += 10;
  }

  return divList.join('');
}

const boxes = () => {
  boxesEl.insertAdjacentHTML('beforeend', createBoxes(controlsInput.value))
}

const destroyBoxes = () => {
  boxesEl.textContent = '';
  
  // Если метод с textContent не подходит => раскомментируйте следующие две строки
  // const boxesItems = document.querySelectorAll('.boxes-items').map(box => box.remove());
  // [...boxesItems].map(box => box.remove());
  controlsInput.value = '';
}

createButton.addEventListener('click', boxes)
destroyButton.addEventListener('click', destroyBoxes)