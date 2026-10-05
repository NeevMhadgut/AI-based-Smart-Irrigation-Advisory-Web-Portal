let farmerName = prompt("Enter Farmer Name:", "Neev");
let plotId = prompt("Enter Plot ID:", "PLOT-1234");
let currentMoisture = parseFloat(prompt("Enter Current Soil Moisture (%):", "35"));
let requiredMoisture = parseFloat(prompt("Enter Required Soil Moisture (%):", "50"));

let moistureDeficit = requiredMoisture - currentMoisture;

let alertMessage = "";
let printStatus = "";
let statusBg = "";
let statusColor = "";

if (moistureDeficit > 0) {
    alertMessage = "⚠️ ACTION REQUIRED: Irrigation Needed!\nDeficit: " + moistureDeficit + "%";
    printStatus = "💧 Irrigation Required (" + moistureDeficit + "% Deficit)";
    statusBg = "#ffebee";
    statusColor = "#d32f2f";
} else {
    alertMessage = "✅ Status: Soil moisture is optimal.\nNo irrigation needed.";
    printStatus = "🌱 Optimal Moisture. No action needed.";
    statusBg = "#e8f5e9";
    statusColor = "#2e7d32";
    moistureDeficit = 0; 
}

alert(alertMessage);

document.write("<div class='report-card'>");
document.write("<h2>📊 AI Advisory Report</h2>");
document.write("<div class='data-row'><span><strong>Farmer Name:</strong></span> <span>" + farmerName + "</span></div>");
document.write("<div class='data-row'><span><strong>Plot ID:</strong></span> <span>" + plotId + "</span></div>");
document.write("<div class='data-row'><span><strong>Current Moisture:</strong></span> <span>" + currentMoisture + "%</span></div>");
document.write("<div class='data-row'><span><strong>Target Moisture:</strong></span> <span>" + requiredMoisture + "%</span></div>");
document.write("<div class='status-box' style='background-color: " + statusBg + "; color: " + statusColor + ";'>" + printStatus + "</div>");
document.write("</div>");