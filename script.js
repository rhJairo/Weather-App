
let myDate = new Date();
let day = myDate.getDay();
let hour = myDate.getHours();
let uppColors = ['#050F65','#A4F0FF','#8080ff','#FF95DF'];
let lowColors = ['#6F2875','#FFB05A','#80ffdf','#FFA748'];

let root = document.querySelector('.elements');

let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

document.getElementById("weekday").innerHTML = weekday[day];

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

document.onload = changeColor();