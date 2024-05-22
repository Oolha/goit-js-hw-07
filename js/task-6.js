const createValue = document.querySelector(".controls-btn");
const destroyValueBtn = document.querySelector(".destroy-btn");
const inputValue = document.querySelector("input");
const divValue = document.querySelector("#boxes");

createValue.addEventListener('click', function () {
  const amount = Number(inputValue.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputValue.value = '';
  }
})


function createBoxes(amount) {
  divValue.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement('div');
    boxes.style.width = `${30 + i * 10}px`;
    boxes.style.height = `${30 + i * 10}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    divValue.appendChild(boxes);

  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyValueBtn.addEventListener('click', destroyElem);

function destroyElem() {
  divValue.innerHTML = '';
}



