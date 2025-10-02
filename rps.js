function randomChoice(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice(randomChoice) {
  if (randomChoice == 1) {
    console.log("Rock!");
  }
  else if (randomChoice == 2) {
    console.log("Paper!");
  }
  else if (randomChoice == 3) {
    console.log("Scissors!");
  }
}

console.log(getComputerChoice(randomChoice(1, 3)));
