#!/usr/bin/env node

let minutes = Number(process.argv[2]),
    direction = Number(process.argv[3] ? Number(process.argv[3]) : 0)
    currentMinute = 0,
    currentSecond = setSecondsBasedOnDirection(),
    standard_input = process.stdin,
    paused = false;

standard_input.on('data', function (data) {
  pause();
});

function setSecondsBasedOnDirection() {
  return direction == 0 ? 0 : minutes * 60
}
function main () {
  let timer = setTimer();

  return setTimeout(function () {
    clearInterval(timer);

    printEndMessage();
  }, minutes * 60 * 1000);
}

function printTime () {
  console.clear();
  console.log('Press [Enter] to pause');
  console.log('Time (m:ss): ' + currentMinute + ':' + currentSecond % 60);
}

function printPaused () {
  console.clear();
  console.log('Press [Enter] to resume');
  console.log('Paused at: (m:ss): ' + currentMinute + ':' + currentSecond % 60);
}

function printEndMessage () {
  console.clear();
  console.log('Time\'s up!');
}

function setTimer () {
  return setInterval(function () {
    currentMinute = Math.floor(currentSecond / 60);
    
    if (!paused) {
      printTime();
      direction == 0 ? currentSecond++ : currentSecond--;
    }

    checkAndEndTimer()
  }, 1000);
}

function checkAndEndTimer() {
  if (currentMinute >= minutes) {
    printEndMessage();
    process.exit();
  }
}

function pause () {
  paused = !paused;
  if (paused) printPaused();
}

main();
