/**
 * TravelEase Project - JavaScript Validations & Logic
 * Purpose: Handle Sign-Up, Sign-In, and basic session management using LocalStorage.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we are on
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    // --- Sign Up Logic ---
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateSignup()) {
                const userData = {
                    fullName: document.getElementById('fullName').value.trim(),
                    email: document.getElementById('email').value.trim().toLowerCase(),
                    phone: document.getElementById('phone').value.trim(),
                    location: document.getElementById('location').value.trim(),
                    password: document.getElementById('password').value
                };

                // Store in localStorage
                localStorage.setItem('userAccount', JSON.stringify(userData));
                alert('Account created successfully! Redirecting to Sign In...');
                window.location.href = 'SignIn.html';
            }
        });

        // Real-time validation listeners
        const inputs = signupForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => validateSignup(false));
        });
    }

    // --- Sign In Logic ---
    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSignIn();
        });

        // Clear auth error on input
        signinForm.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                document.getElementById('authError').textContent = '';
                input.classList.remove('error');
            });
        });
    }

    // --- Welcome Page Logic ---
    if (userNameDisplay) {
        const storedUser = JSON.parse(localStorage.getItem('userAccount'));
        if (storedUser) {
            userNameDisplay.textContent = `Hello, ${storedUser.fullName}`;
        } else {
            // Redirect to Sign In if no user data found
            window.location.href = 'SignIn.html';
        }
    }

    // --- Password Toggles ---
    document.querySelectorAll('.password-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            const inputId = e.target.getAttribute('data-for');
            togglePassword(inputId);
        });
    });

    // --- Logout Logic ---
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Just clear visual session (in a real app we'd clear tokens)
            // For this project, we'll keep the user in localStorage so they can log back in.
            // But we redirect to SignIn.
        });
    }
});

/**
 * Toggles password visibility for given input ID
 */
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = 'Hide';
    } else {
        input.type = 'password';
        button.textContent = 'Show';
    }
}

/**
 * Validates the Sign Up form
 * @param {boolean} showErrors - Whether to visually show errors
 * @returns {boolean} - True if valid
 */
function validateSignup(showErrors = true) {
    let isValid = true;

    // fields
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // patterns
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const locationPattern = /^[a-zA-Z\s]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // 1. Full Name
    if (!namePattern.test(fullName.value.trim())) {
        setError(fullName, 'fullNameError', 'Alphabets and spaces only', showErrors);
        isValid = false;
    } else {
        setSuccess(fullName, 'fullNameError');
    }

    // 2. Email
    if (!emailPattern.test(email.value.trim())) {
        setError(email, 'emailError', 'Enter a valid email address', showErrors);
        isValid = false;
    } else {
        setSuccess(email, 'emailError');
    }

    // 3. Phone
    if (!phonePattern.test(phone.value.trim())) {
        setError(phone, 'phoneError', 'Must be exactly 10 digits', showErrors);
        isValid = false;
    } else {
        setSuccess(phone, 'phoneError');
    }

    // 4. Location
    if (!locationPattern.test(location.value.trim())) {
        setError(location, 'locationError', 'Alphabets only', showErrors);
        isValid = false;
    } else {
        setSuccess(location, 'locationError');
    }

    // 5. Password
    if (!passwordPattern.test(password.value)) {
        setError(password, 'passwordError', 'Min 8 characters, must include letters & numbers', showErrors);
        isValid = false;
    } else {
        setSuccess(password, 'passwordError');
    }

    // 6. Confirm Password
    if (confirmPassword.value !== password.value || confirmPassword.value === '') {
        setError(confirmPassword, 'confirmPasswordError', 'Passwords do not match', showErrors);
        isValid = false;
    } else {
        setSuccess(confirmPassword, 'confirmPasswordError');
    }

    return isValid;
}

/**
 * Handles Sign In authentication
 */
function handleSignIn() {
    const email = document.getElementById('signinEmail');
    const password = document.getElementById('signinPassword');
    const authError = document.getElementById('authError');

    // Basic format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validFormat = true;

    if (!emailPattern.test(email.value.trim())) {
        setError(email, 'signinEmailError', 'Invalid email format', true);
        validFormat = false;
    } else {
        setSuccess(email, 'signinEmailError');
    }

    if (password.value === '') {
        setError(password, 'signinPasswordError', 'Password is required', true);
        validFormat = false;
    } else {
        setSuccess(password, 'signinPasswordError');
    }

    if (!validFormat) return;

    // Auth check
    const storedUser = JSON.parse(localStorage.getItem('userAccount'));

    if (storedUser && storedUser.email === email.value.trim().toLowerCase() && storedUser.password === password.value) {
        window.location.href = 'index.html';
    } else {
        authError.textContent = 'Invalid email or password';
        email.classList.add('error');
        password.classList.add('error');
    }
}

// Helpers
function setError(element, errorId, message, show) {
    if (show) {
        element.classList.add('error');
        element.classList.remove('success');
        document.getElementById(errorId).textContent = message;
    }
}

function setSuccess(element, errorId) {
    element.classList.remove('error');
    element.classList.add('success');
    document.getElementById(errorId).textContent = '';
}
