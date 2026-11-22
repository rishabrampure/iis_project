
const questions = [
  {
    question: "What is the worst-case time complexity of binary search on a sorted array?",
    options: {
      A: "O(n)",
      B: "O(log n)",
      C: "O(n²)",
      D: "O(1)"
    },
    correctAnswer: "B",
    correctExplanation: "Binary search halves the remaining search space after each comparison, giving O(log n) time complexity.",
    aiAnswer: "A",
    aiExplanation: "Binary search compares the target against array elements. In the worst case, the number of comparisons grows with the array size, resulting in O(n) complexity.",
    evidenceIntro: "Consider what happens to the number of possible elements after each comparison.",
    evidenceTitle: "Binary search with 32 elements",
    evidenceTrace: "32 → 16 → 8 → 4 → 2 → 1",
    evidencePrompt: "Does the number of comparisons grow linearly with the array size, or does the search space shrink much faster?"
  },
  {
    question: "A stack receives PUSH(4), PUSH(7), PUSH(9), followed by POP(). Which value is removed?",
    options: {
      A: "4",
      B: "7",
      C: "9",
      D: "No value"
    },
    correctAnswer: "C",
    correctExplanation: "A stack follows Last-In, First-Out (LIFO). Since 9 was pushed last, it is removed first.",
    aiAnswer: "C",
    aiExplanation: "Stacks use the Last-In, First-Out principle. Since 9 is the most recently pushed value, POP() removes 9.",
    evidenceIntro: "Trace the sequence of stack operations.",
    evidenceTitle: "Stack operation trace",
    evidenceTrace: "[] → [4] → [4, 7] → [4, 7, 9] → POP",
    evidencePrompt: "Which element is at the top of the stack immediately before POP()?"
  },
  {
    question: "In JavaScript, what does [10, 20, 30][1] evaluate to?",
    options: {
      A: "10",
      B: "20",
      C: "30",
      D: "undefined"
    },
    correctAnswer: "B",
    correctExplanation: "JavaScript arrays use zero-based indexing. Index 0 contains 10, index 1 contains 20, and index 2 contains 30.",
    aiAnswer: "A",
    aiExplanation: "The expression accesses the first element of the array using position 1. The first value is 10.",
    evidenceIntro: "Inspect the index assigned to each element.",
    evidenceTitle: "JavaScript array positions",
    evidenceTrace: "Index 0: 10 | Index 1: 20 | Index 2: 30",
    evidencePrompt: "Does JavaScript count array positions starting from zero or one?"
  },
  {
    question: "When does the JavaScript expression a && b evaluate to true, assuming both values are Boolean?",
    options: {
      A: "When either value is true",
      B: "When both values are false",
      C: "Only when both values are true",
      D: "When the values are different"
    },
    correctAnswer: "C",
    correctExplanation: "Logical AND evaluates to true only when both Boolean operands are true.",
    aiAnswer: "C",
    aiExplanation: "The logical AND operator requires both operands to be true. If either value is false, the expression evaluates to false.",
    evidenceIntro: "Inspect the possible Boolean combinations.",
    evidenceTitle: "Logical AND truth table",
    evidenceTrace: "F && F = F | F && T = F | T && F = F | T && T = T",
    evidencePrompt: "How many combinations produce a true result?"
  },
  {
    question: "How many times does this JavaScript loop run: for (let i = 0; i < 5; i++)?",
    options: {
      A: "4 times",
      B: "5 times",
      C: "6 times",
      D: "Infinitely"
    },
    correctAnswer: "B",
    correctExplanation: "The loop runs for i = 0, 1, 2, 3 and 4. It stops when i reaches 5 because the condition i < 5 is false.",
    aiAnswer: "C",
    aiExplanation: "The loop starts counting at zero and continues to five, so it executes six times in total.",
    evidenceIntro: "Trace the value of i and check the loop condition.",
    evidenceTitle: "Loop iteration trace",
    evidenceTrace: "i = 0 → 1 → 2 → 3 → 4 → STOP at 5",
    evidencePrompt: "Does the condition i < 5 allow the loop body to execute when i equals 5?"
  },
  {
    question: "What is the auxiliary space complexity of creating a new array containing n numbers?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)"
    },
    correctAnswer: "C",
    correctExplanation: "Storing n numbers in a new array requires space proportional to n, giving O(n) auxiliary space complexity.",
    aiAnswer: "C",
    aiExplanation: "Each of the n numbers requires storage in the new array. The amount of memory grows linearly with n, so the complexity is O(n).",
    evidenceIntro: "Consider how storage changes as the number of elements increases.",
    evidenceTitle: "Array storage growth",
    evidenceTrace: "10 items → 10 slots | 20 items → 20 slots | 40 items → 40 slots",
    evidencePrompt: "When the number of stored elements doubles, how does the required storage change?"
  }
];

