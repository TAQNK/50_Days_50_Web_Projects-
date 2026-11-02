const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

const qstCount = document.querySelector("#questionsCount");
const qstNumber = document.querySelector("#questionNumber");
const questionText = document.querySelector("#questionText");
const scoreSpan = document.querySelector("#score");
const startScreen = document.querySelector("#home-card");
const quizScreen = document.querySelector("#question");
const resultScreen = document.querySelector("#resultCard");
const progress = document.querySelector(".progressBar");
const progressPrecent = document.querySelector(".progress");
const startBtn = document.querySelector("#btn");
const restartBtn = document.querySelector("#restartBtn");
const options = document.querySelector("#options");
const finalScore = document.querySelector("#finalScore");
const resultMessage = document.querySelector("#message");
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

qstCount.textContent = quizQuestions.length;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  progress.classList.add("active");
  quizScreen.classList.add("active");

  showQuestion();
}
startBtn.addEventListener("click", startQuiz);

function showQuestion() {
  answersDisabled = false;
  const currentQues = quizQuestions[currentQuestionIndex];
  qstNumber.textContent = currentQuestionIndex + 1;

  progressPrecent.style.width =
    (currentQuestionIndex / quizQuestions.length) * 100 + "%";

  questionText.textContent = currentQues.question;

  options.innerHTML = "";
  currentQues.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("option");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    options.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;
  const isCorrect = event.target.dataset.correct === "true";
  const selectedBtn = event.target;
  Array.from(options.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("right");
    } else if (btn === selectedBtn) {
      btn.classList.add("wrong");
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}
function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  progress.classList.remove("active");

  finalScore.textContent = `You have scored :${score} out of ${quizQuestions.length}`;
  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz(){
resultScreen.classList.remove("active");
startQuiz();  
}
restartBtn.addEventListener("click" , restartQuiz)