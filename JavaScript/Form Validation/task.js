(function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const countryInput = document.getElementById('country');
    const zipInput = document.getElementById('zip');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('password-confirm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        validateForm();
    });

    emailInput.addEventListener('blur', validateEmail);
    countryInput.addEventListener('blur', validateCountry);
    zipInput.addEventListener('blur', validateZip);
    passwordInput.addEventListener('blur', validatePassword);
    passwordConfirmInput.addEventListener('blur', validatePasswordConfirm);

    function validateForm() {
        // Reset all errors
        clearErrors();

        // Validate each input field
        let isValid = true;

        if (!validateEmail()) isValid = false;
        if (!validateCountry()) isValid = false;
        if (!validateZip()) isValid = false;
        if (!validatePassword()) isValid = false;
        if (!validatePasswordConfirm()) isValid = false;

        // If form is valid, submit it
        if (isValid) {
            form.submit();
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorFor(emailInput, 'Email is not valid');
            return false;
        } else {
            setSuccessFor(emailInput);
            return true;
        }
    }

    function validateCountry() {
        const country = countryInput.value.trim();
        if (country.length < 4 || country.length > 12) {
            setErrorFor(countryInput, 'Country must be between 4 and 12 characters');
            return false;
        } else {
            setSuccessFor(countryInput);
            return true;
        }
    }

    function validateZip() {
        const zip = zipInput.value.trim();
        if (zip.length < 4 || zip.length > 9) {
            setErrorFor(zipInput, 'Zip code must be between 4 and 9 characters');
            return false;
        } else {
            setSuccessFor(zipInput);
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        if (password.length < 6) {
            setErrorFor(passwordInput, 'Password must be at least 6 characters long');
            return false;
        } else {
            setSuccessFor(passwordInput);
            return true;
        }
    }

    function validatePasswordConfirm() {
        const password = passwordInput.value.trim();
        const confirmPassword = passwordConfirmInput.value.trim();
        if (confirmPassword !== password) {
            setErrorFor(passwordConfirmInput, 'Passwords do not match');
            return false;
        } else {
            setSuccessFor(passwordConfirmInput);
            return true;
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector('small');

        // Add error message and class
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement; // .form-control
        formControl.className = 'form-control success';
    }

    function clearErrors() {
        // Clear all error messages and classes
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(function(formControl) {
            formControl.className = 'form-control';
            const small = formControl.querySelector('small');
            if (small) small.innerText = '';
        });
    }
})();