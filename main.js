const buttons = document.querySelectorAll("#buttons button");
const messages = document.querySelector(".messages");

let playerChoice;

const scores = {
  player: 0,
  computer: 0,
};

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function createMessage(text) {
  const message = messages.appendChild(document.createElement("h2"));
  message.textContent = text;
  return message;
}

function resetGame() {
  playerChoice = null;
  messages.innerHTML = "";
  document.querySelector("footer h2").textContent =
    `Player: ${scores.player}, Computer: ${scores.computer}`;

  if (scores.computer == 5 || scores.player == 5) {
    document.body.innerHTML = "";
    const message = document.body.appendChild(document.createElement("h1"));
    message.className = "winner";

    message.textContent = `The ${scores.computer == 5 ? "Computer" : "Player"} wins!`;
  }
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getWinner(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return "Tie";
  }

  if (
    (computerChoice == "Rock" && playerChoice == "Scissors") ||
    (computerChoice == "Scissors" && playerChoice == "Paper") ||
    (computerChoice == "Paper" && playerChoice == "Rock")
  ) {
    return "Computer";
  }

  return "Player";
}

async function playout() {
  createMessage(`The Player chose ${playerChoice}`);

  await sleep(1000);

  const computerChoice = getComputerChoice();

  createMessage(`The Computer chose ${computerChoice}`);

  await sleep(1000);

  const winner = getWinner(computerChoice, playerChoice);

  if (winner == "Player") scores.player += 1;
  if (winner == "Computer") scores.computer += 1;

  createMessage(winner == "Tie" ? "Tie!" : `The ${winner} wins!`);

  const resetButton = messages.appendChild(document.createElement("button"));
  resetButton.textContent = "Reset";
  resetButton.onclick = () => {
    resetGame();
  };
}

buttons.forEach((button) => {
  button.onclick = () => {
    if (playerChoice === null) {
      playerChoice = button.textContent;
      playout();
    }
  };
});

resetGame();
