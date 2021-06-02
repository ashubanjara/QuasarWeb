// Game Variables
let currentNumber = 0;
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
  isAlive = true;
  let num = getRandomNum();
  currentNumber += num;
  renderGame();
}

function renderGame(){

}
