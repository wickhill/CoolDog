// Startup Functions:

let compButtonArray = [];

function startGame() {
  cpuSelects();
}

// Bulk Framework:

function cpuSelects() {
  const buttonChoices = ["cool", "dog", "gum", "bone"];
  const randomIndex = Math.floor(Math.random() * buttonChoices.length);
  const randomChoice = buttonChoices[randomIndex];
  compButtonArray.push(randomChoice);
  console.log(compButtonArray);

  btnActivated(randomChoice + "Btn", true);

  setTimeout(function () {
    btnActivated(randomChoice + "Btn", false);
  }, 1000);
}

function btnActivated(buttonId, isActive) {
  const buttonBright = document.getElementById(buttonId);
  const activeClass = buttonId + "Active";

  if (isActive) {
    buttonBright.classList.add(activeClass);
  } else {
    buttonBright.classList.remove(activeClass);
  }
}

function correctOrIncorrect(buttonId, isCorrect) {
  const allButtonsBright = document.getElementById(buttonId);
  const allButtonsGreen = buttonId + "allButtonsCorrect";
  const allButtonsRed = buttonId + "allButtonsIncorrect";

  if (isCorrect) {
    allButtonsBright.classList.add(allButtonsGreen);
  } else {
    allButtonsBright.classList.add(allButtonsRed);
  }
}

// Player Moves and Storage:

let playerSelections = [];

function playerMoves(buttonId) {
  playerSelections.push(buttonId.replace("Btn", ""));
  compareMoves();
}

function compareMoves() {
  for (let i = 0; i < playerSelections.length; i++) {
    if (playerSelections[i] !== compButtonArray[i]) {
      resetGame();
      return;
    }
  }
  if (playerSelections.length === compButtonArray.length) {
    playerSelections = [];
    cpuSelects();
  }
}

function resetGame() {
  playerSelections = [];
  compButtonArray = [];
}

// Event Listeners:

document.getElementById("resetBtn").addEventListener("click", resetGame);

document.getElementById("hintBtn").addEventListener("click", function () {
  console.log(compButtonArray);
});

document.getElementById("startGameBtn").addEventListener("click", startGame);

document.getElementById("coolBtn").addEventListener("click", function () {
  playerMoves("coolBtn");
});

document.getElementById("dogBtn").addEventListener("click", function () {
  playerMoves("dogBtn");
});

document.getElementById("gumBtn").addEventListener("click", function () {
  playerMoves("gumBtn");
});

document.getElementById("boneBtn").addEventListener("click", function () {
  playerMoves("boneBtn");
});

// let gameStartInterval = setInterval(cpuSelects, 2000);

startGame();
cpuSelects();
btnActivated();

// clearInterval(cpuSelects);
