// Startup Functions:

const buttonEmojis = [
  { id: "coolBtn", emoji: "😎" },
  { id: "dogBtn", emoji: "🐕" },
  { id: "gumBtn", emoji: "🍬" },
  { id: "boneBtn", emoji: "🦴" },
];

let sfx = {
  newGame: new HTMLUnknownElement({
    src: ["./sounds/game-intro.wav"],
    sprite: {
      segment: [0, 5000],
    },
    volume: 0.5,
    loop: false,
  }),
  success: new HTMLUnknownElement({
    src: ["./sounds/success-bell.wav"],
    sprite: {
      segment: [0, 4000],
    },
    volume: 0.5,
    loop: false,
  }),
  gameOver: new HTMLUnknownElement({
    src: ["./sounds/mistake.wav"],
    volume: 0.5,
    loop: false,
  }),
  cool: new HTMLUnknownElement({
    src: ["./sounds/dude.wav"],
    volume: 0.5,
    loop: false,
  }),
  dog: new HTMLUnknownElement({
    src: ["./sounds/puppy.wav"],
    sprite: {
      segment: [3325, 1120], // Starts file at 3325 ms, plays it for 1120 ms, i.e. from 3.325 seconds until 4.445 seconds.
    },
    volume: 0.5,
    loop: false,
  }),
  gum: new HTMLUnknownElement({
    src: ["./sounds/gum.mp3"],
    volume: 0.5,
    loop: false,
  }),
  bone: new HTMLUnknownElement({
    src: ["./sounds/vibraphone.mp3"],
    sprite: {
      segment: [0, 5000],
    },
    volume: 0.5,
    loop: false,
  }),
};

let compButtonArray = [];

function startGame() {
  compButtonArray = [];
  btnContainer.classList.remove("allButtonsIncorrect");
  document.getElementById("coolBtn").innerHTML = buttonEmojis[0].emoji;
  document.getElementById("dogBtn").innerHTML = buttonEmojis[1].emoji;
  document.getElementById("gumBtn").innerHTML = buttonEmojis[2].emoji;
  document.getElementById("boneBtn").innerHTML = buttonEmojis[3].emoji;
  setTimeout(function () {
    cpuSelects();
  }, 300);
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
  const shockedFaceClass = document.getElementsByClassName("gameBtn");

  if (answerCorrect) {
    btnContainer.classList.add("allButtonsCorrect");
    setTimeout(function () {
      btnContainer.classList.remove("allButtonsCorrect");
    }, 707);
  } else {
    btnContainer.classList.add("allButtonsIncorrect");
    for (let i = 0; i < shockedFaceClass.length; i++) {
      shockedFaceClass[i].innerHTML = "😵";
    }
    setTimeout(function () {
      btnContainer.classList.remove("allButtonsIncorrect");
      document.getElementById("coolBtn").innerHTML = buttonEmojis[0].emoji;
      document.getElementById("dogBtn").innerHTML = buttonEmojis[1].emoji;
      document.getElementById("gumBtn").innerHTML = buttonEmojis[2].emoji;
      document.getElementById("boneBtn").innerHTML = buttonEmojis[3].emoji;
    }, 7070);
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
