var leaderBoard = [];
var score = 0;
var welcomeEL = document.querySelector(".welcome");
var startEL = document.getElementById("start");
var timeEl = document.querySelector(".countdown");
var mainEl = document.getElementById("main");


welcomeEL.textContent = "Press this button to start the quiz!";

startEL.addEventListener("click", countingDown);


function countingDown() {
    var timeLeft = 5;
    var timerInterval = setInterval(function () {
        welcomeEL.textContent = "Too late to turn back now...";
        startEL.style.display = "none";

        timeLeft--;
        timeEl.textContent = timeLeft + " seconds until the quiz begins.";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            quiz();
        }

    }, 1000);
}

function quiz() {
    welcomeEL.textContent = "The quiz has begun!"
    timeEl.textContent = " ";


}

// startQuiz();