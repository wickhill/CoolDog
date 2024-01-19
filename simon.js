// CoolDogGumBone aka 'Simon' bulk framework:

function initiateGame() {
  document.getElementById("letsBegin").addEventListener("click", function () {
    cpuSelects();
  });
}

function cpuSelects(cpuNewMove) {
  const buttonChoices = ["cool", "dog", "gum", "bone"];
  const compButtonArray = [];
  const randomIndex = Math.floor(Math.random() * buttonChoices.length);
  const randomChoice = buttonChoices[randomIndex];
  compButtonArray.push(randomChoice);
  console.log(compButtonArray);

  btnActivated(randomChoice + "Btn", true);

  setTimeout(function () {
    btnActivated(randomChoice + "Btn", false);
  }, 3000);
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

initiateGame();
cpuSelects();
btnActivated();
giveHint();

function giveHint() {
  document.getElementById("hintBtn").addEventListener("click", function () {
    console.log(compButtonArray);
  });
}
