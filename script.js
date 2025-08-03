
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById("player-choice").textContent = "You: " + playerChoice;
    document.getElementById("computer-choice").textContent = "Keshav " + computerChoice;

    let result = "";
    if (playerChoice === computerChoice) {
      result = "tie or whatever";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      result = "you got lucky(you won btw)";
    } else {
      result = "loser :p";
    }

    document.getElementById("winner").textContent = result;

    
    button.classList.add("shake-glow");
    setTimeout(() => {
      button.classList.remove("shake-glow");
    }, 400);
  });
});
