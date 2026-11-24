# Clarity AI: Study Assistant
Intelligent Interactive Systems (IIS): A2
ClarityAI : An interactive prototype investigating appropriate reliance on AI recommendations
Status: Working browser prototype with simulated AI recommendations

## Overview 
ClarityAI is an interactive prototype exploring how university students respond to AI advice that may be correct or incorrect. AI explanations may sound convincing even when the advice is wrong. The aim is to demonstrate ways a study assistant to help students evaluate advice than accepting it automatically.

This project follows the research proposed in Assignment 1:
comparing verifiable information with prompts encouraging independant thinking, while considering appropriate reliance and mental effort. It's a design prototype; no claim is made that one more performs better than the other.

### What the prototype does:
The student selects one of the 3 modes at the start of the session:

1. Standard AI: Shows an AI recommendation and explanation, then allows a final decision
2. Verifiaible AI: Shows the same recommendation and explanation as mode 1, with an Inspect worked example action button revealing question specific information to use to verify the advice.
3. Reflection Prompt: Shows the same recommendation and explanantion

### Development Record — Question-Specific Verification Bug

Problem: During testing, the Verifiable AI mode continued displaying the binary search explanation when the user progressed to other questions.

Cause: The HTML contained duplicate `evidencePanel` elements and leftover hardcoded explanation text. This prevented the verification interface from updating consistently.

Fix: Removed the duplicate panel and replaced the hardcoded content with uniquely identified HTML elements populated from the current question's data.

Validation: Retested the Verifiable AI mode across the six questions and confirmed that each displayed its corresponding worked example.

Design significance:** Verification must be relevant to the current question. Showing unrelated evidence could confuse students and undermine their ability to assess an AI recommendation.