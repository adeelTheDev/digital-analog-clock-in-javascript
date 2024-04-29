const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

const digitalHH = document.querySelector('.hh')
const digitalMM = document.querySelector('.mm')
const digitalSS = document.querySelector('.ss')
const digitalAmpm = document.querySelector('.ampm')


setInterval(()=>{
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();
  let ampm = hh >= 12 ? 'pm' : 'am';

  hour.style.transform = `rotateZ(${(hh * 30) + (mm/12)}deg)`;
  minute.style.transform = `rotateZ(${mm * 6}deg)`;
  second.style.transform = `rotateZ(${ss * 6}deg)`;

  hh = hh % 12 || 12;
  hh = hh < 10 ? '0' + hh : hh;

  digitalHH.innerHTML = hh;
  digitalMM.innerHTML = mm;
  digitalSS.innerHTML = ss < 10 ? '0' + ss : ss;
  digitalAmpm.innerHTML = ampm;

}, 1000)