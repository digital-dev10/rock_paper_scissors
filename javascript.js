// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

// getHumanChoice will return one of the valid choices depending on what the user inputs.

function getHumanChoice() {
  const input = prompt("Enter your choice (rock, paper, or scissors):");

  if (!input) {
    return null; // In case user cancels
  }

  const choice = input.toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return "Invalid choice";
  }
}

// Test the function
console.log(getHumanChoice());
