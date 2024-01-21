// "shockedFace" gameplan:
// I'll need to iterate over buttons and update each element individually.
// 1. Iterate Over the Buttons:
// 2.  Use a loop to go through each element in the collection returned by getElementsByClassName and change its innerHTML.
// 3. Temporarily Change the innerHTML to '.innerHTML = "😵";'
// 4. Use setTimeout to revert back to original content after a certain period.

let sfx = {
  newGame: new Howl({
    src: ["./sounds/game-intro.wav"],
    sprite: {
      segment: [0, 5000],
    },
    volume: 0.5,
    loop: false,
  }),
  success: new Howl({
    src: ["./sounds/success-bell.wav"],
    sprite: {
      segment: [0, 4000],
    },
    volume: 0.5,
    loop: false,
  }),
  gameOver: new Howl({
    src: ["./sounds/mistake.wav"],
    volume: 0.5,
    loop: false,
  }),
  cool: new Howl({
    src: ["./sounds/dude.wav"],
    volume: 0.5,
    loop: false,
  }),
  dog: new Howl({
    src: ["./sounds/puppy.wav"],
    sprite: {
      segment: [3325, 1120], // Starts file at 3325 ms, plays it for 1120 ms, i.e. from 3.325 seconds until 4.445 seconds.
    },
    volume: 0.5,
    loop: false,
  }),
  gum: new Howl({
    src: ["./sounds/gum.mp3"],
    volume: 0.5,
    loop: false,
  }),
  bone: new Howl({
    src: ["./sounds/vibraphone.mp3"],
    sprite: {
      segment: [0, 5000],
    },
    volume: 0.5,
    loop: false,
  }),
};




document.querySelector("#coolBtn").addEventListener("click", function () {
  console.log(sfx.cool.play());
});
document.querySelector("#dogBtn").addEventListener("click", function () {
  console.log(sfx.dog.play("segment"));
});
document.querySelector("#gumBtn").addEventListener("click", function () {
  console.log(sfx.gum.play());
});
document.querySelector("#boneBtn").addEventListener("click", function () {
  console.log(sfx.bone.play("segment"));
});

sfx.success.play("segment");
sfx.gameOver.play();
