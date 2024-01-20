// Now, need either a revised cpuSelects(); OR a cpuSelectsCont();

// Use this later, after you have the 'correctOrIncorrect' function up and running

// function buildSubMenu(subLinks) {
//   document.getElementsByClassName("gameBtn");
//   gameBtn.innerHTML = "😵"
// }

function correctOrIncorrect(buttonId, answerCorrect) {
  const allButtonsBright = document.getElementById(buttonId);
  const allButtonsGreen = buttonId + "allButtonsCorrect";
  const allButtonsRed = buttonId + "allButtonsIncorrect";

  if (answerCorrect) {
    allButtonsBright.classList.add(allButtonsGreen);
  } else {
    allButtonsBright.classList.add(allButtonsRed);
  }
}

correctOrIncorrect(buttonId + "allButtonsCorrect", true);

setTimeout(function () {
  btnActivated(randomChoice + "Btn", false);
}, 1000);

correctOrIncorrect(buttonId + "allButtonsIncorrect", true);

setTimeout(function () {
  btnActivated(randomChoice + "Btn", false);
}, 1000);
