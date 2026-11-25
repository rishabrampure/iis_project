# Clarity AI: Study Assistant
Intelligent Interactive Systems (IIS): A2; Browser Based interactive prototype
ClarityAI : An interactive prototype investigating appropriate reliance on AI recommendations
**README Prose Word Count: 950(excluding setup commands and URLs)**

 
## Project Status and Overview

ClarityAI is a browser based interactive study assistant prototype. It aims to encourage university students to critically evaluate AI recommendations rather than automatically trusting explanations that may sound convincing but actually be incorrect.

The project builds on my Assignment 1 research into appropriate reliance on AI, focusing on whether verifiable information or independent thinking prompts can better support student's decisions while considering the mental effort involved.

The current prototype demonstrates these different approaches through interactive learning scenarios. Its main purpose is to explore how interaction design can support independent judgement and more thoughtful use of AI in education.

### Implemented
ClarityAI includes six fixed Computer Science questions with three correct and three incorrect AI recommendations. Students can select initial and final answers across three interaction modes and receive question specific feedback.

After completing all six questions, students provide an overall mental-effort rating (1 to 5) and view a **Session Summary Dashboard** displaying their answer accuracy, agreement with correct AI advice, rejection of incorrect advice and a question by question breakdown of their decisions.

Interaction Modes:

| Interaction Mode | Description |
|---|---|
| Standard AI | Students review AI advice and choose their final answer. |
| Verifiable AI | Students can inspect question specific evidence before deciding. |
| Reflection Prompt | Students explain their initial reasoning before viewing AI advice and can revisit it when making their final decision. |

### Simulated
As this is an early stage prototype, AI recommendations, explanations and worked examples are predefined in JavaScript to simulate the intended interactions.

### Future Development
A full version of ClarityAI could incorporate live AI responses, external source verification, personalised learning, user accounts, persistent progress tracking and more advanced performance analytics. These features are outside the current prototype's scope and have not yet been implemented or evaluated.

##  Technology Stack and running instructions
ClarityAI is developed using HTML, CSS and JavaScript, allowing it to run directly in a web browser without any additional installations or dependencies. Consists of  index.html, style.css, script.js

Runtime: Plain HTML, CSS and JavaScript in a browser. No packages, build tools, server, API keys or internet connection are needed.

**Instructions to run:**
1. Clone or download the repository
2. Open index.html in chrome, edge or an updated browser.
3. Choose a mode, complete the 6 questions and rate the overall mental effort at the end.
4. Click View Session Summary to review your performance statistics and question by question decisions.

Question responses and the effort rating are held in the browser memory for the active session, they are not retained after a refresh.


## Development Record


The prototype was developed incrementally, with each stage adding or improving an important part of the interaction.

### Stage 1: Initial Prototype and AI Interaction
Created the welcome screen and initial answer selection, then introduced simulated AI recommendations and decision feedback. I tested the navigation, answer selection and feedback to establish the basic interaction flow.

**Relevant commits:** [Welcome Screen](https://github.com/rishabrampure/iis_project/commit/dadee283fb77a34b5b8a78933813db1e77094d78) | [AI Recommendations](https://github.com/rishabrampure/iis_project/commit/a7f8d17aa13f253aab3443f1065788dc4f1a056f)


### Stage 2: Questions and Interaction Modes
Expanded the prototype to six questions with both correct and incorrect AI recommendations. Added Standard AI, Verifiable AI and Reflection Prompt modes to demonstrate different approaches to evaluating AI advice.

**Relevant commit:** [Questions and Modes](https://github.com/rishabrampure/iis_project/commit/33b7af309313e2235cd65612123e55b88775aa21)

### Stage 3: Verification Bug Fix
During testing, the Verifiable AI mode displayed binary-search reasoning for unrelated questions. I identified duplicate HTML elements and leftover hardcoded content, removed them and retested the question-specific evidence.

**Relevant commit:** [Verification Bug Fix](https://github.com/rishabrampure/iis_project/commit/179b4b4f4f6e397ec6ea10976e825f23fa9e857b)

### Stage 4: Mental Effort Rating
Added a 1–5 mental-effort rating after the final question. I chose an end-of-session rating instead of one after every question to avoid repeatedly interrupting students. I tested the submission and reset behaviour.

**Relevant commit:** [Mental Effort Rating](https://github.com/rishabrampure/iis_project/commit/b3f582d1c13820ccc96d61592dba02e37af0bdec)

### Stage 5: Reflection Mode Improvements
Changed the reflection interaction to encourage students to explain their initial reasoning before viewing AI advice. I also improved the final decision screen so students could revisit their original reasoning alongside the AI recommendation. I tested that their reflection remained visible and could not be edited after viewing AI advice.

**Relevant commit:** [Reflection Improvements](https://github.com/rishabrampure/iis_project/commit/499440fc12f0ce59d04ca620fed7947dacf12131)

### Stage 6: Session Summary Dashboard

Added an end of session summary to let students review their decisions across all six questions. The dashboard calculates answer accuracy, agreement with correct AI recommendations, rejection of incorrect advice and overall mental effort. It also provides a question-by-question breakdown.

This improvement makes the feedback more meaningful by showing students their overall decision patterns rather than only individual question results.

**Relevant commit:** [Session Summary Dashboard](https://github.com/rishabrampure/iis_project/commit/47c2bb967183ef009520b92b8814fbd44061c943)

To review the actual sequence and diffs, see the repository's Commits history. A commit's content should be treated as the evidence, the number of commits is not a quality measure as each commit is a stage I developed the prototype for.

### AI Assistance

I created the initial structure and basic functionality of ClarityAI, then used ChatGPT and Codex in VS Code to assist with implementing additional features, refining interactions and debugging issues.

For example, I used AI assistance to investigate a bug where Verifiable AI displayed incorrect evidence across questions. I reviewed the suggested fix, removed the duplicate HTML elements and tested the evidence across all six questions.

I also used Codex to improve Reflection Mode by displaying the student's original reasoning alongside AI advice. I reviewed the changes and tested the interaction to ensure the reflection was preserved and remained read only.

AI tools supported the development process, while I made the design decisions and tested the implemented functionality.

## Limitations and additional files
1. The six questions are limited to introductory computer science. 
2. Verification examples are predefined, not independently sourced.
3. A 10 character reflection doesn't establish reasoning quality.
4. The final 1 to 5 effort rating is a subjective session rating, not a validated load measure for the mind.
5. Feedback saying "final answered followed AI" indicates a match, not proof that the user actually followed the AI advice.
6. Predictable AI Responses: The prototype follows a fixed pattern of correct and incorrect AI answers. A full system would produce more varied, less predictable responses.

No additional files are required to run the prototype. The architecture diagram is included in both this repository and the A2 report. The storyboards and design flows are in the A2 report only.