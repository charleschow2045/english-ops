// History & Science — 15 passages per tier (60 total: 30 history + 30
// science), each ~120-250 words (longer at higher tiers) with real-world
// interest, a "Fun Fact" bonus, and three comprehension questions (expert
// tier: two multiple-choice plus one short-answer). Reuses PassageModule
// (same engine as Reading/Comprehension) — no new component needed. Every
// history item carries `era` (ancient/medieval/modern/myth) and `region`;
// every science item carries `field` (biology/chemistry/physics/earth
// science/astronomy/technology/ecology) — lightweight tags for future
// filtering, not yet wired into any picker UI. Multiple-choice options are
// length-balanced (correct option within ~6 characters of the others).
// Hard names/terms are covered in src/content/glossary.jsx for the
// tap-to-translate feature.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.KNOWLEDGE_ITEMS = {
    easy: [
      {
        id: "know-easy-history",
        era: "ancient",
        region: "China",
        title: "🏯 The Great Wall of China",
        passage:
          "More than two thousand years ago, ancient Chinese emperors began building a wall to protect their kingdoms from invaders coming from the north. Over hundreds of years, different dynasties added more sections, using stone, brick, and packed earth. Eventually, the wall stretched for thousands of kilometers across mountains, deserts, and grasslands, making it one of the largest building projects ever completed by hand. Hundreds of thousands of workers, including soldiers and peasants, helped build and guard it, and many of them lived in small watchtowers along the way. Today, the Great Wall of China is visited by millions of tourists every year, and parts of it are so well preserved that visitors can still walk along the same stones laid down centuries ago.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Great Wall isn't actually visible from space with the naked eye, even though many people believe that myth!",
        questions: [
          { type: "mc", prompt: "Why did ancient Chinese emperors start building the wall?", options: ["To protect their kingdoms from invaders", "To trade silk with far-away countries", "To watch the stars from tall towers"], correctIndex: 0, explanation: "The passage says the wall was built to protect kingdoms from invaders coming from the north." },
          { type: "mc", prompt: "Who helped build and guard the wall?", options: ["Soldiers and peasants", "Only the emperors' sons", "Foreign tourists only"], correctIndex: 0, explanation: "The passage says hundreds of thousands of workers, including soldiers and peasants, helped." },
          { type: "mc", prompt: "What can visitors do today at parts of the wall?", options: ["Walk along stones laid centuries ago", "Watch workers building the wall now", "Meet the men who first built it"], correctIndex: 0, explanation: "The passage says visitors can still walk along the same stones laid down centuries ago." },
        ],
      },
      {
        id: "know-easy-history-2",
        era: "ancient",
        region: "China",
        title: "📜 The Invention of Paper",
        passage:
          "Long before paper existed, people in ancient China wrote on heavy materials like bamboo strips, silk cloth, or bone, which were expensive, hard to carry, or difficult to write on. Around the year 105 CE, a court official named Cai Lun improved a method for making paper by mashing together tree bark, old rags, hemp fibres, and fishing nets, then pressing the mixture into thin sheets and letting them dry. This new paper was light, cheap to produce, and much easier to write on than anything used before, so the idea spread quickly across China and, over the following centuries, travelled along trade routes to the Middle East, Europe, and eventually the rest of the world. Papermaking completely changed how people recorded information, shared knowledge, and communicated across long distances, and versions of Cai Lun's basic process are still used in paper factories today.",
        tipTitle: "🔍 Fun Fact",
        tip: "The word \"paper\" actually comes from \"papyrus,\" an older Egyptian writing material made from a plant — but papyrus and true paper are made very differently.",
        questions: [
          { type: "mc", prompt: "What did people in ancient China write on before paper was invented?", options: ["Bamboo strips, silk cloth, or bone", "Thin plastic sheets from factories", "Notebooks with thick cardboard covers"], correctIndex: 0, explanation: "The passage says people used heavy materials like bamboo strips, silk cloth, or bone." },
          { type: "mc", prompt: "What materials did Cai Lun use to make paper?", options: ["Tree bark, old rags, hemp fibres, and fishing nets", "Silk cloth, bamboo strips, animal skins, and wax", "Clay, wood shavings, sand, and crushed shells"], correctIndex: 0, explanation: "The passage says he mashed together tree bark, old rags, hemp fibres, and fishing nets." },
          { type: "mc", prompt: "Why did papermaking spread so quickly, according to the passage?", options: ["It was light, cheap, and easy to write on", "It was very expensive but beautiful", "Only emperors were allowed to use it"], correctIndex: 0, explanation: "The passage says the paper was light, cheap to produce, and much easier to write on than anything before." },
        ],
      },
      {
        id: "know-easy-science",
        field: "earth science",
        title: "🌍 Why Do We Have Seasons?",
        passage:
          "Many people think summer happens because Earth moves closer to the Sun, but that's not actually true. Seasons happen because Earth is slightly tilted on its axis as it travels around the Sun each year. When your part of the world is tilted toward the Sun, you get more direct sunlight and warmer temperatures — that's summer. When your part of the world is tilted away from the Sun, sunlight hits at a lower angle and spreads out more, making temperatures cooler — that's winter. Because the Northern and Southern halves of the Earth tilt in opposite directions at the same time, they experience opposite seasons — when it's summer in Hong Kong, it's actually winter in Australia!",
        tipTitle: "🔍 Fun Fact",
        tip: "Earth's tilt is about 23.5 degrees, and it's been roughly the same for thousands of years.",
        questions: [
          { type: "mc", prompt: "What actually causes the seasons, according to the passage?", options: ["Earth's tilt as it travels around the Sun", "Earth moving closer to the Sun in summer", "The Moon blocking the sunlight each year"], correctIndex: 0, explanation: "The passage says seasons happen because Earth is tilted on its axis, not because it moves closer to the Sun." },
          { type: "mc", prompt: "What happens when your part of the world tilts toward the Sun?", options: ["You get more direct sunlight and warmer weather", "You get less direct sunlight and colder weather", "Nothing changes about the sunlight or weather"], correctIndex: 0, explanation: "The passage says tilting toward the Sun means more direct sunlight and warmer temperatures." },
          { type: "mc", prompt: "Why are the seasons opposite in Hong Kong and Australia at the same time?", options: ["The two halves of Earth tilt opposite ways at once", "Each half of the Earth spins in a different direction", "Australia is much closer to the Sun than Hong Kong is"], correctIndex: 0, explanation: "The Northern and Southern halves of Earth tilt in opposite directions at the same time." },
        ],
      },
      {
        id: "know-easy-science-2",
        field: "biology",
        title: "🍂 Why Do Leaves Change Colour in Autumn?",
        passage:
          "During spring and summer, leaves look green because they are full of a substance called chlorophyll, which helps trees use sunlight to make food through a process called photosynthesis. As autumn arrives and days grow shorter and cooler, trees slowly stop making chlorophyll and begin preparing to rest for winter. Once the green chlorophyll fades away, other colours that were hidden inside the leaf all along, like yellow and orange, finally become visible. Some trees also produce a brand new red pigment in autumn, which is why certain leaves turn bright red or purple instead of just yellow. Eventually, the tree forms a special layer where each leaf's stem meets the branch, cutting the leaf off from water and nutrients until it falls to the ground. This whole process helps the tree save energy and survive the cold winter months ahead, ready to grow fresh green leaves again once spring returns.",
        tipTitle: "🔍 Fun Fact",
        tip: "The bright red colour in some autumn leaves is a pigment the tree makes freshly each year — it isn't hidden in the leaf like yellow and orange are.",
        questions: [
          { type: "mc", prompt: "Why do leaves look green in spring and summer?", options: ["They are full of chlorophyll", "They are kept cold by the wind", "They receive no sunlight at all"], correctIndex: 0, explanation: "The passage says leaves are full of chlorophyll, which helps trees use sunlight to make food." },
          { type: "mc", prompt: "What happens once the green chlorophyll fades away in autumn?", options: ["Other hidden colours like yellow and orange become visible", "The leaf turns completely white and becomes paper thin", "The tree stops growing forever and slowly starts to die"], correctIndex: 0, explanation: "The passage says once chlorophyll fades, colours hidden inside the leaf all along become visible." },
          { type: "mc", prompt: "Why does the tree cut each leaf off from water and nutrients?", options: ["To save energy and survive winter", "To make the leaf grow much bigger", "To attract more sunlight to the tree"], correctIndex: 0, explanation: "The passage says this process helps the tree save energy and survive the cold winter months." },
        ],
      },
      {
        id: "know-easy-science-3",
        field: "biology",
        region: "China",
        title: "🐼 Why Do Pandas Only Eat Bamboo?",
        passage:
          "Giant pandas live in the mountain forests of central China, and although they belong to the bear family, almost everything they eat — about 99% of their diet — is bamboo. This is unusual, because a panda's digestive system is actually built more like a meat-eating animal's, not a plant-eating one, so pandas absorb very little energy from the tough bamboo they chew. To make up for this, a panda must eat an enormous amount of bamboo every day, often between 12 and 38 kilograms, and spend up to 12 hours a day simply eating to get enough energy to survive. Scientists believe pandas started eating mostly bamboo millions of years ago, possibly because there was less competition for it compared to meat, which other forest predators were already hunting. A special wrist bone that works almost like an extra thumb helps pandas grip bamboo stalks firmly while they eat.",
        tipTitle: "🔍 Fun Fact",
        tip: "A newborn panda cub is incredibly tiny compared to its mother — about the size of a stick of butter!",
        questions: [
          { type: "mc", prompt: "What percentage of a panda's diet is bamboo?", options: ["About 99%", "About 50%", "About 10%"], correctIndex: 0, explanation: "The passage says almost everything a panda eats — about 99% of its diet — is bamboo." },
          { type: "mc", prompt: "Why must pandas eat such huge amounts of bamboo every day?", options: ["Their digestive system absorbs very little energy from it", "Bamboo has no nutrients, so they eat it just to feel full", "Pandas are always hungry because they run around all day"], correctIndex: 0, explanation: "The passage says a panda's digestive system absorbs very little energy from the tough bamboo it chews." },
          { type: "mc", prompt: "What helps a panda grip bamboo stalks while eating?", options: ["A special wrist bone that works like an extra thumb", "Extra-long teeth that lock tightly onto the stalks", "Sticky pads that cling to smooth green stalks"], correctIndex: 0, explanation: "The passage says a special wrist bone works almost like an extra thumb to help pandas grip bamboo." },
        ],
      },
      {
        id: "know-easy-history-3",
        era: "myth",
        region: "China",
        title: "🌕 The Legend of Chang'e and the Moon",
        passage:
          "Long ago in Chinese legend, ten suns once appeared in the sky together, scorching the earth until crops withered and rivers dried up. A skilled archer named Hou Yi shot down nine of the suns with his bow, leaving just one to warm the world safely, and people celebrated him as a hero. As a reward, a goddess gave Hou Yi a magic elixir that could grant eternal life, but there was only enough for one person to drink. Hou Yi kept the elixir safely at home, planning to share it with his wife, Chang'e, one day. According to the most popular version of the story, Chang'e drank the elixir herself, and immediately felt herself grow lighter and lighter until she floated all the way up to the moon, where she has lived ever since. Today, families across China and Hong Kong remember Chang'e every autumn during the Mid-Autumn Festival, gazing at the full moon together and sharing sweet mooncakes in her honour.",
        tipTitle: "🔍 Fun Fact",
        tip: "China's lunar exploration programme is named \"Chang'e\" after the moon goddess — its Chang'e 4 mission was the first spacecraft ever to land on the far side of the Moon.",
        questions: [
          { type: "mc", prompt: "Why did Hou Yi shoot down nine of the ten suns?", options: ["They were scorching the earth and drying up rivers", "He wanted to become a famous hero for the fun of it", "The suns grew tired and asked him to stop them"], correctIndex: 0, explanation: "The passage says the ten suns were scorching the earth until crops withered and rivers dried up." },
          { type: "mc", prompt: "What happened after Chang'e drank the magic elixir?", options: ["She floated up to the moon and has lived there ever since", "She became invisible and wandered around the earth forever", "She turned into a white rabbit and hopped far away from home"], correctIndex: 0, explanation: "The passage says she floated all the way up to the moon, where she has lived ever since." },
          { type: "mc", prompt: "How do people in China and Hong Kong remember Chang'e today?", options: ["By celebrating the Mid-Autumn Festival with mooncakes", "By shooting arrows at the sky at the summer festival", "By staying indoors to avoid ever looking at the moon"], correctIndex: 0, explanation: "The passage says families remember Chang'e every autumn during the Mid-Autumn Festival with mooncakes." },
        ],
      },
      {
        id: "know-easy-history-4",
        era: "ancient",
        region: "Egypt",
        title: "🔺 Who Built the Great Pyramid?",
        passage:
          "The Great Pyramid of Giza in Egypt was built about 4,500 years ago as a tomb for a pharaoh named Khufu. It is made of roughly two million blocks of stone, and when it was finished it stood nearly 147 metres tall, which made it the tallest building in the world for thousands of years. Many people once believed that slaves built it, but archaeologists have since found the villages where the workers lived, along with bakeries, kitchens and signs that injured workers were treated by doctors. Workers were even buried in tombs close to the pyramid, which shows they were respected. Historians now think that thousands of well-fed workers, organised in teams, dragged the heavy stones on wooden sledges and pulled them up long ramps. Today, the Great Pyramid is the only one of the Seven Wonders of the Ancient World that is still standing.",
        tipTitle: "🔍 Fun Fact",
        tip: "The four sides of the Great Pyramid face almost exactly north, south, east and west, with an error of less than a tenth of a degree.",
        questions: [
          { type: "mc", prompt: "Who do historians now think built the Great Pyramid?", options: ["Thousands of well-fed workers in teams", "Slaves who were forced to work in chains", "Soldiers from a foreign army"], correctIndex: 0, explanation: "The passage says thousands of well-fed workers, organised in teams, built it. The idea that slaves built it is an old belief." },
          { type: "mc", prompt: "What did archaeologists find near the pyramid that shows how the workers lived?", options: ["Villages with bakeries and kitchens", "Castles with tall towers and moats", "Markets that sold gold and jewels"], correctIndex: 0, explanation: "They found the workers' villages, including bakeries, kitchens and signs of medical care." },
          { type: "mc", prompt: "Which statement about the Great Pyramid is TRUE?", options: ["It is the only ancient wonder still standing", "It was finished in just a few weeks by an army", "It was built as a palace for the pharaoh Khufu"], correctIndex: 0, explanation: "The passage says it is the only one of the Seven Wonders of the Ancient World still standing. It was a tomb, not a palace." },
        ],
      },
      {
        id: "know-easy-history-5",
        era: "medieval",
        region: "Peru",
        title: "🏔️ Machu Picchu: The City in the Clouds",
        passage:
          "High in the Andes Mountains of Peru, about 2,400 metres above sea level, stands the stone city of Machu Picchu. It was built in the 1400s by the Inca, who ruled a huge empire along the western coast of South America. Historians think it was a royal estate, a place where an emperor and his nobles could stay in the mountains. The Inca cut huge blocks of stone so precisely that many walls fit together without any mortar, and these walls have survived earthquakes for more than five hundred years. Farmers also built steep terraces on the hillsides to grow crops such as maize and potatoes. After the Inca Empire fell, the city was abandoned and hidden by clouds and forest, until an American explorer named Hiram Bingham brought it to the attention of the world in 1911. Today, thousands of visitors walk its paths every day.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Inca had no written alphabet. They kept records by tying knots in coloured strings called quipu.",
        questions: [
          { type: "mc", prompt: "Who built Machu Picchu, and when?", options: ["The Inca, in the 1400s", "The Maya, in the 1300s", "The Aztecs, in the 1200s"], correctIndex: 0, explanation: "The passage says it was built in the 1400s by the Inca." },
          { type: "mc", prompt: "Why have the stone walls survived earthquakes for so long?", options: ["The stones were cut to fit together precisely", "The gaps were filled with thick layers of clay", "The walls were built on flat bare rock"], correctIndex: 0, explanation: "The Inca cut the blocks so precisely that many walls fit together without mortar." },
          { type: "mc", prompt: "What were the steep terraces on the hillsides used for?", options: ["Growing crops such as maize and potatoes", "Keeping animals safe from the cold", "Watching for enemies from far away"], correctIndex: 0, explanation: "The passage says farmers built terraces to grow crops such as maize and potatoes." },
        ],
      },
      {
        id: "know-easy-history-6",
        era: "medieval",
        region: "Japan",
        title: "⚔️ The Samurai of Japan",
        passage:
          "For hundreds of years, Japan was protected by a class of warriors called samurai. They served powerful landowners called daimyo, and in return they received land or rice as payment. Samurai followed a code of honour known as bushido, which taught bravery, loyalty and self-control. Their most famous weapon was the katana, a curved sword made by skilled swordsmiths who folded the steel many times to make it strong yet flexible. But samurai were not only fighters. Many of them studied poetry, calligraphy and the tea ceremony, because they believed a true warrior should also have a calm and cultured mind. The samurai class ended in the 1870s, when Japan modernised during the Meiji period and built a new army that was open to everyone. Their stories, however, live on in films, books and martial arts such as kendo.",
        tipTitle: "🔍 Fun Fact",
        tip: "Samurai armour was made of many small plates laced together with silk cords, which kept it light enough to wear while riding a horse.",
        questions: [
          { type: "mc", prompt: "What did samurai receive for serving a daimyo?", options: ["Land or rice as payment", "Gold coins from the emperor", "Ships for trading overseas"], correctIndex: 0, explanation: "The passage says samurai received land or rice in return for their service." },
          { type: "mc", prompt: "What does the passage say about the samurai apart from fighting?", options: ["Many studied poetry, calligraphy and tea ceremony", "Most worked as farmers in the quiet countryside", "They spent most of their lives building castles"], correctIndex: 0, explanation: "Many samurai studied poetry, calligraphy and the tea ceremony to keep a calm and cultured mind." },
          { type: "mc", prompt: "Why did the samurai class come to an end?", options: ["Japan built a new army open to everyone", "The emperor sent all samurai overseas", "The samurai lost their swords at sea"], correctIndex: 0, explanation: "During the Meiji period, Japan modernised and built a new army that was open to everyone." },
        ],
      },
      {
        id: "know-easy-history-7",
        era: "modern",
        region: "Hong Kong",
        title: "🚋 Hong Kong's \"Ding Ding\" Trams",
        passage:
          "If you walk along the north side of Hong Kong Island, you may hear a friendly \"ding ding\" as a tall green tram rolls by. Hong Kong's tram line opened in 1904, when the first cars carried passengers along the waterfront. In 1912, the company began to build double-decker trams, and today the whole fleet is made up of double-deckers, which makes it the largest double-decker tram fleet in the world that is still in service. The trams are slow, but they are cheap and travel through busy neighbourhoods such as Wan Chai and Causeway Bay, so many people use them every day. The driver rings a bell to warn people crossing the road, which is where the nickname \"ding ding\" comes from. Although the buildings around them have changed enormously, the trams still follow the same route, connecting old Hong Kong with the new.",
        tipTitle: "🔍 Fun Fact",
        tip: "Many people say that the best seat in the city is at the front of the upper deck, where you can watch the streets pass beneath you.",
        questions: [
          { type: "mc", prompt: "When did Hong Kong's tram line open?", options: ["In 1904", "In 1954", "In 1997"], correctIndex: 0, explanation: "The passage says the tram line opened in 1904." },
          { type: "mc", prompt: "Where does the nickname \"ding ding\" come from?", options: ["The bell the driver rings to warn people", "The sound of the wheels on the track", "The music played when a tram arrives"], correctIndex: 0, explanation: "The driver rings a bell to warn people crossing the road, and that is where the nickname comes from." },
          { type: "mc", prompt: "What makes Hong Kong's tram fleet special?", options: ["Every tram is a double-decker", "The trams are the fastest in the world", "They only run at night"], correctIndex: 0, explanation: "The whole fleet is made up of double-deckers, the largest such fleet still in service." },
        ],
      },
      {
        id: "know-easy-history-8",
        era: "myth",
        region: "Greece / Turkey",
        title: "🐴 The Wooden Horse of Troy",
        passage:
          "According to an ancient Greek legend, the city of Troy was protected by tall stone walls, and for ten years the Greek army could not get inside. Then a clever Greek named Odysseus had an idea. The Greeks built a huge wooden horse, hid a group of soldiers inside it, and sailed away, leaving the horse outside the gates as a \"gift\". The people of Troy believed that the Greeks had given up. They pulled the horse into the city and celebrated all night. When the city fell asleep, the hidden soldiers climbed out, opened the gates and let the rest of the army in. Archaeologists have found the ruins of a real city called Troy in what is now Turkey, but nobody knows whether the wooden horse was real. Today, we still use the phrase \"Trojan horse\" for a trick that hides something harmful inside a harmless-looking gift.",
        tipTitle: "🔍 Fun Fact",
        tip: "The wooden horse is not in Homer's poem the Iliad. It appears later, in the Odyssey and in a Roman poem called the Aeneid.",
        questions: [
          { type: "mc", prompt: "How did the Greek soldiers get inside the walls of Troy?", options: ["They hid inside a huge wooden horse", "They climbed the walls at night", "They dug a tunnel under the gates"], correctIndex: 0, explanation: "The soldiers hid inside a wooden horse that the Trojans pulled into their city." },
          { type: "mc", prompt: "Why did the people of Troy pull the horse inside?", options: ["They thought the Greeks had given up", "They wanted to burn it in the square", "The Greek soldiers ordered them to"], correctIndex: 0, explanation: "The people believed the Greeks had sailed away and left the horse as a gift." },
          { type: "mc", prompt: "What does the phrase \"Trojan horse\" mean today?", options: ["A trick that hides a danger inside a gift", "A very fast and powerful racehorse from Troy", "A famous horse statue in a large museum"], correctIndex: 0, explanation: "The phrase describes a trick that hides something harmful inside something that looks harmless." },
        ],
      },
      {
        id: "know-easy-science-4",
        field: "physics",
        title: "🧲 How Do Magnets Work?",
        passage:
          "A magnet is an object that pulls on some metals, especially iron, without even touching them. Every magnet has two ends, called poles: a north pole and a south pole. Opposite poles attract each other, which means that a north pole and a south pole pull together, but two poles that are the same push each other away. Around every magnet there is an invisible area called a magnetic field, and the force is strongest close to the poles. Our planet is also a giant magnet, because of the hot liquid metal that moves deep inside it. This is why the needle of a compass always swings to point north: it is a tiny magnet lining up with Earth's magnetic field. Long ago, sailors used compasses to find their way across the sea when they could not see any land.",
        tipTitle: "🔍 Fun Fact",
        tip: "If you cut a magnet in half, you do not get one north pole and one south pole. You get two smaller magnets, each with its own north and south.",
        questions: [
          { type: "mc", prompt: "What happens when two north poles are brought close together?", options: ["They push each other away", "They pull tightly together", "They lose their magnetic force"], correctIndex: 0, explanation: "Poles that are the same push each other away. Only opposite poles attract." },
          { type: "mc", prompt: "Why does a compass needle point north?", options: ["It lines up with Earth's magnetic field", "It is pulled by the North Star above", "It is attracted to snow and ice"], correctIndex: 0, explanation: "The needle is a tiny magnet that lines up with Earth's magnetic field." },
          { type: "mc", prompt: "Where is the force of a magnet strongest?", options: ["Close to its poles", "In the exact centre", "Far away from it"], correctIndex: 0, explanation: "The passage says the magnetic force is strongest close to the poles." },
        ],
      },
      {
        id: "know-easy-science-5",
        field: "earth science",
        title: "🌊 Why Is the Ocean Salty?",
        passage:
          "If you have ever swallowed a mouthful of sea water, you know that the ocean tastes salty, but where does all the salt come from? Long ago, rain fell on the land and slowly wore away the rocks. The rain carried tiny amounts of minerals, including salt, into streams and rivers, and the rivers flowed into the sea. When the Sun heats the ocean, the water evaporates into the air and forms clouds, but the salt is left behind. Over millions of years, more and more salt has collected, until the ocean became as salty as it is today. On average, about 35 grams of every kilogram of sea water is salt. Rivers are salty too, but their water is only very slightly salty, so we call it fresh water.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Dead Sea is nearly ten times saltier than the ocean, so people can float on it without any effort.",
        questions: [
          { type: "mc", prompt: "How did salt first get into the ocean?", options: ["Rivers carried minerals from the rocks into the sea", "Fish slowly made salt inside their bodies over time", "Ships dropped salt into the water on long journeys"], correctIndex: 0, explanation: "Rain wore away rocks and rivers carried the minerals, including salt, to the sea." },
          { type: "mc", prompt: "What happens to the salt when the Sun heats the ocean?", options: ["It stays behind as the water evaporates", "It rises into the clouds with the water", "It turns into fresh water in the sky"], correctIndex: 0, explanation: "The water evaporates into clouds, but the salt is left behind in the ocean." },
          { type: "mc", prompt: "Why do we call river water \"fresh\"?", options: ["It is only very slightly salty", "It contains no minerals at all", "It is always cold and clear"], correctIndex: 0, explanation: "Rivers contain a little salt, but so little that we call the water fresh." },
        ],
      },
      {
        id: "know-easy-science-6",
        field: "biology",
        title: "🕷️ How Do Spiders Spin Webs?",
        passage:
          "A spider makes its web from silk, a thin, strong thread that is made inside its body as a liquid. The liquid comes out of small tubes at the back of the spider, called spinnerets, and turns into a solid thread as soon as it meets the air. A spider uses different kinds of silk for different jobs: sticky silk for catching insects, dry silk for the frame and spokes, and soft silk for wrapping its eggs. To build a round web, the spider first lets out a thread that floats on the wind until it sticks to a branch. Then it adds more threads to make the frame and the spokes, before spinning a sticky spiral to catch its food. Not every spider spins a web, however. Some, such as jumping spiders, hunt by creeping up on their prey and leaping on it.",
        tipTitle: "🔍 Fun Fact",
        tip: "A strand of spider silk is about as strong as a strand of steel of the same thickness, but it is much lighter and can stretch.",
        questions: [
          { type: "mc", prompt: "Where does a spider's silk come out of its body?", options: ["Small tubes called spinnerets", "Tiny holes at the end of its legs", "Its jaws at the front of its head"], correctIndex: 0, explanation: "The silk comes out of spinnerets at the back of the spider." },
          { type: "mc", prompt: "What is the sticky silk in a web used for?", options: ["Catching insects", "Wrapping its eggs", "Building the frame"], correctIndex: 0, explanation: "Sticky silk catches insects. Dry silk makes the frame and spokes, and soft silk wraps the eggs." },
          { type: "mc", prompt: "How does a jumping spider catch its food?", options: ["It creeps up and leaps on its prey", "It waits inside a round web", "It digs a deep hole in the ground"], correctIndex: 0, explanation: "Jumping spiders do not spin webs. They hunt by creeping up and leaping." },
        ],
      },
      {
        id: "know-easy-science-7",
        field: "astronomy",
        title: "🌙 Why Does the Moon Change Shape?",
        passage:
          "The Moon does not make any light of its own. We see it because it reflects light from the Sun, like a mirror. At any moment, half of the Moon is lit by the Sun, but the Moon travels around the Earth once about every month, so we see different amounts of the lit half. When the Moon is between us and the Sun, its lit side faces away from us and we cannot see it: this is called a new moon. About a week later, we see half of the lit side, called a quarter moon. When the Earth is between the Moon and the Sun, we see the whole lit side as a full moon. After that, the bright part shrinks again until it disappears, and the cycle starts once more. The whole cycle takes about twenty-nine and a half days.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Moon always shows the same face to the Earth, because it spins exactly once each time it travels around us.",
        questions: [
          { type: "mc", prompt: "Why can we see the Moon in the sky?", options: ["It reflects light from the Sun", "It makes its own bright light", "It glows from the heat inside"], correctIndex: 0, explanation: "The Moon does not make light. It reflects sunlight, like a mirror." },
          { type: "mc", prompt: "What do we see during a new moon?", options: ["The lit side faces away, so we cannot see it", "The whole lit side shining brightly at us", "Only a thin bright ring all around the edge"], correctIndex: 0, explanation: "At a new moon, the Moon is between us and the Sun, so its lit side faces away from us." },
          { type: "mc", prompt: "About how long does the whole cycle of Moon shapes take?", options: ["About 29 and a half days", "About one week in total", "About twelve full months"], correctIndex: 0, explanation: "The passage says the whole cycle takes about twenty-nine and a half days." },
        ],
      },
    ],
    medium: [
      {
        id: "know-medium-history",
        era: "modern",
        region: "Hong Kong",
        title: "⛴️ The Story of the Star Ferry",
        passage:
          "For more than a hundred years, the Star Ferry has carried passengers back and forth across Victoria Harbour, connecting Hong Kong Island to Kowloon. Before bridges and tunnels existed, the ferry was often the only practical way for people to cross the harbour every day, whether they were heading to work, school, or the market. The company that runs it today began in 1888, and its green-and-white boats, each named after a star, became such a familiar part of daily life that many Hong Kong residents still consider the short ferry ride a beloved tradition rather than just a way to get around. Even after modern tunnels and the MTR made faster crossings possible, the Star Ferry kept running, partly because of its low fare, and partly because so many people simply enjoy the view of the skyline from the water. In 2009, a well-known travel magazine named it one of the world's most exciting ferry rides, largely because of that same iconic harbour view.",
        tipTitle: "🔍 Fun Fact",
        tip: "Each Star Ferry boat is named after a star, like \"Morning Star\" or \"Twinkling Star.\"",
        questions: [
          { type: "mc", prompt: "What did the Star Ferry connect before bridges and tunnels existed?", options: ["Hong Kong Island and Kowloon", "Hong Kong and mainland China", "Two different countries"], correctIndex: 0, explanation: "The passage says the ferry connects Hong Kong Island to Kowloon across Victoria Harbour." },
          { type: "mc", prompt: "Why do many Hong Kong residents still enjoy the Star Ferry even though faster options exist?", options: ["Its low fare and the enjoyable harbour view", "It's now the only way to cross the harbour", "It's much faster than crossing by the MTR"], correctIndex: 0, explanation: "The passage says people keep riding it partly for the low fare and partly for the skyline view." },
          { type: "mc", prompt: "What does the passage suggest made the Star Ferry famous internationally?", options: ["Its iconic harbour view", "Its speed", "Its low ticket price alone"], correctIndex: 0, explanation: "A travel magazine named it one of the world's most exciting rides largely because of the harbour view." },
        ],
      },
      {
        id: "know-medium-history-2",
        era: "modern",
        region: "Hong Kong",
        title: "🇭🇰 Hong Kong's Handover in 1997",
        passage:
          "For 156 years, Hong Kong was governed as a British colony, a situation that began in 1842 after the First Opium War and later expanded through a 99-year lease signed in 1898 covering the New Territories. As that lease approached its end in the 1980s, the governments of the United Kingdom and China negotiated what should happen next, eventually signing the Sino-British Joint Declaration in 1984. Under this agreement, sovereignty over the whole territory, not just the leased New Territories, would transfer to China, but Hong Kong would keep its own legal system, currency, and way of life for fifty years under a policy known as \"one country, two systems.\" At midnight on 1 July 1997, in a ceremony attended by leaders and dignitaries from around the world, the British flag was formally lowered and the flags of China and the Hong Kong Special Administrative Region were raised in its place. For many residents who had lived their whole lives under British rule, the handover was an emotional moment mixing pride, uncertainty, and hope for what the new arrangement would bring.",
        tipTitle: "🔍 Fun Fact",
        tip: "\"One country, two systems\" was designed to last until 2047 — fifty years after the 1997 handover.",
        questions: [
          { type: "mc", prompt: "What agreement set out the terms of Hong Kong's handover?", options: ["The Sino-British Joint Declaration", "The Treaty of Versailles of 1919", "The United Nations Charter of 1945"], correctIndex: 0, explanation: "The passage says the UK and China signed the Sino-British Joint Declaration in 1984." },
          { type: "mc", prompt: "Under \"one country, two systems,\" what did Hong Kong keep for fifty years?", options: ["Its own legal system, currency, and way of life", "Complete independence from China and Britain", "British citizenship for everyone who lived there"], correctIndex: 0, explanation: "The passage says Hong Kong would keep its own legal system, currency, and way of life for fifty years." },
          { type: "mc", prompt: "When exactly did the handover ceremony take place?", options: ["At midnight on 1 July 1997", "On New Year's Day in 2000", "In 1984, after the signing"], correctIndex: 0, explanation: "The passage says the ceremony happened at midnight on 1 July 1997." },
        ],
      },
      {
        id: "know-medium-science",
        field: "earth science",
        title: "🌋 How Volcanoes Erupt",
        passage:
          "Deep beneath the Earth's surface, temperatures are so high that solid rock slowly melts into a thick, flowing liquid called magma. Because magma is lighter than the solid rock surrounding it, it gradually rises upward, sometimes collecting in large underground chambers. As more magma and gas build up pressure inside these chambers, cracks can form in the rock above, giving the magma a path to the surface. Once it breaks through, the magma is called lava, and depending on how thick or thin it is, an eruption can either flow slowly downhill or explode violently into the sky, sometimes throwing ash for miles. Scientists monitor active volcanoes closely, watching for small earthquakes and changes in gas levels, both of which often increase in the days or weeks before an eruption, giving nearby communities crucial time to evacuate.",
        tipTitle: "🔍 Fun Fact",
        tip: "There are over 1,500 potentially active volcanoes in the world today.",
        questions: [
          { type: "mc", prompt: "What is magma called once it reaches the Earth's surface?", options: ["Lava", "Ash", "Steam"], correctIndex: 0, explanation: "The passage says once magma breaks through to the surface, it's called lava." },
          { type: "mc", prompt: "Why does magma rise up toward the surface?", options: ["It is lighter than the solid rock around it", "It is pushed upwards by deep ocean water", "It is pulled upwards by the heat of the Sun"], correctIndex: 0, explanation: "Magma is lighter than the surrounding solid rock, so it gradually rises." },
          { type: "mc", prompt: "How do scientists often predict when a volcano might erupt?", options: ["By watching for small earthquakes and gas level changes", "By measuring how tall the volcano grows each year", "By checking the weather forecast for the whole region"], correctIndex: 0, explanation: "The passage says scientists watch for small earthquakes and changes in gas levels." },
        ],
      },
      {
        id: "know-medium-science-2",
        field: "biology",
        title: "🍯 How Do Bees Make Honey?",
        passage:
          "When a worker bee visits a flower, it drinks the flower's sweet liquid, called nectar, using a long tube-shaped tongue and stores it inside a special pouch called a honey stomach, completely separate from the stomach it uses for normal digestion. Back at the hive, the bee passes the nectar to another worker bee mouth-to-mouth, and this process repeats several times, with each bee adding enzymes that begin breaking the nectar's complex sugars down into simpler ones. Once the nectar is deposited into a honeycomb cell, it is still far too watery to be called honey, so worker bees fan their wings rapidly over the open cells to speed up evaporation, removing much of the water content. When the mixture becomes thick and sticky enough, the bees seal the cell with a thin cap of beeswax, protecting the finished honey so it can be stored safely for months or even years without spoiling. A single bee produces only a tiny fraction of a teaspoon of honey in its entire lifetime, which is why a hive needs thousands of bees working together.",
        tipTitle: "🔍 Fun Fact",
        tip: "Honey found in ancient Egyptian tombs, thousands of years old, has been discovered still perfectly edible — honey almost never spoils.",
        questions: [
          { type: "mc", prompt: "Where does a bee store nectar before returning to the hive?", options: ["In a special honey stomach", "In its normal digestive stomach", "On its wings"], correctIndex: 0, explanation: "The passage says the bee stores nectar in a special honey stomach, separate from its digestive stomach." },
          { type: "mc", prompt: "Why do bees fan their wings over the honeycomb cells?", options: ["To evaporate water and thicken the nectar", "To cool down the hive on hot summer days", "To attract more bees to the honeycomb cells"], correctIndex: 0, explanation: "The passage says fanning speeds up evaporation, removing much of the water content." },
          { type: "mc", prompt: "Why does a hive need thousands of bees working together?", options: ["Each bee produces only a tiny amount of honey", "Only a few of the bees are allowed to make honey", "Bees are only able to work for one day at a time"], correctIndex: 0, explanation: "The passage says a single bee produces only a tiny fraction of a teaspoon in its lifetime." },
        ],
      },
      {
        id: "know-medium-history-3",
        era: "medieval",
        region: "China",
        title: "⛵ Zheng He's Great Treasure Fleet",
        passage:
          "During the early 1400s, the Ming dynasty emperor of China ordered the construction of one of the largest fleets the world had ever seen, and placed a trusted admiral named Zheng He in command. Zheng He's treasure fleet was staggering in scale: some voyages involved more than 300 ships, including massive \"treasure ships\" that may have stretched over 120 metres long, carrying a combined crew of over 27,000 sailors, officials, translators, and craftsmen. Between 1405 and 1433, Zheng He led seven major expeditions across the South China Sea and Indian Ocean, reaching as far as the Arabian Peninsula and the east coast of Africa, decades before European explorers began their own famous voyages. Rather than conquering the lands he visited, Zheng He mainly focused on trade and diplomacy, exchanging Chinese silk and porcelain for spices, precious stones, and exotic goods, and even brought exotic animals like giraffes back to the Ming court. After Zheng He's death in 1433, changing political priorities led China to gradually abandon these grand naval expeditions, a decision historians still debate today.",
        tipTitle: "🔍 Fun Fact",
        tip: "When one of Zheng He's ships brought a giraffe back to China, some at the royal court believed it was a mythical creature called a \"qilin\"!",
        questions: [
          { type: "mc", prompt: "How many major expeditions did Zheng He lead between 1405 and 1433?", options: ["Seven", "Two", "Twenty"], correctIndex: 0, explanation: "The passage says Zheng He led seven major expeditions between 1405 and 1433." },
          { type: "mc", prompt: "What was Zheng He's fleet mainly focused on during its voyages?", options: ["Trade and diplomacy rather than conquering land", "Conquering as many distant countries as possible", "Fishing for extra food supplies along the coast"], correctIndex: 0, explanation: "The passage says Zheng He mainly focused on trade and diplomacy rather than conquering the lands he visited." },
          { type: "mc", prompt: "What surprising thing did Zheng He's fleet once bring back to the Ming court?", options: ["A giraffe", "A dinosaur", "A submarine"], correctIndex: 0, explanation: "The passage says the fleet brought exotic animals like giraffes back to the Ming court." },
        ],
      },
      {
        id: "know-medium-science-3",
        field: "chemistry",
        title: "🧊 Why Does Ice Float on Water?",
        passage:
          "Most substances shrink and become denser as they cool down and turn solid, which is exactly what happens to water too — until it reaches freezing point. As water cools toward 0°C, its molecules begin arranging themselves into a very specific six-sided crystal pattern, and this hexagonal structure actually forces the molecules to spread slightly further apart than they were in liquid form. Because ice takes up more space than the same amount of liquid water, it ends up being less dense, and less dense materials always float on top of denser ones. This unusual property turns out to be incredibly important for life on Earth: when a lake or pond freezes in winter, the ice forms a floating layer on the surface rather than sinking to the bottom, which means the water underneath stays liquid, allowing fish and other creatures to survive the cold months below the ice instead of being trapped inside a solid block.",
        tipTitle: "🔍 Fun Fact",
        tip: "If ice sank instead of floated, lakes and oceans would freeze from the bottom up, and far fewer forms of life could survive winter.",
        questions: [
          { type: "mc", prompt: "Why does ice take up more space than liquid water?", options: ["Its molecules arrange into a spread-out crystal pattern", "It absorbs lots of extra air bubbles while it freezes", "It shrinks and packs tightly together like a dense block"], correctIndex: 0, explanation: "The passage says ice's hexagonal crystal structure forces molecules to spread slightly further apart." },
          { type: "mc", prompt: "Why is it useful that ice floats instead of sinks?", options: ["It keeps the water below liquid so creatures survive winter", "It makes whole lakes freeze solid all the way to the bottom", "It has no real effect on the lakes, the animals or the plants"], correctIndex: 0, explanation: "The passage says the floating ice layer keeps the water underneath liquid, letting creatures survive winter." },
          { type: "mc", prompt: "What generally happens to most substances as they cool and become solid?", options: ["They shrink and become denser", "They expand and float", "They disappear completely"], correctIndex: 0, explanation: "The passage says most substances shrink and become denser as they cool down and turn solid." },
        ],
      },
      {
        id: "know-medium-history-4",
        era: "ancient",
        region: "Greece",
        title: "🏅 The Ancient Olympic Games",
        passage:
          "The first Olympic Games are traditionally said to have begun in 776 BCE at Olympia, a religious site in Greece. They were held every four years to honour Zeus, the king of the Greek gods, and they were so important that wars between the Greek city-states were paused so that athletes and visitors could travel safely. At first, there was only one event, a running race of about 192 metres called the stadion. Over time, more events were added, such as wrestling, chariot racing and the pentathlon, which combined five different sports. Only free Greek men were allowed to compete, and married women were not allowed to watch, although women held their own festival, the Heraia, in honour of the goddess Hera. Winners did not receive gold medals. Instead, they were given a crown of olive leaves and returned to their home cities as heroes. The ancient Games continued for nearly twelve hundred years, until they ended in the fourth century CE. The modern Olympics began in Athens in 1896.",
        tipTitle: "🔍 Fun Fact",
        tip: "The word \"stadium\" comes from the Greek word stadion, which was the name of the running race and also the length of the track.",
        questions: [
          { type: "mc", prompt: "Why did wars between Greek city-states pause during the Games?", options: ["So athletes and visitors could travel safely", "Because the soldiers all wanted to compete too", "Because the gods demanded a long rest from war"], correctIndex: 0, explanation: "The Games were so important that fighting was paused so people could travel safely to Olympia." },
          { type: "mc", prompt: "What did the winners receive?", options: ["A crown made of olive leaves", "A gold medal on a ribbon", "A large bag of silver coins"], correctIndex: 0, explanation: "Winners were given a crown of olive leaves, not a gold medal." },
          { type: "mc", prompt: "Which statement about the ancient Games is TRUE?", options: ["They were held every four years in honour of Zeus", "Women and men competed in the same events", "They were held once in each city-state every year"], correctIndex: 0, explanation: "The Games took place every four years to honour Zeus. Only free Greek men could compete." },
        ],
      },
      {
        id: "know-medium-history-5",
        era: "medieval",
        region: "Mongolia / Central Asia",
        title: "🐎 The Mongol Empire's Express Riders",
        passage:
          "In the thirteenth century, the Mongol Empire stretched from China to Eastern Europe, and it was the largest land empire in history. To govern such a huge area, its leaders needed news to travel fast, so they built a relay system called the yam. Along the main roads, stations were placed every thirty to forty kilometres, each with fresh horses, food and a place to rest. A rider carrying an urgent message would gallop to the next station, swap to a fresh horse and continue at once, so that a message could travel hundreds of kilometres in a single day. Riders wore bells on their belts so that station keepers would hear them coming and have a horse ready. Travellers with special metal tablets, called paiza, could use the stations for free, which also helped merchants and diplomats to cross the empire safely. Historians believe this network helped to hold the empire together, and it remained one of the fastest communication systems in the world until the invention of the telegraph.",
        tipTitle: "🔍 Fun Fact",
        tip: "The traveller Marco Polo was so impressed by the Mongol relay stations that he described them in his famous book.",
        questions: [
          { type: "mc", prompt: "Why did the Mongols build the yam relay system?", options: ["To send news quickly across a huge empire", "To give tourists a way to see the empire", "To help farmers sell food in far cities"], correctIndex: 0, explanation: "The leaders needed news to travel fast across the huge empire." },
          { type: "mc", prompt: "How could a message travel hundreds of kilometres in a day?", options: ["Riders swapped to a fresh horse at each station", "Riders rode one strong horse without a break", "Messages were carried by fast ships along rivers"], correctIndex: 0, explanation: "A rider changed to a fresh horse at every station and continued straight away." },
          { type: "mc", prompt: "What was the purpose of the bells on the riders' belts?", options: ["To warn station keepers to have a horse ready", "To scare wild animals away from the long road", "To show that the rider was a rich merchant"], correctIndex: 0, explanation: "The bells let station keepers hear the rider coming and prepare a fresh horse." },
        ],
      },
      {
        id: "know-medium-history-6",
        era: "modern",
        region: "England",
        title: "🔥 The Great Fire of London",
        passage:
          "In the early hours of 2 September 1666, a fire began in a baker's shop on Pudding Lane in London. In those days, most houses were built of wood and packed closely together along narrow streets, and the summer had been very dry, so the flames spread quickly. A strong wind carried burning sparks from roof to roof, and the fire raged for four days. By the time it was over, it had destroyed about thirteen thousand houses and eighty-seven churches, including the old St Paul's Cathedral. Fortunately, only a small number of deaths were officially recorded, because most people managed to escape to the fields outside the city. After the fire, London was rebuilt with wider streets and with houses of brick or stone, and new laws were made to make buildings safer. Sir Christopher Wren designed the new St Paul's Cathedral and many other churches. Fire insurance companies also appeared in London soon afterwards.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Monument, a tall stone column in London, is about 62 metres high, which is exactly its distance from the baker's shop where the fire started.",
        questions: [
          { type: "mc", prompt: "Why did the fire spread so quickly?", options: ["Wooden houses stood close together on narrow streets", "The fire began at midnight when nobody was awake", "Most houses were built of thick stone and clay tiles"], correctIndex: 0, explanation: "Houses were mostly wood, packed together, and the summer was dry, with a strong wind." },
          { type: "mc", prompt: "What changed in London after the fire?", options: ["Wider streets and buildings of brick or stone", "All the churches were left in ruins", "People were told to move to the countryside"], correctIndex: 0, explanation: "London was rebuilt with wider streets and brick or stone houses, and new safety laws." },
          { type: "mc", prompt: "Who designed the new St Paul's Cathedral?", options: ["Sir Christopher Wren", "The Pudding Lane baker", "King Charles the Second"], correctIndex: 0, explanation: "The passage says Sir Christopher Wren designed the new St Paul's Cathedral." },
        ],
      },
      {
        id: "know-medium-history-7",
        era: "modern",
        region: "Panama",
        title: "🚢 Building the Panama Canal",
        passage:
          "Before 1914, a ship travelling from the Atlantic Ocean to the Pacific Ocean had to sail all the way around the southern tip of South America, a dangerous journey of thousands of kilometres. To create a shortcut, engineers decided to cut a canal through the narrow country of Panama. A French company tried first, but it gave up after many workers fell ill with diseases such as yellow fever and malaria, which are spread by mosquitoes. When the United States took over the project in 1904, doctors led by William Gorgas drained swamps and cleared standing water to reduce the mosquitoes, which made the work far safer. Workers then dug through mountains and built enormous locks, which work like giant water lifts. A ship enters a lock, the gates close, and water flows in or out until the ship has been raised or lowered to the next level. The canal opened in August 1914, and it saved ships thousands of kilometres of travel.",
        tipTitle: "🔍 Fun Fact",
        tip: "Ships are pulled through the locks by small electric locomotives called \"mules\", which run on tracks beside the canal.",
        questions: [
          { type: "mc", prompt: "Why did the French company give up?", options: ["Many workers fell ill with diseases from mosquitoes", "The country of Panama refused to sell them the land", "The mountains were too soft to dig through safely"], correctIndex: 0, explanation: "Many workers became ill with yellow fever and malaria, which mosquitoes spread." },
          { type: "mc", prompt: "How did Gorgas and his doctors make the work safer?", options: ["They drained swamps and cleared standing water", "They gave every single worker a strong medicine", "They moved all of the workers to a new island"], correctIndex: 0, explanation: "Draining swamps and clearing standing water reduced the number of mosquitoes." },
          { type: "mc", prompt: "What does a lock do?", options: ["Raises or lowers a ship using water", "Stops other ships from entering the canal", "Measures how heavy a ship is"], correctIndex: 0, explanation: "A lock works like a giant water lift, raising or lowering a ship to the next level." },
        ],
      },
      {
        id: "know-medium-history-8",
        era: "medieval",
        region: "Mexico",
        title: "🏝️ Tenochtitlan: The City on a Lake",
        passage:
          "In 1325, the Aztec people, who were also called the Mexica, began to build a city on a small island in Lake Texcoco, in what is now Mexico. According to legend, their gods had told them to settle where they saw an eagle perched on a cactus, eating a snake, and this image still appears on Mexico's flag today. Because the island was small, the Aztecs made more land by building chinampas, floating gardens made from mud, reeds and branches, where they grew maize, beans and flowers. Three long causeways connected the city to the shore, and canals ran through the streets, so many people travelled by canoe. At its height, Tenochtitlan had around 200,000 people, which made it larger than most cities in Europe at the time. It had huge markets, temples and aqueducts that brought fresh water into the city. When Spanish soldiers arrived in 1519, they were amazed by its size. Today, Mexico City lies on top of its ruins.",
        tipTitle: "🔍 Fun Fact",
        tip: "Mexico City sinks by several centimetres every year in some places, because it is built on the soft bed of the old lake.",
        questions: [
          { type: "mc", prompt: "How did the Aztecs make more land for growing food?", options: ["They built floating gardens called chinampas", "They cut down the forests around the lake", "They filled the whole lake with sand"], correctIndex: 0, explanation: "The Aztecs built chinampas, floating gardens made from mud, reeds and branches." },
          { type: "mc", prompt: "Why did many people travel by canoe in Tenochtitlan?", options: ["Canals ran through the streets of the city", "There were no horses anywhere in Mexico", "The streets were closed to everyone"], correctIndex: 0, explanation: "Canals ran through the city, so canoes were a natural way to travel." },
          { type: "mc", prompt: "What image from the legend appears on Mexico's flag?", options: ["An eagle on a cactus eating a snake", "A jaguar guarding a golden temple", "A serpent wrapped around a mountain"], correctIndex: 0, explanation: "The legend says the gods told the Aztecs to settle where they saw an eagle perched on a cactus, eating a snake." },
        ],
      },
      {
        id: "know-medium-science-4",
        field: "physics",
        title: "✈️ How Do Aeroplanes Fly?",
        passage:
          "An aeroplane weighs many tonnes, so how does it stay in the air? Four forces act on it: weight pulls it down, lift pushes it up, thrust pushes it forward, and drag slows it down. The engines create thrust, either by spinning propellers or by blasting out hot gas. As the plane speeds along the runway, air rushes past its wings. A wing is curved on the top and flatter underneath, and it is tilted slightly upwards. The air moving over the top travels faster, which lowers the pressure above the wing, and the wing also pushes the air downwards. Together, these effects create lift. When the lift is greater than the weight, the plane rises into the sky. Pilots move flaps on the wings and tail to climb, descend and turn. The first successful flight of a powered aeroplane was made by the Wright brothers in 1903. It lasted only twelve seconds and covered about thirty-seven metres.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Wright brothers' first flight covered a shorter distance than the wingspan of a modern jumbo jet.",
        questions: [
          { type: "mc", prompt: "What force do the engines of an aeroplane create?", options: ["Thrust, which pushes the plane forward", "Weight, which pulls the plane down", "Drag, which slows the plane down"], correctIndex: 0, explanation: "Engines create thrust, which pushes the aeroplane forward." },
          { type: "mc", prompt: "What happens when the lift is greater than the weight?", options: ["The plane rises into the sky", "The plane slows down and lands", "The plane spins in circles"], correctIndex: 0, explanation: "When lift is greater than weight, the plane can rise." },
          { type: "mc", prompt: "What is special about the shape of a wing?", options: ["It is curved on top and flatter underneath", "It is completely flat on both of its sides", "It is thin and shaped like a long needle"], correctIndex: 0, explanation: "A wing is curved on top and flatter below, which helps to create lift." },
        ],
      },
      {
        id: "know-medium-science-5",
        field: "biology",
        title: "❤️ How Does the Heart Work?",
        passage:
          "Your heart is a muscle about the size of your fist, and it never takes a rest. It pumps blood around your body through a network of tubes called blood vessels, delivering oxygen and nutrients to every cell. The heart has four chambers: the two upper chambers, called atria, receive blood, and the two lower chambers, called ventricles, push it out. The right side of the heart sends blood to the lungs, where it picks up oxygen. The blood then returns to the left side, which pumps it around the rest of the body. Four valves inside the heart work like one-way doors, making sure that the blood flows only in the right direction. The \"lub-dub\" sound of a heartbeat is the sound of these valves closing. A resting heart beats about seventy times a minute, which adds up to roughly a hundred thousand beats every day. Exercise makes the heart beat faster, because your muscles need more oxygen.",
        tipTitle: "🔍 Fun Fact",
        tip: "Over an average lifetime, a human heart beats more than two and a half billion times.",
        questions: [
          { type: "mc", prompt: "What does the right side of the heart do?", options: ["It sends blood to the lungs to pick up oxygen", "It pumps blood straight to the brain only", "It stores blood until the body needs it"], correctIndex: 0, explanation: "The right side sends blood to the lungs, where it picks up oxygen." },
          { type: "mc", prompt: "What makes the \"lub-dub\" sound of a heartbeat?", options: ["The valves closing inside the heart", "The blood rushing through the lungs", "The muscles of the heart stretching"], correctIndex: 0, explanation: "The sound is made by the heart valves closing." },
          { type: "mc", prompt: "Why does exercise make your heart beat faster?", options: ["Your muscles need more oxygen", "Your blood needs to become colder", "Your heart wants to rest sooner"], correctIndex: 0, explanation: "Working muscles need more oxygen, so the heart pumps faster to deliver it." },
        ],
      },
      {
        id: "know-medium-science-6",
        field: "chemistry",
        title: "🪟 How Is Glass Made?",
        passage:
          "Glass is one of the oldest human-made materials, and it starts as something as ordinary as sand. To make it, glassmakers mix sand, which is mostly a substance called silica, with soda ash and limestone. The soda ash helps the sand to melt at a lower temperature, and the limestone makes the finished glass harder and stops it from dissolving in water. The mixture is heated in a furnace to about 1,500 degrees Celsius, until it becomes a glowing liquid. While the glass is still soft, it can be blown into bottles, pressed into moulds, or rolled into flat sheets. Most windows are made by floating melted glass on a bath of liquid tin, so that it spreads out perfectly flat. After it has been shaped, the glass must be cooled slowly, because cooling it too quickly would make it crack. Glass can be recycled again and again without losing its quality, so old bottles can be melted down to make new ones.",
        tipTitle: "🔍 Fun Fact",
        tip: "Nature makes glass too. When lightning strikes sand, or when a volcano erupts, the great heat can turn sand or rock into natural glass such as obsidian.",
        questions: [
          { type: "mc", prompt: "What is the main ingredient of glass?", options: ["Sand, which is mostly silica", "Tin, which is melted in a bath", "Limestone, which is ground to powder"], correctIndex: 0, explanation: "Glass starts as sand, which is mostly silica. Soda ash and limestone are mixed in." },
          { type: "mc", prompt: "Why is glass cooled slowly after it is shaped?", options: ["Cooling it too quickly would make it crack", "Slow cooling turns it into a different metal", "Fast cooling makes it stick to the moulds"], correctIndex: 0, explanation: "The passage says cooling too quickly would make the glass crack." },
          { type: "mc", prompt: "What is the benefit of recycling glass?", options: ["It can be reused again and again without losing quality", "It becomes much stronger each time it is melted down", "It changes into plastic when it is heated in a furnace"], correctIndex: 0, explanation: "Glass can be recycled again and again without losing its quality." },
        ],
      },
      {
        id: "know-medium-science-7",
        field: "earth science",
        title: "🌍 What Causes Earthquakes?",
        passage:
          "The outer layer of the Earth is not one solid piece. It is broken into huge slabs of rock called tectonic plates, which move very slowly on the hot, soft rock beneath them, at about the speed that your fingernails grow. Where two plates meet, they can push against each other, pull apart or slide past one another. Sometimes the edges get stuck, and pressure builds up for many years. When the rock finally breaks and slips, the stored energy is released as waves that shake the ground: an earthquake. The place underground where the rock breaks is called the focus, and the point on the surface directly above it is called the epicentre. Scientists measure earthquakes with instruments called seismometers, and they describe the size of an earthquake with a magnitude number. About ninety per cent of the world's earthquakes happen around the edge of the Pacific Ocean, in a region known as the Ring of Fire.",
        tipTitle: "🔍 Fun Fact",
        tip: "Hong Kong is far from the edges of the tectonic plates, so it feels only small tremors, although people sometimes feel earthquakes that start in nearby regions.",
        questions: [
          { type: "mc", prompt: "What are tectonic plates?", options: ["Huge slabs of rock that make up the Earth's outer layer", "Flat metal sheets buried deep under the world's oceans", "Layers of hot liquid gas inside the middle of the Sun"], correctIndex: 0, explanation: "The outer layer of the Earth is broken into huge slabs of rock called tectonic plates." },
          { type: "mc", prompt: "What is the epicentre of an earthquake?", options: ["The point on the surface directly above the focus", "The place deep underground where the rock breaks", "The instrument used to measure earthquake waves"], correctIndex: 0, explanation: "The focus is underground. The epicentre is the point on the surface directly above it." },
          { type: "mc", prompt: "Where do most of the world's earthquakes happen?", options: ["Around the edge of the Pacific Ocean", "In the middle of large deserts", "Only near the North and South Poles"], correctIndex: 0, explanation: "About ninety per cent happen around the Pacific Ocean, in the Ring of Fire." },
        ],
      },
    ],
    hard: [
      {
        id: "know-hard-history",
        era: "ancient",
        region: "China",
        title: "🏺 The Terracotta Army",
        passage:
          "In 1974, a group of farmers digging a well in Shaanxi province, China, stumbled upon something extraordinary: fragments of a clay figure buried beneath the earth. What they had discovered turned out to be part of one of the most significant archaeological finds of the twentieth century — an underground army of thousands of life-sized terracotta soldiers, horses, and chariots, buried more than two thousand years ago to guard the tomb of China's first emperor, Qin Shi Huang. Remarkably, no two soldiers' faces are exactly alike; historians believe artisans may have combined a set of standard templates with individual details to create the illusion of a truly unique army, though the exact method remains debated. Originally, the figures were painted in vivid colours, but most of that paint has faded or flaked away in the centuries since burial, exposed briefly to air during excavation before specialists could properly preserve it. Today, only a fraction of the vast burial site has been excavated, since archaeologists have deliberately left large sections untouched, waiting for better preservation technology to be developed so that future excavations can be conducted with less damage to fragile details like the original paint.",
        tipTitle: "🔍 Fun Fact",
        tip: "Archaeologists have found terracotta soldiers with different hairstyles matching different ranks in the ancient army.",
        questions: [
          { type: "mc", prompt: "Who accidentally discovered the Terracotta Army?", options: ["Farmers digging a well", "A team of archaeologists", "Tourists visiting a museum"], correctIndex: 0, explanation: "The passage says farmers digging a well in Shaanxi province made the discovery." },
          { type: "mc", prompt: "What is notable about the soldiers' faces, according to the passage?", options: ["No two are exactly alike", "They are all identical", "None of them have faces"], correctIndex: 0, explanation: "The passage says remarkably, no two soldiers' faces are exactly alike." },
          { type: "mc", prompt: "Why have archaeologists left large sections of the site unexcavated?", options: ["They're waiting for better preservation technology", "They ran out of money and could not pay the workers", "They believe there is nothing more left to find there"], correctIndex: 0, explanation: "The passage says they're waiting for better preservation technology to avoid damaging fragile details." },
        ],
      },
      {
        id: "know-hard-history-2",
        era: "ancient",
        region: "Asia / Europe",
        title: "🐫 The Silk Road",
        passage:
          "Despite its name, the Silk Road was never a single paved road, but rather a shifting network of overland and sea trade routes that eventually connected China to the Mediterranean world, stretching across Central Asia, Persia, and beyond. Traders rarely travelled the entire route themselves; instead, goods typically passed through a long relay of merchants, each covering one section before handing goods off to the next, changing hands dozens of times before reaching their final destination thousands of kilometres away. Chinese silk was one of the most prized goods moving westward, valued so highly in Rome that some senators reportedly complained about the empire's silver draining away to pay for it, but the network carried far more than fabric — spices, precious stones, glassware, and paper travelled alongside ideas, religions, and inventions that reshaped the societies they reached. Buddhism spread into China partly along these same routes, while papermaking technology eventually travelled the opposite direction into the Islamic world and then Europe. The routes also carried less welcome cargo: historians believe the network likely helped spread the bubonic plague westward in the fourteenth century, showing that increased connection between distant civilizations could bring danger just as easily as prosperity.",
        tipTitle: "🔍 Fun Fact",
        tip: "The term \"Silk Road\" wasn't actually used by ancient traders — a German geographer named Ferdinand von Richthofen coined the name in 1877, long after the routes had declined.",
        questions: [
          { type: "mc", prompt: "Was the Silk Road a single road?", options: ["No, it was a shifting network of many trade routes", "Yes, it was one long paved road built by China", "Yes, it was a single long sea route across oceans"], correctIndex: 0, explanation: "The passage says despite its name, it was never a single paved road but a shifting network of routes." },
          { type: "mc", prompt: "How did goods typically travel the full length of the Silk Road?", options: ["Through a long relay of many different merchants", "Carried by a single trader the whole way across", "Shipped directly by the Chinese emperor's fleet"], correctIndex: 0, explanation: "The passage says goods passed through a long relay of merchants, changing hands dozens of times." },
          { type: "mc", prompt: "According to the passage, what else spread along the Silk Road besides goods?", options: ["Ideas, religions, inventions — and even disease", "Only silk, spices, and jewels — and nothing else", "Modern machines like cars — and even aeroplanes"], correctIndex: 0, explanation: "The passage mentions ideas, religions, and inventions spreading, as well as the bubonic plague." },
        ],
      },
      {
        id: "know-hard-science",
        field: "biology",
        title: "💉 How Vaccines Work",
        passage:
          "When a harmful virus or bacteria enters the body for the first time, the immune system needs time to recognise it as a threat and produce the right defences, called antibodies, to fight it off. This delay is part of why first infections can make people so sick — the body is essentially learning what it's up against while the illness is already spreading. Vaccines work by giving the immune system a safe preview of that threat beforehand, usually using a weakened, inactive, or partial version of the virus that cannot cause the actual disease. This preview is enough to trigger the immune system into producing antibodies and, importantly, into creating memory cells that remember exactly how to fight that specific threat in the future. If the real virus ever does enter the body later, the immune system can recognise it almost immediately and respond far faster and more effectively than it would have without the vaccine, often stopping the illness before it causes serious symptoms at all.",
        tipTitle: "🔍 Fun Fact",
        tip: "The first modern vaccine was created in 1796 by Edward Jenner, to protect against smallpox.",
        questions: [
          { type: "mc", prompt: "Why can a person's first infection with a new virus make them very sick?", options: ["The immune system needs time to learn how to fight it", "Vaccines always make the first infection much worse", "The virus is always weaker the second time it comes"], correctIndex: 0, explanation: "The passage says the delay in recognising the threat is part of why first infections can be severe." },
          { type: "mc", prompt: "What do vaccines give the immune system?", options: ["A safe preview of the threat, using a weakened version", "A full-strength dose of the real live disease itself", "Antibodies made in a lab, injected straight into the blood"], correctIndex: 0, explanation: "The passage says vaccines give a safe preview using a weakened, inactive, or partial version of the virus." },
          { type: "mc", prompt: "Why can the body respond faster to a virus after vaccination?", options: ["Memory cells remember how to fight that specific threat", "The virus becomes weaker and weaker over time on its own", "Vaccines remove the virus from the environment entirely"], correctIndex: 0, explanation: "The passage says vaccination creates memory cells that remember how to fight the specific threat." },
        ],
      },
      {
        id: "know-hard-science-2",
        field: "biology",
        title: "🦠 The Accidental Discovery of Penicillin",
        passage:
          "In the summer of 1928, a Scottish scientist named Alexander Fleming left his cluttered laboratory for a two-week holiday, leaving behind several petri dishes of Staphylococcus bacteria that he had been growing for research. When he returned in September, most of the dishes had been ruined by ordinary contamination, exactly what a tidier scientist might have avoided by cleaning up before leaving. One dish, however, caught his attention: a stray spore of mould, likely drifting up from a laboratory on the floor below, had landed in the dish and grown into a small blue-green patch. Around that patch, Fleming noticed something unexpected — a clear ring where the bacteria simply hadn't grown at all, as though the mould itself were somehow killing the germs nearby. Rather than dismissing the dish as ruined and washing it out like the others, Fleming investigated further and identified the mould as a rare strain of Penicillium, eventually isolating the bacteria-killing substance it produced and naming it penicillin. It would take more than a decade, and the urgent medical demands of the Second World War, before other scientists worked out how to mass-produce it reliably, but Fleming's willingness to pay attention to one \"ruined\" experiment ultimately led to the world's first true antibiotic, transforming once-deadly infections into treatable illnesses.",
        tipTitle: "🔍 Fun Fact",
        tip: "Fleming's now-famous reaction when he first spotted the strange clear ring was reportedly just three words: \"That's funny.\"",
        questions: [
          { type: "mc", prompt: "What did Fleming notice around the mould in the contaminated dish?", options: ["A clear ring where bacteria hadn't grown", "A thick ring of extra bacteria growth", "Nothing unusual around the mould at all"], correctIndex: 0, explanation: "The passage says he noticed a clear ring where the bacteria simply hadn't grown at all." },
          { type: "mc", prompt: "What did Fleming do instead of throwing the \"ruined\" dish away?", options: ["He investigated further and identified the mould", "He immediately published his results without further study", "He gave the dish to a museum"], correctIndex: 0, explanation: "The passage says he investigated further and identified the mould as a rare strain of Penicillium." },
          { type: "mc", prompt: "What took more than a decade after Fleming's discovery?", options: ["Working out how to mass-produce penicillin reliably", "Deciding on a name for the substance, penicillin", "Growing the mould in a dish in his own laboratory"], correctIndex: 0, explanation: "The passage says it took more than a decade before scientists worked out reliable mass production." },
        ],
      },
      {
        id: "know-hard-history-3",
        era: "medieval",
        region: "Africa",
        title: "👑 Mansa Musa and the Wealth of Mali",
        passage:
          "In the fourteenth century, the West African Mali Empire controlled some of the richest gold and salt trade routes in the world, and its ruler, Mansa Musa, is still considered by many historians to be the wealthiest individual in recorded history. In 1324, Mansa Musa set out on a pilgrimage to the holy city of Mecca, travelling thousands of kilometres with an enormous caravan of attendants and camels loaded with gold. Along the way, he stopped in Cairo, where he reportedly gave away so much gold as gifts that he single-handedly caused the price of gold to crash across the region, an economic ripple effect that historians say lasted for over a decade. News of his extraordinary generosity and wealth spread far beyond Africa, and Mali soon began appearing on European maps, sometimes drawn with an image of Mansa Musa himself holding a large gold nugget. Beyond his wealth, Mansa Musa used his pilgrimage to bring back scholars, architects, and books, transforming the city of Timbuktu into a thriving centre of Islamic learning, with libraries and a university that attracted students from across Africa and the Middle East for centuries afterward.",
        tipTitle: "🔍 Fun Fact",
        tip: "Some economists estimate Mansa Musa's wealth, adjusted for today's world, could have been worth more than $400 billion.",
        questions: [
          { type: "mc", prompt: "What is Mansa Musa still considered by many historians?", options: ["The wealthiest individual in recorded history", "A poor but very wise ruler of a small land", "A famous painter and poet of the royal court"], correctIndex: 0, explanation: "The passage says Mansa Musa is still considered by many historians to be the wealthiest individual in recorded history." },
          { type: "mc", prompt: "What happened to the price of gold in Cairo after Mansa Musa's visit?", options: ["It crashed because he gave away so much gold", "It doubled overnight as he bought up all the gold", "Nothing changed at all after his generous visit"], correctIndex: 0, explanation: "The passage says he gave away so much gold that he caused the price of gold to crash across the region." },
          { type: "mc", prompt: "What did Mansa Musa help transform Timbuktu into?", options: ["A thriving centre of Islamic learning with a university", "A large military base protected by strong stone walls", "An empty desert town abandoned by all its merchants"], correctIndex: 0, explanation: "The passage says he transformed Timbuktu into a thriving centre of Islamic learning." },
        ],
      },
      {
        id: "know-hard-science-3",
        field: "physics",
        title: "🌈 Why Is the Sky Blue?",
        passage:
          "Sunlight looks white or yellow to our eyes, but it is actually made up of every colour of the rainbow mixed together, each travelling as a wave of a slightly different length. When sunlight enters Earth's atmosphere, it collides with tiny gas molecules, mostly nitrogen and oxygen, and this collision scatters the light in different directions, a phenomenon scientists call Rayleigh scattering. Shorter wavelengths of light, like blue and violet, scatter far more easily and much more strongly than longer wavelengths like red and orange, because they interact more with these small molecules. Although violet light actually scatters even more than blue, our eyes are naturally more sensitive to blue light, and some violet light gets absorbed by the upper atmosphere, so we end up perceiving the sky as blue rather than violet. This same scattering effect explains why sunsets often turn deep orange and red: when the sun is low near the horizon, its light must travel through a much thicker layer of atmosphere, scattering away almost all the blue light long before it reaches our eyes, leaving mainly the longer red and orange wavelengths behind.",
        tipTitle: "🔍 Fun Fact",
        tip: "On Mars, the sky appears more of a reddish-orange colour during the day because Martian dust scatters light very differently from Earth's atmosphere.",
        questions: [
          { type: "mc", prompt: "Why does blue light scatter more than red light in Earth's atmosphere?", options: ["Blue light has a shorter wavelength, so gas molecules scatter it more", "Blue light travels more slowly than red light, so it bunches up", "Red light is absorbed completely by the ground before it can spread"], correctIndex: 0, explanation: "The passage says shorter wavelengths like blue scatter more because they interact more with small gas molecules." },
          { type: "mc", prompt: "Why do sunsets often look orange and red?", options: ["Sunlight crosses more atmosphere, so most blue light scatters away", "The sun itself slowly changes to a red colour as it sinks below", "Clouds gather each evening and stain all the sunlight bright red"], correctIndex: 0, explanation: "The passage says light near the horizon travels through more atmosphere, scattering away blue light first." },
          { type: "mc", prompt: "What is the scientific name for the scattering effect described in the passage?", options: ["Rayleigh scattering", "Photosynthesis", "Refraction only"], correctIndex: 0, explanation: "The passage names this phenomenon Rayleigh scattering." },
        ],
      },
      {
        id: "know-hard-history-4",
        era: "modern",
        region: "South Africa",
        title: "🌈 Nelson Mandela and a New South Africa",
        passage:
          "For much of the twentieth century, South Africa was governed under a system called apartheid, which separated people by race and gave far fewer rights to the Black majority. Nelson Mandela, a lawyer, joined the African National Congress to campaign against this system. In 1964, he was sentenced to life in prison, and he spent twenty-seven years behind bars, many of them on Robben Island. Around the world, people wrote letters, held protests and called for his release, and international pressure on South Africa's government grew. Mandela was finally freed in 1990. Many people expected him to seek revenge, but instead he worked with the president, F. W. de Klerk, to negotiate an end to apartheid, and the two men shared the Nobel Peace Prize in 1993. In 1994, South Africa held its first election in which people of all races could vote, and Mandela became the country's first Black president. He then set up the Truth and Reconciliation Commission, where people could speak about the wrongs of the past so that the country could heal. He chose to serve only one term as president, stepping down in 1999.",
        tipTitle: "🔍 Fun Fact",
        tip: "Mandela's birth name was Rolihlahla, which in his language can mean \"troublemaker\". His teacher at school gave him the name \"Nelson\".",
        questions: [
          { type: "mc", prompt: "What did Mandela do after he was freed in 1990?", options: ["He negotiated with the president to end apartheid", "He left the country for good and never returned", "He led a large rebel army against the government"], correctIndex: 0, explanation: "He worked with President de Klerk to negotiate an end to apartheid, instead of seeking revenge." },
          { type: "mc", prompt: "Why was the 1994 election important?", options: ["It was the first in which people of all races could vote", "It was the first time South Africa held any election", "It was the last time Mandela ever ran for public office"], correctIndex: 0, explanation: "It was South Africa's first election open to people of all races." },
          { type: "mc", prompt: "What was the purpose of the Truth and Reconciliation Commission?", options: ["To let people tell of past wrongs so the country could heal", "To punish everyone who had supported apartheid in any way", "To decide who should become the next national president"], correctIndex: 0, explanation: "The commission gave people a place to speak about the wrongs of the past so that the country could heal." },
        ],
      },
      {
        id: "know-hard-history-5",
        era: "ancient",
        region: "Egypt",
        title: "🗿 The Rosetta Stone",
        passage:
          "For more than a thousand years, nobody could read Egyptian hieroglyphs, the picture-writing on the walls of temples and tombs. Scholars knew that the pictures were a kind of writing, but they could not work out what they said. In 1799, French soldiers who were repairing a fort near the town of Rashid, which Europeans called Rosetta, uncovered a large slab of dark stone. It was covered with three blocks of writing that all said the same thing: a decree from 196 BCE, written in hieroglyphs, in a later Egyptian script called Demotic, and in ancient Greek. Because scholars could still read Greek, they had a key to the other two. The English scientist Thomas Young made early progress in the 1810s, but the breakthrough came in 1822, when the French scholar Jean-François Champollion showed that hieroglyphs represented both sounds and ideas. Suddenly, the writing of ancient Egypt could be read, and thousands of inscriptions began to tell their stories. The British took the stone after defeating the French in 1801, and it has been in the British Museum since 1802, although Egypt has asked for its return.",
        tipTitle: "🔍 Fun Fact",
        tip: "Champollion is said to have run into his brother's office shouting \"I've got it!\" the moment he understood the code, and then fainted.",
        questions: [
          { type: "mc", prompt: "Why was the Rosetta Stone the key to reading hieroglyphs?", options: ["It carried the same message in Greek, which scholars could read", "It listed every hieroglyph with a picture showing its meaning", "It was signed by the ancient scribe who invented the writing"], correctIndex: 0, explanation: "The same decree was written in three scripts, including Greek, which scholars could already read." },
          { type: "mc", prompt: "What did Champollion show in 1822?", options: ["Hieroglyphs stood for both sounds and ideas", "Hieroglyphs were only decorative pictures", "Hieroglyphs came from an early form of Greek"], correctIndex: 0, explanation: "He showed that hieroglyphs represented both sounds and ideas, which allowed them to be read." },
          { type: "mc", prompt: "Where is the Rosetta Stone today?", options: ["In the British Museum in London", "In a fort near the town of Rashid", "In a museum in Paris, France"], correctIndex: 0, explanation: "The British took the stone in 1801, and it has been in the British Museum since 1802." },
        ],
      },
      {
        id: "know-hard-history-6",
        era: "medieval",
        region: "Europe / Asia",
        title: "🛡️ The Black Death and the Birth of Quarantine",
        passage:
          "In the 1340s, a terrible disease called the plague travelled along trade routes from Asia to Europe. It spread on merchant ships, carried by fleas that lived on rats, and within a few years it had reached almost every part of Europe. Historians estimate that it killed between a third and a half of all Europeans, and it later became known as the Black Death. People at the time did not understand germs, so they blamed many different causes, but some cities noticed a pattern: the disease seemed to arrive with ships from infected ports. In 1377, the port city of Ragusa, now called Dubrovnik, ordered that ships arriving from infected places must wait outside the harbour for thirty days before anyone could come ashore. Later, Venice extended the waiting period to forty days, which is quaranta giorni in Italian, and this is where the word \"quarantine\" comes from. Although the officials did not know that fleas and bacteria caused the plague, keeping possible cases apart really did slow the spread. Health authorities still use the same idea today.",
        tipTitle: "🔍 Fun Fact",
        tip: "The famous beak-shaped masks of plague doctors were not used during the Black Death. They were invented in the 1600s, more than two hundred years later.",
        questions: [
          { type: "mc", prompt: "How did the plague reach Europe?", options: ["Along trade routes, carried on merchant ships", "By soldiers marching across mountain passes", "Through sea water washed onto the shore"], correctIndex: 0, explanation: "It spread along trade routes on merchant ships, carried by fleas that lived on rats." },
          { type: "mc", prompt: "Where does the word \"quarantine\" come from?", options: ["The Italian words for forty days", "A Latin word meaning to stay indoors", "The name of the city of Ragusa"], correctIndex: 0, explanation: "Venice extended the waiting time to forty days, quaranta giorni in Italian." },
          { type: "mc", prompt: "Why did quarantine help, even though officials did not understand the cause?", options: ["Keeping possible cases apart slowed the spread", "Ships were cleaned thoroughly with strong soap", "Sick sailors were sent to distant hospitals"], correctIndex: 0, explanation: "Although they did not know about fleas and bacteria, keeping possible cases apart slowed the spread." },
        ],
      },
      {
        id: "know-hard-history-7",
        era: "medieval",
        region: "Cambodia",
        title: "🛕 Angkor Wat and the Khmer Empire",
        passage:
          "In the twelfth century, the Khmer Empire ruled much of Southeast Asia from a great capital city called Angkor, in what is now Cambodia. King Suryavarman II began to build Angkor Wat around 1113 as a temple to the Hindu god Vishnu. It is still the largest religious monument in the world, covering more than 160 hectares, and its five central towers are shaped like lotus buds. Miles of carved walls tell stories from Hindu legends and show scenes from the king's battles. The wealth of the Khmer Empire depended on water. Engineers built huge reservoirs called barays and a network of canals to store the monsoon rains and irrigate the rice fields, so that farmers could harvest more than one crop a year. This surplus of food supported a city that may have had as many as 900,000 people. In later centuries, the capital moved away, probably because of a mixture of wars, droughts and floods, but Angkor Wat was never completely abandoned: Buddhist monks continued to care for it, and it became a Buddhist temple.",
        tipTitle: "🔍 Fun Fact",
        tip: "Angkor Wat appears on the national flag of Cambodia, and it is often said to be the only national flag in the world that shows a building.",
        questions: [
          { type: "mc", prompt: "Why were the barays and canals important to the Khmer Empire?", options: ["They stored monsoon rain for the rice fields", "They allowed ships to reach the ocean", "They protected the city from invading armies"], correctIndex: 0, explanation: "The reservoirs and canals stored monsoon rain and irrigated rice fields, allowing several harvests." },
          { type: "mc", prompt: "What does the passage suggest about Angkor Wat after the capital moved?", options: ["It continued to be cared for by Buddhist monks", "It was buried under sand and forgotten completely", "It was pulled down and used to build new cities"], correctIndex: 0, explanation: "The passage says it was never completely abandoned: Buddhist monks continued to care for it." },
          { type: "mc", prompt: "Which of the following was NOT a suggested reason for the capital moving?", options: ["A shortage of stone for the temples", "Droughts that ruined the harvests", "Wars against neighbouring kingdoms"], correctIndex: 0, explanation: "The passage suggests wars, droughts and floods. A shortage of stone is never mentioned." },
        ],
      },
      {
        id: "know-hard-science-4",
        field: "physics",
        title: "🎧 How Do Noise-Cancelling Headphones Work?",
        passage:
          "Sound travels through the air as waves, which are patterns of squeezed and stretched air. Every wave has peaks and troughs, a little like waves on the sea. When two waves meet, they add together in a process called interference. If two waves have their peaks at the same moment, they combine into a louder sound. But if the peak of one wave meets the trough of another wave of exactly the same size, the two cancel each other out, and the result is silence. This is called destructive interference. Noise-cancelling headphones use this idea. Tiny microphones on the outside of the headphones listen to the sounds around you, such as the steady hum of an aeroplane engine. A small computer then quickly creates a new sound wave that is a mirror image of the noise, and the speakers play it into your ears. The two waves cancel each other, and the background noise seems to fade away. The system works best on low, constant sounds and is less effective against sudden noises such as voices, so many headphones also use soft padding to block the noise.",
        tipTitle: "🔍 Fun Fact",
        tip: "Engineers first developed this technology for aircraft crews, to protect their hearing and to help them to hear radio messages over loud engines.",
        questions: [
          { type: "mc", prompt: "What is destructive interference?", options: ["Two waves cancelling each other out", "Two waves joining to make a louder sound", "A wave bouncing off a solid wall"], correctIndex: 0, explanation: "When a peak meets an equal trough, the waves cancel each other and the result is silence." },
          { type: "mc", prompt: "What does the small computer inside the headphones create?", options: ["A sound wave that is a mirror image of the noise", "An exact copy of the noise at a louder volume", "A steady loud tone that hides every other sound"], correctIndex: 0, explanation: "The computer creates a mirror image of the noise, so the two waves cancel each other." },
          { type: "mc", prompt: "Why are noise-cancelling headphones less effective against voices?", options: ["Voices change suddenly and are hard to cancel", "Voices are always much louder than engines", "Voices travel through the headphones' padding"], correctIndex: 0, explanation: "The system works best on low, constant sounds, and is less effective against sudden noises such as voices." },
        ],
      },
      {
        id: "know-hard-science-5",
        field: "chemistry",
        title: "🔋 How Do Batteries Work?",
        passage:
          "A battery stores chemical energy and turns it into electrical energy. Inside, there are two different materials, called electrodes, separated by a liquid or paste called the electrolyte. One electrode, the anode, has atoms that easily give up electrons, while the other, the cathode, is ready to receive them. The electrons cannot travel through the electrolyte, so they can only move from the anode to the cathode through a wire outside the battery, and this flow of electrons is an electric current that can light a bulb or power a phone. Meanwhile, charged particles called ions move through the electrolyte to keep everything balanced. When the chemicals are used up, an ordinary battery stops working. A rechargeable battery, such as the lithium-ion battery in a phone, is different: when you plug it in, an outside power source pushes the electrons and ions back the other way, restoring the original chemicals so that the battery can be used again. The first battery was built by the Italian scientist Alessandro Volta in 1800, using discs of zinc and copper separated by cloth soaked in salt water.",
        tipTitle: "🔍 Fun Fact",
        tip: "The unit that measures electrical pressure, the volt, is named after Alessandro Volta, the inventor of the first battery.",
        questions: [
          { type: "mc", prompt: "How do electrons travel from the anode to the cathode?", options: ["Through a wire outside the battery", "Through the liquid electrolyte inside", "Through the outer metal case only"], correctIndex: 0, explanation: "Electrons cannot travel through the electrolyte, so they move through a wire outside the battery." },
          { type: "mc", prompt: "What happens when you recharge a lithium-ion battery?", options: ["An outside power source pushes electrons and ions back", "Fresh chemicals are poured into the battery each time", "The anode and cathode swap places for good inside it"], correctIndex: 0, explanation: "An outside source pushes the electrons and ions the other way, restoring the original chemicals." },
          { type: "mc", prompt: "What did Volta use to build the first battery?", options: ["Discs of zinc and copper with salt-water cloth", "Glass jars filled with acid and pieces of gold", "Long wires of iron wrapped around a large magnet"], correctIndex: 0, explanation: "Volta used discs of zinc and copper separated by cloth soaked in salt water." },
        ],
      },
      {
        id: "know-hard-science-6",
        field: "astronomy",
        title: "🌊 What Causes the Tides?",
        passage:
          "Twice a day, the sea rises up the shore and then falls again. These movements are called tides, and they are caused mainly by the gravity of the Moon. The Moon pulls on everything on Earth, but water can move, so the ocean on the side facing the Moon bulges towards it. Surprisingly, there is a second bulge on the opposite side of the Earth, because the Earth itself is pulled towards the Moon more strongly than the water on the far side is. As the Earth spins, each place passes through both bulges every day, which is why most coasts have two high tides and two low tides in about 24 hours and 50 minutes. The Sun's gravity also has an effect, although it is weaker. When the Sun, Moon and Earth line up at new moon and full moon, their pulls combine to make especially large tides called spring tides. When the Sun and Moon pull at right angles, we get smaller tides called neap tides. In some places, the shape of the coastline makes the tides enormous: in Canada's Bay of Fundy, the water can rise and fall by more than fifteen metres.",
        tipTitle: "🔍 Fun Fact",
        tip: "The tides also act like a brake on the Earth, and as a result the Moon is slowly drifting away from us by about 3.8 centimetres every year.",
        questions: [
          { type: "mc", prompt: "What is the main cause of the tides?", options: ["The gravity of the Moon pulling on the oceans", "Strong winds blowing steadily across the sea", "The heat of the Sun warming the water up daily"], correctIndex: 0, explanation: "The tides are caused mainly by the Moon's gravity." },
          { type: "mc", prompt: "Why are there usually two high tides a day?", options: ["Water bulges on the side facing the Moon and on the far side", "The Moon travels all the way around the Earth twice each day", "The Sun and the Moon take turns pushing the water each day"], correctIndex: 0, explanation: "There is a bulge facing the Moon and another on the opposite side, and each place passes through both bulges." },
          { type: "mc", prompt: "When do especially large spring tides happen?", options: ["When the Sun, Moon and Earth line up", "When the Moon is furthest from the Earth", "When the Sun and Moon pull at right angles"], correctIndex: 0, explanation: "When the Sun, Moon and Earth line up, at new moon and full moon, their pulls combine." },
        ],
      },
      {
        id: "know-hard-science-7",
        field: "technology",
        title: "🛰️ How Does GPS Know Where You Are?",
        passage:
          "When you use a map app on a phone, a blue dot shows exactly where you are. But your phone does not send out a signal to find itself; it listens. About thirty satellites orbit the Earth at a height of roughly 20,000 kilometres, and each one constantly broadcasts its position and the exact time, measured by an extremely accurate atomic clock. Your phone picks up these signals from several satellites at once. Because radio signals travel at the speed of light, the phone can work out how far it is from each satellite by measuring how long the signal took to arrive. The distance from one satellite tells the phone that it is somewhere on a huge sphere around it; a second satellite narrows this to a circle, and with three or four satellites, the phone can find a single point. This method is called trilateration. It needs timing that is accurate to billionths of a second, and engineers even have to correct for Einstein's theories of relativity: because the satellites move fast and are far from the Earth's gravity, their clocks run at a slightly different speed from clocks on the ground, and without a correction, the positions would drift by kilometres every day.",
        tipTitle: "🔍 Fun Fact",
        tip: "GPS was originally built for the United States military, and it began to serve ordinary people in the 1990s.",
        questions: [
          { type: "mc", prompt: "How does your phone find out its distance from a satellite?", options: ["It measures how long the signal takes to arrive", "It sends out a signal and then measures the echo", "It reads a map stored inside the satellite"], correctIndex: 0, explanation: "Radio signals travel at the speed of light, so the phone calculates distance from the time the signal takes to arrive." },
          { type: "mc", prompt: "Why do engineers correct the satellite clocks for relativity?", options: ["The satellites' clocks run at a slightly different speed", "The satellites slowly lose power in the cold of space", "The clocks must show exactly the same time as a wristwatch"], correctIndex: 0, explanation: "Because satellites move fast and are far from Earth's gravity, their clocks run at a slightly different speed." },
          { type: "mc", prompt: "Why does a phone need signals from three or four satellites?", options: ["One satellite only gives a huge sphere of possible places", "Each satellite only knows about one small part of the map", "The signals are too weak to read from one satellite alone"], correctIndex: 0, explanation: "One satellite places you somewhere on a sphere. More satellites narrow it down to a single point." },
        ],
      },
      {
        id: "know-hard-science-8",
        field: "ecology",
        title: "🦦 The Sea Otter and the Kelp Forest",
        passage:
          "Off the Pacific coast of North America, giant seaweeds called kelp grow in thick underwater forests, some of them as tall as trees. These kelp forests are home to fish, crabs, seals and many other animals. But kelp has an enemy: the sea urchin, a spiky animal that grazes on kelp and can eat through its roots. If there are too many urchins, they can wipe out an entire forest, leaving an empty seabed that scientists call an urchin barren. Sea otters help to prevent this, because sea otters love to eat urchins. In the eighteenth and nineteenth centuries, hunters killed so many sea otters for their thick fur that the animals almost disappeared from many places. Where the otters vanished, the urchins multiplied and the kelp forests shrank. In the twentieth century, sea otters were protected and returned to some coasts, and in many of those places the kelp forests grew back. Scientists call an animal like the sea otter a keystone species, because the whole ecosystem depends on it far more than its numbers would suggest.",
        tipTitle: "🔍 Fun Fact",
        tip: "Sea otters have the thickest fur of any animal, with up to about a million hairs in a single square inch.",
        questions: [
          { type: "mc", prompt: "Why did the kelp forests shrink when sea otters disappeared?", options: ["Sea urchins multiplied and ate the kelp", "Hunters cut down the kelp for its fur", "The water became too warm for the seaweed"], correctIndex: 0, explanation: "Without otters, urchins multiplied and grazed on the kelp, so the forests shrank." },
          { type: "mc", prompt: "What is a keystone species?", options: ["An animal that the whole ecosystem depends on greatly", "An animal that is the largest one in its whole habitat", "An animal that only lives among rocks and stones"], correctIndex: 0, explanation: "A keystone species affects its ecosystem far more than its numbers suggest." },
          { type: "mc", prompt: "What happened when sea otters returned to some coasts?", options: ["In many places the kelp forests grew back", "The urchins grew larger and more numerous", "The fish left the kelp forests for deeper water"], correctIndex: 0, explanation: "In many places where sea otters were protected and returned, the kelp forests grew back." },
        ],
      },
    ],
    expert: [
      {
        id: "know-expert-history",
        era: "modern",
        region: "Germany",
        title: "🧱 The Fall of the Berlin Wall",
        passage:
          "For nearly three decades, the Berlin Wall stood as one of the most visible symbols of the divide between the Soviet-aligned East and the Western-aligned world, physically separating East and West Berlin and preventing East German citizens from crossing into the West. Its unexpected collapse in November 1989 is often remembered as a single dramatic moment, but the events leading up to it were considerably messier than the popular narrative suggests. A government spokesperson, during a live press conference, was asked when new, relaxed travel regulations for East German citizens would take effect. Working from notes he hadn't fully reviewed, he mistakenly announced that the changes would take effect immediately, rather than the following day as officials had actually intended, with proper application procedures still in place. Word spread rapidly, and within hours, tens of thousands of East Berliners gathered at checkpoints, overwhelming confused and unprepared border guards who had received no updated orders. Faced with an enormous crowd and no clear instructions from their superiors, the guards eventually made the individual decision to simply open the gates rather than risk a violent confrontation, effectively ending nearly thirty years of physical division through a decision made not by any government, but by the guards on duty that night.",
        tipTitle: "🔍 Fun Fact",
        tip: "Pieces of the Berlin Wall were later sold as souvenirs and are now displayed in museums around the world.",
        questions: [
          { type: "mc", prompt: "What actually triggered the sudden opening of the border, according to the passage?", options: ["A spokesperson's mistaken announcement during a press conference", "A formal government decision to reunite the country of Germany", "A national vote held by East German citizens in every city"], correctIndex: 0, explanation: "The passage says a spokesperson mistakenly announced the changes would take effect immediately." },
          { type: "mc", prompt: "Why did the border guards eventually open the gates?", options: ["With a huge crowd and no orders, they chose to avoid confrontation", "They received direct orders from their government to open the border", "The wall physically collapsed under the weight of the huge crowd"], correctIndex: 0, explanation: "The passage says the guards, with no clear instructions, chose to open the gates rather than risk confrontation." },
          {
            type: "shortanswer",
            prompt: "What does this account suggest about how major historical events sometimes unfold, compared to how we often remember them afterward?",
            modelAnswer:
              "It suggests that major historical turning points can result from small mistakes, confusion, or individual decisions made under pressure, rather than being the outcome of a clear, deliberate plan — the tidy story we remember later often hides a messier, more accidental reality.",
          },
        ],
      },
      {
        id: "know-expert-history-2",
        era: "modern",
        region: "United States",
        title: "🚀 The Apollo 11 Moon Landing",
        passage:
          "On 20 July 1969, as the lunar module Eagle began its final descent toward the Moon's surface, the onboard guidance computer suddenly began flashing an alarm code that neither astronaut Neil Armstrong nor Buzz Aldrin had been specifically trained to recognise on sight: 1202. Unknown to the crew in that tense moment, the alarm didn't mean the computer had failed — it meant the computer was being asked to do more work than it had time for, because a radar switch left in the wrong position was flooding it with unnecessary data it didn't need for landing. In Mission Control back in Houston, a twenty-six-year-old engineer named Steve Bales had only seconds to decide whether the alarm meant the mission should be aborted. Thanks to preparation most people never hear about — software engineer Margaret Hamilton had designed the guidance computer to automatically drop lower-priority tasks and keep running the critical landing programs whenever it became overloaded, and a colleague had handwritten a full list of alarm codes and their meanings just weeks before launch — Bales was able to quickly confirm the alarm was survivable, and Mission Control gave the crew a call to continue. The alarm sounded five times in the final four minutes of descent alone, a detail rarely mentioned in the simplified version of the story most people remember, where the landing is often recalled as smooth and the drama is concentrated entirely on Armstrong's famous first words upon stepping onto the surface.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Apollo Guidance Computer that landed astronauts on the Moon had far less processing power than a modern calculator.",
        questions: [
          { type: "mc", prompt: "What did the 1202 alarm actually mean, according to the passage?", options: ["The computer was overloaded with more tasks than it had time for", "The computer had failed completely and could not be restarted", "The lunar module was running out of fuel before it could land"], correctIndex: 0, explanation: "The passage says the alarm meant the computer was being asked to do more work than it had time for." },
          { type: "mc", prompt: "Why was Mission Control able to decide quickly that the alarm was survivable?", options: ["Careful software design and a written list of alarm codes had planned for it", "NASA got very lucky and simply guessed the right answer in the last seconds", "The astronauts fixed the computer themselves while they were descending to the Moon"], correctIndex: 0, explanation: "The passage describes Hamilton's software design and a handwritten alarm code list that let Bales confirm the alarm was survivable." },
          {
            type: "shortanswer",
            prompt: "The passage says the alarm \"is rarely mentioned in the simplified version of the story most people remember.\" Based on the passage, why might the full story be more interesting or important than the simplified one?",
            modelAnswer:
              "The simplified story makes the landing sound smooth and effortless, crediting only Armstrong's famous words — but the full story shows the landing actually depended on careful engineering preparation, quick human judgement under pressure, and a real risk of failure, which gives a truer and more impressive picture of what it took to succeed.",
          },
        ],
      },
      {
        id: "know-expert-science",
        field: "astronomy",
        title: "🔭 Black Holes and the Limits of Light",
        passage:
          "A black hole forms when a massive star collapses under its own gravity at the end of its life, compressing an enormous amount of mass into an incredibly small space. The resulting gravitational pull becomes so intense that, beyond a certain boundary known as the event horizon, nothing can escape it — not even light, which is why the region appears completely black and cannot be observed directly. This creates an unusual scientific challenge: astronomers cannot simply point a telescope at a black hole and see it the way they would see a star. Instead, they infer a black hole's existence and properties by observing its effects on nearby matter, such as the way gas and dust heat up and glow brightly as they spiral inward, or the way a black hole's gravity visibly bends the path of light passing near it, a phenomenon predicted by Einstein's theory of general relativity decades before the first image of a black hole's silhouette was finally captured in 2019. That landmark image, showing a glowing ring of light bent around a dark central shadow, did not photograph the black hole itself so much as confirm, with direct visual evidence, a shape that physicists had already calculated mathematically but never actually seen.",
        tipTitle: "🔍 Fun Fact",
        tip: "The 2019 black hole image required linking together eight telescopes from around the world into one \"Earth-sized\" virtual telescope.",
        questions: [
          { type: "mc", prompt: "Why can't astronomers see a black hole directly?", options: ["Not even light can escape beyond its event horizon", "Black holes are too far away for any telescope", "Black holes don't actually emit any gravity"], correctIndex: 0, explanation: "The passage says beyond the event horizon, not even light can escape, so the region appears completely black." },
          { type: "mc", prompt: "How do astronomers typically detect black holes, according to the passage?", options: ["By observing their effects on nearby matter and light", "By listening for radio signals coming from inside them", "By measuring their surface temperature with a probe"], correctIndex: 0, explanation: "Astronomers infer a black hole's existence by observing glowing matter and bent light nearby." },
          {
            type: "shortanswer",
            prompt: "The passage says the 2019 image \"confirmed\" rather than \"discovered\" the black hole's shape. What is the difference, based on the passage?",
            modelAnswer:
              "Physicists had already mathematically predicted the shape using Einstein's theory of general relativity decades earlier; the 2019 image didn't reveal a new idea, it provided the first direct visual evidence proving that the earlier mathematical prediction was correct.",
          },
        ],
      },
      {
        id: "know-expert-science-2",
        field: "biology",
        title: "🧬 The Race to Discover DNA's Double Helix",
        passage:
          "In the early 1950s, several research teams across Britain and the United States were racing to figure out the physical structure of DNA, the molecule that carries genetic information inside living cells, since understanding its shape was seen as the key to understanding how life itself passes on information. At King's College London, chemist Rosalind Franklin was using a technique called X-ray crystallography to photograph DNA fibres, painstaking work that required exact control of humidity and long exposure times. In May 1952, one of her images, later known simply as \"Photo 51,\" captured a distinctive X-shaped pattern that strongly suggested DNA had a helical, spiral structure. Without Franklin's knowledge or permission, a colleague at King's College showed this photograph to James Watson, a scientist working at Cambridge with Francis Crick on their own competing model of DNA. The image gave Watson and Crick a crucial piece of evidence, and within weeks they published their now-famous double helix model in the journal Nature in 1953. Watson, Crick, and King's College researcher Maurice Wilkins later shared the 1962 Nobel Prize for the discovery, but Franklin herself was not included — partly because she had died of ovarian cancer in 1958, four years before the prize was awarded, and Nobel Prizes are never given posthumously. Even so, many historians today argue that Franklin's crucial data was used without proper credit at the time, and her contribution has only been more widely recognised decades later.",
        tipTitle: "🔍 Fun Fact",
        tip: "Photo 51 took about 100 hours of X-ray exposure to capture — an extraordinarily long time compared to a modern camera's photo, which takes a fraction of a second.",
        questions: [
          { type: "mc", prompt: "What did Photo 51 reveal about DNA's structure?", options: ["A distinctive pattern suggesting a helical, spiral shape", "That DNA was a completely flat, straight sheet of atoms", "That DNA had no repeating structure of any kind at all"], correctIndex: 0, explanation: "The passage says Photo 51 captured a pattern that strongly suggested DNA had a helical, spiral structure." },
          { type: "mc", prompt: "Why wasn't Rosalind Franklin awarded the Nobel Prize alongside Watson, Crick, and Wilkins?", options: ["She had died in 1958, and Nobel Prizes are not given after death", "Her research was later proven to be incorrect by Watson and Crick", "She refused to accept the award because she disliked the others"], correctIndex: 0, explanation: "The passage says she died in 1958, four years before the prize was awarded, and Nobel Prizes are never given posthumously." },
          {
            type: "shortanswer",
            prompt: "The passage says Franklin's photograph was shown to Watson \"without her knowledge or permission.\" Why might this detail matter when historians evaluate who deserves credit for the discovery?",
            modelAnswer:
              "It matters because Franklin's own data played a direct role in Watson and Crick's breakthrough, yet she wasn't part of the decision to share it and wasn't properly credited at the time — raising a fairness question about whether scientific credit was distributed based on who did the work, or simply who published the final model first.",
          },
        ],
      },
      {
        id: "know-expert-history-3",
        era: "ancient",
        region: "Greece / Egypt",
        title: "📚 The Great Library of Alexandria",
        passage:
          "Founded around 300 BCE under the Greek Ptolemaic rulers of Egypt, the Library of Alexandria aimed at an almost unimaginable goal for its time: collecting a copy of every significant piece of written knowledge that existed anywhere in the ancient world. At its height, the library is estimated to have held several hundred thousand scrolls, drawing scholars, mathematicians, and astronomers from across the Mediterranean and Middle East to study, translate texts, and exchange ideas in one place, including the mathematician Euclid, whose work on geometry is still taught in schools today. Ships arriving in Alexandria's busy harbour were reportedly required to hand over any books on board to be copied by the library's scribes, with the copies sometimes returned to the ship's owner while the library kept the originals — an early, rather one-sided approach to building a collection. Exactly how and when the library was eventually lost remains genuinely unclear even to modern historians, since ancient accounts disagree and contradict each other; one popular story blames a fire that started accidentally when Julius Caesar's soldiers set nearby ships alight during a conflict in 48 BCE, though most historians now believe the library's decline was gradual, caused by shrinking funding and neglect over centuries rather than a single dramatic event.",
        tipTitle: "🔍 Fun Fact",
        tip: "A modern library called the Bibliotheca Alexandrina was built in Alexandria in 2002, partly as a tribute to the ancient library it was named after.",
        questions: [
          { type: "mc", prompt: "What was the Library of Alexandria's ambitious goal?", options: ["To collect a copy of every important piece of writing in the ancient world", "To train the finest soldiers and generals for the whole Egyptian army", "To store the gold and treasure of the Ptolemies for hundreds of years"], correctIndex: 0, explanation: "The passage says the library aimed to collect a copy of every significant piece of written knowledge that existed." },
          { type: "mc", prompt: "According to the passage, what do most historians now believe about the library's loss?", options: ["It declined slowly through shrinking funding and neglect, not one event", "It was destroyed instantly and deliberately by a single angry ruler", "It was moved safely to another country by the scholars who worked there"], correctIndex: 0, explanation: "The passage says most historians now believe the library's decline was gradual, from shrinking funding and neglect." },
          {
            type: "shortanswer",
            prompt: "The passage says ancient accounts of the library's loss \"disagree and contradict each other.\" Why might it be difficult for historians to know exactly what happened, even today?",
            modelAnswer:
              "Events from thousands of years ago often weren't recorded at the time in a reliable, first-hand way, and the accounts that do survive were often written later, by people with their own biases or incomplete information, so historians have to piece together probability from conflicting fragments rather than having one clear, trustworthy record.",
          },
        ],
      },
      {
        id: "know-expert-science-3",
        field: "biology",
        title: "🧬 How Genes Make You, You",
        passage:
          "Inside almost every cell in your body is a complete copy of your DNA, a long molecule containing instructions written in a code made from just four chemical letters, organised into roughly 20,000 individual sections called genes. Each gene contains the instructions for building a specific protein, and proteins are the molecules that do most of the actual work in your body, from carrying oxygen in your blood to helping your muscles contract. You inherit one copy of each gene from your mother and one from your father, which is why children often resemble both parents without being identical to either one — different combinations of inherited gene versions, called alleles, produce different traits, like eye colour or height. Importantly, having a particular gene doesn't always guarantee a particular outcome on its own; many traits are influenced by multiple genes working together, and environmental factors like nutrition, exercise, and even the environment you grew up in can also affect how certain genes are expressed. This is part of why identical twins, who share essentially the same DNA at birth, can still grow up to have somewhat different height, health, or personality traits over their lifetimes.",
        tipTitle: "🔍 Fun Fact",
        tip: "Humans share about 60% of their genes with a banana, since many genes control very basic cell functions common to almost all living things.",
        questions: [
          { type: "mc", prompt: "What does each gene contain instructions for?", options: ["Building a specific protein", "Storing memories and thoughts", "Controlling the local weather"], correctIndex: 0, explanation: "The passage says each gene contains the instructions for building a specific protein." },
          { type: "mc", prompt: "Why might identical twins, who share the same DNA, still grow up with some different traits?", options: ["Environmental factors can affect how certain genes are expressed", "Their DNA secretly changes over the years to become different", "One twin always ends up with far fewer genes than the other one"], correctIndex: 0, explanation: "The passage says environmental factors like nutrition and exercise can affect how certain genes are expressed." },
          {
            type: "shortanswer",
            prompt: "The passage says having a particular gene \"doesn't always guarantee a particular outcome on its own.\" Based on the passage, why is this an important idea to understand about genetics?",
            modelAnswer:
              "It shows that genes aren't the only thing that determines who we become — environment, lifestyle, and how genes interact with each other all play a role too, so genetics isn't simple fate; a person's outcomes come from a mix of inherited instructions and life experience working together.",
          },
        ],
      },
      {
        id: "know-expert-history-4",
        era: "ancient",
        region: "Italy",
        title: "🏛️ Roman Aqueducts: Engineering Without Pumps",
        passage:
          "By the first century CE, the city of Rome had about a million people, and it needed far more fresh water than its wells and the River Tiber could supply. The Romans' solution was the aqueduct: a channel that carried water from springs in the hills, sometimes more than eighty kilometres away, into the city. Remarkably, Roman engineers had no pumps and no electricity; they relied entirely on gravity. The channel had to slope downwards very gently, often by only a fraction of a degree, all the way from the source to the city, because a slope that was too steep would damage the channel and one that was too shallow would let the water stop. To keep this gentle slope across valleys, engineers built the famous arched bridges, but most of an aqueduct actually ran underground or along the surface, because arches were expensive. Surveyors used simple instruments such as the chorobates, a long wooden table with a groove of water on top that acted as a level, to check their measurements. Rome eventually had eleven major aqueducts, which supplied public fountains, baths and some private homes. The system was so reliable that parts of it stayed in use for centuries after the Empire fell, and one of them, the Aqua Virgo, still feeds Rome's Trevi Fountain today.",
        tipTitle: "🔍 Fun Fact",
        tip: "In about 97 CE, the official in charge of Rome's water, Frontinus, wrote a report on the aqueducts and compared them proudly with the \"idle\" pyramids of Egypt.",
        questions: [
          { type: "mc", prompt: "Why did the Roman channels have to slope downwards so gently?", options: ["A steep slope would damage it, and a flat one would stop the water", "The water needed to be pumped uphill by large teams of workers", "The valleys were too shallow to allow a much steeper slope here"], correctIndex: 0, explanation: "Too steep a slope would damage the channel, and too shallow a slope would let the water stop." },
          { type: "mc", prompt: "What can be inferred about the arched bridges?", options: ["They were used only where valleys made them necessary", "They made up most of the whole length of every aqueduct", "They were built to carry roads across the water"], correctIndex: 0, explanation: "Most of an aqueduct ran underground or on the surface, because arches were expensive. Arches were built to cross valleys." },
          {
            type: "shortanswer",
            prompt: "The passage says Roman engineers used no pumps or electricity. Based on the passage, why does this make their achievement more impressive?",
            modelAnswer:
              "They had to deliver water over dozens of kilometres using only gravity, so they needed extremely accurate measurements of a very slight downward slope, and they had to work it out with simple tools such as the chorobates. Making a system that reliable without modern machines shows great skill in planning and surveying.",
          },
        ],
      },
      {
        id: "know-expert-history-5",
        era: "modern",
        region: "Mexico / India",
        title: "🌾 Norman Borlaug and the Green Revolution",
        passage:
          "In the 1940s and 1950s, many scientists feared that population growth would soon cause widespread famine, especially in countries such as India and Pakistan. An American agricultural scientist named Norman Borlaug worked in Mexico, where he bred new varieties of wheat. Two problems held wheat back: it was easily damaged by a disease called rust, and when farmers added fertiliser, the tall stalks grew so heavy that they fell over. Borlaug crossed many varieties, growing two crops a year in different places to speed up the breeding, and eventually produced short, sturdy plants that resisted disease and could carry much heavier grain. In the 1960s, these seeds, together with fertiliser and irrigation, were introduced in India and Pakistan, and within a few years the wheat harvests rose dramatically. The change became known as the Green Revolution, and it is often credited with saving hundreds of millions of people from hunger. Borlaug received the Nobel Peace Prize in 1970. Yet the story is not entirely simple: the new methods needed large amounts of water, fertiliser and chemicals, which damaged some soils and rivers, and they were expensive for poorer farmers. Many experts today argue that the challenge is to keep the benefits of high yields while making farming more sustainable.",
        tipTitle: "🔍 Fun Fact",
        tip: "Borlaug's method of growing two crops a year in two different places, called shuttle breeding, cut the time needed to develop a new variety roughly in half.",
        questions: [
          { type: "mc", prompt: "Why did the tall wheat plants fall over when farmers added fertiliser?", options: ["The stalks became too heavy for the stems to hold up", "The disease called rust attacked the roots of plants", "Fertiliser made the soil too soft to hold them upright"], correctIndex: 0, explanation: "With fertiliser, the tall stalks grew so heavy that they fell over. Borlaug bred shorter, sturdier plants." },
          { type: "mc", prompt: "What does the passage suggest about the Green Revolution?", options: ["It brought great benefits, but it also caused problems", "It solved every problem of farming in poor countries", "It failed because the new wheat was hard to grow"], correctIndex: 0, explanation: "The passage credits it with saving many people from hunger, but says it also damaged soils and rivers, and was costly for poorer farmers." },
          {
            type: "shortanswer",
            prompt: "The passage ends by saying the challenge is to keep high yields while making farming more sustainable. Why might high yields and sustainability sometimes be in conflict?",
            modelAnswer:
              "High yields often depend on lots of water, fertiliser and chemicals, which can damage soil and rivers over time and be costly for farmers. So producing more food today can harm the land that we need in the future, and the challenge is to find methods that feed people without using up or polluting these resources.",
          },
        ],
      },
      {
        id: "know-expert-history-6",
        era: "medieval",
        region: "England",
        title: "📜 Magna Carta and the Limits of Power",
        passage:
          "In 1215, King John of England was in serious trouble. He had lost a costly war with France, raised taxes heavily, and quarrelled with the Pope, and a group of powerful barons finally rebelled. On 15 June, in a meadow at Runnymede beside the River Thames, the king agreed to seal a long document known as Magna Carta, which means \"Great Charter\" in Latin. Most of its sixty-three clauses dealt with the barons' own complaints, such as unfair fines and feudal payments. But a few clauses expressed an idea that would prove far more important: that the king himself was not above the law. One clause promised that no free man could be imprisoned or punished except by the lawful judgement of his equals or by the law of the land. In practice, Magna Carta failed at first: King John persuaded the Pope to cancel it, and civil war followed. But the charter was reissued several times after his death, and over the centuries, lawyers and politicians looked back at it whenever they wanted to argue that rulers must obey the law. Its ideas influenced the English Bill of Rights, the American Constitution and modern human rights documents, although only a handful of its clauses remain in English law today.",
        tipTitle: "🔍 Fun Fact",
        tip: "Only four original copies of the 1215 Magna Carta survive: two are in the British Library, and one each in Lincoln Cathedral and Salisbury Cathedral.",
        questions: [
          { type: "mc", prompt: "Why is Magna Carta remembered today, even though it failed at first?", options: ["It expressed the idea that even a king must obey the law", "It ended the costly war with France in a single afternoon", "It gave the barons complete and lasting control of England"], correctIndex: 0, explanation: "Most clauses were about the barons' complaints, but a few expressed the idea that the king was not above the law, which influenced later documents." },
          { type: "mc", prompt: "What does the passage suggest about why Magna Carta was reissued?", options: ["Later rulers and lawyers still saw it as important", "King John wanted to change all the rules again", "The original copy had been lost at Runnymede meadow"], correctIndex: 0, explanation: "It was reissued after John's death, and over the centuries people looked back to it when arguing that rulers must obey the law." },
          {
            type: "shortanswer",
            prompt: "Most of Magna Carta dealt with the barons' own complaints. Why might a document made for a small group of powerful people still have become important for everyone?",
            modelAnswer:
              "Some clauses stated general principles, such as that no free man could be punished except by lawful judgement and that even the king was under the law. Later generations could apply those principles to everyone, not just the barons, so the ideas became bigger than the reasons for which the charter was first written.",
          },
        ],
      },
      {
        id: "know-expert-history-7",
        era: "ancient",
        region: "India",
        title: "☸️ Ashoka: The Emperor Who Chose Peace",
        passage:
          "In the third century BCE, the Mauryan Empire under Emperor Ashoka ruled nearly all of the Indian subcontinent. Early in his reign, Ashoka expanded his empire through war. In about 261 BCE, he conquered the region of Kalinga, on the east coast of India, in a violent campaign. According to his own inscriptions, when he saw how much suffering the war had caused, he was filled with deep regret. Afterwards, Ashoka turned to Buddhism and to a policy he called dhamma, which stressed kindness, honesty, tolerance and care for all living things. He had his ideas carved on rocks and on tall, polished stone pillars throughout the empire, in local languages and scripts, so that ordinary people could read them. The edicts told officials to treat people fairly, encouraged respect for different religions, and promised hospitals, wells and shady trees along the roads for travellers and animals. Historians debate how far Ashoka's rule really lived up to these words, since much of what we know comes from his own carvings. But the pillars themselves are remarkable: one of them, topped by four lions, was chosen as the national emblem of modern India.",
        tipTitle: "🔍 Fun Fact",
        tip: "One of Ashoka's edicts, found in Kandahar in Afghanistan, was written in both Greek and Aramaic, because those were the languages that people in that region spoke.",
        questions: [
          { type: "mc", prompt: "Why does the passage say historians debate Ashoka's rule?", options: ["Much of what we know comes from his own carvings", "No writing from his time has ever been found", "His empire kept no records of its officials"], correctIndex: 0, explanation: "Much of what we know comes from Ashoka's own inscriptions, so historians question how far reality matched his words." },
          { type: "mc", prompt: "Why did Ashoka have his edicts written in local languages?", options: ["So that ordinary people across the empire could read them", "So that foreign kings could copy them for themselves", "Because the emperor could not read any other language"], correctIndex: 0, explanation: "The edicts were carved in local languages and scripts so ordinary people could read them." },
          {
            type: "shortanswer",
            prompt: "The passage says Ashoka felt regret after the war in Kalinga. What does the story suggest about how leaders can change, and why might the record of this change be hard to check?",
            modelAnswer:
              "It suggests that a powerful leader can change direction after seeing the human cost of their actions, turning from conquest to policies of kindness and tolerance. But the evidence mostly comes from Ashoka's own inscriptions, which he wrote himself, so historians cannot be sure how far his rule matched what he said.",
          },
        ],
      },
      {
        id: "know-expert-science-4",
        field: "biology",
        title: "🦠 The Microbiome: Your Inner Ecosystem",
        passage:
          "Your body is home to trillions of tiny living things: bacteria, viruses and fungi that are together called your microbiome. Most of them live in your intestines, and for a long time scientists thought of them as harmless passengers or, at worst, as germs. Research over the past twenty years has shown that many of these microbes work for you. Some break down fibre that your own enzymes cannot digest, and turn it into substances that feed the cells lining your gut. Others make vitamins, such as vitamin K, and crowd out harmful bacteria by taking up space and food. The microbiome also helps to train your immune system, teaching it to tell dangerous invaders from harmless ones. Babies receive their first microbes during birth and from breast milk, and the community keeps changing with diet, medicine and environment throughout life. Scientists have found links between the microbiome and conditions such as allergies and obesity, and even some effects on mood, but in many cases it is not yet clear whether the microbes cause a condition or simply differ because of it. This distinction, between correlation and cause, is one of the biggest challenges in the field.",
        tipTitle: "🔍 Fun Fact",
        tip: "Scientists now think that the bacteria in your body are roughly as numerous as your own cells, which is much closer to one-to-one than the old estimate of ten to one.",
        questions: [
          { type: "mc", prompt: "How do some gut microbes help their human host?", options: ["They break down fibre that our own enzymes cannot digest", "They send messages to the brain every few seconds or so", "They stop the human body from making its own vitamins"], correctIndex: 0, explanation: "Some microbes break down fibre and turn it into substances that feed the cells lining the gut." },
          { type: "mc", prompt: "Why is it hard to be sure that the microbiome causes a condition?", options: ["The microbes may only differ because of the condition", "Microbes are too small for any scientist to see", "Everyone has exactly the same microbiome as everyone else"], correctIndex: 0, explanation: "In many cases, it is not clear whether the microbes cause the condition or simply differ because of it." },
          {
            type: "shortanswer",
            prompt: "The passage mentions the difference between correlation and cause. In your own words, explain the difference using an example from the passage.",
            modelAnswer:
              "Correlation means two things appear together, and cause means one produces the other. For example, people with a certain condition may have a different mix of gut microbes, but that does not prove the microbes caused it. The condition itself, or the person's diet or medicine, might have changed the microbes instead.",
          },
        ],
      },
      {
        id: "know-expert-science-5",
        field: "chemistry",
        title: "☢️ How Carbon Dating Reveals the Age of the Past",
        passage:
          "How do scientists know that a piece of wood or bone is thousands of years old? For anything that was once alive, one of the most powerful tools is radiocarbon dating, developed in the late 1940s by the American chemist Willard Libby. It relies on a form of carbon called carbon-14. High in the atmosphere, cosmic rays turn a tiny fraction of nitrogen into carbon-14, which is slightly radioactive. It combines with oxygen to make carbon dioxide, which plants take in and animals eat, so every living thing contains a steady, very small proportion of carbon-14. When an organism dies, it stops taking in new carbon, and the carbon-14 already inside it slowly decays. The time it takes for half of it to decay, its half-life, is about 5,730 years. By measuring how much carbon-14 is left in a sample, scientists can calculate how long ago the organism died. After about 50,000 years, too little remains to measure accurately. The method assumes that the amount of carbon-14 in the atmosphere has been constant, which is not exactly true, so researchers check their results against tree rings and other records. Libby received the Nobel Prize in Chemistry in 1960.",
        tipTitle: "🔍 Fun Fact",
        tip: "Radiocarbon dating helped to show that the Dead Sea Scrolls, some of the oldest known copies of biblical texts, are about two thousand years old.",
        questions: [
          { type: "mc", prompt: "Why does a living animal contain carbon-14?", options: ["It eats plants and animals that took it in from the air", "It absorbs the gas directly through its skin and bones", "It makes carbon-14 from the food that it digests slowly"], correctIndex: 0, explanation: "Plants take in carbon dioxide containing carbon-14, and animals eat the plants, so living things contain a steady proportion." },
          { type: "mc", prompt: "What happens to the carbon-14 in an organism after it dies?", options: ["It slowly decays and is not replaced", "It grows steadily as the body decays", "It turns into nitrogen within a few days"], correctIndex: 0, explanation: "After death, the organism stops taking in new carbon, and the carbon-14 already inside slowly decays." },
          {
            type: "shortanswer",
            prompt: "The passage says researchers check radiocarbon results against tree rings. Why is it important to check the method against other records?",
            modelAnswer:
              "The method assumes that the amount of carbon-14 in the atmosphere was always the same, but it has changed over time. Comparing with tree rings, which can be counted year by year, lets scientists correct for these changes, so their calculated dates are more accurate.",
          },
        ],
      },
      {
        id: "know-expert-science-6",
        field: "earth science",
        title: "🧭 Alfred Wegener and Drifting Continents",
        passage:
          "Look at a map of the world and you may notice that the east coast of South America and the west coast of Africa seem to fit together like pieces of a jigsaw. In 1912, the German scientist Alfred Wegener proposed that this was no coincidence: all the continents had once been joined in a single landmass, which he called Pangaea, and had slowly drifted apart. He supported his idea with more than a matching outline. Fossils of the same ancient reptile, Mesosaurus, had been found in both South America and Africa, mountain ranges on separate continents seemed to line up, and there was evidence of ancient glaciers in places that are now warm. Yet most geologists rejected the theory, mainly because Wegener could not explain what force could push continents through solid ocean floor. His suggestion, that the Earth's rotation and the tides did it, was shown to be far too weak. Only in the 1950s and 1960s, after the sea floor was mapped, did scientists find mid-ocean ridges where new crust is created, and they realised that the continents are carried along on moving plates. Wegener's central idea was proved right and became the theory of plate tectonics, although he did not live to see it, as he died in 1930.",
        tipTitle: "🔍 Fun Fact",
        tip: "Wegener was not trained as a geologist. He was a meteorologist and polar explorer who studied weather and the ice of Greenland.",
        questions: [
          { type: "mc", prompt: "Why did most geologists reject Wegener's theory at first?", options: ["He could not explain what force moved the continents", "There were no fossils at all to support his idea", "The continents were already known to be fixed in place"], correctIndex: 0, explanation: "Wegener could not explain what force could push continents through solid ocean floor, and his suggestion was too weak." },
          { type: "mc", prompt: "What discovery in the 1950s and 1960s supported the idea of drifting continents?", options: ["Mid-ocean ridges where new crust is created", "Ancient maps drawn by early sailors", "A giant crack running through South America"], correctIndex: 0, explanation: "Mapping the sea floor revealed mid-ocean ridges where new crust forms, showing that continents ride on moving plates." },
          {
            type: "shortanswer",
            prompt: "Wegener's idea was rejected for many years and later proved right. What does this story suggest about how science works?",
            modelAnswer:
              "It suggests that a good idea can be rejected if it lacks a convincing explanation, and that science can change its mind when new evidence arrives. Wegener had strong clues, but only when scientists mapped the sea floor did they find a mechanism, so evidence, not just a clever idea, is needed to win acceptance.",
          },
        ],
      },
      {
        id: "know-expert-science-7",
        field: "earth science",
        title: "🌡️ The Greenhouse Effect: Earth's Natural Blanket",
        passage:
          "Without the greenhouse effect, life on Earth as we know it would not be possible. Sunlight passes through the atmosphere and warms the surface of the planet. The warmed surface then gives off heat as invisible infrared radiation, which would escape straight into space if the air did not contain certain gases. Gases such as carbon dioxide, methane and water vapour absorb some of this radiation and send part of it back towards the ground, keeping the lower atmosphere warmer than it would otherwise be. Scientists estimate that, without this natural effect, the Earth's average temperature would be about minus eighteen degrees Celsius, instead of the comfortable fifteen degrees or so that we enjoy. The concern today is not the greenhouse effect itself, but that human activities, mainly burning coal, oil and gas and clearing forests, have raised the amount of carbon dioxide in the atmosphere by around fifty per cent since the 1700s. The idea is not new: in 1856, the American scientist Eunice Foote showed that a jar of carbon dioxide warmed more in sunlight than a jar of ordinary air, and in 1896, the Swedish chemist Svante Arrhenius calculated that doubling the carbon dioxide could raise global temperatures. Today, measurements from satellites, ocean buoys and weather stations show that the planet has warmed by roughly one degree Celsius over the past century and a half, and most scientists agree that the cause is largely human activity.",
        tipTitle: "🔍 Fun Fact",
        tip: "The planet Venus has a thick atmosphere of carbon dioxide, and its surface is hot enough to melt lead, hotter than Mercury, even though Venus is much farther from the Sun.",
        questions: [
          { type: "mc", prompt: "What does the natural greenhouse effect do?", options: ["It keeps the lower atmosphere warmer by trapping heat", "It blocks sunlight so that the whole Earth stays cool", "It removes carbon dioxide from the air we breathe"], correctIndex: 0, explanation: "Greenhouse gases absorb infrared radiation and send some back to the ground, keeping the lower atmosphere warmer." },
          { type: "mc", prompt: "According to the passage, what is the main concern today?", options: ["Human activities have increased the amount of carbon dioxide", "The greenhouse effect is only a recent, modern discovery", "The Earth's average temperature has become far too cold"], correctIndex: 0, explanation: "The concern is not the greenhouse effect itself, but the extra carbon dioxide added by burning fuels and clearing forests." },
          {
            type: "shortanswer",
            prompt: "The passage explains that the greenhouse effect is natural and necessary, yet the world is worried about it. How can both statements be true?",
            modelAnswer:
              "A natural amount of greenhouse gases keeps Earth warm enough for life, so the effect is necessary. But burning fuels and clearing forests has added much more carbon dioxide, which traps extra heat and warms the planet beyond its usual level. The problem is the size of the change, not the effect itself.",
          },
        ],
      },
      {
        id: "know-expert-science-8",
        field: "physics",
        title: "🌀 Ripples in Spacetime: Gravitational Waves",
        passage:
          "In 1915, Albert Einstein proposed his general theory of relativity, which describes gravity not as a mysterious pull but as the bending of space and time, together called spacetime, by objects with mass. A year later, he realised that his theory predicted something extraordinary: when massive objects accelerate violently, such as two black holes spiralling towards each other, they should send out ripples in spacetime that travel at the speed of light. These ripples are called gravitational waves. Einstein himself doubted that they could ever be detected, because they are unimaginably weak: by the time they reach the Earth, they stretch and squeeze space by less than a thousandth of the width of a proton across the length of the detector. It took a hundred years to build instruments sensitive enough. The Laser Interferometer Gravitational-Wave Observatory, or LIGO, has two L-shaped detectors in the United States, each with arms four kilometres long. Laser beams travel along the arms, and any tiny change in the length of an arm changes how the beams line up. On 14 September 2015, both detectors recorded the same faint signal, produced by two black holes, each about thirty times the mass of the Sun, which had merged about 1.3 billion years earlier. The discovery, announced in February 2016, confirmed Einstein's prediction and opened a new way of exploring the universe: by \"listening\" to it as well as looking.",
        tipTitle: "🔍 Fun Fact",
        tip: "When the first signal is converted into sound, it is a brief \"chirp\" that rises in pitch, lasting less than a second.",
        questions: [
          { type: "mc", prompt: "Why did Einstein doubt that gravitational waves could be detected?", options: ["They are unimaginably weak by the time they reach the Earth", "They travel much more slowly than the speed of light itself", "They can only be seen through the very largest telescopes"], correctIndex: 0, explanation: "The waves are so weak that they change lengths by less than a thousandth of the width of a proton." },
          { type: "mc", prompt: "How does LIGO detect a gravitational wave?", options: ["It notices tiny changes in how laser beams line up", "It measures the heat that is given out by black holes", "It takes photographs of the distant stars in space"], correctIndex: 0, explanation: "A tiny change in the length of an arm changes how the laser beams line up." },
          {
            type: "shortanswer",
            prompt: "The passage says gravitational waves opened a new way of exploring the universe by \"listening\" to it. Why is this a big change from how astronomers usually study space?",
            modelAnswer:
              "Astronomers have mostly studied space by collecting light and other radiation from objects. Gravitational waves come from motion of mass itself, so they reveal events that give out little or no light, such as black holes merging. That lets scientists learn about parts of the universe that telescopes cannot see.",
          },
        ],
      },
    ],
  };
})();
