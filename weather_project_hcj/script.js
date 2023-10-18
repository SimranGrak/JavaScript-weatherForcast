const getWeather = (city) => {
  cityName.innerHTML = city;
  async function fetchData() {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f7b29859demsh4fb52807aebed59p130ed3jsnab94312f149d",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      console.log(response);
      let result = await response.text();

      result = JSON.parse(result);
      let temp = document.getElementById("temp");
      let feels_like = document.getElementById("feels_like");
      let humidity = document.getElementById("humidity");
      let min_temp = document.getElementById("min_temp");
      let max_temp = document.getElementById("max_temp");
      let wind_speed = document.getElementById("wind_speed");
      let wind_degrees = document.getElementById("wind_degrees");
      let sunrise = document.getElementById("sunrise");
      let sunset = document.getElementById("sunset");

      cloud_pct.innerHTML = result.cloud_pct;
      console.log(result.temp);
      temp.innerHTML = result.temp;

      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }

  // Call the async function to fetch data
  fetchData();
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");
