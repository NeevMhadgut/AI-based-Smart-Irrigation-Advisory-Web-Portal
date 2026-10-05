const sugarcaneFarm = {
    farmerName: "Neev Mhadgut",
    plotId: "SUGAR-001",
    cropStage: "Vegetative",
    soilMoisture: 42,
    area: 5.5,
    pumpStatus: "Off",

    displayInfo: function() {
        document.write("<div class='report-card'>");
        document.write("<h2>🌾 Sugarcane Farm Details</h2>");
        document.write("<div class='data-row'><span><strong>Farmer Name:</strong></span> <span>" + this.farmerName + "</span></div>");
        document.write("<div class='data-row'><span><strong>Plot ID:</strong></span> <span>" + this.plotId + "</span></div>");
        document.write("<div class='data-row'><span><strong>Crop Stage:</strong></span> <span>" + this.cropStage + "</span></div>");
        document.write("<div class='data-row'><span><strong>Soil Moisture:</strong></span> <span>" + this.soilMoisture + "%</span></div>");
        document.write("<div class='data-row'><span><strong>Farm Area:</strong></span> <span>" + this.area + " Acres</span></div>");
        
        let statusColor = this.pumpStatus.toLowerCase() === "on" ? "#2e7d32" : "#d32f2f";
        let statusBg = this.pumpStatus.toLowerCase() === "on" ? "#e8f5e9" : "#ffebee";
        
        document.write("<div class='status-box' style='background-color: " + statusBg + "; color: " + statusColor + ";'>Pump Status: " + this.pumpStatus.toUpperCase() + "</div>");
        document.write("</div>");
    }
};

sugarcaneFarm.displayInfo();