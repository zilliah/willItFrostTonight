document.querySelector('button').addEventListener('click', getLocation);
const answer = document.querySelector("h2");
const tomorrow = document.querySelector("h3");
const body = document.querySelector("body");
let answerLoc = "";

const key = "01befbef9043692bef53ecbdcf2ef7a0";
const url = "https://api.openweathermap.org/";


function getWeather(lat, lon) {
  let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,hourly,alerts}&units=metric&appid=${key}`;

  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      let minTemp = data.daily[0].temp.min;
      if (minTemp <= 0) {
        answer.textContent = `YES, there will be ${answerLoc}`;
        body.classList.add("frost");
        body.classList.remove("sunny");
      }
      else {
        answer.textContent = `NO, there will be no ${answerLoc}`;
        body.classList.add("sunny");
        body.classList.remove("frost");
      } 

      let tomorrowMin = data.daily[1].temp.min;
      if (tomorrowMin <= 0) tomorrow.textContent = "There will be frost tomorrow night.";
      else tomorrow.textContent = "No frost tomorrow night.";
    })
    .catch(err => {
      console.log(`error ${err}`);
  });
}

function getLocation(){
  let city = document.querySelector('input').value;
  if (!city) city = "Ottawa";
  const country = document.querySelector("select").value;
  let locationUrl = `${url}geo/1.0/direct?q=${city.toLowerCase()},${country}&appid=${key}`;

  fetch(locationUrl)
  .then(res => res.json())
  .then(data => {
    //ok taking the first element is sketchy, may return multiple results
    //should redo with selector for which result to show data for
    answerLoc = `frost tonight in ${data[0].name}, ${data[0].state}.`;
    getWeather(data[0].lat, data[0].lon);
    })
  .catch(err => {
      console.log(`error ${err}`);
  });
}
