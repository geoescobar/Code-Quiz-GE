// var startBtn = document.getElementById('start-btn');
// var nextBtn = document.getElementById('next-btn');
// var submitBtn = document.getElementById('submit-btn');
// var answerA = document.getElementById('answer-btn-1');
// var answerB = document.getElementById('answer-btn-2');
// var answerC = document.getElementById('answer-btn-3');
// var answerD = document.getElementById('answer-btn-4');

startBtn.addEventListener('click', startGame);

var questions = [
    {
        quesiton: 'example question 1:',
        answerA: 'answer 1',
        answerB: 'answer 2',
        answerC: 'answer 3',
        answerD: 'answer 4',
        correctAnswer: 'answer 1'
    },
    {
        quesiton: 'example question 1:',
        answerA: 'answer 1',
        answerB: 'answer 2',
        answerC: 'answer 3',
        answerD: 'answer 4',
        correctAnswer: 'answer 2'
    },
    {
        quesiton: 'example question 1:',
        answerA: 'answer 1',
        answerB: 'answer 2',
        answerC: 'answer 3',
        answerD: 'answer 4',
        correctAnswer: 'answer 3'
    },
    {
        quesiton: 'example question 1:',
        answerA: 'answer 1',
        answerB: 'answer 2',
        answerC: 'answer 3',
        answerD: 'answer 4',
        correctAnswer: 'answer 4'
    },
]

function endGame() {
    alert ('Game is over');

}

var quesitonIndex = 0;
function askNextQuestion() {
    if (quesitonIndex >= questions.length) {
        endGame();
    } else {
        questionElement.textContent = questions[quesitonIndex].quesiton
        questionElement.textContent = questions[quesitonIndex].answerA
        questionElement.textContent = questions[quesitonIndex].answerB
        questionElement.textContent = questions[quesitonIndex].answerC
        questionElement.textContent = questions[quesitonIndex].answerD
        questionElement.textContent = questions[quesitonIndex].correctAnswer

    }
}

var timeRemaining = 60;

answerA.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('answer a has been clicked');
    quesitonIndex++;
    askNextQuestion();
});

answerD.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('answer a has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'B') {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
    quesitonIndex++;
    timeRemaining-= 10;
    askNextQuestion();
});

function startTimer() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            endGame();
        }

        document.getElementById('timer').textContent = timeRemaining;
        console.log('interval running', timeRemaining);

    }, 1000);
}

function startGame() {
    document.getElementById('start-btn').classList.toggle('hide');
    document.getElementById('quiz-Container').classList.toggle('hide');
    askNextQuestion();
    startTimer();    
}

startBtn.addEventListener('click', startGame);

