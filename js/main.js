document.querySelector('button').addEventListener('click', getWeather);
const answer = document.querySelector("h2");
let answerLoc = "";

const url = "https://api.openweathermap.org/";


function getWeather() {
  let location = getLocation();

  let weatherUrl = `${url}data/2.5/forecast/daily?lat=${location.lat}&long=${location.lon}&cnt=2&units=metric&appid=${key}`;

  console.log(weatherUrl);

  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let minTemp = data.list.list.temp.min;
      if (minTemp > 0) answer.textContent = `YES, there will be ${answerLoc}`;
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
  let coords = {};
  
  
  fetch(locationUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    //ok taking the first element is sketchy, may return multiple results
    //can refine with a selection at some point maybe
    answerLoc = `frost tonight in ${data[0].name}, ${data[0].state}.`;

    coords.lat = data[0].lat;
    coords.lon = data[0].lon;
    })
  .catch(err => {
      console.log(`error ${err}`);
  });
  return coords;
}
