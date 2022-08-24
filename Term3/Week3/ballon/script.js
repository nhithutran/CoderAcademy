function getBalloon() {
    return document.getElementById("balloon");
}

function setBalloonSize(newSize) {
    let balloon = getBalloon();
    balloon.style.fontSize = newSize + "px";
}

function tryIncreaseBalloon(size) {
    let balloon = getBalloon();
    if (size > 100) {
        balloon.textContent = "💥";

        let message = document.getElementById("message");
        message.textContent = "Balloon popped! Press restart!";
    } else {
        setBalloonSize(size*1.1);
    }
}

function tryDecreaseBalloon(size) {
    if (size < 100) {
        setBalloonSize(size * 0.9);
    }
}

function handleKeyDown(event) {
    // event.preventDefault();
    let balloon = getBalloon();
    let size = parseFloat(balloon.style.fontSize); 

    if (event.key == "ArrowUp") {
        event.preventDefault();
        tryIncreaseBalloon(size);
    } else if (event.key == "ArrowDown") {
        event.preventDefault();
        tryDecreaseBalloon(size);
    } else if (event.key == "space") {
        event.preventDefault();
    }
}

function restart() {
    let balloon = getBalloon();
    balloon.textContent = "🎈";
    balloon.style.fontSize = "20px";

    let message = document.getElementById("message");
    message.textContent = "Press the up/down arrow key to increase/decrease the balloon size";

    document.body.addEventListener("keydown", handleKeyDown);
}