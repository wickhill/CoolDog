// CoolDogGumBone aka 'Simon' bulk framework:

function initiateGame() {
  document.getElementById("letsBegin").addEventListener("click", function () {
    cpuSelects();
  });
}

let compButtonArray = [];

function cpuSelects() {
  const buttonChoices = ["cool", "dog", "gum", "bone"];
  const randomIndex = Math.floor(Math.random() * buttonChoices.length);
  const randomChoice = buttonChoices[randomIndex];
  compButtonArray.push(randomChoice);
  console.log(compButtonArray);
  simpleResetBtn();

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

function simpleResetBtn() {
  document.getElementById("resetBtn").addEventListener("click", function () {
    compButtonArray.splice(0, compButtonArray.length);
  });
}

initiateGame();
cpuSelects();
btnActivated();
simpleResetBtn();
giveHint();

// function giveHint() {
//   document.getElementById("hintBtn").addEventListener("click", function () {
//     console.log(compButtonArray);
//   });
// }
