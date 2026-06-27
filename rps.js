// 1. persistent game state (lives across button clicks)
let playerScore = 0;
let computerScore = 0;
const WIN_SCORE = 5;
let gameActive = true;

// 2. Cache DOM elements so we dont query the DOM repeatedly
const resultDisplay = document.getElementById('result');
const scoreboardDisplay = document.getElementById('scoreboard');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset-btn');

// 3. computer choice logic
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// 4. core round logic
function playRound(playerSelection) {
  if (!gameActive) return;

  const computerSelection = getComputerChoice();
  let roundResult = '';

  if (playerSelection === computerSelection) {
    roundResult = 'Tie!';
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  // 5. update ui instead of console.log
  resultDisplay.textContent = roundResult;
  scoreboardDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // 6. check win
  if (playerScore === WIN_SCORE || computerScore === WIN_SCORE) {
    endGame();
  }
}

// 7. handle endGame()
function endGame() {
  gameActive = false;
  if (playerScore > computerScore) {
    winnerDisplay.textContent = 'Player wins the game!';
  } else {
    winnerDisplay.textContent = 'Computer wins the game!';
  }
  resetButton.style.display = 'inline-block';
  resultDisplay.textContent = 'Game Over! Click Reset to play again!';
}

// reset functionality
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameActive = true;
  scoreboardDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  winnerDisplay.textContent = '';
  resultDisplay.textContent = 'Choose your weapon';
  resetButton.style.display = 'none';
}

// attach event listeners
document.getElementById('rock-btn').addEventListener('click', () => playRound('rock'));
document.getElementById('paper-btn').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors-btn').addEventListener('click', () => playRound('scissors'));
resetButton.addEventListener('click', resetGame);
