// Startup Functions:

let compButtonArray = [];

function resetGame() {
  compButtonArray = [];
}

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

function btnActivated(buttonClass, isActive) {
  const buttonBright = document.getElementById(buttonClass);
  const activeClass = buttonClass + "Active";

  if (isActive) {
    buttonBright.classList.add(activeClass);
  } else {
    buttonBright.classList.remove(activeClass);
  }
}

// Event Listeners:

document.getElementById("resetBtn").addEventListener("click", resetGame);

document.getElementById("hintBtn").addEventListener("click", function () {
  console.log(compButtonArray);
});

document.getElementById("letsBegin").addEventListener("click", startGame);

// let gameStartInterval = setInterval(cpuSelects, 2000);

startGame();
cpuSelects();
btnActivated();

// clearInterval(cpuSelects);

// function giveHint() {
//   document.getElementById("hintBtn").addEventListener("click", function () {
//     console.log(compButtonArray);
//   });
// }
