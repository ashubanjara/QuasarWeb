// Game Variables
let currentNumber = 0;
let nums = [];
let payout = 0;
let credits = 0;
let isAlive = false;

// DOM Variables
const numbersEl = document.getElementById("prev-nums-el");
const scoreEl = document.getElementById("score-el");
const payoutEl = document.getElementById("payout-el");
const creditsEl = document.getElementById("credits-el");

// For testing
let num1 = 10;
let num2 = 12;

function startGame(){
  if (!isAlive){
    isAlive = true;
    let num = getRandomNum(1, 8);
    nums.push(num);
    currentNumber += num;
    renderGame();
  }
}

function renderGame(){
  // Prev numbers Display
  let nums_str = ""
  for (let i = 0; i < nums.length; i++){
    nums_str += " " + nums[i];
  }
  numbersEl.textContent = nums_str;

  // Other displays
  scoreEl.textContent = currentNumber;
  payoutEl.textContent = payout;
  creditsEl.textContent = credits;
}

// Returns a random  number between start and stop
function getRandomNum(start, stop){
  let randomNum = Math.floor(Math.random()*stop) + start;
  return randomNum;
}

function pickFourToSeven(){
  if (isAlive){
    let num = getRandomNum(4, 7);
    nums.push(num);
    currentNumber += num;
    renderGame();
  }
}

  function pickOneToEight(){
    if (isAlive){
      let num = getRandomNum(1, 8);
      nums.push(num);
      currentNumber += num;
      renderGame();
    }
  }