// Screens
const welcomeScreen = document.getElementById("welcome");
const questionScreen = document.getElementById("question");
const aiScreen = document.getElementById("aiAdvice");

// Buttons
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const continueBtn = document.getElementById("continueBtn");
const submitFinalBtn = document.getElementById("submitFinalBtn");
const restartBtn = document.getElementById("restartBtn");


const sessionEffortPanel =
  document.getElementById("sessionEffortPanel");

const effortInputs =
  document.querySelectorAll('input[name="sessionEffort"]');

const saveEffortBtn =
  document.getElementById("saveEffortBtn");

const effortSavedMessage =
  document.getElementById("effortSavedMessage");

let sessionEffort = null;


const backToQuestionBtn = document.getElementById("backToQuestionBtn");

const answerButtons = document.querySelectorAll("#question .option");
const finalButtons = document.querySelectorAll(".final-option");

// Display elements
const questionText = document.getElementById("questionText");
const selectionMessage = document.getElementById("selectionMessage");
const finalSelectionMessage = document.getElementById("finalSelectionMessage");
const initialAnswerDisplay = document.getElementById("initialAnswerDisplay");
const aiAnswerText = document.getElementById("aiAnswerText");
const aiExplanation = document.getElementById("aiExplanation");
const feedback = document.getElementById("feedback");

// Interaction modes
const evidencePanel = document.getElementById("evidencePanel");
const reflectionPanel = document.getElementById("reflectionPanel");
const activeModeLabel = document.getElementById("activeModeLabel");
const inspectEvidenceBtn = document.getElementById("inspectEvidenceBtn");
const evidenceDetails = document.getElementById("evidenceDetails");
const reflectionInput = document.getElementById("reflectionInput");

const perQuestionEffortPanel =
  document.querySelector('input[name="mentalEffort"]')?.closest("fieldset");

if (perQuestionEffortPanel) perQuestionEffortPanel.hidden = true;

const evidenceIntro = document.getElementById("evidenceIntro");
const evidenceTitle = document.getElementById("evidenceTitle");
const evidenceTrace = document.getElementById("evidenceTrace");
const evidencePrompt = document.getElementById("evidencePrompt");

const modeNames = {
  standard: "Standard AI",
  evidence: "Verifiable AI",
  reflection: "Reflection Prompt"
};

// Session state
let questionIndex = 0;
let initialAnswer = null;
let finalAnswer = null;
let selectedMode = "standard";
let evidenceOpened = false;

const responses = [];

// Show one screen
function showScreen(screen) {
  welcomeScreen.hidden = screen !== welcomeScreen;
  questionScreen.hidden = screen !== questionScreen;
  aiScreen.hidden = screen !== aiScreen;
}

// Clear button selections
function clearButtons(buttons) {
  buttons.forEach(button => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
    button.disabled = false;
  });
}

// Check whether final submission is allowed

function canSubmitFinalAnswer() {
  return finalAnswer !== null &&
    (selectedMode !== "reflection" ||
      reflectionInput.value.trim().length >= 10);
}


// Reset the final answer interface
function resetFinalDecision() {
  finalAnswer = null;

  evidenceOpened = false;

  clearButtons(finalButtons);

  finalSelectionMessage.textContent = "";
  reflectionInput.value = "";
  evidenceDetails.hidden = true;

  submitFinalBtn.disabled = true;
  submitFinalBtn.hidden = false;

  feedback.hidden = true;
  feedback.textContent = "";
  feedback.classList.remove("incorrect");

  restartBtn.hidden = true;
  backToQuestionBtn.hidden = true;
}


