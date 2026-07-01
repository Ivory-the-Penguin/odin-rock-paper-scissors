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

function resetGame() {
  playerChoice = null;
  messages.innerHTML = "";
  document.querySelector("footer h2").textContent =
    `Player: ${scores.player}, Computer: ${scores.computer}`;
}

async function playout() {
  messages.appendChild(document.createElement("h2")).innerText =
    `The Player chose ${playerChoice}`;

  await sleep(1000);

  var computerChoice;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }

  messages.appendChild(document.createElement("h2")).textContent =
    `The Computer chose ${computerChoice}`;

  await sleep(1000);

  if (computerChoice == playerChoice) {
    messages.appendChild(document.createElement("h2")).textContent = "Tie!";
  } else if (
    (computerChoice == "Rock" && playerChoice == "Scissors") ||
    (computerChoice == "Scissors" && playerChoice == "Paper") ||
    (computerChoice == "Paper" && playerChoice == "Rock")
  ) {
    messages.appendChild(document.createElement("h2")).textContent =
      "The Computer wins!";
    scores.computer += 1;
  } else {
    messages.appendChild(document.createElement("h2")).textContent =
      "The Player wins!";
    scores.player += 1;
  }

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
