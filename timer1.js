// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

// access the arguments
const args = process.argv.slice(2); // always exclude first two elements in process.argv
// Convert arguments to numbers if possible, filters out any negative numbers and NaN values (that couldn't be converted to numbers) 
// and sort them in ascending order
const bellTimes = args
  .map(num => Number(num))
  .filter(num => !isNaN(num) && num > -1)
  .sort((a, b) => a - b);

let currentTime = 0;

const timer = function() {
  if (currentTime > bellTimes[bellTimes.length - 1] || 0) { 
    return;

  }
  if (bellTimes.includes(currentTime)) {
    process.stdout.write("\x07");
    console.log(`bell at ${currentTime} seconds`); // 
  }

  currentTime++;
  setTimeout(timer, 1000);

};

if (bellTimes.length > 0) {
  timer();
} else {
  console.log("No Bell Times were Provided");
};













