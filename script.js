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

var questions = [ {
    question: "Who created JavaScript?",
    choices: ["Microsoft", "Sun Microsystems","Oracle", "Netscape"],
    correctAnswer: 3
},
{
    question: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg","Brendan Eich", "Larry Cessna"],
    correctAnswer: 2
},
{
    question: "How long did Brendan Eich take to write the JavaScript language?",
    choices: ["10 days", "2 weeks", "2 months","10 months"],
    correctAnswer: 0
},
{
    question: "JavaScript wasn't always called that. What other name has it been released under?",
    choices: ["Latte", "Mocha", "BScript", "Spidermonkey"],
    correctAnswer: 1
},
{
    question: "Which tool can you use to ensure code quality?",
    choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: 3
}]