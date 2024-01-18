// CoolDogGumBone aka 'Simon' bulk framework:

function initiateGame() {

  document.querySelectorAll(".letsBegin").forEach(function (button) {
    button.addEventListener("click", function () {
      //Placeholder for Game / Button Logic...
    });
  });

  const buttonChoices = ["cool", "dog", "gum", "bone"];
  const compButtonArray = [];
  const playerButtonArray = [];

  for (let i = 0; i < buttonChoices.length; i++) {
    const randomNum = Math.floor(Math.random) * buttonChoices.length + 1;
    compButtonArray.push(randomNum);
  }
}
