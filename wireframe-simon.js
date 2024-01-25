// function displayHintEmojis


function displayHintEmojis(elementArray) {
    let hintDisplayArray = [];

for (let i = 0; i < elementArray.length; i++) {
    if(elementArray[i] = "cool") {
        hintDisplayArray.push("😎");
    }
    else if(elementArray[i] = "dog") {
        hintDisplayArray.push("🐕");
    }
    else if(elementArray[i] = "gum") {
        hintDisplayArray.push("🍬");
    }
    else if(elementArray[i] = "bone") {
        hintDisplayArray.push("🦴");
    } else {
    break;
}
}
console.log(hintDisplayArray);
}