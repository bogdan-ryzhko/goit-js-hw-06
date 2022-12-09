function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsInput = document.querySelector('#controls').firstElementChild;
const boxes = document.querySelector('#boxes');

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

createButton.addEventListener('click', () => {
  let countSize = 20;

  for (let i = 0; i < controlsInput.value; i += 1) {
    countSize += 10;

    boxes.insertAdjacentHTML('beforeend', `<div
      class="boxes-items"
      style="
      width: ${countSize}px;
      height: ${countSize}px;
      background-color: ${getRandomHexColor()};
      margin-bottom: 10px;
      ">
    </div>`)
  }
});

const destroyBoxes = () => {
  const boxesItems = document.querySelectorAll('.boxes-items');

  [...boxesItems].map(box => box.remove());
}

destroyButton.addEventListener('click', destroyBoxes)