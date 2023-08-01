var playerScore = 0;
var botScore = 0;
function rockPaperScissors() {
    var random = Math.random();
    if (random < 0.33) {
        return "rock";
    }
    else if (random < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playGame(playerChoice) {
    var botChoice = rockPaperScissors();
    var placeForResult = document.getElementById("result");
    if ((playerChoice === "rock" && botChoice === "scissors") ||
        (playerChoice === "paper" && botChoice === "rock") ||
        (playerChoice === "scissors" && botChoice === "paper")) {
        if (placeForResult) {
            placeForResult.textContent = "You Win!!!";
            placeForResult.classList.remove("lose-text", "tie-text");
            placeForResult.classList.add("win-text");
        }
        playerScore++;
    }
    else if (playerChoice === botChoice) {
        if (placeForResult) {
            placeForResult.textContent = "You Tied!";
            placeForResult.classList.remove("lose-text", "win-text");
            placeForResult.classList.add("tie-text");
        }
    }
    else {
        if (placeForResult) {
            placeForResult.textContent = "You Lose!";
            placeForResult.classList.remove("tie-text", "win-text");
            placeForResult.classList.add("lose-text");
        }
        botScore++;
    }
    var playerScoreElement = document.getElementById("playerScore");
    var botScoreElement = document.getElementById("botScore");
    if (playerScoreElement) {
        playerScoreElement.textContent = playerScore.toString();
    }
    if (botScoreElement) {
        botScoreElement.textContent = botScore.toString();
    }
}
function arrOfChoices(choices) {
    for (var i = 0; i < choices.length; i++) {
        playGame(choices[i]);
    }
}
