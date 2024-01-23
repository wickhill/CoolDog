// Ignore Player Input when Computer is making moves!
// This has been 'crashing' the game.

// Logic: 'isPlayerTurn' equals 'false' when computer is moving, then true after computer is complete.
// Also, IGNORE CLICKS!

// function ignorePlayerInput() {
//   while(replayCompArray() || cpuSelects() === true;)
//   if EventTarget === ${`"coolBtn", "dogBtn", "gumBtn", "boneBtn"`} {
// preventDefault("click")
//   } else {
//     true;
//   }
// }

if (isPlayerTurn === false) {
  e.preventDefault;
} else {
  isPlayerTurn === true;
}

isPlayerTurn = false;
isPlayerTurn = true;


document.getElementById("coolBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    playerMoves("coolBtn");
  }
});

document.querySelector("#coolBtn").addEventListener("click", function (e) {
  if (isPlayerTurn === false) {
    e.preventDefault();
  } else {
    console.log(sfx.cool.play());
  }
});
