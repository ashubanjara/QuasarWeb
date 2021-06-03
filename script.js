// Game Stats object
let gameStats = {
  currentNumber: 0,
  nums: [],
  payout: 0,
  credits: 0,
  isAlive: false,
}

// DOM Variables
const numbersEl = document.getElementById("prev-nums-el");
const scoreEl = document.getElementById("score-el");
const payoutEl = document.getElementById("payout-el");
const creditsEl = document.getElementById("credits-el");


function startGame(){
  if (!gameStats.isAlive){
    gameStats.isAlive = true;
    let num = getRandomNum(1, 8);
    gameStats.nums.push(num);
    gameStats.currentNumber += num;
    renderGame();
  }
}

function renderGame(){
  // Prev numbers Display
  let nums_str = ""
  for (let i = 0; i < gameStats.nums.length; i++){
    nums_str += " " + gameStats.nums[i];
  }
  numbersEl.textContent = nums_str;

  // Other displays
  scoreEl.textContent = gameStats.currentNumber;
  payoutEl.textContent = gameStats.payout;
  creditsEl.textContent = gameStats.credits;
}

// Returns a random  number between start and stop
function getRandomNum(start, stop){
  let randomNum = Math.floor(Math.random()*stop) + start;
  return randomNum;
}

// 4-7 button
function pickFourToSeven(){
  if (gameStats.isAlive){
    let num = getRandomNum(4, 7);
    gameStats.nums.push(num);
    gameStats.currentNumber += num;
    renderGame();
  }
}

// 1-8 button
  function pickOneToEight(){
    if (gameStats.isAlive){
      let num = getRandomNum(1, 8);
      gameStats.nums.push(num);
      gameStats.currentNumber += num;
      renderGame();
    }
  }