function resetSessionEffort() {
  sessionEffort = null;

  sessionEffortPanel.hidden = true;
  effortSavedMessage.textContent = "";

  saveEffortBtn.hidden = false;
  saveEffortBtn.disabled = true;

  effortInputs.forEach(input => {
    input.checked = false;
    input.disabled = false;
  });
}


// Display the current question
function loadQuestion() {
  const q = questions[questionIndex];

  initialAnswer = null;
  selectionMessage.textContent = "";
  continueBtn.disabled = true;

  document.querySelectorAll(".question-number").forEach(element => {
    element.textContent =
      `QUESTION ${String(questionIndex + 1).padStart(2, "0")} OF ${questions.length}`;
  });

  questionText.textContent = q.question;

  clearButtons(answerButtons);

  answerButtons.forEach(button => {
    const id = button.dataset.answer;
    button.textContent = `${id}. ${q.options[id]}`;
  });

  finalButtons.forEach(button => {
    const id = button.dataset.final;
    button.textContent = `${id}. ${q.options[id]}`;
  });

  resetFinalDecision();
  showScreen(questionScreen);
}

// Start a new session
startBtn.addEventListener("click", () => {
  resetSessionEffort();
  selectedMode =
    document.querySelector('input[name="mode"]:checked').value;

  questionIndex = 0;
  responses.length = 0;

  loadQuestion();
});

// Select an initial answer
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    initialAnswer = button.dataset.answer;

    clearButtons(answerButtons);

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    selectionMessage.textContent =
      `Initial answer recorded: ${initialAnswer}`;

    continueBtn.disabled = false;
  });
});

// Move to AI advice
continueBtn.addEventListener("click", () => {
  if (initialAnswer === null) return;

  const q = questions[questionIndex];

  resetFinalDecision();

  initialAnswerDisplay.textContent =
    `${initialAnswer}. ${q.options[initialAnswer]}`;

  aiAnswerText.textContent =
    `${q.aiAnswer}. ${q.options[q.aiAnswer]}`;

  aiExplanation.textContent = q.aiExplanation;

  // Show the appropriate interaction mode
  evidencePanel.hidden = selectedMode !== "evidence";
  reflectionPanel.hidden = selectedMode !== "reflection";

  activeModeLabel.textContent =
    `Current mode: ${modeNames[selectedMode]}`;

  // Populate question-specific evidence
  evidenceIntro.textContent = q.evidenceIntro;
  evidenceTitle.textContent = q.evidenceTitle;
  evidenceTrace.textContent = q.evidenceTrace;
  evidencePrompt.textContent = q.evidencePrompt;

  // Prevent editing the initial answer after AI advice
  backToQuestionBtn.hidden = true;

  showScreen(aiScreen);
});

// Reveal evidence
inspectEvidenceBtn.addEventListener("click", () => {
  evidenceOpened = true;
  evidenceDetails.hidden = false;
});

// Update reflection
reflectionInput.addEventListener("input", () => {
  submitFinalBtn.disabled = !canSubmitFinalAnswer();
});


// Select a final answer
finalButtons.forEach(button => {
  button.addEventListener("click", () => {
    finalAnswer = button.dataset.final;

    clearButtons(finalButtons);

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    finalSelectionMessage.textContent =
      `Final answer selected: ${finalAnswer}`;

    submitFinalBtn.disabled = !canSubmitFinalAnswer();
  });
});

