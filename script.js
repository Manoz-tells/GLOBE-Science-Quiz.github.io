// Quiz questions array
const questions = [
  {
    question: "What is the main goal of the GLOBE program?",
    options: [
      "To promote sports among youth",
      "To enhance students' understanding of the environment through scientific observation",
      "To create video games for educational purposes",
      "To provide free textbooks to schools",
    ],
    answer: 1,
  },
  {
    question:
      "Which type of data can students collect as part of the GLOBE program?",
    options: [
      "Weather data",
      "Soil data",
      "Water quality data",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question: "In which year was the GLOBE program launched?",
    options: ["1995", "2000", "1985", "2010"],
    answer: 0,
  },
  {
    question: "What is the significance of the 'GLOBE Observer' app?",
    options: [
      "It allows users to play games related to science.",
      "It helps people report their local weather.",
      "It enables users to contribute their own observations to the GLOBE database.",
      "It is a social media platform for scientists.",
    ],
    answer: 2,
  },
  {
    question:
      "Which of the following is a GLOBE protocol related to environmental monitoring?",
    options: [
      "Atmosphere Protocol",
      "Internet Protocol",
      "Game Development Protocol",
      "Communication Protocol",
    ],
    answer: 0,
  },
];

// Initialize variables
let currentQuestionIndex = 0;

// Get DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

// Start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.classList.add("hide");
  showQuestion(questions[currentQuestionIndex]);
}

// Show a question and its options
function showQuestion(question) {
  questionElement.innerText = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(button);
  });
}

// Handle answer selection
function selectAnswer(index) {
  const correctIndex = questions[currentQuestionIndex].answer;
  if (index === correctIndex) {
    optionsElement.children[index].classList.add("correct");
  } else {
    optionsElement.children[index].classList.add("incorrect");
  }
  Array.from(optionsElement.children).forEach((btn, i) => {
    if (i === correctIndex) {
      btn.classList.add("correct");
    }
    btn.disabled = true; // Disable all options after selection
  });
  nextButton.classList.remove("hide"); // Show the Next button
}

// Handle the Next button click
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add("hide"); // Hide Next button until answer is selected
  } else {
    showResult();
  }
});

// Show the final result
function showResult() {
  questionElement.innerText = "";
  optionsElement.innerHTML = "";
  nextButton.classList.add("hide");
  resultElement.innerText = "Quiz Completed!";
  resultElement.style.display = "block";
}

// Initialize the quiz when the document is loaded
document.addEventListener("DOMContentLoaded", startQuiz);
