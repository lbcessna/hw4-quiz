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
    if (currentQuestion.value===6) {
        endQuiz();
    } else {
        questionsEl.textContent = questions[currentQuestion].question;
        choicesEl.textContent = "";
        let choices = questions[currentQuestion].choices;
        //list all choices as li under current question
        for (let j = 0; j < choices.length; j++) {
            const element = choices[j];
            var node = document.createElement("li");
            node.classList.add("choice");
            var textnode = document.createTextNode(element);
            node.appendChild(textnode);
            choicesEl.appendChild(node);
        }
    }
};

choicesEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent === questions[currentQuestion].correct) {
        currentQuestion++;
        console.log("YES!");
        askNextQuestion();
    } else {

        console.log("Booooo! Wrong answer!");
    }
})

function endQuiz() {

    console.log("the quiz is done");
}


//ask 1st question
//list choices of 1st question
//stop until a choice is made
//add event listener to wait for a choice
//once a choice is made, increment currentQuestion++
//ask 2nd question
//so on...
//quiz stops after currentQuestion.length is reached.


var questions = [{
    question: "Which company created JavaScript?",
    choices: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"],
    correct: "Oracle",
},
{
    question: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "David Boucher"],
    correct: "Brendan Eich",
},
{
    question: "How long did Brendan Eich take to write the JavaScript language?",
    choices: ["10 days", "2 weeks", "2 months", "10 months"],
    correct: "10 days",
},
{
    question: "JavaScript wasn't always called that. What other name has it been released under?",
    choices: ["Latte", "Mocha", "BScript", "Spidermonkey"],
    correct: "Mocha",
},
{
    question: "Which tool can you use to ensure code quality?",
    choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correct: "ESLint"
}
];
