// // Get references to input field and weather info paragraph
// const locationInput = document.getElementById('location-input');
// const weatherInfo = document.getElementById('weather-info');

// // Function to fetch weather data based on user input
// function fetchWeather() {
//     const location = locationInput.value.trim(); // Get the user-entered location

//     if (location) {
//         // Fetch weather data from the API
//         fetch(`http://api.weatherapi.com/v1/current.json?key=f87bb2dba09f4bd3838121847240809&q=${location}&aqi=no`)
//             .then(response => response.json())
//             .then(data => {
//                 // Extract relevant information
//                 const locationName = data.location.name;
//                 const temperature = data.current.temp_c;
//                 const condition = data.current.condition.text;
//                 const icon = data.current.condition.icon

//                 // Display the weather info
//                 weatherInfo.textContent = `In ${locationName},${icon}, it's currently ${temperature}°C with ${condition}. `;
//             })
//             .catch(error => {
//                 console.error('Error fetching weather data:', error);
//                 weatherInfo.textContent = 'Oops! Something went wrong. Please try again later.';
//             });
//     } else {
//         weatherInfo.textContent = 'Please enter a valid location.';
//     }
// }







const locationInput = document.getElementById('location-input');
const weatherInfo = document.getElementById('weather-info');

// Function to fetch weather data based on user input
function fetchWeather() {
    const location = locationInput.value.trim(); // Get the user-entered location

    if (location) {
        // Fetch weather data from the API
        fetch(`http://api.weatherapi.com/v1/current.json?key=f87bb2dba09f4bd3838121847240809&q=${location}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                // Extract relevant information
                const locationName = data.location.name;
                const temperature = data.current.temp_c;
                const condition = data.current.condition.text;
                const icon = data.current.condition.icon;

                // Create an image element for the icon
                const iconImage = document.createElement('img');
                iconImage.src = `http:${icon}`;
                iconImage.alt = condition;

                // Clear previous content
                weatherInfo.innerHTML = '';

                // Display the weather info
                weatherInfo.textContent = `In ${locationName}, it's currently ${temperature}°C with ${condition}. `;

                // Append the icon image
                weatherInfo.appendChild(iconImage);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.textContent = 'Oops! Something went wrong. Please try again later.';
            });
    } else {
        weatherInfo.textContent = 'Please enter a valid location.';
    }
}







