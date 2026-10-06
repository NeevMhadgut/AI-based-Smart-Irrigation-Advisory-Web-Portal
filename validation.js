document.getElementById('validationForm').addEventListener('submit', function(event) {
    let isValid = true;

    const farmerName = document.getElementById('farmerName');
    const mobileNumber = document.getElementById('mobileNumber');
    const plotId = document.getElementById('plotId');

    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const plotError = document.getElementById('plotError');

    farmerName.classList.remove('invalid-field');
    mobileNumber.classList.remove('invalid-field');
    plotId.classList.remove('invalid-field');
    
    nameError.textContent = '';
    mobileError.textContent = '';
    plotError.textContent = '';

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(farmerName.value.trim())) {
        nameError.textContent = 'Must contain only alphabets and spaces.';
        farmerName.classList.add('invalid-field');
        isValid = false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber.value.trim())) {
        mobileError.textContent = 'Must be exactly 10 digits.';
        mobileNumber.classList.add('invalid-field');
        isValid = false;
    }

    const plotRegex = /^AGR-\d{4}$/;
    if (!plotRegex.test(plotId.value.trim())) {
        plotError.textContent = 'Format must be AGR-1234.';
        plotId.classList.add('invalid-field');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault(); 
        alert("Validation Successful! Data is ready for submission.");
    }
});