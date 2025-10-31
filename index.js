function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  const diceImage1 = `images/dice${randomNumber1}.png`;
  const diceImage2 = `images/dice${randomNumber2}.png`;

  img1.classList.add("shake");
  img2.classList.add("shake");

  setTimeout(() => {
    img1.setAttribute("src", diceImage1);
    img2.setAttribute("src", diceImage2);
    img1.classList.remove("shake");
    img2.classList.remove("shake");

    const title = document.getElementById("resultTitle");
    if (randomNumber1 > randomNumber2) {
      title.innerHTML = "🏆 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      title.innerHTML = "Player 2 Wins! 🏆";
    } else {
      title.innerHTML = "🤝 Draw!";
    }
  }, 700);
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("rollButton");
  button.addEventListener("click", () => {
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 150);
    rollDice();
  });
});
