const buttons = document.querySelectorAll("#buttons button");
const body = document.body;

let playerChoice = null;

buttons.forEach((button) => {
  button.onclick = () => {
    if (playerChoice === null) {
      playerChoice = button.textContent;
      computerChoice();
    }
  };

  console.log(button);
});

function computerChoice() {
  const message = body.appendChild(document.createElement("h2"));

  message.innerText = `The Player chose ${playerChoice}`;
}
