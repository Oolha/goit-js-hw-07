

const changeColorBtn = document.querySelector(".change-color");
const newValue = document.querySelector(".color");

changeColorBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomHexColor();
  newValue.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  
  
}




