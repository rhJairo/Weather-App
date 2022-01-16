let myDate = new Date();
let myDay = myDate.getDay();

let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

document.getElementById("weekday").innerHTML = weekday[myDay];