# iis_project
ClarityAI : An interactive prototype investigating appropriate reliance on AI recommendations


### Development Record — Question-Specific Verification Bug

Problem: During testing, the Verifiable AI mode continued displaying the binary search explanation when the user progressed to other questions.

Cause: The HTML contained duplicate `evidencePanel` elements and leftover hardcoded explanation text. This prevented the verification interface from updating consistently.

Fix: Removed the duplicate panel and replaced the hardcoded content with uniquely identified HTML elements populated from the current question's data.

Validation: Retested the Verifiable AI mode across the six questions and confirmed that each displayed its corresponding worked example.

Design significance:** Verification must be relevant to the current question. Showing unrelated evidence could confuse students and undermine their ability to assess an AI recommendation.