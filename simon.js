//

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
    volume: 0.7,
    loop: false,
  }),
  dog: new Howl({
    src: ["./sounds/puppy.wav"],
    sprite: {
      segment: [3325, 1120], // Starts file at 3325 ms, plays it for 1120 ms, i.e. from 3.325 seconds until 4.445 seconds.
    },
    volume: 1.3,
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
  not: new Howl({
    src: ["./sounds/i-think-not.mp3"],
    sprite: {
      segment: [950, 3000],
    },
    volume: 0.6,
    loop: false,
  }),
};

let compButtonArray = [];
let currentScore = 0;
let highScore = 0;
let hintCounter = 0;

//

// I initialized / declared 'let isPlayerTurn = true;' because - for some reason - starting it off as 'false' was making it perform in unexpected ways. But this method, starting with it declared as 'true' works just fine! More testing is required, but so far, so good!

let isPlayerTurn = true;
const hintBtnColorWarnings = document.getElementById("hintBtn");

document.getElementById("currentScoreNums").innerHTML = currentScore.toString();
document.getElementById("highScoreNums").innerHTML = highScore.toString();

function startGame() {
  compButtonArray = [];
  let currentScore = 0;
  hintCounter = 0;
  document.getElementById("startGameBtn").innerHTML = "Start New Game";
  document.getElementById("currentScoreNums").innerHTML =
    currentScore.toString();
  btnContainer.classList.remove("allButtonsIncorrect");
  document.getElementById("hintBtn").innerHTML = "Hints: 3";
  hintBtnColorWarnings.removeAttribute("class");
  document.getElementById("coolBtn").innerHTML = buttonEmojis[0].emoji;
  document.getElementById("dogBtn").innerHTML = buttonEmojis[1].emoji;
  document.getElementById("gumBtn").innerHTML = buttonEmojis[2].emoji;
  document.getElementById("boneBtn").innerHTML = buttonEmojis[3].emoji;
  setTimeout(function () {
    cpuSelects();
  }, 300);
}

//

// Computer's moves framework:

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

//

// Here's the Compound Selector in action, appending 'Active' to the '.coolBtn' (and other) IDs, and then all these together on the IDs #coolBtn'. Very neat technique!

function btnActivated(buttonId, isActive) {
  const buttonBright = document.getElementById(buttonId);
  const activeClass = buttonId + "Active";

  if (isActive) {
    buttonBright.classList.add(activeClass);
  } else {
    buttonBright.classList.remove(activeClass);
  }
}

//

// Function to indicate whether game will progress (buttons flash green) or end (buttons flash red).

function correctOrIncorrect(answerCorrect) {
  isPlayerTurn = false;
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

    //

    // This function here iterates over the '#btnContainer' button IDs and replaces their innerHTML values w/ this emoji. I love this function, tho I would've done this a bit more clumsily and manually, whereas this is far more elegant. ChatGPT suggested this one, whereas I'm more likely to replace them one at a time as I did in both the 'resetGame()' and 'startGame()' functions.

    sfx.gameOver.play();
    btnContainer.classList.add("allButtonsIncorrect");
    for (let i = 0; i < shockedFaceClass.length; i++) {
      shockedFaceClass[i].innerHTML = "😵";
      currentScore = 0;
      document.getElementById("startGameBtn").innerHTML = "Play Again?";
    }
    setTimeout(function () {
      //
      // The 'commented-out' sections directly below were moved up to the actual 'resetGame()' function. Everything functions a bit better that way.
      //
      // btnContainer.classList.remove("allButtonsIncorrect");
      // document.getElementById("coolBtn").innerHTML = buttonEmojis[0].emoji;
      // document.getElementById("dogBtn").innerHTML = buttonEmojis[1].emoji;
      // document.getElementById("gumBtn").innerHTML = buttonEmojis[2].emoji;
      // document.getElementById("boneBtn").innerHTML = buttonEmojis[3].emoji;
    }, 7070);
  }
}

//

// Player Moves and Storage just chillin':

let playerSelections = [];

//

// Here, we're looking for IDs with 'Btn' in them, and then removing that specific part of the ID so as to get a 'buttonChoices' move, push it into the 'playerSelections' array, and then compare both the computer and the player arrays.

function playerMoves(buttonId) {
  isPlayerTurn = true;
  playerSelections.push(buttonId.replace("Btn", ""));
  compareMoves();
}

function compareMoves() {
  for (let i = 0; i < playerSelections.length; i++) {
    if (playerSelections[i] !== compButtonArray[i]) {
      correctOrIncorrect(false);
      endOfGame();
      return;
    }
  }
  if (playerSelections.length === compButtonArray.length) {
    correctOrIncorrect(true);
    playerSelections = [];
    setTimeout(replayCompArray, 1000);
  }
  isPlayerTurn = true;
}

