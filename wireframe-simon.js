// Time to set a limit on hint button input! Uh, I mean, 'clicks'
// <button id="hintBtn">Hints Remaining: Three</button>

hintCounter++;

let hintCounter = 0;

function numberOfHints() {
  if (hintCounter <= 0) {
    document.getElementById("hintBtn").innerHTML = "Hints Remaining: Three";
  }
  if (hintCounter === 1) {
    document.getElementById("hintBtn").innerHTML = "Hints Remaining: Two";
  }
  if (hintCounter === 2) {
    document.getElementById("hintBtn").innerHTML = "Hints Remaining: One";
  }
  if (hintCounter === 3) {
    document.getElementById("hintBtn").innerHTML = "Don't Do It!";
  }
  if (hintCounter === 4) {
    document.getElementById("hintBtn").innerHTML = "Don't push your luck!";
  }
  if (hintCounter === 5) {
    document.getElementById("hintBtn").innerHTML = "We really mean it!";
  } else {
    document.getElementById("hintBtn").innerHTML =
      "Don't say we didn't warn ya!";
    correctOrIncorrect(false);
    resetGame();
    return;
  }
}

function checkhintCounter() {
  return hintCounter;
}
