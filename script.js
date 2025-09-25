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

function validateUsername(input) {
    if(!input.validity.valid){
        if (input.value.length < 5) {
            input.setCustomValidity('Username must be 5 characters or longer.');
        } else {
            input.setCustomValidity('');
        }
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

