#!/usr/bin/env node
let seconds = 0,
    error = false;

// Make sure a time value is between 0 and 59
function validateTimeRange(time) {
  return (time >= 0 && time <= 59);
}

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
      if (!validateTimeRange(number)) {
        console.log(`Invalid argument "${number}${unit}": Minutes have to be between 0 and 59`);
        error = true;
      }
      seconds += number * 60;
      break;

    case 's':
    case 'sec':
    case 'secs':
    case 'second':
    case 'seconds':
      if (!validateTimeRange(number)) {
        console.log(`Invalid argument "${number}${unit}": Seconds have to be between 0 and 59`);
        error = true;
      }
      seconds += number;
      break;

    // Default to minutes to stay compatible with previous versions
    default:
      seconds += number * 60;
      break;
  }
})

if (error) {
  // Stop script if there is an error with the arguments
  return;
}

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