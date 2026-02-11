// Global score variables
let humanScore = 0;
let computerScore = 0;

// getComputerChoice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// getHumanChoice
function getHumanChoice() {
  const input = prompt("Enter your choice (rock, paper, or scissors):");

  if (!input) {
    return null; // User cancelled
  }

  const choice = input.toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice.");
    return null;
  }
}

// playRound
function playRound(humanChoice, computerChoice) {

  if (!humanChoice) {
    console.log("Round cancelled.");
    return;
  }

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

// Play one round
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);
