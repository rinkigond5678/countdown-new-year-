console.log('JavaScript is loaded');  
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date().getTime();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    daysElement.innerHTML = d;
    hoursElement.innerHTML = h < 10 ? '0' + h : h;
    minutesElement.innerHTML = m < 10 ? '0' + m : m;
    secondsElement.innerHTML = s < 10 ? '0' + s : s;
}
updateCountdown();
setInterval(updateCountdown, 1000);
