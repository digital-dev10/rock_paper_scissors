let humanScore = 0;
let computerScore = 0;

const roundResult = document.getElementById("roundResult");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
      playRound(button.id);
    }
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  updateScore();
  checkWinner();
}

function updateScore() {
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5) {
    winnerDisplay.textContent = "🎉 You won the game!";
  } else if (computerScore === 5) {
    winnerDisplay.textContent = "💻 The computer won the game!";
  }
}