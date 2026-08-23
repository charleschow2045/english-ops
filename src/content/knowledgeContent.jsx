// History & Science — one history passage + one science passage per tier,
// each ~150-300 words with real-world interest, a "Fun Fact" bonus, and
// comprehension questions. Reuses PassageModule (same engine as Reading/
// Comprehension) — no new component needed. Hard names/terms are covered in
// src/content/glossary.jsx for the tap-to-translate feature.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.KNOWLEDGE_ITEMS = {
    easy: [
      {
        id: "know-easy-history",
        title: "🏯 The Great Wall of China",
        passage:
          "More than two thousand years ago, ancient Chinese emperors began building a wall to protect their kingdoms from invaders coming from the north. Over hundreds of years, different dynasties added more sections, using stone, brick, and packed earth. Eventually, the wall stretched for thousands of kilometers across mountains, deserts, and grasslands, making it one of the largest building projects ever completed by hand. Hundreds of thousands of workers, including soldiers and peasants, helped build and guard it, and many of them lived in small watchtowers along the way. Today, the Great Wall of China is visited by millions of tourists every year, and parts of it are so well preserved that visitors can still walk along the same stones laid down centuries ago.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Great Wall isn't actually visible from space with the naked eye, even though many people believe that myth!",
        questions: [
          { type: "mc", prompt: "Why did ancient Chinese emperors start building the wall?", options: ["To protect their kingdoms from invaders", "To trade with other countries", "To watch the stars"], correctIndex: 0, explanation: "The passage says the wall was built to protect kingdoms from invaders coming from the north." },
          { type: "mc", prompt: "Who helped build and guard the wall?", options: ["Soldiers and peasants", "Only emperors", "Foreign tourists"], correctIndex: 0, explanation: "The passage says hundreds of thousands of workers, including soldiers and peasants, helped." },
          { type: "mc", prompt: "What can visitors do today at parts of the wall?", options: ["Walk along stones laid centuries ago", "Watch the wall being built", "Meet the original builders"], correctIndex: 0, explanation: "The passage says visitors can still walk along the same stones laid down centuries ago." },
        ],
      },
      {
        id: "know-easy-science",
        title: "🌍 Why Do We Have Seasons?",
        passage:
          "Many people think summer happens because Earth moves closer to the Sun, but that's not actually true. Seasons happen because Earth is slightly tilted on its axis as it travels around the Sun each year. When your part of the world is tilted toward the Sun, you get more direct sunlight and warmer temperatures — that's summer. When your part of the world is tilted away from the Sun, sunlight hits at a lower angle and spreads out more, making temperatures cooler — that's winter. Because the Northern and Southern halves of the Earth tilt in opposite directions at the same time, they experience opposite seasons — when it's summer in Hong Kong, it's actually winter in Australia!",
        tipTitle: "🔍 Fun Fact",
        tip: "Earth's tilt is about 23.5 degrees, and it's been roughly the same for thousands of years.",
        questions: [
          { type: "mc", prompt: "What actually causes the seasons, according to the passage?", options: ["Earth's tilt as it travels around the Sun", "Earth moving closer to the Sun", "The Moon blocking sunlight"], correctIndex: 0, explanation: "The passage says seasons happen because Earth is tilted on its axis, not because it moves closer to the Sun." },
          { type: "mc", prompt: "What happens when your part of the world tilts toward the Sun?", options: ["You get more direct sunlight and warmer weather", "You get less sunlight", "Nothing changes"], correctIndex: 0, explanation: "The passage says tilting toward the Sun means more direct sunlight and warmer temperatures." },
          { type: "mc", prompt: "Why are the seasons opposite in Hong Kong and Australia at the same time?", options: ["The two halves of Earth tilt in opposite directions at once", "They are in different galaxies", "Australia is closer to the sun"], correctIndex: 0, explanation: "The Northern and Southern halves of Earth tilt in opposite directions at the same time." },
        ],
      },
    ],
    medium: [
      {
        id: "know-medium-history",
        title: "⛴️ The Story of the Star Ferry",
        passage:
          "For more than a hundred years, the Star Ferry has carried passengers back and forth across Victoria Harbour, connecting Hong Kong Island to Kowloon. Before bridges and tunnels existed, the ferry was often the only practical way for people to cross the harbour every day, whether they were heading to work, school, or the market. The company that runs it today began in 1888, and its green-and-white boats, each named after a star, became such a familiar part of daily life that many Hong Kong residents still consider the short ferry ride a beloved tradition rather than just a way to get around. Even after modern tunnels and the MTR made faster crossings possible, the Star Ferry kept running, partly because of its low fare, and partly because so many people simply enjoy the view of the skyline from the water. In 2009, a well-known travel magazine named it one of the world's most exciting ferry rides, largely because of that same iconic harbour view.",
        tipTitle: "🔍 Fun Fact",
        tip: "Each Star Ferry boat is named after a star, like \"Morning Star\" or \"Twinkling Star.\"",
        questions: [
          { type: "mc", prompt: "What did the Star Ferry connect before bridges and tunnels existed?", options: ["Hong Kong Island and Kowloon", "Hong Kong and mainland China", "Two different countries"], correctIndex: 0, explanation: "The passage says the ferry connects Hong Kong Island to Kowloon across Victoria Harbour." },
          { type: "mc", prompt: "Why do many Hong Kong residents still enjoy the Star Ferry even though faster options exist?", options: ["Its low fare and the enjoyable harbour view", "It's the only way to cross the harbour", "It's much faster than the MTR"], correctIndex: 0, explanation: "The passage says people keep riding it partly for the low fare and partly for the skyline view." },
          { type: "mc", prompt: "What does the passage suggest made the Star Ferry famous internationally?", options: ["Its iconic harbour view", "Its speed", "Its low ticket price alone"], correctIndex: 0, explanation: "A travel magazine named it one of the world's most exciting rides largely because of the harbour view." },
        ],
      },
      {
        id: "know-medium-science",
        title: "🌋 How Volcanoes Erupt",
        passage:
          "Deep beneath the Earth's surface, temperatures are so high that solid rock slowly melts into a thick, flowing liquid called magma. Because magma is lighter than the solid rock surrounding it, it gradually rises upward, sometimes collecting in large underground chambers. As more magma and gas build up pressure inside these chambers, cracks can form in the rock above, giving the magma a path to the surface. Once it breaks through, the magma is called lava, and depending on how thick or thin it is, an eruption can either flow slowly downhill or explode violently into the sky, sometimes throwing ash for miles. Scientists monitor active volcanoes closely, watching for small earthquakes and changes in gas levels, both of which often increase in the days or weeks before an eruption, giving nearby communities crucial time to evacuate.",
        tipTitle: "🔍 Fun Fact",
        tip: "There are over 1,500 potentially active volcanoes in the world today.",
        questions: [
          { type: "mc", prompt: "What is magma called once it reaches the Earth's surface?", options: ["Lava", "Ash", "Steam"], correctIndex: 0, explanation: "The passage says once magma breaks through to the surface, it's called lava." },
          { type: "mc", prompt: "Why does magma rise up toward the surface?", options: ["It is lighter than the solid rock around it", "It is pushed by ocean water", "It is attracted by the sun"], correctIndex: 0, explanation: "Magma is lighter than the surrounding solid rock, so it gradually rises." },
          { type: "mc", prompt: "How do scientists often predict when a volcano might erupt?", options: ["By watching for small earthquakes and gas level changes", "By measuring the volcano's height", "By checking the weather forecast"], correctIndex: 0, explanation: "The passage says scientists watch for small earthquakes and changes in gas levels." },
        ],
      },
    ],
    hard: [
      {
        id: "know-hard-history",
        title: "🏺 The Terracotta Army",
        passage:
          "In 1974, a group of farmers digging a well in Shaanxi province, China, stumbled upon something extraordinary: fragments of a clay figure buried beneath the earth. What they had discovered turned out to be part of one of the most significant archaeological finds of the twentieth century — an underground army of thousands of life-sized terracotta soldiers, horses, and chariots, buried more than two thousand years ago to guard the tomb of China's first emperor, Qin Shi Huang. Remarkably, no two soldiers' faces are exactly alike; historians believe artisans may have combined a set of standard templates with individual details to create the illusion of a truly unique army, though the exact method remains debated. Originally, the figures were painted in vivid colors, but most of that paint has faded or flaked away in the centuries since burial, exposed briefly to air during excavation before specialists could properly preserve it. Today, only a fraction of the vast burial site has been excavated, since archaeologists have deliberately left large sections untouched, waiting for better preservation technology to be developed so that future excavations can be conducted with less damage to fragile details like the original paint.",
        tipTitle: "🔍 Fun Fact",
        tip: "Archaeologists have found terracotta soldiers with different hairstyles matching different ranks in the ancient army.",
        questions: [
          { type: "mc", prompt: "Who accidentally discovered the Terracotta Army?", options: ["Farmers digging a well", "Professional archaeologists on an expedition", "Tourists visiting a museum"], correctIndex: 0, explanation: "The passage says farmers digging a well in Shaanxi province made the discovery." },
          { type: "mc", prompt: "What is notable about the soldiers' faces, according to the passage?", options: ["No two are exactly alike", "They are all identical", "None of them have faces"], correctIndex: 0, explanation: "The passage says remarkably, no two soldiers' faces are exactly alike." },
          { type: "mc", prompt: "Why have archaeologists left large sections of the site unexcavated?", options: ["They're waiting for better preservation technology", "They ran out of money", "They believe there's nothing left to find"], correctIndex: 0, explanation: "The passage says they're waiting for better preservation technology to avoid damaging fragile details." },
        ],
      },
      {
        id: "know-hard-science",
        title: "💉 How Vaccines Work",
        passage:
          "When a harmful virus or bacteria enters the body for the first time, the immune system needs time to recognize it as a threat and produce the right defenses, called antibodies, to fight it off. This delay is part of why first infections can make people so sick — the body is essentially learning what it's up against while the illness is already spreading. Vaccines work by giving the immune system a safe preview of that threat beforehand, usually using a weakened, inactive, or partial version of the virus that cannot cause the actual disease. This preview is enough to trigger the immune system into producing antibodies and, importantly, into creating memory cells that remember exactly how to fight that specific threat in the future. If the real virus ever does enter the body later, the immune system can recognize it almost immediately and respond far faster and more effectively than it would have without the vaccine, often stopping the illness before it causes serious symptoms at all.",
        tipTitle: "🔍 Fun Fact",
        tip: "The first modern vaccine was created in 1796 by Edward Jenner, to protect against smallpox.",
        questions: [
          { type: "mc", prompt: "Why can a person's first infection with a new virus make them very sick?", options: ["The immune system needs time to learn how to fight it", "Vaccines make the first infection worse", "The virus is always weaker the second time"], correctIndex: 0, explanation: "The passage says the delay in recognizing the threat is part of why first infections can be severe." },
          { type: "mc", prompt: "What do vaccines give the immune system?", options: ["A safe preview of the threat, using a weakened or partial version", "A full-strength dose of the real disease", "Antibodies made in a lab, injected directly"], correctIndex: 0, explanation: "The passage says vaccines give a safe preview using a weakened, inactive, or partial version of the virus." },
          { type: "mc", prompt: "Why can the body respond faster to a virus after vaccination?", options: ["Memory cells remember exactly how to fight that specific threat", "The virus becomes weaker over time on its own", "Vaccines remove the virus from the environment entirely"], correctIndex: 0, explanation: "The passage says vaccination creates memory cells that remember how to fight the specific threat." },
        ],
      },
    ],
    expert: [
      {
        id: "know-expert-history",
        title: "🧱 The Fall of the Berlin Wall",
        passage:
          "For nearly three decades, the Berlin Wall stood as one of the most visible symbols of the divide between the Soviet-aligned East and the Western-aligned world, physically separating East and West Berlin and preventing East German citizens from crossing into the West. Its unexpected collapse in November 1989 is often remembered as a single dramatic moment, but the events leading up to it were considerably messier than the popular narrative suggests. A government spokesperson, during a live press conference, was asked when new, relaxed travel regulations for East German citizens would take effect. Working from notes he hadn't fully reviewed, he mistakenly announced that the changes would take effect immediately, rather than the following day as officials had actually intended, with proper application procedures still in place. Word spread rapidly, and within hours, tens of thousands of East Berliners gathered at checkpoints, overwhelming confused and unprepared border guards who had received no updated orders. Faced with an enormous crowd and no clear instructions from their superiors, the guards eventually made the individual decision to simply open the gates rather than risk a violent confrontation, effectively ending nearly thirty years of physical division through a decision made not by any government, but by the guards on duty that night.",
        tipTitle: "🔍 Fun Fact",
        tip: "Pieces of the Berlin Wall were later sold as souvenirs and are now displayed in museums around the world.",
        questions: [
          { type: "mc", prompt: "What actually triggered the sudden opening of the border, according to the passage?", options: ["A spokesperson's mistaken announcement during a press conference", "A formal government decision to reunite Germany", "A vote by East German citizens"], correctIndex: 0, explanation: "The passage says a spokesperson mistakenly announced the changes would take effect immediately." },
          { type: "mc", prompt: "Why did the border guards eventually open the gates?", options: ["They faced an overwhelming crowd with no updated orders and chose to avoid confrontation", "They received direct orders from their government to open the border", "The wall physically collapsed on its own"], correctIndex: 0, explanation: "The passage says the guards, with no clear instructions, chose to open the gates rather than risk confrontation." },
          {
            type: "shortanswer",
            prompt: "What does this account suggest about how major historical events sometimes unfold, compared to how we often remember them afterward?",
            modelAnswer:
              "It suggests that major historical turning points can result from small mistakes, confusion, or individual decisions made under pressure, rather than being the outcome of a clear, deliberate plan — the tidy story we remember later often hides a messier, more accidental reality.",
          },
        ],
      },
      {
        id: "know-expert-science",
        title: "🔭 Black Holes and the Limits of Light",
        passage:
          "A black hole forms when a massive star collapses under its own gravity at the end of its life, compressing an enormous amount of mass into an incredibly small space. The resulting gravitational pull becomes so intense that, beyond a certain boundary known as the event horizon, nothing can escape it — not even light, which is why the region appears completely black and cannot be observed directly. This creates an unusual scientific challenge: astronomers cannot simply point a telescope at a black hole and see it the way they would see a star. Instead, they infer a black hole's existence and properties by observing its effects on nearby matter, such as the way gas and dust heat up and glow brightly as they spiral inward, or the way a black hole's gravity visibly bends the path of light passing near it, a phenomenon predicted by Einstein's theory of general relativity decades before the first image of a black hole's silhouette was finally captured in 2019. That landmark image, showing a glowing ring of light bent around a dark central shadow, did not photograph the black hole itself so much as confirm, with direct visual evidence, a shape that physicists had already calculated mathematically but never actually seen.",
        tipTitle: "🔍 Fun Fact",
        tip: "The 2019 black hole image required linking together eight telescopes from around the world into one \"Earth-sized\" virtual telescope.",
        questions: [
          { type: "mc", prompt: "Why can't astronomers see a black hole directly?", options: ["Not even light can escape beyond its event horizon", "Black holes are too far away for any telescope", "Black holes don't actually emit any gravity"], correctIndex: 0, explanation: "The passage says beyond the event horizon, not even light can escape, so the region appears completely black." },
          { type: "mc", prompt: "How do astronomers typically detect black holes, according to the passage?", options: ["By observing their effects on nearby matter and light", "By listening for radio signals from inside them", "By measuring their temperature directly"], correctIndex: 0, explanation: "Astronomers infer a black hole's existence by observing glowing matter and bent light nearby." },
          {
            type: "shortanswer",
            prompt: "The passage says the 2019 image \"confirmed\" rather than \"discovered\" the black hole's shape. What is the difference, based on the passage?",
            modelAnswer:
              "Physicists had already mathematically predicted the shape using Einstein's theory of general relativity decades earlier; the 2019 image didn't reveal a new idea, it provided the first direct visual evidence proving that the earlier mathematical prediction was correct.",
          },
        ],
      },
    ],
  };
})();
