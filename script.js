// Possible options for playing rps
options = ["Rock", "Paper", "Scissors"];

let optionsContainer = document.querySelector("#container-options");
// Score
let playerScore = 0;
let computerScore = 0;

document.querySelector("#score-player").textContent = playerScore;
document.querySelector("#score-computer").textContent = computerScore;

options.forEach((option) => {
  // For every option create a button
  let button = document.createElement("button");
  button.textContent = option;
  button.addEventListener("click", () => {
    // If button is clicked then a round is played
    let computerChoice = getComputerChoice();
    result = playRound(option, computerChoice);
    // Update score
    if (result === "player") {
      playerScore++;
      document.querySelector("#score-player").textContent = playerScore;
    } else if (result === "computer") {
      computerScore++;
      document.querySelector("#score-computer").textContent = computerScore;
    }
    // Shows result on messages container
    let message = document.createElement("p");
    message.textContent = getResultMessage(result, option, computerChoice);
    document.querySelector("#container-messages").append(message);
    // Check winner
    if (playerScore === 5 || computerScore === 5) {
      playerScore === 5 ? alert("Player wins!") : alert("Computer wins!");
      playerScore = 0;
      computerScore = 0;
      document.querySelector("#score-player").textContent = playerScore;
      document.querySelector("#score-computer").textContent = computerScore;
      document.querySelectorAll("p").forEach(p => p.remove());
    }
  });
  // Add button to options container
  optionsContainer.append(button);
});

function getResultMessage(result, playerChoice, computerChoice) {
  return result === "tie"
    ? `It's a tie!`
    : result === "computer"
    ? `You lose! ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`
    : `You win! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  // Case-insensitive
  let areEqual =
    playerSelection.toLowerCase() === computerSelection.toLowerCase();
  if (areEqual) {
    return "tie";
  }

  let optionToWin =
    options[
      (options.indexOf(computerSelection) + 1) % options.length
    ].toLowerCase();

  if (playerSelection.toLowerCase() === optionToWin) {
    return "player";
  }

  return "computer";
}