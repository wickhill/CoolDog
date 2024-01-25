// function displayHintEmojis

document.getElementById("hintBtn").addEventListener("click", function () {
  hintCounter++;
  setTimeout(function () {
    document.getElementById("hintEmojiDisplay").innerHTML =
      displayHintEmojis(compButtonArray);
  }, 700);
  document.getElementById("hintEmojiDisplay").innerHTML = "Hint: 🥸";
  numberOfHints();
});

//
// The 'commented-out' sections directly below were moved up to the actual 'resetGame()' function. Everything functions a bit better that way.
//
// btnContainer.classList.remove("allButtonsIncorrect");
// document.getElementById("coolBtn").innerHTML = buttonEmojis[0].emoji;
// document.getElementById("dogBtn").innerHTML = buttonEmojis[1].emoji;
// document.getElementById("gumBtn").innerHTML = buttonEmojis[2].emoji;
// document.getElementById("boneBtn").innerHTML = buttonEmojis[3].emoji;

setTimeout(function () {}, 7070);
