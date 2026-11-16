
const welcomeScreen = document.getElementById("welcome");
const questionScreen = document.getElementById("question");

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");

const answerButtons = document.querySelectorAll(".option");
const selectionMessage = document.getElementById("selectionMessage");

let initialAnswer = null;

// Start session
startBtn.addEventListener("click", () => {
  welcomeScreen.hidden = true;
  questionScreen.hidden = false;
});

// Handle answer selection
answerButtons.forEach(button => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    initialAnswer = button.dataset.answer;

    answerButtons.forEach(option => {
      option.classList.remove("selected");
      option.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    selectionMessage.textContent =
      "Initial answer recorded: " + initialAnswer;
  });
});

// Return to welcome screen
backBtn.addEventListener("click", () => {
  questionScreen.hidden = true;
  welcomeScreen.hidden = false;

  initialAnswer = null;
  selectionMessage.textContent = "";

  answerButtons.forEach(button => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  });
});
