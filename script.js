

document.addEventListener('DOMContentLoaded', function() {
 
  const startButton = document.getElementById('start-button'); // Replace with the actual button ID
  const quizContainer = document.getElementById('quiz-container'); // Replace with the actual container ID

  startButton.addEventListener('click', startQuiz);

  function startQuiz() {
  
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';

    
  }
});


const questions = [
  {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Highly Text Markup Language"],
      correct: 0,
  },
  {
      question: "What does CSS stand for?",
      choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
      correct: 1,
  },
  {
   question: "Which programming language is known for its use in building dynamic web applications on the client side?",
   choices: ["Python", "Ruby", "JavaScript"],
   correct: 2,

  },
{
question:"In HTML, which tag is used to create a hyperlink?",
choices: ["<link>", "<a>", "<href>"],
correct: 1,

},
{
question:"Which programming language is often used for server-side scripting and web development?",
choices:["Java", "C++", "PHP"],
correct: 2,
},

];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('time-left');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const initialsInput = document.getElementById('initials');
const saveScoreButton = document.getElementById('save-score');

let currentQuestionIndex = 0;
let timeLeft = 60; // Set the initial timer value
let timerInterval;

function startQuiz() {
  timerInterval = setInterval(function () {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
          clearInterval(timerInterval);
          endQuiz();
      }
  }, 1000);
  displayQuestion();
}


function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      questionElement.textContent = question.question;
      choicesElement.innerHTML = '';
      question.choices.forEach((choice, index) => {
          const li = document.createElement('li');
          li.textContent = choice;
          li.addEventListener('click', function () {
              checkAnswer(index);
          });
          choicesElement.appendChild(li);
      });
  } else {
      endQuiz();
  }
}


function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correct;
  if (selectedIndex === correctIndex) {
      resultElement.textContent = 'Correct!';
  } else {
      resultElement.textContent = 'Incorrect!';
      timeLeft -= 10; 
  }
  setTimeout(function () {
      resultElement.textContent = '';
      currentQuestionIndex++;
      displayQuestion();
  }, 1000);
}


function endQuiz() {
  clearInterval(timerInterval);
  questionContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  resultElement.textContent = 'Quiz Over';
}


saveScoreButton.addEventListener('click', function () {
  const initials = initialsInput.value;
  if (initials) {
    saveScore(initials, quizScore);
    
    initialsInput.value = '';
  } else {
    alert('Please enter your initials to save your score.');
  }
});


const startButton = document.createElement('button');
startButton.textContent = 'Start Quiz';
startButton.addEventListener('click', startQuiz);
document.body.appendChild(startButton);
