// Time to set a limit on hint button input! Uh, I mean, 'clicks'
// <button id="hintBtn">Hints Remaining: Three</button>

var counter = 0;

function a() {
  if (counter < 5) {
    document.getElementById("a").innerHTML += "<input type='radio'>";
    counter++;
  } else {
    document.getElementById("id").disabled = true;
  }
}
