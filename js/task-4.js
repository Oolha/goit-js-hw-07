const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();
    if (emailValue === "" || passwordValue === "") {
        return alert ("All form fields must be filled in");
    }

    const allData = {
        email: emailValue,
        password: passwordValue,
    }
    console.log(allData);
    form.reset()
}


