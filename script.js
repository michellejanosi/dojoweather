const acceptBtn = document.querySelector(".btn");
const cityElements = document.querySelectorAll(".nav-links li");
const tempScalesSelect = document.getElementById("temp-scales");
const highTemps = document.querySelectorAll(".high-temp");
const lowTemps = document.querySelectorAll(".low-temp");

// Hide the cookie notification
function hideElement() {
  const cookie = document.querySelector(".cookie-container");
  cookie.classList.add("hidden");
}

// Alert the loading of weather report
function alertWeatherLoad(event) {
  alert(`Loading weather report for ${event.target.textContent}...`);
}

// Converts temperature from Celsius to Fahrenheit and vice versa
function convertTemperature() {
  const isFahrenheit = tempScalesSelect.value === "fahrenheit";

  const convert = (temp) =>
    isFahrenheit
      ? Math.round((temp * 9) / 5 + 32)
      : Math.round(((temp - 32) * 5) / 9);

  highTemps.forEach((tempElement) => {
    const temp = parseInt(tempElement.textContent, 10);
    tempElement.textContent = convert(temp);
  });

  lowTemps.forEach((tempElement) => {
    const temp = parseInt(tempElement.textContent, 10);
    tempElement.textContent = convert(temp);
  });
}

// Event listener to hide the cookie notification
acceptBtn.addEventListener("click", hideElement);

// Event listeners to alert the loading of weather report
cityElements.forEach((cityElement) => {
  cityElement.addEventListener("click", alertWeatherLoad);
});

// Event listener for temperature scale changes
tempScalesSelect.addEventListener("change", convertTemperature);
