// "shockedFace" gameplan:
// I'll need to iterate over buttons and update each element individually.
// 1. Iterate Over the Buttons:
// 2.  Use a loop to go through each element in the collection returned by getElementsByClassName and change its innerHTML.
// 3. Temporarily Change the innerHTML to '.innerHTML = "😵";'
// 4. Use setTimeout to revert back to original content after a certain period.

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

shockedFaceClass.forEach(function (tracker) {
  tracker.getElementsByClassName("gameBtn").innerHTML = "😵";
});

shockedFaceID.forEach(function (tracker) {
  tracker.getElementById("coolBtn").innerHTML = btnContainer[0].emoji;
  tracker.getElementById("dogBtn").innerHTML = btnContainer[1].emoji;
  tracker.getElementById("gumBtn").innerHTML = btnContainer[2].emoji;
  tracker.getElementById("boneBtn").innerHTML = btnContainer[3].emoji;
});

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
    shockedFaceClass.forEach(function (tracker) {
      tracker.getElementsByClassName("gameBtn").innerHTML = "😵";
    });
    setTimeout(function () {
      btnContainer.classList.remove("allButtonsIncorrect");
      shockedFaceID.forEach(function (tracker) {
        tracker.getElementById("coolBtn").innerHTML = btnContainer[0].emoji;
        tracker.getElementById("dogBtn").innerHTML = btnContainer[1].emoji;
        tracker.getElementById("gumBtn").innerHTML = btnContainer[2].emoji;
        tracker.getElementById("boneBtn").innerHTML = btnContainer[3].emoji;
      });
    }, 11000);
  }
}
