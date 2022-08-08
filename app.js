const btnToggle = document.querySelector('.toggle');
const body = document.body;
const timeDiv = document.querySelector('.time');
const dateDiv = document.querySelector('.date');
const span = document.querySelector('span');

const hourEl = document.querySelector('.needle-hour');
const minuteEl = document.querySelector('.needle-minute');
const secondEl = document.querySelector('.needle-second');

btnToggle.addEventListener('click', () => {
    btnToggle.classList.toggle('dark');
    body.classList.toggle('dark');
    timeDiv.classList.toggle('dark');
    span.classList.toggle('dark');

    if(btnToggle.classList.contains('dark')) {
      btnToggle.textContent = 'Light Mode';
    } else {
      btnToggle.textContent = 'Dark Mode'
    }
})


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours()
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  if(hours < 13) {
    timeDiv.textContent = `${hours}:${minutes} AM`;
  }

  if(hours < 13 && minutes < 10) {
    timeDiv.textContent = `${hours}:0${minutes} AM`;
  }

  if(hours >= 13) {
    timeDiv.textContent = `${hoursForClock}:${minutes} PM`;
  }

  if(hours >= 13 && minutes < 10) {
    timeDiv.textContent = `${hoursForClock}:0${minutes} PM`;
  }

  if(date < 10) {
    dateDiv.innerHTML = `${days[day]}, ${months[month]} <span>0${date}</span>`;
  } else {
    dateDiv.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`;
  }
}

const scale = function (num, inMin, inMax, outMin, outMax){
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime,1000);
