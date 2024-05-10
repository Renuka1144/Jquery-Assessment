function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const areaPIN = document.getElementById('areaPIN').value.trim();
    const state = document.getElementById('state').value.trim();
    const password = document.getElementById('password').value.trim();

    const nameRegex = /^[a-zA-Z]{3,6}$/;
    const mobileRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if (firstName === '') {
        errors.firstName = 'Enter your First Name';
    } else if (!nameRegex.test(firstName)) {
        errors.firstName = 'First Name should contain 3 to 6 alphabetic characters only';
    }

    if (lastName === '') {
        errors.lastName = 'Enter your Last Name';
    } else if (!nameRegex.test(lastName)) {
        errors.lastName = 'Last Name should contain 3 to 6 alphabetic characters only';
    }

    if (email === '') {
        errors.email = 'Enter your Email';
    } else if (!emailRegex.test(email)) {
        errors.email = 'Email should be in correct format (e.g., name@example.com)';
    }

    if (mobile === '') {
        errors.mobile = 'Enter your Mobile Number';
    } else if (!mobileRegex.test(mobile)) {
        errors.mobile = 'Mobile Number should contain exactly 10 digits';
    }

    if (dob === '') {
        errors.dob = 'Enter your Date of Birth';
    }

    if (address === '') {
        errors.address = 'Enter your Address';
    }

    if (city === '') {
        errors.city = 'Enter your City';
    }

    if (areaPIN === '') {
        errors.areaPIN = 'Enter Area PIN';
    }

    if (state === '') {
        errors.state = 'Enter your State';
    }

    if (password === '') {
        errors.password = 'Enter your Password';
    }

    if (Object.keys(errors).length > 0) {
        displayErrors(errors);
        return false;
    } else {
        return true;
    }
}

function displayErrors(errors) {
    for (let field in errors) {
        const errorMessage = errors[field];
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
    }
}
