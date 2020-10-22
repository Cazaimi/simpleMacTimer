#!/usr/bin/env node

let minutes = Number(process.argv[2]),
    currentMinute = 0,
    currentSecond = 0,
    paused = false,
    standard_input = process.stdin,
    timer;

standard_input.on('data', function (data) {
  pause();
});

function main () {
  setTimer();
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
      currentSecond++;
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
