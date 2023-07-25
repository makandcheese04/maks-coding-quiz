var time = document.getElementById("time")
var  startScreen = document.getElementById("start-screen")
var startButton  = document.getElementById("startBtn")
var questions  = document.getElementById("questions")
var questionTitle = document.getElementById("question-title")
var choices  = document.getElementById("choices")
var endScreen = document.getElementById("end-screen")
var finalScore =  document.getElementById("final-score")
var initials = document.getElementById("initials")
var submit = document.getElementById("submit")

var quizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
]