document.querySelector('button').addEventListener('click', getLocation);
const answer = document.querySelector("h2");
let answerLoc = "";

const url = "https://api.openweathermap.org/";


function getWeather(lat, lon) {
  console.log(lat, lon);
  // let weatherUrl = `${url}data/2.5/forecast/daily?lat=${location.lat}&long=${location.lon}&cnt=2&units=metric&appid=${key}`;


  let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,hourly,alerts}&units=metric&appid=${key}`;


  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.daily);

      let minTemp = data.daily[0].temp.min;
      if (minTemp <= 0) answer.textContent = `YES, there will be ${answerLoc}`;
      else answer.textContent = `NO, there will be no ${answerLoc}`;

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
