const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// load username, remember to us 'savedUsername' when saving it later
window.addEventListener('load', () => {
    const savedUsername = sessionStorage.getItem('savedUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    
});

function validateEach( inputElement, errorSpan, customValidationFunction = null) {
    errorSpan.textContent = '';
    inputElement.classList.remove('invalid', 'valid');

    if (inputElement.required && inputElement.value.trim() === '') {
        inputElement.setCustomValidity('This is required.');
    } else if (customValidationFunction) {
        customValidationFunction(inputElement);
    } else {
        inputElement.setCustomValidity('');
    }

    const isValid = inputElement.checkValidity();

    if (!isValid) {
        inputElement.classList.add('invalid');
        errorSpan.textContent = inputElement.validationMessage;
    } else {
        inputElement.classList.add('valid');
    }
    return isValid;
}

function validateUsername(input) {
    if (input.value.length < 5) {
        input.setCustomValidity('Username must be 5 characters or longer.');
    } else {
        input.setCustomValidity('');
    }
}

function validateEmail(input) {
    if(!input.validity.valid){
        if(input.validity.valueMissing){
            input.setCustomValidity('Email is required');
        } else if (input.validity.typeMismatch) {
            input.setCustomValidity('Please enter a valid email address.');
        }
    }
    // optionally use built in html email validation and substitude in code below
    // input.setCustomValidity('');
}

function validatePassword(input) {
    if(!input.validity.valid){
        if (input.value.length < 8) {
            input.setCustomValidity('Password must be at least 8 characters');
        } else {
            input.setCustomValidity('');
        }
    }
}

function validateConfirmPassword(input) {
    if (input.value !== passwordInput.value) {
        input.setCustomValidity('Passwords do not match!');
    } else {
        input.setCustomValidity('');
    }
}

usernameInput.addEventListener('input', function(){
    validateEach(usernameInput, document.getElementById('usernameError'), validateUsername);
});

emailInput.addEventListener('input', function(){
    validateEach(emailInput, document.getElementById('emailError'), validateEmail);
})

passwordInput.addEventListener('input', function(){
    validateEach(passwordInput, document.getElementById('passwordError'), validatePassword);
})

confirmPasswordInput.addEventListener('input', function() {
    validateEach(confirmPasswordInput, document.getElementById('confirmPasswordError'), validateConfirmPassword);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isUsernameValid = validateEach(usernameInput, document.getElementById('usernameError'), validateUsername);
    const isEmailValid = validateEach(emailInput, document.getElementById('emailError'), validateEmail);
    const isPasswordValid = validateEach(passwordInput, document.getElementById('passwordError'), validatePassword);
    const isConfirmPasswordValid = validateEach(confirmPasswordInput, document.getElementById('confirmPasswordError'), validateConfirmPassword);

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert("You've signed up!");
        form.requestFullscreen();
    } else {
        alert('Please fix form errors.')
    }

})

