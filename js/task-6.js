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
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);

  }
  divValue.append(...boxesArray);
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



