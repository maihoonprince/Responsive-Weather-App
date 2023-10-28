const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const skyCon = document.getElementById("sky-con");
const windSpeed = document.getElementById("windSpeed");


async function getData(input) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c77c4419654c461d97185543232309&q=${input}&aqi=no`);
    if (response.ok) {
      const data = await response.json();

      cityName.innerText = `Location: ${data.location.name}, ${data.location.region}, ${data.location.country}`;
      cityTime.innerText = `Time: ${data.location.localtime}`;
      cityTemp.innerText = `Temperature: ${data.current.temp_c} °C`;
      skyCon.innerText = `Sky Condition: ${data.current.condition.text}`;
      windSpeed.innerText = `Wind Speed: ${data.current.wind_kph} kph`;
    } else {
      console.error("Error fetching data from the API");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

button.addEventListener("click", async () => {
  const value = input.value;
  await getData(value);
});
