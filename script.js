let monthsT = document.getElementById("months");
let daysT = document.getElementById("days");
let hoursT = document.getElementById("hours");
let minutesT = document.getElementById("minutes");
let secondsT = document.getElementById("seconds");

let year = new Date().getFullYear() + 1;


let newYear = `01 jan ${year}`


function countdown() {
    let newYearDate = new Date(newYear);
    let currentDate = new Date();

    let totalSeconds = (newYearDate - currentDate) / 1000

    let months = Math.floor(totalSeconds / 3600 / 24 / 30)
    let days = Math.floor(totalSeconds / 3600 / 24) 
    let hours = Math.floor(totalSeconds / 3600) % 24
    let minutes = Math.floor(totalSeconds / 3600 / 60) % 60
    let seconds = Math.floor(totalSeconds) % 60

    monthsT.innerHTML = months;
    daysT.innerHTML = days;
    hoursT.innerHTML = hours;
    minutesT.innerHTML = minutes;
    secondsT.innerHTML = seconds;
}
countdown();

setInterval(countdown, 1000);