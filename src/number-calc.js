// Calculate numbers from data source
let dataDate = new Date("10/01/2021");
let startAmountData = 20766;
let apy = 0.0686;
const yearInMs = 31557600000;  // A year in ms

// To calculate the time difference between now and startDate
let Difference_In_Time = Date.now() - dataDate.getTime();

let percentageOfYearElapsed = Difference_In_Time / yearInMs;

// To calculate the no. of days between two dates (for testing)
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//  interest earned in $ since dataDate
let amountEarned = percentageOfYearElapsed * apy * startAmountData;
let startAmount = startAmountData + amountEarned;

// Get End Amount based on Start amount + year
let endAmount = startAmount * (1 + apy);


// Animate numbers in real time
function animateNumber(callback, from, to, duration) {
  let start = null,
    animate = timestamp => {
      start = start || timestamp;
      let progress = Math.min((timestamp - start) / duration, 1);
      callback(progress * (to - from) + from);
      if(progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  window.requestAnimationFrame(animate);
}

animateNumber(value => {
  document.querySelector('#card-value-1').textContent = value.toFixed(6);
}, startAmount, endAmount, 31557600000);
