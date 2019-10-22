var currentPos1 = 1;
var currentPos2 = 1;
var activePlayer = 0;
var gameOver = false;
document.querySelector(".roll-dice").addEventListener("click", () => {
  var img1 = document.querySelector(".img1");
  var randomNumber1 = Math.random() * 6 + 1;
  randomNumber1 = Math.floor(randomNumber1);

  if (activePlayer === 1) {
    var nextPos1 = currentPos1 + randomNumber1;
    if (nextPos1 > 48) {
      console.log("Can't move");
      return;
    } else if (nextPos1 === 48) {
      setTimeout(() => {
        alert("Player 2 Won!");
      }, 1000);
    }
    currentPos1 = nextPos1;
  }
  if (activePlayer === 0) {
    var nextPos2 = currentPos2 + randomNumber1;
    if (nextPos2 > 48) {
      console.log("Cannot Move");

      return;
    } else if (nextPos2 === 48) {
      setTimeout(() => {
        alert("Player 1 Won!");
      }, 1000);
    }
    currentPos2 = nextPos2;
  }

  for (let i = 0; i <= 6; i++) {
    if (randomNumber1 === i) {
      img1.setAttribute("src", `./images/${i}.png`);
    }
  }
  // var tokenValue = randomNumber1 * 94;
  // document.querySelector(".token-" + activePlayer).style.transform += `translateY(${tokenValue}px)`;

  for (let i = 1; i <= randomNumber1; i++) {
    if (currentPos1 === 14 || currentPos2 === 14) {
      document.querySelector(
        ".token-" + activePlayer
      ).style.transform = ` translateY(${94}px)`;
    } else if (currentPos1 < 14 || currentPos2 < 14) {
      document.querySelector(
        ".token-" + activePlayer
      ).style.transform += `translateX(${94}px)`;
    } else if (currentPos1 >= 14 || currentPos2 > 14) {
      for (let i = 0; i <= randomNumber1; i++) {
        document.querySelector(
          ".token-" + activePlayer
        ).style.transform = `translateY(${94}px) `;
      }
    }
  }

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  if (randomNumber1 === 6) {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
});
