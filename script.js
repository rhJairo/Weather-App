
let myDate = new Date();
let day = myDate.getDay();
let hour = myDate.getHours();
let uppColors = ['#050F65','#A4F0FF','#8080ff','#FF95DF'];
let lowColors = ['#6F2875','#FFB05A','#80ffdf','#FFA748'];

const root = document.querySelector('.elements');
const loc = document.querySelector('.city');
const tempC = document.querySelector('.measure');
const weather = document.querySelector('.weather');

let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];



function changeColor(){
    if(hour>=19 && hour<=24){
        root.style.setProperty('--upper-color', uppColors[0]);
        root.style.setProperty('--lower-color', lowColors[0]);
    }else if(hour>=0 && hour<=4){
        root.style.setProperty('--upper-color', uppColors[0]);
        root.style.setProperty('--lower-color', lowColors[0]);
    }else if(hour>=5 && hour<=8){
        root.style.setProperty('--upper-color', uppColors[1]);
        root.style.setProperty('--lower-color', lowColors[1]);
    }else if(hour>=9 && hour<=16){
        root.style.setProperty('--upper-color', uppColors[2]);
        root.style.setProperty('--lower-color', lowColors[2]);
    }else if(hour>=17 && hour<=18){
        root.style.setProperty('--upper-color', uppColors[3]);
        root.style.setProperty('--lower-color', lowColors[3]);
    }
}


const api = "";

window.addEventListener('load', () => {
    let long;
    let lat;
    // Accesing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
  
        // Using fetch to get data
        fetch(base)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const { temp } = data.main;
            const place = data.name;
            const { main } = data.weather[0];
            
            const temp1 = parseInt(temp);
            const fahrenheit = (temp * 9) / 5 + 32;



            loc.textContent = `${place}`;
            tempC.textContent = `${temp1}° C`;
            weather.textContent = `${main}`;

            document.getElementById("weekday").innerHTML = weekday[day];
            changeColor();
          });
      });
    }
  });

  

