#!/usr/bin/env node
let seconds = 0;

// Add up seconds from arguments
process.argv.forEach((arg, index) => {
  if (index < 2 || !arg) return;
  const number = Number(/\d+/.exec(arg)[0]);
  
  const unitStr = /[a-zA-Z]+/.exec(arg);
  const unit = unitStr && unitStr.length >= 1 ? unitStr[0].toLowerCase() : false;

  switch(unit) {
    case 'h':
    case 'hr':
    case 'hrs':
    case 'hour':
    case 'hours':
      seconds += number * 3600;
      break;

    case 'm':
    case 'min':
    case 'mins':
    case 'minute':
    case 'minutes':
      seconds += number * 60;
      break;

    case 's':
    case 'sec':
    case 'secs':
    case 'second':
    case 'seconds':
      seconds += number;
      break;

    // Default to minutes to stay compatible with previous versions
    default:
      seconds += number * 60;
      break;
  }
})

let currentHour = 0,
    currentMinute = 0,
    currentSecond = 1; // We need to start at 1, otherwise the timer won't match up with the timeout

function main () {
  let timer = setTimer();

  return setTimeout(function () {
    clearInterval(timer);

    printEndMessage();
  }, seconds * 1000);
}

function toTwoDigit(num){
  return num > 9 ? num: "0" + num;
}

function printTime () {
  console.clear();
  console.log('Time (hh:mm:ss): ' + toTwoDigit(currentHour) + ':' + toTwoDigit(currentMinute % 60) + ':' + toTwoDigit(currentSecond % 60));
}

function printEndMessage () {
  console.clear();
  console.log('Time\'s up!');
}

function setTimer () {
  return setInterval(function () {
    currentMinute = Math.floor(currentSecond / 60);
    currentHour = Math.floor(currentMinute / 60);
    
    printTime();

    currentSecond++;
  }, 1000);
}

main();