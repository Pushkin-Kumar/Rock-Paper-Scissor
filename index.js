const buttons = document.querySelectorAll("button");

const resultEle = document.getElementById("result");
const playerScoreEle = document.getElementById("yourScore");
const computerScoreEle = document.getElementById("computerScore");
console.log(buttons, resultEle, playerScoreEle, computerScoreEle);
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    console.log(button.id);
    resultEle.innerText = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEle.innerText = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEle.innerText = computerScore;
    return "Computer wins! " + computerSelection + " beats " + playerSelection;
  }
}
