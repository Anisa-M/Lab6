const locationDropdown = document.getElementById('locations');

locationDropdown.addEventListener('change', function() {
    
    // Get the value of the selected option
    let selectedLocation = locationDropdown.value;
    let lat, lng;

    // Clear any previous error messages at the start of a new search
    const errorDisplay = document.querySelector('#error-message');
    if (errorDisplay) {
        errorDisplay.innerHTML = '';
    }

    // 3. The coordinate logic
    if (selectedLocation === "Chicago") {
        lat = 41.792835197099;
        lng = -87.59973272829167;
    } else if (selectedLocation === "Boston") {
        lat = 42.3588336;
        lng = -71.0578303;
    } else if (selectedLocation === "Sacramento") {
        lat = 38.5810606;
        lng = -121.493895;
    } else if (selectedLocation === "Vegas") {
        lat = 36.1674263;
        lng = -115.1484131;
    } else if (selectedLocation === "STL") {
        lat = 38.6254063;
        lng = -90.190009;
    } else if (selectedLocation === "Phoenix") {
        lat = 33.4484367;
        lng = -112.074141;
    } else if (selectedLocation === "Michigan City") {
        lat = 41.7075394;
        lng = -86.8950297;
    } else if (selectedLocation === "Dublin") {
        lat = 53.3493795;
        lng = -6.2605593;
    } else if (selectedLocation === "Rome") {
        lat = 41.8933203;
        lng = 12.4829321;
    } else if (selectedLocation === "Milwaukee") {
        lat = 43.0386475;
        lng = -87.9090751;
    } 

    if (lat && lng) {
      const todayUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`;
      const tomorrowUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`;

      // Today's Data
      fetch(todayUrl)
        .then(response => response.json())
        .then(data => {
          document.querySelector('#sunrise-today').innerHTML = data.results.sunrise;
          document.querySelector('#sunset-today').innerHTML = data.results.sunset;
          document.querySelector('#dawn-today').innerHTML = data.results.dawn;
          document.querySelector('#dusk-today').innerHTML = data.results.dusk;
          document.querySelector('#solarNoon-today').innerHTML = data.results.solar_noon;
          document.querySelector('#dayLength-today').innerHTML = data.results.day_length;
          document.querySelector('#timezone-today').innerHTML = data.results.timezone;
          document.querySelector('#loc-today').innerHTML = selectedLocation;
        })
        .catch(error => {
          // Show the user an error message for today's data
          if (errorDisplay) {
              errorDisplay.innerHTML = "Error: Could not retrieve today's information. Please check your connection.";
          }
          console.error('Error:', error);
        });

      // Tomorrow's Data
      fetch(tomorrowUrl)
        .then(response => response.json())
        .then(data => {
          document.querySelector('#sunrise-tomorrow').innerHTML = data.results.sunrise;
          document.querySelector('#sunset-tomorrow').innerHTML = data.results.sunset;
          document.querySelector('#dawn-tomorrow').innerHTML = data.results.dawn;
          document.querySelector('#dusk-tomorrow').innerHTML = data.results.dusk;
          document.querySelector('#solarNoon-tomorrow').innerHTML = data.results.solar_noon;
          document.querySelector('#dayLength-tomorrow').innerHTML = data.results.day_length;
          document.querySelector('#timezone-tomorrow').innerHTML = data.results.timezone;
          document.querySelector('#loc-tomorrow').innerHTML = selectedLocation;
        })
        .catch(error => {
          // Show the user an error message for tomorrow's data
          if (errorDisplay) {
              errorDisplay.innerHTML = "Error: Could not retrieve tomorrow's information. Please try again.";
          }
          console.error('Error:', error);
        });        
    }
});
