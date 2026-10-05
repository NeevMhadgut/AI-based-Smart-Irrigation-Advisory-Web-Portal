const moistureReadings = [45, 42, 38, 30, 25, 22, 28, 35, 40, 48, 50, 46];
const criticalThreshold = 30;

const minMoisture = Math.min(...moistureReadings);
const maxMoisture = Math.max(...moistureReadings);
const averageMoisture = (moistureReadings.reduce((sum, val) => sum + val, 0) / moistureReadings.length).toFixed(2);
const criticalCount = moistureReadings.filter(val => val < criticalThreshold).length;

document.write("<div class='report-card'>");
document.write("<h2>📈 Sensor Data Analysis</h2>");
document.write("<div class='data-row'><span><strong>All Readings (%):</strong></span> <span>[" + moistureReadings.join(", ") + "]</span></div>");
document.write("<div class='data-row'><span><strong>Min Moisture:</strong></span> <span>" + minMoisture + "%</span></div>");
document.write("<div class='data-row'><span><strong>Max Moisture:</strong></span> <span>" + maxMoisture + "%</span></div>");
document.write("<div class='data-row'><span><strong>Average Moisture:</strong></span> <span>" + averageMoisture + "%</span></div>");
document.write("<div class='data-row'><span><strong>Critical Threshold:</strong></span> <span>< " + criticalThreshold + "%</span></div>");

let statusColor = criticalCount > 0 ? "#d32f2f" : "#2e7d32";
let statusBg = criticalCount > 0 ? "#ffebee" : "#e8f5e9";

document.write("<div class='status-box' style='background-color: " + statusBg + "; color: " + statusColor + ";'>Readings Below Critical: " + criticalCount + "</div>");
document.write("</div>");