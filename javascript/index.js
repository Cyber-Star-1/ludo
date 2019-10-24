/**
 * INITIALIZING FUNCTION
 */
const init = ()=> {
  document.querySelector(".player-1-name").addEventListener("keypress", e => {
    if (e.which === 13) {
      playerOne();
    }
  });
  document.querySelector(".player-2-name").addEventListener("keypress", e => {
    if (e.which === 13) {
      playerTwo();
    }
  });
  /**
   * !Selecting Div of Player 1&2
   **/
  var p1 = document.querySelector(".player-1");
  var p2 = document.querySelector(".player-2");

  img1.style.visibility = "hidden";
  p1.innerHTML = `<input type="text" class="player-name player-1-name" placeholder="Player 1" autocomplete="off"><button class="btn-ok btn-ok-1"><img src="./images/tick.png" class="ok" alt=""></button>`;
  p2.innerHTML = `<input type="text" class="player-name player-2-name" placeholder="Player 2" autocomplete="off"><button class="btn-ok btn-ok-2"><img src="./images/tick.png" class="ok" alt=""></button>`;
  document.querySelector(".token-1").style.transform = `translateX(0px)`;
  document.querySelector(".token-0").style.transform = `translateX(0px)`;
  /**
   * ! Handling Dice Change Event
   **/
  currentPos1 = 1;
  currentPos2 = 1;
  activePlayer = 0;
  /**
   * todo (Calling the functions on button clicks)
   **/
  document.querySelector(".btn-ok-1").addEventListener("click", playerOne);
  document.querySelector(".btn-ok-2").addEventListener("click", playerTwo);
}

/**
 * *Selecting Image From HTML
 **/
var img1 = document.querySelector(".img1");
document.querySelector(".roll-dice").addEventListener("click", () => {
  img1.style.visibility = "visible";
  /**
   * ?Generating Random Number
   **/

  var randomNumber1 = Math.random() * 6 + 1;
  randomNumber1 = Math.floor(randomNumber1);
  /**
   * *Choosing Image From random Images through random number
   **/
  for (let i = 1; i <= 6; i++) {
    if (randomNumber1 === i) {
      img1.setAttribute("src", `./images/${i}.png`);
    }
  }
  /**
   * !Stop The Token at 14th box
   * ?For both Player 1&2
   **/
  if (activePlayer === 1) {
    var nextPos1 = currentPos1 + randomNumber1;
    if (nextPos1 > 14) {
      console.log("Can't move");
      return;
    } else if (nextPos1 === 14) {
      setTimeout(() => {
        alert("Player 2 Won!");
      }, 1000);
    }
    currentPos1 = nextPos1;
  }
  if (activePlayer === 0) {
    var nextPos2 = currentPos2 + randomNumber1;
    if (nextPos2 > 14) {
      console.log("Cannot Move");

      return;
    } else if (nextPos2 === 14) {
      setTimeout(() => {
        alert("Player 1 Won!");
      }, 1000);
    }
    currentPos2 = nextPos2;
  }

  var tokenValue = randomNumber1 * 94;
  document.querySelector(
    ".token-" + activePlayer
  ).style.transform += `translateX(${tokenValue}px)`;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  if (randomNumber1 === 6) {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
});
/**
 * ?Getting player name from input from user
 * *For both Player 1&2
 **/
const playerOne= ()=> {
  var name1 = document.querySelector(".player-1-name").value;
  var player1;
  if (name1) {
    player1 = name1;
  } else {
    player1 = "Player 1";
  }
  document.querySelector(".player-1").innerHTML = player1;
}
const playerTwo=()=> {
  var name2 = document.querySelector(".player-2-name").value;
  var player2;
  if (name2) {
    player2 = name2;
  } else {
    player2 = "Player 2";
  }
  document.querySelector(".player-2").innerHTML = player2;
}
init();
document.querySelector(".start").addEventListener("click", init);