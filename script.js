var leaderBoard = [];
var score = 0;
var welcomeEL = document.querySelector(".welcome");
var startEL = document.getElementById("start");
var timeEl = document.querySelector(".countdown");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

var currentQuestion = 0;

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

    }, 100);
}

function quiz() {
    var quizTimeLeft = 90;
    welcomeEL.textContent = "The quiz has begun!"
    askNextQuestion();
    var quizInterval = setInterval(function () {
        timeEl.textContent = quizTimeLeft + " seconds remaining";
        quizTimeLeft--;
    }, 1000)
}

function askNextQuestion() {
    questionsEl.textContent = questions[currentQuestion].question
    let choices = questions[currentQuestion].choices;

    //list all choices as li under current question
    for (let j = 0; j < choices.length; j++) {
        const element = choices[j];
        var node = document.createElement("li");
        var textnode = document.createTextNode(element.text);
        node.appendChild(textnode);
        choicesEl.appendChild(node);
    }
   };

//ask 1st question
//list choices of 1st question
//stop until a choice is made
//add eventlistener to wait for a choice
//once a choice is made, increment currentQuestion++
//ask 2nd question
//so on...
//quiz stops after currentQuestion.length is reached.


    var questions = [{
        question: "Which company created JavaScript?",
        choices: [
            {
                text: "Microsoft", correct: "false"
            },
            {
                text: "Sun Microsystems", correct: "false"
            },
            {
                text: "Oracle", correct: "true"
            },
            {
                text: "Netscape", correct: "false"
            }],
    },
    {
        question: "Who invented JavaScript?",
        choices: [
            {
                text: "Douglas Crockford", correct: "false"
            },
            {
                text: "Sheryl Sandberg", correct: "false"
            },
            {
                text: "Brendan Eich", correct: "true"
            },
            {
                text: "David Boucher", correct: "false"
            }],

    },
    {
        question: "How long did Brendan Eich take to write the JavaScript language?",
        choices: [
            {
                text: "10 days", correct: "true"
            },
            {
                text: "2 weeks", correct: "false"
            },
            {
                text: "2 months", correct: "false"
            },
            {
                text: "10 months", correct: "false"
            }],
    },
    {
        question: "JavaScript wasn't always called that. What other name has it been released under?",
        choices: [{ text: "Latte", correct: "false" }, { text: "Mocha", correct: "true" }, { text: "BScript", correct: "false" }, { text: "Spidermonkey", correct: false }],

    },
    {
        question: "Which tool can you use to ensure code quality?",
        choices: [{ text: "Angular", correct: "false" }, { text: "jQuery", correct: "" }, { text: "RequireJS", correct: "false" }, { text: "ESLint", correct: "true" }],
    }
    ];
