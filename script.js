const locationDropdown = document.getElementById('locations');
locationDropdown.addEventListener('change', function() {
    
    // Get the value of the newly selected option
    let selectedLocation = locationDropdown.value;
    let lat, lng;

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
    } else if (selectedLocation === "Indiana") {
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
      const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`

      fetch(url)
        .then(response => response.json())
        .then(data => {
          document.querySelector('#sunrise').innerHTML = data.results.sunrise
          document.querySelector('#sunset').innerHTML = data.results.sunset
          document.querySelector('#dawn').innerHTML = data.results.dawn
          document.querySelector('#dusk').innerHTML = data.results.dusk
          document.querySelector('#solarnoon').innerHTML = data.results.solar_noon
          document.querySelector('#daylength').innerHTML = data.results.day_length
          document.querySelector('#time').innerHTML = data.results.timezone
        document.querySelector('#raw-output').innerHTML = JSON.stringify(data)
        })
        .catch(error => console.error('Error:', error))
          }
      });