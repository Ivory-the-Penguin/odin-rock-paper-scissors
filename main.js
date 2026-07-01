const buttons = document.querySelectorAll("#buttons button");
const messages = document.querySelector(".messages");

let playerChoice;

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function resetGame() {
  playerChoice = null;
  messages.innerHTML = "";
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

  messages.appendChild(document.createElement("h2")).innerHTML =
    `The Computer chose ${computerChoice}`;

  await sleep(1000);

  if (computerChoice == playerChoice) {
    messages.appendChild(document.createElement("h2")).innerHTML = "Tie!";
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
