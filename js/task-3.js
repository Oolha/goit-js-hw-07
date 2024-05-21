const textInput = document.getElementById('name-input');

function textGreeting() {
    const inputElem = document.getElementById('name-input');
    const outputElem = document.getElementById('name-output');
    const trimmedValue = inputElem.value.trim();

    outputElem.textContent = trimmedValue ? trimmedValue : "Anonymous";

}
textInput.addEventListener('input', textGreeting);



