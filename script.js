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

const btnGroup = document.getElementById("btn-group");

function startGame(){
  if (!gameStats.isAlive){
    gameStats.isAlive = true;
    let num = getRandomNum(1, 8);
    gameStats.nums.push(num);
    gameStats.currentNumber += num;

    // hide start game button;
    btnGroup.innerHTML = `<button id="4-7-btn" onclick="pickFourToSeven()">
      PICK 4-7
    </button>
    <button id="hidden">
      START GAME
    </button>
    <button id="1-8-btn" onclick="pickOneToEight()">
      PICK 1-8
    </button>`;

    determinePayout();
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
    determinePayout();
    renderGame();
  }
}

// 1-8 button
  function pickOneToEight(){
    if (gameStats.isAlive){
      let num = getRandomNum(1, 8);
      gameStats.nums.push(num);
      gameStats.currentNumber += num;
      determinePayout();
      renderGame();
    }
  }

  // Determine the payout for given score
  function determinePayout(){
    let num = gameStats.currentNumber;
    if (num === 15){
      gameStats.payout = 50;
    }
    else if (num === 16){
      gameStats.payout = 100;
    }
    else if (num === 17){
      gameStats.payout = 200;
    }
    else if (num === 18){
      gameStats.payout = 250;
    }
    else if (num === 19){
      gameStats.payout = 300;
    }
    else if (num === 20){
      gameStats.payout = 400;
    }
    else {
      gameStats.payout = 0;
    }

    if (num > 14 && num < 21){
      // Show get payout button
      btnGroup.innerHTML = `<button id="4-7-btn" onclick="pickFourToSeven()">
        PICK 4-7
      </button>
      <button id="payout" onclick="getPayout()">
        PAY OUT
      </button>
      <button id="1-8-btn" onclick="pickOneToEight()">
        PICK 1-8
      </button>`;
    }
  }

  function getPayout(){
    gameStats.credits = gameStats.payout;
    gameStats.currentNumber = 0;
    gameStats.nums = [];
    gameStats.payout = 0;
    gameStats.isAlive = false;

    btnGroup.innerHTML = `<div class="button-group" id="btn-group">
      <button id="4-7-btn" onclick="pickFourToSeven()">
        PICK 4-7
      </button>
      <button id="start-btn" onclick="startGame()">
        START GAME
      </button>
      <button id="1-8-btn" onclick="pickOneToEight()">
        PICK 1-8
      </button>
    </div>`

    renderGame();
  }
