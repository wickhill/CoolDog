// "shockedFace" gameplan:
// I'll need to iterate over buttons and update each element individually.
// 1. Iterate Over the Buttons:
// 2.  Use a loop to go through each element in the collection returned by getElementsByClassName and change its innerHTML.
// 3. Temporarily Change the innerHTML to '.innerHTML = "😵";'
// 4. Use setTimeout to revert back to original content after a certain period.

const buttonEmojis = [
  { id: "coolBtn", emoji: "😎" },
  { id: "dogBtn", emoji: "🐕" },
  { id: "gumBtn", emoji: "🍬" },
  { id: "boneBtn", emoji: "🦴" },
];

function correctOrIncorrect(answerCorrect) {
  const btnContainer = document.getElementById("btnContainer");
  const shockedFaceClass = document.getElementsByClassName("gameBtn");
  const shockedFaceID = document.getElementById("btnContainer");

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

const buttonEmojis = [
  { id: "coolBtn", emoji: "😎" },
  { id: "dogBtn", emoji: "🐕" },
  { id: "gumBtn", emoji: "🍬" },
  { id: "boneBtn", emoji: "🦴" },
];

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
    }, 11000);
  }
}