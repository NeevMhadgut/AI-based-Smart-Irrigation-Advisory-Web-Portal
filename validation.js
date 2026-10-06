function validateName(name) {
    if (name === "") return "Farmer Name is required.";
    if (!/^[A-Za-z\s]+$/.test(name)) return "Only alphabets and spaces allowed.";
    return "";
}

function validateMobile(mobile) {
    if (mobile === "") return "Mobile Number is required.";
    if (!/^\d{10}$/.test(mobile)) return "Must be exactly 10 digits.";
    return "";
}

function validatePlotId(plotId) {
    if (plotId === "") return "Plot ID is required.";
    if (!/^AGR-\d{4}$/.test(plotId)) return "Format must be AGR-1234.";
    return "";
}

function validateMoisture(moisture) {
    if (moisture === "") return "Soil Moisture is required.";
    let value = parseFloat(moisture);
    if (value < 0 || value > 100) return "Must be between 0 and 100.";
    return "";
}

function validateRequired(value, fieldName) {
    if (value === "") return fieldName + " is required.";
    return "";
}

function showError(inputId, errorId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);
    
    if (message) {
        inputElement.classList.add('invalid-field');
        errorElement.textContent = message;
        return false;
    } else {
        inputElement.classList.remove('invalid-field');
        errorElement.textContent = "";
        return true;
    }
}

document.getElementById('irrigationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameVal = document.getElementById('farmerName').value.trim();
    const mobileVal = document.getElementById('mobileNumber').value.trim();
    const plotVal = document.getElementById('plotId').value.trim();
    const moistureVal = document.getElementById('soilMoisture').value.trim();
    const stageVal = document.getElementById('cropStage').value.trim();
    const dateVal = document.getElementById('irrigationDate').value.trim();

    const isNameValid = showError('farmerName', 'nameError', validateName(nameVal));
    const isMobileValid = showError('mobileNumber', 'mobileError', validateMobile(mobileVal));
    const isPlotValid = showError('plotId', 'plotError', validatePlotId(plotVal));
    const isMoistureValid = showError('soilMoisture', 'moistureError', validateMoisture(moistureVal));
    const isStageValid = showError('cropStage', 'stageError', validateRequired(stageVal, "Crop Stage"));
    const isDateValid = showError('irrigationDate', 'dateError', validateRequired(dateVal, "Irrigation Date"));

    if (isNameValid && isMobileValid && isPlotValid && isMoistureValid && isStageValid && isDateValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('irrigationForm').reset();
        
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
});