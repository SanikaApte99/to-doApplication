const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
        e.preventDefault();
        validateInputs();
        if (!validateInputs()) {
            e.preventDefault();
        } else {
            const url = 'http://localhost:3000/application.html';
            window.location.href = url;
        }
    });

const setError = function (element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    return false;
}

const setSuccess = function (element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    return true;

};

const isValidEmail = function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = function () {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        setError(email, 'Email is required');
        setError(password, 'Password is required');
    } else if (!isValidEmail(emailValue) || passwordValue.length < 8) {
        setError(email, 'Provide a valid email address');
        setError(password, 'Password must be at least 8 character.');
    } else {
        return true;
    }
};