// Submit final answer
submitFinalBtn.addEventListener("click", () => {
  if (!canSubmitFinalAnswer()) return;

  const q = questions[questionIndex];

  const isCorrect = finalAnswer === q.correctAnswer;
  const aiWasCorrect = q.aiAnswer === q.correctAnswer;
  const followedAI = finalAnswer === q.aiAnswer;
  const changedAnswer = initialAnswer !== finalAnswer;

  // Record interaction data
  responses.push({
    question: questionIndex + 1,
    mode: selectedMode,
    initialAnswer,
    aiAnswer: q.aiAnswer,
    finalAnswer,
    correctAnswer: q.correctAnswer,
    initiallyCorrect: initialAnswer === q.correctAnswer,
    finallyCorrect: isCorrect,
    aiWasCorrect,
    followedAI,
    changedAnswer,
    evidenceOpened,
    reflection: selectedMode === "reflection"
      ? reflectionInput.value.trim()
      : null
  });

  // Display feedback
  feedback.hidden = false;
  feedback.classList.toggle("incorrect", !isCorrect);

  feedback.innerHTML = `
    <h3>${isCorrect ? "Correct answer!" : "Incorrect answer"}</h3>

    <p><strong>Initial answer:</strong>
       ${initialAnswer}</p>

    <p><strong>AI recommendation:</strong>
       ${q.aiAnswer}</p>

    <p><strong>Final answer:</strong>
       ${finalAnswer}</p>

    <p><strong>Changed answer:</strong>
       ${changedAnswer ? "Yes" : "No"}</p>

    <p><strong>Followed AI:</strong>
       ${followedAI ? "Yes" : "No"}</p>

    <p><strong>AI recommendation was:</strong>
       ${aiWasCorrect ? "Correct" : "Incorrect"}</p>

    <p><strong>Correct answer:</strong>
       ${q.correctAnswer}. ${q.options[q.correctAnswer]}</p>

    <p>${q.correctExplanation}</p>
  `;

  const extraFeedback = document.createElement("p");

  if (selectedMode === "evidence") {
    extraFeedback.textContent =
      `Evidence inspected: ${evidenceOpened ? "Yes" : "No"}`;
  } else if (selectedMode === "reflection") {
    extraFeedback.textContent =
      `Your reflection: ${reflectionInput.value.trim()}`;
  } else {
    extraFeedback.textContent =
      "Interaction mode: Standard AI";
  }

  feedback.appendChild(extraFeedback);


  // Lock the submitted answer
  finalButtons.forEach(button => button.disabled = true);
  reflectionInput.disabled = true;
  inspectEvidenceBtn.disabled = true;

  submitFinalBtn.hidden = true;
  restartBtn.hidden = false;
  backToQuestionBtn.hidden = true;

  
if (questionIndex === questions.length - 1) {

  restartBtn.textContent = "Return to Welcome";

  // Ask for overall mental effort at the end
  sessionEffortPanel.hidden = false;

  // Require the rating before finishing
  restartBtn.hidden = true;

  const completeMessage = document.createElement("p");
  completeMessage.textContent =
    `Session complete: ${responses.length} questions answered.`;

  feedback.appendChild(completeMessage);

} else {

  restartBtn.textContent = "Next Question →";

}

});

// Next question or return to welcome
restartBtn.addEventListener("click", () => {
  if (questionIndex < questions.length - 1) {
    questionIndex++;

    reflectionInput.disabled = false;
    inspectEvidenceBtn.disabled = false;

    loadQuestion();
  } else {
    resetSession();
  }
});

// Reset the entire session
function resetSession() {
  resetSessionEffort();
  questionIndex = 0;
  initialAnswer = null;
  finalAnswer = null;

  reflectionInput.disabled = false;
  inspectEvidenceBtn.disabled = false;

  responses.length = 0;

  resetFinalDecision();
  showScreen(welcomeScreen);
}

backBtn.addEventListener("click", resetSession);



// Enable saving after the student selects a rating
effortInputs.forEach(input => {
  input.addEventListener("change", () => {
    saveEffortBtn.disabled = false;
  });
});

// Save the overall session rating
saveEffortBtn.addEventListener("click", () => {

  const selected = document.querySelector(
    'input[name="sessionEffort"]:checked'
  );

  if (!selected) return;

  sessionEffort = Number(selected.value);

  // Lock the rating after saving
  effortInputs.forEach(input => {
    input.disabled = true;
  });

  saveEffortBtn.hidden = true;

  effortSavedMessage.textContent =
    `Overall mental effort recorded: ${sessionEffort}/5`;

  // Allow the student to finish
  restartBtn.hidden = false;
});
