// Module 6: Writing — one prompt per tier, plus structure hints and sentence starters
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.WRITING_PROMPTS = {
    easy: "Describe your favorite animal. What does it look like, and why do you like it?",
    medium: "Write about a fun day you had with a friend or family member. What did you do together?",
    hard: "Describe a time you tried something new. How did it make you feel?",
    expert: "Do you think it's more important to be honest or to be kind? Explain your opinion with reasons.",
  };

  window.App.Content.WRITING_HINTS = {
    easy: {
      structure: [
        "Beginning: Name your animal and say what it looks like.",
        "Middle: Tell us what it likes to do, or a fun fact about it.",
        "End: Explain why it's your favorite!",
      ],
      starters: ["My favorite animal is...", "It has...", "I love it because..."],
    },
    medium: {
      structure: [
        "Beginning: Who were you with, and where did this happen?",
        "Middle: What did you do? Add details — what did you see, hear, or feel?",
        "End: How did the day end, and how did it make you feel?",
      ],
      starters: ["One day, I...", "First, we...", "By the end of the day, I felt..."],
    },
    hard: {
      structure: [
        "Beginning: What was the new thing you tried, and why did you try it?",
        "Middle: Describe what happened step by step. Were you nervous? Excited?",
        "End: How did you feel afterward? What did you learn about yourself?",
      ],
      starters: ["The first time I ever...", "At first I felt..., but then...", "Looking back, I learned that..."],
    },
    expert: {
      structure: [
        "Beginning: State your opinion clearly in one sentence.",
        "Middle: Give at least two reasons for your opinion, with an example for each.",
        "End: Sum up your opinion and explain why it matters.",
      ],
      starters: ["I believe that...", "For example,...", "Another reason is...", "In conclusion,..."],
    },
  };
})();
