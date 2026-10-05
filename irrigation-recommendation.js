let soilMoisture = parseFloat(prompt("Enter Soil Moisture (%):", "25"));
let rainForecast = prompt("Is rain expected? (yes/no):", "no").toLowerCase();
let cropStage = prompt("Enter Crop Stage (e.g., Seedling, Vegetative):", "Vegetative");

let rainExpected = (rainForecast === "yes" || rainForecast === "y");
let recommendation = "";
let bgColor = "";
let textColor = "";

if (rainExpected) {
    recommendation = "Postpone Irrigation";
    bgColor = "#e3f2fd"; 
    textColor = "#1565c0"; 
} else if (soilMoisture < 30) {
    recommendation = "Irrigation Required Immediately";
    bgColor = "#ffebee"; 
    textColor = "#d32f2f"; 
} else if (soilMoisture >= 30 && soilMoisture <= 50) {
    recommendation = "Monitor Soil Moisture";
    bgColor = "#fff8e1"; 
    textColor = "#f57f17"; 
} else {
    recommendation = "Irrigation Not Required";
    bgColor = "#e8f5e9"; 
    textColor = "#2e7d32"; 
}

document.write("<div class='report-card'>");
document.write("<h2>📋 Irrigation Recommendation</h2>");
document.write("<div class='data-row'><span><strong>Crop Stage:</strong></span> <span>" + cropStage + "</span></div>");
document.write("<div class='data-row'><span><strong>Soil Moisture:</strong></span> <span>" + soilMoisture + "%</span></div>");
document.write("<div class='data-row'><span><strong>Rain Expected:</strong></span> <span>" + (rainExpected ? "Yes" : "No") + "</span></div>");
document.write("<div class='status-box' style='background-color: " + bgColor + "; color: " + textColor + ";'>" + recommendation + "</div>");
document.write("</div>");