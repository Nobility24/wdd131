// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-updated").textContent = "Last Updated: " + document.lastModified;

// Static values for temperature and wind speed
const temperature = 12; // °C
const windSpeed = 5; // km/h

function calculateWindChill(temp, speed) {
    // Wind Chill formula for °C and km/h
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Display wind chill if conditions are met
const windChillOutput = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillOutput.textContent = "N/A";
}