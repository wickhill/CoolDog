// Startup Functions:

let compButtonArray = [];

function startGame() {
  compButtonArray = [];
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

// Function to indicate whether game will progress (buttons flash green) or end (buttons flash red).

function correctOrIncorrect(answerCorrect) {
  const btnContainer = document.getElementById("btnContainer");

  if (answerCorrect) {
    btnContainer.classList.add("allButtonsCorrect");
    setTimeout(function () {
      btnContainer.classList.remove("allButtonsCorrect");
    }, 707);
  } else {
    btnContainer.classList.add("allButtonsIncorrect");
    setTimeout(function () {
      btnContainer.classList.remove("allButtonsIncorrect");
    }, 11000);
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
      correctOrIncorrect(false);
      resetGame();
      return;
    }
  }
  if (playerSelections.length === compButtonArray.length) {
    correctOrIncorrect(true);
    playerSelections = [];
    setTimeout(replayCompArray, 1000);
  }
}

// Function to replay the computer's current array of moves:
// Here's an Immediately Invoked Function Expression to time the moves, however this is not something I could've thought of on my own! Tho, there are still issues with it that I need to iron out...

function replayCompArray() {
  for (let i = 0; i < compButtonArray.length; i++) {
    (function (index) {
      setTimeout(function () {
        const buttonId = compButtonArray[index] + "Btn";
        btnActivated(buttonId, true);

        setTimeout(function () {
          btnActivated(buttonId, false);
        }, 500);
      }, 1000 * index);
    })(i);
  }
  setTimeout(cpuSelects, 1000 * compButtonArray.length);
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

// clearInterval(cpuSelects);
