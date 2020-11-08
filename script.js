var welcomeEL = document.querySelector(".welcome");
var startEL = document.getElementById("start");
var timeEl = document.querySelector(".countdown");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var leaderBoardEl = document.querySelector(".leaderBoard");

var leaderBoard = [];
var score = 0;
var currentQuestion = 0;
var wrongAnswers = 0;

//Welcome user to the quiz
welcomeEL.textContent = "Press this button to start the quiz!";

//Listen for when the user is ready to begin
startEL.addEventListener("click", countingDown);

function countingDown() {
    //Give user a countdown to be ready
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
    //Restart and show quiz timer
    var quizTimeLeft = 90;
    welcomeEL.textContent = "The quiz has begun!"
    askNextQuestion();
    //Keep count of the time.
    var quizInterval = setInterval(function () {
        timeEl.textContent = quizTimeLeft + " seconds remaining";
        quizTimeLeft--;
        score = quizTimeLeft;
    }, 1000)
}

function askNextQuestion() {
    //Before asking next question, ensure we're not at the end of the quiz.
    if (currentQuestion>=5) {
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
        askNextQuestion();
    } else {
        wrongAnswers++;
        askNextQuestion();
    }
})

function endQuiz() {
    var userName = prompt("What is your name?");
    var deductions = wrongAnswers*10;
    var finalScore = (score - deductions);
    questionsEl.textContent = "";
    timeEl.style.display = "none";
    choicesEl.style.display = "none";
    welcomeEL.textContent = "The quiz is complete!";
    leaderBoardEl.textContent = userName + ", you missed " + wrongAnswers + ". Your final score was " + finalScore;
    leaderBoard.push(userName, finalScore)

    for (let i = 0; i < leaderBoard.length; i++) {
        const element = leaderBoard[i];
        var node = document.createElement("td");
        node.classList.add("leader");
        var textnode = document.createTextNode(element);
        node.appendChild(textnode);
    }

}

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
    correct: "ESLint",
}
];
