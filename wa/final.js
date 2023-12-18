//my wheel is very random, it spins very aggressively and the number that pops up after you spin is the number to the left of what it lands on
//i let this be to add to the pain and annoyance this assignment is 
//everynumber does still appear it just is random, even the number two which doesn't appear on the wheel but still will appear
//i was going to change this but I think it makes it more frustrating

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');

spinBtn.onclick = function() {
  let value = Math.ceil(Math.random() * 3600);
  wheel.style.transform = "rotate(" + value + "deg)";
}
let spinning = false;
const numBoxes = 3;

function spinWheel() {
  if (!spinning) {
    spinning = true;
    let spins = 2; // number of spins before stopping
    let currentSpin = 0;
    const interval = 200; // time in milliseconds for each spin

    function spin() {
      const currentBoxId = "box" + ((currentSpin % numBoxes) + 1);
      const currentBox = document.getElementById(currentBoxId);

      if (currentBox) {
        currentBox.innerText = Math.floor(Math.random() * 10); // Generate a random number (change the range as needed)
      }

      currentSpin++;

      if (currentSpin >= spins * numBoxes) {
        clearInterval(spinInterval);
        spinning = false;
      }
    }

    const spinInterval = setInterval(spin, interval);
  }
}
//putting the numbers in the box
document.addEventListener("DOMContentLoaded", function() {
  const spinButton = document.querySelector('.spinBtn');
  const clearButton = document.querySelector('#clear');
  const wheel = document.querySelector('.wheel');
  const box = document.querySelector('.box');
  let spinning = false;
  let spinCount = 0;
  let lastDegree = 0;

  const resetWheel = () => {
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(0deg)`;
      lastDegree = 0;
      spinCount = 0;
      box.innerText = '';
      spinButton.disabled = false;
      spinning = false;
  };

  spinButton.addEventListener('click', function() {
      if (!spinning && spinCount < 10) {
          let deg = lastDegree + Math.floor(5000 + Math.random() * 5000); // Random spin
          wheel.style.transition = 'transform 5s ease-in-out';
          wheel.style.transform = `rotate(${deg}deg)`;
          lastDegree = deg; 
          spinning = true;
      }
  });

  wheel.addEventListener('transitionend', function() {
      if (spinCount < 10) {
          const actualDeg = Math.floor((lastDegree % 360) / 40);
          let selectedNumber = (10 - actualDeg) % 10;
          selectedNumber = selectedNumber === 0 ? 1 : selectedNumber; 

       
          if (spinCount === 2 || spinCount === 5) { 
              box.innerText += selectedNumber + ' - ';
          } else {
              box.innerText += selectedNumber + ' ';
          }
          spinning = false;
          spinCount++;

          if (spinCount >= 10) {
              spinButton.disabled = true; // disable the button after 10 spins
          }
      }
  });

  clearButton.addEventListener('click', function() {
      resetWheel();
  });

  const submitButton = document.querySelector('#submit');
  const messageDiv = document.querySelector('.message');

  submitButton.addEventListener('click', ()=>{
    messageDiv.textContent = `Congratulations!!`; 
});

});


//const newBtn = document.querySelector('button').addEventListener('click', clearBox);
//const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

//const questionTxt = document.querySelector('submit');
//let answerTxt = document.querySelector('');