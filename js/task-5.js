

const changeColorBtn = document.querySelector(".change-color");
const newValue = document.querySelector(".color");

changeColorBtn.addEventListener('click', function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  newValue.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  
  
}




