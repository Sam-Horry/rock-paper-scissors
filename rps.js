const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  }
  else if (randomNumber === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter Rock, Paper or Scissors: ");
  return humanChoice.toLowerCase();
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log("--- Round " + (i + 1) + " ---");
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("--- Current score: You: " + humanScore + ", Computer: " + computerScore);
  }
  console.log("Game over! Final score: You: " + humanScore + ", Computer: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > humanScore) {
    console.log("You Lose!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
