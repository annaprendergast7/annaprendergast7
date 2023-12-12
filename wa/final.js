let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');

spinBtn.onclick = function() {
  let value = Math.ceil(Math.random() * 3600);
  wheel.style.transform = "rotate(" + value + "deg)";
}
var resultElement = document.getElementById("result");
document.getElementById("spinBtn").addEventListener("click", result);


//after value spins 3600, if number is clicked add into box 1
//addEventListener click number -- add value to box 1, then box2, then box3, until all boxes are complete
var resultElement = document.getElementById("result");
resultElement.textContent = "Result: " + randomNumber;
