// Weather API
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Melissa&units=imperial&appid=27e20167da1b1c1b0c28e5fae1b1f633";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    document.querySelector("#wind-speed").textContent = jsObject.wind.speed;
    document.querySelector("#description").textContent =
      jsObject.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;

    const temp = Number(document.getElementById("current-temp").textContent);
    const speed = Number(document.getElementById("wind-speed").textContent);
    document.getElementById("wind-chill").textContent = chill(temp, speed);
    function chill(temp, speed) {
      if ((temp <= 50) & (speed >= 3)) {
        return Math.round(
          35.74 +
            0.6215 * temp -
            35.75 * Math.pow(speed, 0.16) +
            0.4275 * temp * Math.pow(speed, 0.16)
        );
      } else {
        return "N/A";
      }
    }
  });