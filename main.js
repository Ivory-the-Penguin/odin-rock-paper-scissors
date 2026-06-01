function formatString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";
  }
  if (choice == 1) {
    return "Paper";
  }
  if (choice == 2) {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Pick Rock, Paper, or Scissors");
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

// 0 = Draw, 1 = Lose, 2 = Win
function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return 0;
  }

  if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Scissors" && humanChoice === "Paper") ||
    (computerChoice === "Paper" && humanChoice === "Rock")
  ) {
    return 1;
  }

  return 2;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let outcome = playRound(computerChoice, humanChoice);
    if (outcome == 0) {
      console.log("Draw!");
    } else if (outcome == 1) {
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice + "!",
      );
      computerScore++;
    } else {
      console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
      humanScore++;
    }

    console.log("Computer: " + computerScore + ". You: " + humanScore + ".");
  }
}

playGame();
