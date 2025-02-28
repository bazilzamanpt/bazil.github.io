let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (guess < 1  guess > 100  isNaN(guess)) {
        message.innerText = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++;

    if (guess < randomNumber) {
        message.innerText = "Too low! Try again.";
    } else if (guess > randomNumber) {
        message.innerText = "Too high! Try again.";
    } else {
        message.innerText = 🎉 Correct! You guessed it in ${attempts} attempts.;
        document.getElementById("playAgain").style.display = "block";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("playAgain").style.display = "none";
}
