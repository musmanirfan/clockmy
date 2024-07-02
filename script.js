"use strict";
function formatedTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
    let secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
    let hoursStr = hours < 10 ? '0' + hours : seconds.toString();
    return `${hoursStr}:${minutesStr}:${secondsStr} ${time}`;
}
;
function updateClock() {
    let now = new Date();
    let formateTime = formatedTime(now);
    let clockElement = document.querySelectorAll("p#clock");
    if (clockElement) {
        clockElement[0].innerHTML = formateTime;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});
function getCurrentDate() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
}
const currentDate = getCurrentDate();
let datePrint = document.querySelectorAll("p")[1].innerHTML = currentDate;
