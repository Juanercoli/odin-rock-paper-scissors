options = ["Rock", "Paper", "Scissors"];

game();

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  // Case-insensitive
  let areEqual =
    playerSelection.toLowerCase() === computerSelection.toLowerCase();
  if (areEqual) {
    console.log(`It's a tie!`);
    return "tie";
  }

  let optionToWin =
    options[
      (options.indexOf(computerSelection) + 1) % options.length
    ].toLowerCase();

  if (playerSelection.toLowerCase() === optionToWin) {
    console.log(
      `You win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`
    );
    return "player";
  }

  console.log(
    `You lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`
  );
  return "computer";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = "tie";
    while (result === "tie") {
      let playerSelection = prompt("Rock, Paper or Scissors");
      // Checks if input is valid
      while (
        !options.some(
          (option) => option.toLowerCase() === playerSelection.toLowerCase()
        )
      ) {
        playerSelection = prompt("Rock, Paper or Scissors");
      }
      // Play round
      result = playRound(playerSelection, getComputerChoice());
    }

    // Update score
    if (result === "player") playerScore++;
    else computerScore++;
  }

  // Get the winner
  if (playerScore < computerScore) console.log("Player loses!");
  else console.log("Player wins!");
}
