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



