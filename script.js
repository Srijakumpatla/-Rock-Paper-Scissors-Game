let userScore = 0;
let compScore = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
  };

  const compChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === compChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    result = `You win! ${capitalize(userChoice)} beats ${compChoice}`;
  } else {
    compScore++;
    result = `You lose! ${capitalize(compChoice)} beats ${userChoice}`;
  }

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("comp-score").textContent = compScore;

  document.getElementById("user-choice").textContent = `${capitalize(userChoice)} ${emojis[userChoice]}`;
  document.getElementById("comp-choice").textContent = `${capitalize(compChoice)} ${emojis[compChoice]}`;

  document.getElementById("result").textContent = result;
}

function resetGame() {
  userScore = 0;
  compScore = 0;

  document.getElementById("user-score").textContent = 0;
  document.getElementById("comp-score").textContent = 0;

  document.getElementById("user-choice").textContent = "-";
  document.getElementById("comp-choice").textContent = "-";

  document.getElementById("result").textContent = "Make your move!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
