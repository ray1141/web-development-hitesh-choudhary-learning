document.addEventListener("DOMContentLoaded", () => {
  //variables
  const quiz = document.getElementById("quiz-container");
  const questionDisplay = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const resultDisplay = document.getElementById("result-container");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");
  const scoreDisplay = document.getElementById("score");
  let curr = 0;
  let totalScore = 0;
  let isAnswered = false;
  const questions = [
    {
      question: "What is the capital of India?",
      choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi",
      score: 10,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
      score: 15,
    },
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
      score: 20,
    },
    {
      question: "How many sides does a hexagon have?",
      choices: ["Five", "Six", "Seven", "Eight"],
      answer: "Six",
      score: 10,
    },
    {
      question: "Which is the largest ocean in the world?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
      score: 25,
    },
  ];

  startBtn.addEventListener("click", showQuestion);

  questionDisplay.addEventListener("click", (e) => validateAnswer(e, curr));

  nextBtn.addEventListener("click", () => {
    curr++;
    nextBtn.classList.add("hidden");
    if (curr >= questions.length) {
      showResult();
    } else showQuestion();
  });

  restartBtn.addEventListener("click", restart);
  function showQuestion() {
    isAnswered = false;
    startBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    questionDisplay.classList.remove("hidden");
    questionText.textContent = questions[curr].question;
    choicesList.innerHTML = "";
    questions[curr].choices.forEach((choice) => {
      const liChoice = document.createElement("li");
      liChoice.textContent = choice;
      choicesList.appendChild(liChoice);
    });
  }

  function validateAnswer(e, curr) {
    if (e.target.tagName !== "LI") return;
    if (isAnswered) return;
    isAnswered = true;
    console.log(curr);
    const choiceClicked = e.target;
    if (choiceClicked.textContent === questions[curr].answer) {
      e.target.classList.add("correct");
      calcScore(curr);
    } else {
      e.target.classList.add("wrong");
    }
    nextBtn.classList.remove("hidden");
  }

  function calcScore(curr) {
    totalScore += questions[curr].score;
  }
  function showResult() {
    resultDisplay.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    questionDisplay.classList.add("hidden");
    scoreDisplay.textContent = totalScore;
  }

  function restart() {
    curr = 0;
    totalScore = 0;
    isAnswered = false;
    questionDisplay.classList.add("hidden");
    resultDisplay.classList.add("hidden");
    startBtn.classList.remove("hidden");
  }
});
