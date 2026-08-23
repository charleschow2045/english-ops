// Module 6: Writing — one prompt per tier, structure hints, sentence starters,
// and a model essay shown after the child submits their own writing.
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
        "Introduction: State your opinion clearly in one sentence.",
        "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
        "Conclusion: Restate your opinion and explain why it matters.",
      ],
      starters: ["I believe that...", "For example,...", "Another reason is...", "In conclusion,..."],
    },
  };

  // General craft techniques, shown alongside the tier-specific structure
  // hints (based on common elementary narrative/opinion-writing guidance:
  // small-moment focus, sensory/descriptive detail, dialogue, figurative language).
  window.App.Content.WRITING_CRAFT_TIPS = [
    "Zoom in on one small moment instead of describing a whole day — small, specific details are more interesting than a big general summary.",
    "Use dialogue — let someone talk! \"I can't believe it!\" she shouted.",
    "Add sensory details — what did you see, hear, smell, or feel?",
    "Try a simile — compare two things using \"like\" or \"as\" (e.g. \"as fast as a cheetah\").",
  ];

  window.App.Content.WRITING_MODEL_ESSAYS = {
    easy:
      "My favorite animal is the red panda. It has soft, reddish-brown fur, a long fluffy tail, and a face that almost looks like a mask. Red pandas live in trees in the mountains and are very good climbers. They mostly eat bamboo, but they also like fruit! I love red pandas because they look so gentle and curious, and I think it would be amazing to watch one climb through the trees in real life.",
    medium:
      "One sunny Saturday, I spent the whole afternoon with my cousin at the park near our house. First, we rode our bikes around the big pond, racing each other to the old oak tree. Then we stopped to feed the ducks the bread crumbs we'd brought, laughing every time one duck chased the others away from the food. Later, we lay on the grass and made up funny shapes out of the clouds until it started getting dark. By the end of the day, I felt happy and a little sleepy, and I couldn't wait to tell my mom about the duck that stole all the bread.",
    hard:
      "The first time I ever tried rock climbing, I almost didn't go through with it. Standing at the bottom of the wall, looking up at how high it went, my stomach felt tight with nerves. At first I felt like everyone around me was probably a better climber, but then my instructor reminded me that everyone starts somewhere. I took a deep breath and grabbed the first hold. Slowly, one hand and one foot at a time, I made it about halfway up before my arms started shaking too much to continue. Looking back, I learned that trying something new doesn't mean you have to be good at it right away — it just means being brave enough to start.",
    expert:
      "I believe that kindness is more important than pure honesty, though the two don't have to be opposites. Being honest matters, but honesty delivered without any care for someone's feelings can do real harm. For example, telling a friend their artwork is \"bad\" might be technically true, but it rarely helps them improve and often just makes them want to give up. Another reason is that most situations allow room for both — you can be truthful about a problem while still choosing kind, encouraging words to explain it. In conclusion, I think the best approach isn't choosing between honesty and kindness, but finding honest words that are also kind.",
  };
})();
