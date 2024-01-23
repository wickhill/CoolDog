// Startup Functions:

const buttonEmojis = [
  { id: "coolBtn", emoji: "😎" },
  { id: "dogBtn", emoji: "🐕" },
  { id: "gumBtn", emoji: "🍬" },
  { id: "boneBtn", emoji: "🦴" },
];

let sfx = {
  newGame: new Howl({
    src: ["./sounds/game-intro.wav"],
    sprite: {
      segment: [0, 2000],
    },
    volume: 0.9,
    loop: false,
  }),
  success: new Howl({
    src: ["./sounds/success-bell.wav"],
    sprite: {
      segment: [0, 4000],
    },
    volume: 0.4,
    loop: false,
  }),
  gameOver: new Howl({
    src: ["./sounds/mistake.wav"],
    volume: 0.2,
    loop: false,
  }),
  cool: new Howl({
    src: ["./sounds/dude.wav"],
    volume: 0.6,
    loop: false,
  }),
  dog: new Howl({
    src: ["./sounds/puppy.wav"],
    sprite: {
      segment: [3325, 1120], // Starts file at 3325 ms, plays it for 1120 ms, i.e. from 3.325 seconds until 4.445 seconds.
    },
    volume: 1.2,
    loop: false,
  }),
  gum: new Howl({
    src: ["./sounds/gum.mp3"],
    volume: 0.7,
    loop: false,
  }),
  bone: new Howl({
    src: ["./sounds/vibraphone.mp3"],
    sprite: {
      segment: [0, 5000],
    },
    volume: 0.3,
    loop: false,
  }),
};

let compButtonArray = [];
let currentScore = 0;
let highScore = 0;

document.getElementById("currentScoreNums").innerHTML = currentScore.toString();
document.getElementById("highScoreNums").innerHTML = highScore.toString();

function startGame() {
  isPlayerTurn = false;
  compButtonArray = [];
  let currentScore = 0;
  document.getElementById("currentScoreNums").innerHTML =
    currentScore.toString();
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
  isPlayerTurn = false;
  const buttonChoices = ["cool", "dog", "gum", "bone"];
  const randomIndex = Math.floor(Math.random() * buttonChoices.length);
  const randomChoice = buttonChoices[randomIndex];
  compButtonArray.push(randomChoice);
  console.log(compButtonArray);

  btnActivated(randomChoice + "Btn", true);

  setTimeout(function () {
    btnActivated(randomChoice + "Btn", false);
  }, 1000);
  isPlayerTurn = true;
}

function btnActivated(buttonId, isActive) {
  const buttonBright = document.getElementById(buttonId);
  const activeClass = buttonId + "Active";

  if (isActive) {
    buttonBright.classList.add(activeClass);
  } else {
    buttonBright.classList.remove(activeClass);
  }
  isPlayerTurn = true;
}

// Function to indicate whether game will progress (buttons flash green) or end (buttons flash red).

function correctOrIncorrect(answerCorrect) {
  const btnContainer = document.getElementById("btnContainer");
  const shockedFaceClass = document.getElementsByClassName("gameBtn");

  if (answerCorrect) {
    currentScore++;
    document.getElementById("currentScoreNums").innerHTML =
      currentScore.toString();
    sfx.success.play("segment");
    btnContainer.classList.add("allButtonsCorrect");
    setTimeout(function () {
      btnContainer.classList.remove("allButtonsCorrect");
    }, 707);
  } else {
    if (currentScore > highScore) {
      highScore = currentScore;
      document.getElementById("highScoreNums").innerHTML = highScore.toString();
    }

    sfx.gameOver.play();
    btnContainer.classList.add("allButtonsIncorrect");
    for (let i = 0; i < shockedFaceClass.length; i++) {
      shockedFaceClass[i].innerHTML = "😵";
      currentScore = 0;
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

// Here, we're looking for IDs with 'Btn' in them, and then removing that specific part of the ID so as to get a 'buttonChoices' move, push it into the 'playerSelections' array, and then compare both the computer and the player arrays.

function playerMoves(buttonId) {
  isPlayerTurn = true;
  playerSelections.push(buttonId.replace("Btn", ""));
  compareMoves();
}

function compareMoves() {
  isPlayerTurn = false;
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
  isPlayerTurn = false;
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
  isPlayerTurn = true;
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

document.getElementById("coolBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    playerMoves("coolBtn");
  }
});

document.getElementById("dogBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    playerMoves("dogBtn");
  }
});

document.getElementById("gumBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    playerMoves("gumBtn");
  }
});

document.getElementById("boneBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    playerMoves("boneBtn");
  }
});

// Lots of Sound Effects, (SFX) here:

document.querySelector("#startGameBtn").addEventListener("click", function () {
  console.log(sfx.newGame.play("segment"));
});

document.querySelector("#coolBtn").addEventListener("click", function () {
    console.log(sfx.cool.play());
});

document.querySelector("#dogBtn").addEventListener("click", function () {
    console.log(sfx.dog.play());
});

document.querySelector("#gumBtn").addEventListener("click", function () {
    console.log(sfx.gum.play());
});

document.querySelector("#boneBtn").addEventListener("click", function () {
    console.log(sfx.bone.play());
});

// let gameStartInterval = setInterval(cpuSelects, 2000);

// clearInterval(cpuSelects);
