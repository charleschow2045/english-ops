// History & Science — four history passages + four science passages per
// tier (24 total), each ~150-300 words with real-world interest, a "Fun
// Fact" bonus, and comprehension questions. Reuses PassageModule (same
// engine as Reading/Comprehension) — no new component needed. History items
// optionally carry `era` (ancient/medieval/modern/myth) and `region`;
// science items optionally carry `field` (biology/chemistry/physics/etc) —
// lightweight tags for future filtering, not yet wired into any picker UI.
// Hard names/terms are covered in src/content/glossary.jsx for the
// tap-to-translate feature.
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
        id: "know-easy-history-2",
        title: "📜 The Invention of Paper",
        passage:
          "Long before paper existed, people in ancient China wrote on heavy materials like bamboo strips, silk cloth, or bone, which were expensive, hard to carry, or difficult to write on. Around the year 105 CE, a court official named Cai Lun improved a method for making paper by mashing together tree bark, old rags, hemp fibres, and fishing nets, then pressing the mixture into thin sheets and letting them dry. This new paper was light, cheap to produce, and much easier to write on than anything used before, so the idea spread quickly across China and, over the following centuries, travelled along trade routes to the Middle East, Europe, and eventually the rest of the world. Papermaking completely changed how people recorded information, shared knowledge, and communicated across long distances, and versions of Cai Lun's basic process are still used in paper factories today.",
        tipTitle: "🔍 Fun Fact",
        tip: "The word \"paper\" actually comes from \"papyrus,\" an older Egyptian writing material made from a plant — but papyrus and true paper are made very differently.",
        questions: [
          { type: "mc", prompt: "What did people in ancient China write on before paper was invented?", options: ["Bamboo strips, silk cloth, or bone", "Plastic sheets", "Modern notebooks"], correctIndex: 0, explanation: "The passage says people used heavy materials like bamboo strips, silk cloth, or bone." },
          { type: "mc", prompt: "What materials did Cai Lun use to make paper?", options: ["Tree bark, old rags, hemp fibres, and fishing nets", "Only silk cloth", "Plastic and metal"], correctIndex: 0, explanation: "The passage says he mashed together tree bark, old rags, hemp fibres, and fishing nets." },
          { type: "mc", prompt: "Why did papermaking spread so quickly, according to the passage?", options: ["It was light, cheap, and easy to write on", "It was very expensive but beautiful", "Only emperors were allowed to use it"], correctIndex: 0, explanation: "The passage says the paper was light, cheap to produce, and much easier to write on than anything before." },
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
      {
        id: "know-easy-science-2",
        title: "🍂 Why Do Leaves Change Colour in Autumn?",
        passage:
          "During spring and summer, leaves look green because they are full of a substance called chlorophyll, which helps trees use sunlight to make food through a process called photosynthesis. As autumn arrives and days grow shorter and cooler, trees slowly stop making chlorophyll and begin preparing to rest for winter. Once the green chlorophyll fades away, other colours that were hidden inside the leaf all along, like yellow and orange, finally become visible. Some trees also produce a brand new red pigment in autumn, which is why certain leaves turn bright red or purple instead of just yellow. Eventually, the tree forms a special layer where each leaf's stem meets the branch, cutting the leaf off from water and nutrients until it falls to the ground. This whole process helps the tree save energy and survive the cold winter months ahead, ready to grow fresh green leaves again once spring returns.",
        tipTitle: "🔍 Fun Fact",
        tip: "The bright red colour in some autumn leaves is a pigment the tree makes freshly each year — it isn't hidden in the leaf like yellow and orange are.",
        questions: [
          { type: "mc", prompt: "Why do leaves look green in spring and summer?", options: ["They are full of chlorophyll", "They are cold", "They have no sunlight"], correctIndex: 0, explanation: "The passage says leaves are full of chlorophyll, which helps trees use sunlight to make food." },
          { type: "mc", prompt: "What happens once the green chlorophyll fades away in autumn?", options: ["Other hidden colours like yellow and orange become visible", "The leaf turns completely white", "The tree stops growing forever"], correctIndex: 0, explanation: "The passage says once chlorophyll fades, colours hidden inside the leaf all along become visible." },
          { type: "mc", prompt: "Why does the tree cut each leaf off from water and nutrients?", options: ["To save energy and survive winter", "To make the leaf grow bigger", "To attract more sunlight"], correctIndex: 0, explanation: "The passage says this process helps the tree save energy and survive the cold winter months." },
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
          { type: "mc", prompt: "Why must pandas eat such huge amounts of bamboo every day?", options: ["Their digestive system absorbs very little energy from it", "Bamboo has no nutrients at all", "Pandas are always hungry for no reason"], correctIndex: 0, explanation: "The passage says a panda's digestive system absorbs very little energy from the tough bamboo it chews." },
          { type: "mc", prompt: "What helps a panda grip bamboo stalks while eating?", options: ["A special wrist bone that works like an extra thumb", "Extra-long teeth", "Sticky paws"], correctIndex: 0, explanation: "The passage says a special wrist bone works almost like an extra thumb to help pandas grip bamboo." },
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
          { type: "mc", prompt: "Why did Hou Yi shoot down nine of the ten suns?", options: ["They were scorching the earth and drying up rivers", "He wanted to become a hero for fun", "The suns asked him to"], correctIndex: 0, explanation: "The passage says the ten suns were scorching the earth until crops withered and rivers dried up." },
          { type: "mc", prompt: "What happened after Chang'e drank the magic elixir?", options: ["She floated up to the moon and has lived there ever since", "She became invisible forever", "She turned into a rabbit"], correctIndex: 0, explanation: "The passage says she floated all the way up to the moon, where she has lived ever since." },
          { type: "mc", prompt: "How do people in China and Hong Kong remember Chang'e today?", options: ["By celebrating the Mid-Autumn Festival with mooncakes", "By shooting arrows at the sky", "By avoiding the moon completely"], correctIndex: 0, explanation: "The passage says families remember Chang'e every autumn during the Mid-Autumn Festival with mooncakes." },
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
        id: "know-medium-history-2",
        title: "🇭🇰 Hong Kong's Handover in 1997",
        passage:
          "For 156 years, Hong Kong was governed as a British colony, a situation that began in 1842 after the First Opium War and later expanded through a 99-year lease signed in 1898 covering the New Territories. As that lease approached its end in the 1980s, the governments of the United Kingdom and China negotiated what should happen next, eventually signing the Sino-British Joint Declaration in 1984. Under this agreement, sovereignty over the whole territory, not just the leased New Territories, would transfer to China, but Hong Kong would keep its own legal system, currency, and way of life for fifty years under a policy known as \"one country, two systems.\" At midnight on 1 July 1997, in a ceremony attended by leaders and dignitaries from around the world, the British flag was formally lowered and the flags of China and the Hong Kong Special Administrative Region were raised in its place. For many residents who had lived their whole lives under British rule, the handover was an emotional moment mixing pride, uncertainty, and hope for what the new arrangement would bring.",
        tipTitle: "🔍 Fun Fact",
        tip: "\"One country, two systems\" was designed to last until 2047 — fifty years after the 1997 handover.",
        questions: [
          { type: "mc", prompt: "What agreement set out the terms of Hong Kong's handover?", options: ["The Sino-British Joint Declaration", "The Treaty of Versailles", "The United Nations Charter"], correctIndex: 0, explanation: "The passage says the UK and China signed the Sino-British Joint Declaration in 1984." },
          { type: "mc", prompt: "Under \"one country, two systems,\" what did Hong Kong keep for fifty years?", options: ["Its own legal system, currency, and way of life", "Complete independence from China", "British citizenship for everyone"], correctIndex: 0, explanation: "The passage says Hong Kong would keep its own legal system, currency, and way of life for fifty years." },
          { type: "mc", prompt: "When exactly did the handover ceremony take place?", options: ["At midnight on 1 July 1997", "On New Year's Day 2000", "In 1984, right after the agreement was signed"], correctIndex: 0, explanation: "The passage says the ceremony happened at midnight on 1 July 1997." },
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
      {
        id: "know-medium-science-2",
        title: "🍯 How Do Bees Make Honey?",
        passage:
          "When a worker bee visits a flower, it drinks the flower's sweet liquid, called nectar, using a long tube-shaped tongue and stores it inside a special pouch called a honey stomach, completely separate from the stomach it uses for normal digestion. Back at the hive, the bee passes the nectar to another worker bee mouth-to-mouth, and this process repeats several times, with each bee adding enzymes that begin breaking the nectar's complex sugars down into simpler ones. Once the nectar is deposited into a honeycomb cell, it is still far too watery to be called honey, so worker bees fan their wings rapidly over the open cells to speed up evaporation, removing much of the water content. When the mixture becomes thick and sticky enough, the bees seal the cell with a thin cap of beeswax, protecting the finished honey so it can be stored safely for months or even years without spoiling. A single bee produces only a tiny fraction of a teaspoon of honey in its entire lifetime, which is why a hive needs thousands of bees working together.",
        tipTitle: "🔍 Fun Fact",
        tip: "Honey found in ancient Egyptian tombs, thousands of years old, has been discovered still perfectly edible — honey almost never spoils.",
        questions: [
          { type: "mc", prompt: "Where does a bee store nectar before returning to the hive?", options: ["In a special honey stomach", "In its normal digestive stomach", "On its wings"], correctIndex: 0, explanation: "The passage says the bee stores nectar in a special honey stomach, separate from its digestive stomach." },
          { type: "mc", prompt: "Why do bees fan their wings over the honeycomb cells?", options: ["To evaporate water and thicken the nectar", "To cool down the hive only", "To attract more bees"], correctIndex: 0, explanation: "The passage says fanning speeds up evaporation, removing much of the water content." },
          { type: "mc", prompt: "Why does a hive need thousands of bees working together?", options: ["Each bee produces only a tiny amount of honey", "Only a few bees are allowed to make honey", "Bees can only work for one day"], correctIndex: 0, explanation: "The passage says a single bee produces only a tiny fraction of a teaspoon in its lifetime." },
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
          { type: "mc", prompt: "What was Zheng He's fleet mainly focused on during its voyages?", options: ["Trade and diplomacy rather than conquering land", "Conquering as many countries as possible", "Fishing for food supplies"], correctIndex: 0, explanation: "The passage says Zheng He mainly focused on trade and diplomacy rather than conquering the lands he visited." },
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
          { type: "mc", prompt: "Why does ice take up more space than liquid water?", options: ["Its molecules arrange into a spread-out crystal pattern", "It absorbs extra air bubbles", "It shrinks tightly together"], correctIndex: 0, explanation: "The passage says ice's hexagonal crystal structure forces molecules to spread slightly further apart." },
          { type: "mc", prompt: "Why is it useful that ice floats instead of sinks?", options: ["It lets water underneath stay liquid so creatures can survive winter", "It makes lakes freeze solid all the way through", "It has no real effect on nature"], correctIndex: 0, explanation: "The passage says the floating ice layer keeps the water underneath liquid, letting creatures survive winter." },
          { type: "mc", prompt: "What generally happens to most substances as they cool and become solid?", options: ["They shrink and become denser", "They expand and float", "They disappear completely"], correctIndex: 0, explanation: "The passage says most substances shrink and become denser as they cool down and turn solid." },
        ],
      },
    ],
    hard: [
      {
        id: "know-hard-history",
        title: "🏺 The Terracotta Army",
        passage:
          "In 1974, a group of farmers digging a well in Shaanxi province, China, stumbled upon something extraordinary: fragments of a clay figure buried beneath the earth. What they had discovered turned out to be part of one of the most significant archaeological finds of the twentieth century — an underground army of thousands of life-sized terracotta soldiers, horses, and chariots, buried more than two thousand years ago to guard the tomb of China's first emperor, Qin Shi Huang. Remarkably, no two soldiers' faces are exactly alike; historians believe artisans may have combined a set of standard templates with individual details to create the illusion of a truly unique army, though the exact method remains debated. Originally, the figures were painted in vivid colours, but most of that paint has faded or flaked away in the centuries since burial, exposed briefly to air during excavation before specialists could properly preserve it. Today, only a fraction of the vast burial site has been excavated, since archaeologists have deliberately left large sections untouched, waiting for better preservation technology to be developed so that future excavations can be conducted with less damage to fragile details like the original paint.",
        tipTitle: "🔍 Fun Fact",
        tip: "Archaeologists have found terracotta soldiers with different hairstyles matching different ranks in the ancient army.",
        questions: [
          { type: "mc", prompt: "Who accidentally discovered the Terracotta Army?", options: ["Farmers digging a well", "Professional archaeologists on an expedition", "Tourists visiting a museum"], correctIndex: 0, explanation: "The passage says farmers digging a well in Shaanxi province made the discovery." },
          { type: "mc", prompt: "What is notable about the soldiers' faces, according to the passage?", options: ["No two are exactly alike", "They are all identical", "None of them have faces"], correctIndex: 0, explanation: "The passage says remarkably, no two soldiers' faces are exactly alike." },
          { type: "mc", prompt: "Why have archaeologists left large sections of the site unexcavated?", options: ["They're waiting for better preservation technology", "They ran out of money", "They believe there's nothing left to find"], correctIndex: 0, explanation: "The passage says they're waiting for better preservation technology to avoid damaging fragile details." },
        ],
      },
      {
        id: "know-hard-history-2",
        title: "🐫 The Silk Road",
        passage:
          "Despite its name, the Silk Road was never a single paved road, but rather a shifting network of overland and sea trade routes that eventually connected China to the Mediterranean world, stretching across Central Asia, Persia, and beyond. Traders rarely travelled the entire route themselves; instead, goods typically passed through a long relay of merchants, each covering one section before handing goods off to the next, changing hands dozens of times before reaching their final destination thousands of kilometres away. Chinese silk was one of the most prized goods moving westward, valued so highly in Rome that some senators reportedly complained about the empire's silver draining away to pay for it, but the network carried far more than fabric — spices, precious stones, glassware, and paper travelled alongside ideas, religions, and inventions that reshaped the societies they reached. Buddhism spread into China partly along these same routes, while papermaking technology eventually travelled the opposite direction into the Islamic world and then Europe. The routes also carried less welcome cargo: historians believe the network likely helped spread the bubonic plague westward in the fourteenth century, showing that increased connection between distant civilizations could bring danger just as easily as prosperity.",
        tipTitle: "🔍 Fun Fact",
        tip: "The term \"Silk Road\" wasn't actually used by ancient traders — a German geographer named Ferdinand von Richthofen coined the name in 1877, long after the routes had declined.",
        questions: [
          { type: "mc", prompt: "Was the Silk Road a single road?", options: ["No, it was a shifting network of many trade routes", "Yes, it was one paved road built by China", "Yes, it was a single sea route"], correctIndex: 0, explanation: "The passage says despite its name, it was never a single paved road but a shifting network of routes." },
          { type: "mc", prompt: "How did goods typically travel the full length of the Silk Road?", options: ["Through a long relay of many different merchants", "Carried by a single trader the whole way", "Shipped directly by the Chinese emperor"], correctIndex: 0, explanation: "The passage says goods passed through a long relay of merchants, changing hands dozens of times." },
          { type: "mc", prompt: "According to the passage, what else spread along the Silk Road besides goods?", options: ["Ideas, religions, inventions — and even disease", "Only silk and nothing else", "Modern technology like computers"], correctIndex: 0, explanation: "The passage mentions ideas, religions, and inventions spreading, as well as the bubonic plague." },
        ],
      },
      {
        id: "know-hard-science",
        title: "💉 How Vaccines Work",
        passage:
          "When a harmful virus or bacteria enters the body for the first time, the immune system needs time to recognise it as a threat and produce the right defences, called antibodies, to fight it off. This delay is part of why first infections can make people so sick — the body is essentially learning what it's up against while the illness is already spreading. Vaccines work by giving the immune system a safe preview of that threat beforehand, usually using a weakened, inactive, or partial version of the virus that cannot cause the actual disease. This preview is enough to trigger the immune system into producing antibodies and, importantly, into creating memory cells that remember exactly how to fight that specific threat in the future. If the real virus ever does enter the body later, the immune system can recognise it almost immediately and respond far faster and more effectively than it would have without the vaccine, often stopping the illness before it causes serious symptoms at all.",
        tipTitle: "🔍 Fun Fact",
        tip: "The first modern vaccine was created in 1796 by Edward Jenner, to protect against smallpox.",
        questions: [
          { type: "mc", prompt: "Why can a person's first infection with a new virus make them very sick?", options: ["The immune system needs time to learn how to fight it", "Vaccines make the first infection worse", "The virus is always weaker the second time"], correctIndex: 0, explanation: "The passage says the delay in recognising the threat is part of why first infections can be severe." },
          { type: "mc", prompt: "What do vaccines give the immune system?", options: ["A safe preview of the threat, using a weakened or partial version", "A full-strength dose of the real disease", "Antibodies made in a lab, injected directly"], correctIndex: 0, explanation: "The passage says vaccines give a safe preview using a weakened, inactive, or partial version of the virus." },
          { type: "mc", prompt: "Why can the body respond faster to a virus after vaccination?", options: ["Memory cells remember exactly how to fight that specific threat", "The virus becomes weaker over time on its own", "Vaccines remove the virus from the environment entirely"], correctIndex: 0, explanation: "The passage says vaccination creates memory cells that remember how to fight the specific threat." },
        ],
      },
      {
        id: "know-hard-science-2",
        title: "🦠 The Accidental Discovery of Penicillin",
        passage:
          "In the summer of 1928, a Scottish scientist named Alexander Fleming left his cluttered laboratory for a two-week holiday, leaving behind several petri dishes of Staphylococcus bacteria that he had been growing for research. When he returned in September, most of the dishes had been ruined by ordinary contamination, exactly what a tidier scientist might have avoided by cleaning up before leaving. One dish, however, caught his attention: a stray spore of mould, likely drifting up from a laboratory on the floor below, had landed in the dish and grown into a small blue-green patch. Around that patch, Fleming noticed something unexpected — a clear ring where the bacteria simply hadn't grown at all, as though the mould itself were somehow killing the germs nearby. Rather than dismissing the dish as ruined and washing it out like the others, Fleming investigated further and identified the mould as a rare strain of Penicillium, eventually isolating the bacteria-killing substance it produced and naming it penicillin. It would take more than a decade, and the urgent medical demands of the Second World War, before other scientists worked out how to mass-produce it reliably, but Fleming's willingness to pay attention to one \"ruined\" experiment ultimately led to the world's first true antibiotic, transforming once-deadly infections into treatable illnesses.",
        tipTitle: "🔍 Fun Fact",
        tip: "Fleming's now-famous reaction when he first spotted the strange clear ring was reportedly just three words: \"That's funny.\"",
        questions: [
          { type: "mc", prompt: "What did Fleming notice around the mould in the contaminated dish?", options: ["A clear ring where bacteria hadn't grown", "A ring of extra bacteria growth", "Nothing unusual at all"], correctIndex: 0, explanation: "The passage says he noticed a clear ring where the bacteria simply hadn't grown at all." },
          { type: "mc", prompt: "What did Fleming do instead of throwing the \"ruined\" dish away?", options: ["He investigated further and identified the mould", "He immediately published his results without further study", "He gave the dish to a museum"], correctIndex: 0, explanation: "The passage says he investigated further and identified the mould as a rare strain of Penicillium." },
          { type: "mc", prompt: "What took more than a decade after Fleming's discovery?", options: ["Working out how to mass-produce penicillin reliably", "Naming the substance penicillin", "Growing the mould in a dish"], correctIndex: 0, explanation: "The passage says it took more than a decade before scientists worked out reliable mass production." },
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
          { type: "mc", prompt: "What is Mansa Musa still considered by many historians?", options: ["The wealthiest individual in recorded history", "A poor but wise ruler", "A famous painter"], correctIndex: 0, explanation: "The passage says Mansa Musa is still considered by many historians to be the wealthiest individual in recorded history." },
          { type: "mc", prompt: "What happened to the price of gold in Cairo after Mansa Musa's visit?", options: ["It crashed because he gave away so much gold", "It doubled overnight", "Nothing changed at all"], correctIndex: 0, explanation: "The passage says he gave away so much gold that he caused the price of gold to crash across the region." },
          { type: "mc", prompt: "What did Mansa Musa help transform Timbuktu into?", options: ["A thriving centre of Islamic learning with libraries and a university", "A large military base", "An empty desert town"], correctIndex: 0, explanation: "The passage says he transformed Timbuktu into a thriving centre of Islamic learning." },
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
          { type: "mc", prompt: "Why does blue light scatter more than red light in Earth's atmosphere?", options: ["Blue light has a shorter wavelength and interacts more with gas molecules", "Blue light travels slower than red light", "Red light is absorbed completely by the ground"], correctIndex: 0, explanation: "The passage says shorter wavelengths like blue scatter more because they interact more with small gas molecules." },
          { type: "mc", prompt: "Why do sunsets often look orange and red?", options: ["Sunlight travels through more atmosphere, scattering away most of the blue light first", "The sun changes colour in the evening", "Clouds turn the sunlight red on purpose"], correctIndex: 0, explanation: "The passage says light near the horizon travels through more atmosphere, scattering away blue light first." },
          { type: "mc", prompt: "What is the scientific name for the scattering effect described in the passage?", options: ["Rayleigh scattering", "Photosynthesis", "Refraction only"], correctIndex: 0, explanation: "The passage names this phenomenon Rayleigh scattering." },
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
        id: "know-expert-history-2",
        title: "🚀 The Apollo 11 Moon Landing",
        passage:
          "On 20 July 1969, as the lunar module Eagle began its final descent toward the Moon's surface, the onboard guidance computer suddenly began flashing an alarm code that neither astronaut Neil Armstrong nor Buzz Aldrin had been specifically trained to recognise on sight: 1202. Unknown to the crew in that tense moment, the alarm didn't mean the computer had failed — it meant the computer was being asked to do more work than it had time for, because a radar switch left in the wrong position was flooding it with unnecessary data it didn't need for landing. In Mission Control back in Houston, a twenty-six-year-old engineer named Steve Bales had only seconds to decide whether the alarm meant the mission should be aborted. Thanks to preparation most people never hear about — software engineer Margaret Hamilton had designed the guidance computer to automatically drop lower-priority tasks and keep running the critical landing programs whenever it became overloaded, and a colleague had handwritten a full list of alarm codes and their meanings just weeks before launch — Bales was able to quickly confirm the alarm was survivable, and Mission Control gave the crew a call to continue. The alarm sounded five times in the final four minutes of descent alone, a detail rarely mentioned in the simplified version of the story most people remember, where the landing is often recalled as smooth and the drama is concentrated entirely on Armstrong's famous first words upon stepping onto the surface.",
        tipTitle: "🔍 Fun Fact",
        tip: "The Apollo Guidance Computer that landed astronauts on the Moon had far less processing power than a modern calculator.",
        questions: [
          { type: "mc", prompt: "What did the 1202 alarm actually mean, according to the passage?", options: ["The computer was overloaded with more tasks than it had time for", "The computer had completely failed", "The lunar module was running out of fuel"], correctIndex: 0, explanation: "The passage says the alarm meant the computer was being asked to do more work than it had time for." },
          { type: "mc", prompt: "Why was Mission Control able to decide quickly that the alarm was survivable?", options: ["Careful preparation, including software design and a handwritten alarm code list, had anticipated this exact problem", "NASA got lucky and guessed correctly", "The astronauts fixed the computer themselves during descent"], correctIndex: 0, explanation: "The passage describes Hamilton's software design and a handwritten alarm code list that let Bales confirm the alarm was survivable." },
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
      {
        id: "know-expert-science-2",
        title: "🧬 The Race to Discover DNA's Double Helix",
        passage:
          "In the early 1950s, several research teams across Britain and the United States were racing to figure out the physical structure of DNA, the molecule that carries genetic information inside living cells, since understanding its shape was seen as the key to understanding how life itself passes on information. At King's College London, chemist Rosalind Franklin was using a technique called X-ray crystallography to photograph DNA fibres, painstaking work that required exact control of humidity and long exposure times. In May 1952, one of her images, later known simply as \"Photo 51,\" captured a distinctive X-shaped pattern that strongly suggested DNA had a helical, spiral structure. Without Franklin's knowledge or permission, a colleague at King's College showed this photograph to James Watson, a scientist working at Cambridge with Francis Crick on their own competing model of DNA. The image gave Watson and Crick a crucial piece of evidence, and within weeks they published their now-famous double helix model in the journal Nature in 1953. Watson, Crick, and King's College researcher Maurice Wilkins later shared the 1962 Nobel Prize for the discovery, but Franklin herself was not included — partly because she had died of ovarian cancer in 1958, four years before the prize was awarded, and Nobel Prizes are never given posthumously. Even so, many historians today argue that Franklin's crucial data was used without proper credit at the time, and her contribution has only been more widely recognised decades later.",
        tipTitle: "🔍 Fun Fact",
        tip: "Photo 51 took about 100 hours of X-ray exposure to capture — an extraordinarily long time compared to a modern camera's photo, which takes a fraction of a second.",
        questions: [
          { type: "mc", prompt: "What did Photo 51 reveal about DNA's structure?", options: ["A distinctive pattern suggesting a helical, spiral shape", "That DNA was completely flat", "That DNA had no repeating structure at all"], correctIndex: 0, explanation: "The passage says Photo 51 captured a pattern that strongly suggested DNA had a helical, spiral structure." },
          { type: "mc", prompt: "Why wasn't Rosalind Franklin awarded the Nobel Prize alongside Watson, Crick, and Wilkins?", options: ["She had died in 1958, and Nobel Prizes are never given posthumously", "Her research was proven to be incorrect", "She refused to accept the award"], correctIndex: 0, explanation: "The passage says she died in 1958, four years before the prize was awarded, and Nobel Prizes are never given posthumously." },
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
          { type: "mc", prompt: "What was the Library of Alexandria's ambitious goal?", options: ["To collect a copy of every significant piece of written knowledge in the ancient world", "To train soldiers for the Egyptian army", "To store gold and treasure"], correctIndex: 0, explanation: "The passage says the library aimed to collect a copy of every significant piece of written knowledge that existed." },
          { type: "mc", prompt: "According to the passage, what do most historians now believe about the library's loss?", options: ["It declined gradually from shrinking funding and neglect, not one dramatic event", "It was destroyed instantly and deliberately by one ruler", "It was moved safely to another country"], correctIndex: 0, explanation: "The passage says most historians now believe the library's decline was gradual, from shrinking funding and neglect." },
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
          { type: "mc", prompt: "What does each gene contain instructions for?", options: ["Building a specific protein", "Storing memories", "Controlling the weather"], correctIndex: 0, explanation: "The passage says each gene contains the instructions for building a specific protein." },
          { type: "mc", prompt: "Why might identical twins, who share the same DNA, still grow up with some different traits?", options: ["Environmental factors can affect how certain genes are expressed", "Their DNA secretly changes to become different", "One twin always has fewer genes"], correctIndex: 0, explanation: "The passage says environmental factors like nutrition and exercise can affect how certain genes are expressed." },
          {
            type: "shortanswer",
            prompt: "The passage says having a particular gene \"doesn't always guarantee a particular outcome on its own.\" Based on the passage, why is this an important idea to understand about genetics?",
            modelAnswer:
              "It shows that genes aren't the only thing that determines who we become — environment, lifestyle, and how genes interact with each other all play a role too, so genetics isn't simple fate; a person's outcomes come from a mix of inherited instructions and life experience working together.",
          },
        ],
      },
    ],
  };
})();
