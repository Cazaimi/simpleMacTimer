#!/usr/bin/env node

let minutes = Number(process.argv[2]),
    currentMinute = 0,
    currentSecond = 0;

function main () {
  let timer = setTimer();

  return setTimeout(function () {
    clearInterval(timer);

    printEndMessage();
  }, minutes * 60 * 1000);
}

function printTime () {
  console.clear();
  console.log('Time (m:ss): ' + currentMinute + ':' + currentSecond % 60);
}

function printEndMessage () {
  console.clear();
  console.log('Time\'s up!');
}

function setTimer () {
  return setInterval(function () {
    currentMinute = Math.floor(currentSecond / 60);
    
    printTime();

    currentSecond++;
  }, 1000);
}

main();