//

// Function to replay the computer's current array of moves:
// Here's an Immediately Invoked Function Expression to time the moves, however this logic required assistance, as I wasn't able to reason it out on my own.

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
}

function endOfGame() {
  playerSelections = [];
  compButtonArray = [];
  currentScore = 0;
  hintCounter = 6;
  document.getElementById("currentScoreNums").innerHTML = "🫠";
  document.getElementById("hintBtn").innerHTML = "😵‍💫";
  console.log(sfx.not.play("segment"));
  hintBtnColorWarnings.removeAttribute("class");
  hintBtnColorWarnings.classList.add("hintRed3");
}

function resetGame() {
  btnContainer.classList.remove("allButtonsIncorrect");
  document.getElementById("coolBtn").innerHTML = buttonEmojis[0].emoji;
  document.getElementById("dogBtn").innerHTML = buttonEmojis[1].emoji;
  document.getElementById("gumBtn").innerHTML = buttonEmojis[2].emoji;
  document.getElementById("boneBtn").innerHTML = buttonEmojis[3].emoji;
  playerSelections = [];
  compButtonArray = [];
  currentScore = 0;
  document.getElementById("currentScoreNums").innerHTML = "0";
  document.getElementById("hintBtn").innerHTML = "Hints: 3";
  hintBtnColorWarnings.removeAttribute("class");
  console.log(sfx.dog.play("segment"));
}

//

// displayHintEmojis function:

function displayHintEmojis(elementArray) {
  let hintDisplayArray = [];

  for (let i = 0; i < elementArray.length; i++) {
    if (elementArray[i] === "cool") {
      hintDisplayArray.push("😎");
    } else if (elementArray[i] === "dog") {
      hintDisplayArray.push("🐕");
    } else if (elementArray[i] === "gum") {
      hintDisplayArray.push("🍬");
    } else if (elementArray[i] === "bone") {
      hintDisplayArray.push("🦴");
    } else {
      break;
    }
  }
  return hintDisplayArray;
}

//

// Event Listeners:

//

// Reset Button:

document.getElementById("resetBtn").addEventListener("click", resetGame);

//

// Hint Button (#hintBtn):

document.getElementById("hintBtn").addEventListener("click", function () {
  hintCounter++;
  document.getElementById("hintEmojiDisplay").innerHTML =
    displayHintEmojis(compButtonArray);
  setTimeout(function () {
    document.getElementById("hintEmojiDisplay").innerHTML = "Hint: 🥸";
  }, 1200);
  numberOfHints();
});

//

// Start Button:

document.getElementById("startGameBtn").addEventListener("click", startGame);

//

// Player input AND player-input-ignore i.e. preventDefault() features!

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

//

// Sound Effects (SFX) here, as well as a player-input-ignore (preventDefault();) feature!

document.querySelector("#startGameBtn").addEventListener("click", function () {
  console.log(sfx.newGame.play("segment"));
});

document.querySelector("#coolBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    console.log(sfx.cool.play());
  }
});

document.querySelector("#dogBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    console.log(sfx.dog.play("segment"));
  }
});

document.querySelector("#gumBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    console.log(sfx.gum.play());
  }
});

document.querySelector("#boneBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    console.log(sfx.bone.play("segment"));
  }
});

//

// Here's the 'hint button' function and limitation feature:

function numberOfHints() {
  if (hintCounter === 0) {
    document.getElementById("hintBtn").innerHTML = "Hints: 3";
  } else if (hintCounter === 1) {
    hintBtnColorWarnings.classList.add("hintYellow");
    document.getElementById("hintBtn").innerHTML = "Hints: ✌️";
  } else if (hintCounter === 2) {
    hintBtnColorWarnings.classList.add("hintRed1");
    document.getElementById("hintBtn").innerHTML = "Hints: 👆";
  } else if (hintCounter === 3) {
    hintBtnColorWarnings.classList.add("hintRed2");
    document.getElementById("hintBtn").innerHTML = "Are you sure?";
  } else if (hintCounter === 4) {
    hintBtnColorWarnings.classList.add("hintRed3");
    document.getElementById("hintBtn").innerHTML = "🤨";
  } else if (hintCounter === 5) {
    hintBtnColorWarnings.classList.add("hintPink1");
    document.getElementById("hintBtn").innerHTML = "🙄";
  } else {
    hintBtnColorWarnings.removeAttribute("class");
    hintBtnColorWarnings.classList.add("hintRed3");
    document.getElementById("hintBtn").innerHTML = "😜";
    document.getElementById("hintEmojiDisplay").innerHTML = "🥴🫣😭🥳";
    console.log(sfx.not.play("segment"));
    correctOrIncorrect(false);
    // resetGame();
    // hintBtnColorWarnings.removeAttribute("class");
    return;
  }
}
