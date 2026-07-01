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
  createMessage(winner == "Tie" ? "Tie!" : `The ${winner} wins!`);

  await sleep(1000);

  resetGame();
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
