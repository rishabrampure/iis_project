
const welcomeScreen = document.getElementById("welcome");
const questionScreen = document.getElementById("question");
const aiScreen = document.getElementById("aiAdvice");

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const continueBtn = document.getElementById("continueBtn");
const backToQuestionBtn = document.getElementById("backToQuestionBtn");

const answerButtons = document.querySelectorAll("#question .option");
const finalButtons = document.querySelectorAll(".final-option");

const selectionMessage = document.getElementById("selectionMessage");
const finalSelectionMessage = document.getElementById("finalSelectionMessage");
const initialAnswerDisplay = document.getElementById("initialAnswerDisplay");

const submitFinalBtn = document.getElementById("submitFinalBtn");
const feedback = document.getElementById("feedback");
const restartBtn = document.getElementById("restartBtn");

const correctAnswer = "B";
const aiAnswer = "A";

let initialAnswer = null;
let finalAnswer = null;

// Start session
startBtn.addEventListener("click", () => {
  welcomeScreen.hidden = true;
  questionScreen.hidden = false;
});

// Select initial answer
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

    continueBtn.disabled = false;
  });
});

// Reset final decision state
function resetFinalDecision() {
  finalAnswer = null;
  finalSelectionMessage.textContent = "";

  finalButtons.forEach(button => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
    button.disabled = false;
  });

  submitFinalBtn.disabled = true;
  submitFinalBtn.hidden = false;

  feedback.hidden = true;
  feedback.innerHTML = "";
  feedback.classList.remove("incorrect");

  restartBtn.hidden = true;
  backToQuestionBtn.hidden = false;
}

// Move to AI recommendation
continueBtn.addEventListener("click", () => {
  if (!initialAnswer) return;

  resetFinalDecision();

  initialAnswerDisplay.textContent = initialAnswer;

  questionScreen.hidden = true;
  aiScreen.hidden = false;
});

// Select final answer
finalButtons.forEach(button => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    finalAnswer = button.dataset.final;

    finalButtons.forEach(option => {
      option.classList.remove("selected");
      option.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    finalSelectionMessage.textContent =
      "Final answer selected: " + finalAnswer;

    submitFinalBtn.disabled = false;
  });
});

// Submit decision and display feedback
submitFinalBtn.addEventListener("click", () => {
  if (!finalAnswer) return;

  const isCorrect = finalAnswer === correctAnswer;
  const followedAI = finalAnswer === aiAnswer;
  const changedAnswer = initialAnswer !== finalAnswer;

  feedback.hidden = false;
  feedback.classList.toggle("incorrect", !isCorrect);

  feedback.innerHTML = `
    <h3>${isCorrect ? "Correct answer!" : "Incorrect answer"}</h3>
    <p><strong>Initial answer:</strong> ${initialAnswer}</p>
    <p><strong>AI recommendation:</strong> ${aiAnswer}</p>
    <p><strong>Final answer:</strong> ${finalAnswer}</p>
    <p><strong>Changed answer:</strong>
       ${changedAnswer ? "Yes" : "No"}</p>
    <p><strong>Followed AI:</strong>
       ${followedAI ? "Yes" : "No"}</p>
    <p>
      The correct answer is <strong>B. O(log n)</strong>.
      Binary search halves the remaining search space
      after each comparison.
    </p>
    <p>
      The simulated AI recommendation was incorrect.
      ${followedAI
        ? "Your final answer matched the incorrect AI advice."
        : "Your final answer did not follow the incorrect AI advice."}
    </p>
  `;

  finalButtons.forEach(button => button.disabled = true);
  submitFinalBtn.hidden = true;
  restartBtn.hidden = false;
  backToQuestionBtn.hidden = true;
});

// Back to question without losing initial answer
backToQuestionBtn.addEventListener("click", () => {
  aiScreen.hidden = true;
  questionScreen.hidden = false;
});

// Reset the session
function resetSession() {
  initialAnswer = null;
  finalAnswer = null;

  selectionMessage.textContent = "";
  continueBtn.disabled = true;

  answerButtons.forEach(button => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  });

  resetFinalDecision();

  aiScreen.hidden = true;
  questionScreen.hidden = true;
  welcomeScreen.hidden = false;
}

backBtn.addEventListener("click", resetSession);
restartBtn.addEventListener("click", resetSession);
