/**
 * Passages Database with Comprehension Questions
 * Each passage has its own set of Yes/No and Multiple Choice questions
 * Flexible structure for easy expansion
 */

const PASSAGES_DB = {
    passages: [
        // ============================================
        // SCIENCE CATEGORY
        // ============================================
        {
            id: "sci_001",
            category: "science",
            title: "The Water Cycle",
            wordCount: 245,
            difficulty: "easy",
            text: `The water cycle is one of nature's most fundamental processes, continuously moving water through our environment. It begins when the sun heats water in oceans, lakes, and rivers, causing it to evaporate into the atmosphere as water vapor. This invisible gas rises into the sky, where cooler temperatures cause it to condense into tiny water droplets, forming clouds.

As more water vapor condenses, clouds become heavier with moisture. Eventually, this water falls back to Earth as precipitation—rain, snow, sleet, or hail, depending on the temperature. Some of this water flows over the land as runoff, collecting in streams and rivers that eventually reach the ocean. Other water seeps into the ground, becoming groundwater that supplies wells and springs.

Plants also play a crucial role in the water cycle through a process called transpiration. They absorb water through their roots and release it into the atmosphere through their leaves. A single large tree can release hundreds of gallons of water into the air each day.

The water cycle has no beginning or end—it is a continuous loop that has been operating for billions of years. The water you drink today may have once been part of a dinosaur's body or a glacier in Antarctica. This remarkable recycling system ensures that Earth's water supply remains constant, even as it constantly moves and changes form.`,
            questions: [
                { id: "sci_001_q1", type: "yes_no", question: "Does evaporation occur when the sun heats water?", answer: true, explanation: "The passage states that 'the sun heats water in oceans, lakes, and rivers, causing it to evaporate.'" },
                { id: "sci_001_q2", type: "yes_no", question: "Does water vapor condense to form clouds in warmer temperatures?", answer: false, explanation: "The passage says 'cooler temperatures cause it to condense into tiny water droplets.'" },
                { id: "sci_001_q3", type: "yes_no", question: "Can a large tree release hundreds of gallons of water per day?", answer: true, explanation: "The passage states 'A single large tree can release hundreds of gallons of water into the air each day.'" },
                { id: "sci_001_q4", type: "yes_no", question: "Does the water cycle have a clear beginning point?", answer: false, explanation: "The passage explicitly states 'The water cycle has no beginning or end.'" },
                { id: "sci_001_q5", type: "multiple_choice", question: "What is the process called when plants release water into the atmosphere?", options: ["Evaporation", "Precipitation", "Transpiration", "Condensation"], answer: 2, explanation: "The passage describes 'transpiration' as the process where plants 'release water into the atmosphere through their leaves.'" },
                { id: "sci_001_q6", type: "multiple_choice", question: "What forms when water vapor condenses in the atmosphere?", options: ["Rain", "Clouds", "Rivers", "Glaciers"], answer: 1, explanation: "The passage states water vapor 'condense into tiny water droplets, forming clouds.'" },
                { id: "sci_001_q7", type: "multiple_choice", question: "Where does groundwater come from according to the passage?", options: ["Only from rain", "Water that seeps into the ground", "Only from rivers", "From the ocean"], answer: 1, explanation: "The passage says 'Other water seeps into the ground, becoming groundwater.'" },
                { id: "sci_001_q8", type: "multiple_choice", question: "How long has the water cycle been operating?", options: ["Millions of years", "Thousands of years", "Billions of years", "Hundreds of years"], answer: 2, explanation: "The passage states it 'has been operating for billions of years.'" }
            ]
        },
        {
            id: "sci_002",
            category: "science",
            title: "How Vaccines Work",
            wordCount: 268,
            difficulty: "medium",
            text: `Vaccines are one of medicine's greatest achievements, preventing millions of deaths each year by training our immune systems to fight diseases before they can cause harm. Understanding how they work reveals the elegant science behind modern immunization.

When a pathogen like a virus or bacteria enters your body, your immune system responds by producing antibodies—specialized proteins designed to recognize and neutralize that specific invader. This process takes time, and if the pathogen is particularly dangerous, you might become seriously ill before your body can mount an effective defense.

Vaccines work by introducing a harmless version of the pathogen to your immune system. This might be a weakened or killed version of the virus, just a piece of it, or even just the genetic instructions for making one of its proteins. Your immune system responds to this safe training material by creating antibodies, just as it would to a real infection.

The key advantage is that your body now "remembers" this pathogen. Special immune cells called memory B cells and memory T cells remain in your body, ready to rapidly produce antibodies if you encounter the real disease. This means your immune system can defeat the pathogen before it has a chance to make you sick.

This is why vaccines are given before exposure rather than after illness begins. They prepare your defenses in advance. Some vaccines provide lifelong protection with just one or two doses, while others require periodic boosters to maintain immunity. Either way, vaccines transform your body into a fortress against specific diseases, all without the risks of actually getting sick.`,
            questions: [
                { id: "sci_002_q1", type: "yes_no", question: "Do vaccines introduce a harmful version of pathogens into the body?", answer: false, explanation: "The passage states vaccines 'introducing a harmless version of the pathogen.'" },
                { id: "sci_002_q2", type: "yes_no", question: "Are antibodies specialized proteins?", answer: true, explanation: "The passage describes antibodies as 'specialized proteins designed to recognize and neutralize that specific invader.'" },
                { id: "sci_002_q3", type: "yes_no", question: "Do all vaccines provide lifelong protection with just one dose?", answer: false, explanation: "The passage says 'Some vaccines provide lifelong protection... while others require periodic boosters.'" },
                { id: "sci_002_q4", type: "yes_no", question: "Are memory B cells involved in the immune system's 'memory' of pathogens?", answer: true, explanation: "The passage mentions 'memory B cells and memory T cells remain in your body' to remember pathogens." },
                { id: "sci_002_q5", type: "multiple_choice", question: "What do antibodies do according to the passage?", options: ["Create new diseases", "Recognize and neutralize invaders", "Weaken the immune system", "Spread infections"], answer: 1, explanation: "Antibodies are described as 'designed to recognize and neutralize that specific invader.'" },
                { id: "sci_002_q6", type: "multiple_choice", question: "When should vaccines ideally be given?", options: ["During illness", "After recovery", "Before exposure", "Only to sick people"], answer: 2, explanation: "The passage states 'vaccines are given before exposure rather than after illness begins.'" },
                { id: "sci_002_q7", type: "multiple_choice", question: "What might a vaccine contain?", options: ["Only live viruses", "A weakened or killed version of the virus", "Antibiotics", "Blood cells"], answer: 1, explanation: "The passage mentions vaccines might be 'a weakened or killed version of the virus, just a piece of it, or even just the genetic instructions.'" },
                { id: "sci_002_q8", type: "multiple_choice", question: "What does the passage compare a vaccinated body to?", options: ["A hospital", "A laboratory", "A fortress", "A battlefield"], answer: 2, explanation: "The passage says vaccines 'transform your body into a fortress against specific diseases.'" }
            ]
        },
        {
            id: "sci_003",
            category: "science",
            title: "Black Holes Explained",
            wordCount: 289,
            difficulty: "hard",
            text: `Black holes are among the universe's most mysterious and awe-inspiring phenomena. These cosmic objects possess gravitational pulls so intense that nothing—not even light—can escape once it crosses a boundary called the event horizon. Despite their name suggesting emptiness, black holes are actually the densest objects known to exist.

Black holes form when massive stars exhaust their nuclear fuel and collapse under their own gravity. During this stellar death, the core compresses into an incredibly small point called a singularity, where the normal laws of physics break down. The mass of several suns can be concentrated into a space smaller than a city.

Scientists cannot directly observe black holes since they emit no light, but they can detect their presence through their effects on nearby matter. Gas and dust falling toward a black hole form a swirling disk called an accretion disk, which heats up to millions of degrees and emits powerful X-rays. By observing these emissions and the orbital behavior of nearby stars, astronomers can locate black holes and estimate their mass.

There are different types of black holes. Stellar black holes, formed from collapsed stars, have masses between about 5 and 50 times that of our sun. Supermassive black holes, found at the centers of galaxies, can contain millions or billions of solar masses. Scientists believe there may also be primordial black holes formed shortly after the Big Bang.

In 2019, scientists achieved a remarkable milestone by capturing the first-ever image of a black hole using the Event Horizon Telescope, a network of radio telescopes spanning the globe. The image showed the shadow of a supermassive black hole in the galaxy M87, confirming decades of theoretical predictions about these extraordinary cosmic objects.`,
            questions: [
                { id: "sci_003_q1", type: "yes_no", question: "Can light escape from a black hole once it crosses the event horizon?", answer: false, explanation: "The passage states 'nothing—not even light—can escape once it crosses a boundary called the event horizon.'" },
                { id: "sci_003_q2", type: "yes_no", question: "Do black holes form when massive stars exhaust their nuclear fuel?", answer: true, explanation: "The passage states 'Black holes form when massive stars exhaust their nuclear fuel and collapse.'" },
                { id: "sci_003_q3", type: "yes_no", question: "Can scientists directly observe black holes with visible light?", answer: false, explanation: "The passage says 'Scientists cannot directly observe black holes since they emit no light.'" },
                { id: "sci_003_q4", type: "yes_no", question: "Was the first image of a black hole captured in 2019?", answer: true, explanation: "The passage states 'In 2019, scientists achieved a remarkable milestone by capturing the first-ever image of a black hole.'" },
                { id: "sci_003_q5", type: "multiple_choice", question: "What is the point at the center of a black hole called?", options: ["Event horizon", "Accretion disk", "Singularity", "Corona"], answer: 2, explanation: "The passage describes 'an incredibly small point called a singularity.'" },
                { id: "sci_003_q6", type: "multiple_choice", question: "What emits X-rays near a black hole?", options: ["The singularity", "The event horizon", "The accretion disk", "Nearby stars"], answer: 2, explanation: "The passage states the accretion disk 'heats up to millions of degrees and emits powerful X-rays.'" },
                { id: "sci_003_q7", type: "multiple_choice", question: "Where are supermassive black holes typically found?", options: ["In nebulae", "At the centers of galaxies", "Between galaxies", "In asteroid belts"], answer: 1, explanation: "The passage says 'Supermassive black holes, found at the centers of galaxies.'" },
                { id: "sci_003_q8", type: "multiple_choice", question: "In which galaxy was the first photographed black hole located?", options: ["Milky Way", "Andromeda", "M87", "M31"], answer: 2, explanation: "The passage mentions 'the shadow of a supermassive black hole in the galaxy M87.'" }
            ]
        },

        // ============================================
        // HISTORY CATEGORY
        // ============================================
        {
            id: "hist_001",
            category: "history",
            title: "The Construction of the Great Pyramid",
            wordCount: 276,
            difficulty: "medium",
            text: `The Great Pyramid of Giza stands as one of humanity's most remarkable engineering achievements. Built over 4,500 years ago during Egypt's Old Kingdom, it served as the tomb of Pharaoh Khufu and took approximately 20 years to complete. For nearly 4,000 years, it remained the tallest human-made structure on Earth.

The pyramid contains an estimated 2.3 million stone blocks, each weighing an average of 2.5 tons, though some granite blocks in the king's chamber weigh up to 80 tons. How ancient Egyptians transported and precisely positioned these massive stones remains a subject of scholarly debate, though evidence suggests they used a combination of ramps, levers, and organized labor forces.

Contrary to popular belief, the pyramids were not built by slaves. Archaeological evidence shows that the workforce consisted of skilled laborers and conscripted farmers who worked during the Nile's annual flood season when farming was impossible. Workers lived in nearby villages with access to medical care, bread, and beer—a staple of the Egyptian diet.

The pyramid's original appearance would have been strikingly different from what we see today. It was originally covered in smooth, white limestone casing stones that would have gleamed brilliantly in the Egyptian sun. Most of these were stripped away over the centuries for use in other building projects.

The precision of the pyramid's construction continues to astound engineers. Its base is level to within just 2.1 centimeters across its entire 230-meter width, and its sides are aligned almost perfectly with the cardinal directions. Such accuracy, achieved without modern technology, speaks to the sophistication of ancient Egyptian engineering and mathematics.`,
            questions: [
                { id: "hist_001_q1", type: "yes_no", question: "Was the Great Pyramid built as a tomb for Pharaoh Khufu?", answer: true, explanation: "The passage states 'it served as the tomb of Pharaoh Khufu.'" },
                { id: "hist_001_q2", type: "yes_no", question: "Were the pyramids built by slaves according to the passage?", answer: false, explanation: "The passage explicitly states 'Contrary to popular belief, the pyramids were not built by slaves.'" },
                { id: "hist_001_q3", type: "yes_no", question: "Did the pyramid originally have a smooth white exterior?", answer: true, explanation: "The passage mentions 'It was originally covered in smooth, white limestone casing stones.'" },
                { id: "hist_001_q4", type: "yes_no", question: "Is the pyramid's base level to within 2 meters?", answer: false, explanation: "The passage states it is 'level to within just 2.1 centimeters'—much more precise than 2 meters." },
                { id: "hist_001_q5", type: "multiple_choice", question: "How long did it take to build the Great Pyramid?", options: ["10 years", "20 years", "50 years", "100 years"], answer: 1, explanation: "The passage states it 'took approximately 20 years to complete.'" },
                { id: "hist_001_q6", type: "multiple_choice", question: "What did workers receive as part of their provisions?", options: ["Wine and grapes", "Bread and beer", "Meat and milk", "Fish and water"], answer: 1, explanation: "The passage mentions 'access to medical care, bread, and beer.'" },
                { id: "hist_001_q7", type: "multiple_choice", question: "How many stone blocks does the pyramid contain?", options: ["About 1 million", "About 2.3 million", "About 5 million", "About 10 million"], answer: 1, explanation: "The passage states 'an estimated 2.3 million stone blocks.'" },
                { id: "hist_001_q8", type: "multiple_choice", question: "When did workers build the pyramids?", options: ["During harvest season", "During the flood season", "Year-round", "Only in winter"], answer: 1, explanation: "Workers 'worked during the Nile's annual flood season when farming was impossible.'" }
            ]
        },
        {
            id: "hist_002",
            category: "history",
            title: "The Fall of the Roman Empire",
            wordCount: 298,
            difficulty: "medium",
            text: `The fall of the Western Roman Empire in 476 CE marked the end of ancient history and the beginning of the medieval period in Europe. However, this momentous event was not a sudden collapse but rather the culmination of centuries of gradual decline caused by multiple interconnected factors.

Economic troubles plagued the empire for generations. Constant warfare drained the treasury, leading to higher taxes that burdened citizens and reduced economic productivity. The government devalued currency by reducing the silver content in coins, causing inflation that devastated savings and trade. The wealthy elite increasingly evaded taxes, shifting the burden onto the poor and middle class.

Military problems compounded these economic woes. The Roman legions, once feared throughout the known world, became increasingly dependent on Germanic mercenaries who felt no loyalty to Rome. Defending the empire's vast borders stretched resources thin, and successive military defeats emboldened external enemies. The army's prestige declined, and ambitious generals often fought civil wars against each other rather than defending against foreign invaders.

Political instability accelerated the decline. In the third century alone, Rome had more than 20 emperors, most of whom met violent ends. This constant turnover prevented the implementation of long-term policies and encouraged corruption. The division of the empire into eastern and western halves in 285 CE, while intended to improve administration, ultimately weakened the west as resources flowed eastward.

When the Germanic chieftain Odoacer deposed the last Western Roman Emperor, Romulus Augustulus, in 476 CE, he was merely administering the final blow to a system that had been dying for centuries. The Eastern Roman Empire, known as the Byzantine Empire, would survive for nearly another thousand years, preserving much of Roman culture and law.`,
            questions: [
                { id: "hist_002_q1", type: "yes_no", question: "Did the Western Roman Empire fall suddenly in a single event?", answer: false, explanation: "The passage states 'this momentous event was not a sudden collapse but rather the culmination of centuries of gradual decline.'" },
                { id: "hist_002_q2", type: "yes_no", question: "Did the Roman government devalue currency by reducing silver content?", answer: true, explanation: "The passage mentions 'The government devalued currency by reducing the silver content in coins.'" },
                { id: "hist_002_q3", type: "yes_no", question: "Did the Byzantine Empire survive after the fall of Western Rome?", answer: true, explanation: "The passage states 'The Eastern Roman Empire, known as the Byzantine Empire, would survive for nearly another thousand years.'" },
                { id: "hist_002_q4", type: "yes_no", question: "Were wealthy Romans paying their fair share of taxes?", answer: false, explanation: "The passage says 'The wealthy elite increasingly evaded taxes.'" },
                { id: "hist_002_q5", type: "multiple_choice", question: "In what year did the Western Roman Empire officially fall?", options: ["285 CE", "410 CE", "476 CE", "527 CE"], answer: 2, explanation: "The passage states 'The fall of the Western Roman Empire in 476 CE.'" },
                { id: "hist_002_q6", type: "multiple_choice", question: "Who deposed the last Western Roman Emperor?", options: ["Julius Caesar", "Constantine", "Odoacer", "Attila"], answer: 2, explanation: "The passage mentions 'the Germanic chieftain Odoacer deposed the last Western Roman Emperor.'" },
                { id: "hist_002_q7", type: "multiple_choice", question: "How many emperors did Rome have in the third century?", options: ["More than 5", "More than 10", "More than 20", "More than 50"], answer: 2, explanation: "The passage states 'In the third century alone, Rome had more than 20 emperors.'" },
                { id: "hist_002_q8", type: "multiple_choice", question: "What was the name of the last Western Roman Emperor?", options: ["Constantine", "Augustus", "Romulus Augustulus", "Nero"], answer: 2, explanation: "The passage mentions 'the last Western Roman Emperor, Romulus Augustulus.'" }
            ]
        },
        {
            id: "hist_003",
            category: "history",
            title: "The Space Race",
            wordCount: 284,
            difficulty: "easy",
            text: `The Space Race was a Cold War competition between the United States and the Soviet Union to achieve superiority in space exploration. Beginning in the late 1950s and culminating with the Apollo moon landings, this rivalry drove unprecedented advances in rocket technology, satellite communications, and our understanding of space.

The Soviet Union initially dominated the competition. In 1957, they shocked the world by launching Sputnik, the first artificial satellite, into orbit. The following year, they launched Sputnik 2, carrying a dog named Laika—the first living creature in orbit. In 1961, Soviet cosmonaut Yuri Gagarin became the first human in space, completing one orbit around Earth aboard Vostok 1.

These Soviet achievements prompted an American response. President John F. Kennedy declared in 1961 that the United States would land a man on the moon before the decade's end. This ambitious goal drove the creation of NASA's Apollo program, which consumed over $25 billion—equivalent to hundreds of billions in today's dollars.

The Apollo program achieved its goal on July 20, 1969, when astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the moon. Armstrong's famous words, "That's one small step for man, one giant leap for mankind," were broadcast to hundreds of millions of viewers worldwide. Five more successful lunar landings followed before the program ended in 1972.

The Space Race's legacy extends far beyond national prestige. Technologies developed for space exploration led to advances in computing, materials science, and telecommunications that benefit our daily lives. Perhaps most importantly, the photographs of Earth from space fostered a new environmental awareness and sense of our planet's fragility.`,
            questions: [
                { id: "hist_003_q1", type: "yes_no", question: "Was Sputnik the first artificial satellite launched into orbit?", answer: true, explanation: "The passage states 'they shocked the world by launching Sputnik, the first artificial satellite, into orbit.'" },
                { id: "hist_003_q2", type: "yes_no", question: "Was Neil Armstrong the first human in space?", answer: false, explanation: "The passage states 'Soviet cosmonaut Yuri Gagarin became the first human in space.'" },
                { id: "hist_003_q3", type: "yes_no", question: "Did the United States initially dominate the Space Race?", answer: false, explanation: "The passage says 'The Soviet Union initially dominated the competition.'" },
                { id: "hist_003_q4", type: "yes_no", question: "Were there more than three successful lunar landings in the Apollo program?", answer: true, explanation: "The passage mentions the first landing plus 'Five more successful lunar landings followed,' totaling six." },
                { id: "hist_003_q5", type: "multiple_choice", question: "What was the name of the dog launched into space?", options: ["Bella", "Laika", "Luna", "Sputnik"], answer: 1, explanation: "The passage mentions 'a dog named Laika—the first living creature in orbit.'" },
                { id: "hist_003_q6", type: "multiple_choice", question: "When did humans first walk on the moon?", options: ["July 4, 1969", "July 20, 1969", "August 15, 1969", "December 25, 1969"], answer: 1, explanation: "The passage states 'July 20, 1969, when astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the moon.'" },
                { id: "hist_003_q7", type: "multiple_choice", question: "How much did the Apollo program cost?", options: ["About $5 billion", "About $15 billion", "Over $25 billion", "Over $100 billion"], answer: 2, explanation: "The passage states the program 'consumed over $25 billion.'" },
                { id: "hist_003_q8", type: "multiple_choice", question: "Which president declared the goal of landing on the moon?", options: ["Richard Nixon", "Dwight Eisenhower", "John F. Kennedy", "Lyndon Johnson"], answer: 2, explanation: "The passage states 'President John F. Kennedy declared in 1961 that the United States would land a man on the moon.'" }
            ]
        },

        // ============================================
        // TECHNOLOGY CATEGORY
        // ============================================
        {
            id: "tech_001",
            category: "technology",
            title: "How the Internet Works",
            wordCount: 271,
            difficulty: "medium",
            text: `The internet is a vast network connecting billions of devices worldwide, enabling instant communication and information sharing that has transformed modern life. Understanding how it works reveals an elegant system of protocols and infrastructure that makes this global connectivity possible.

At its core, the internet operates on a principle called packet switching. When you send data—whether an email, a video, or a website request—it is broken into small chunks called packets. Each packet is labeled with source and destination addresses and can travel independently through the network, taking different routes before being reassembled at the destination.

This process relies on a set of rules called protocols. The most fundamental are TCP/IP (Transmission Control Protocol/Internet Protocol). IP handles addressing—giving every device a unique numerical address—while TCP ensures packets arrive correctly and in order. These protocols allow different types of devices and networks to communicate seamlessly.

The physical infrastructure of the internet is equally impressive. Massive undersea cables carry most international internet traffic, with some spanning entire oceans. Data centers house millions of servers that store websites and process requests. Internet Service Providers (ISPs) connect homes and businesses to this global network through fiber optic cables, copper wires, or wireless signals.

When you type a website address into your browser, a Domain Name System (DNS) server translates this human-readable address into a numerical IP address. Your request then travels through routers—specialized computers that direct traffic—until it reaches the server hosting that website. The server sends back the requested data, which your browser renders into the page you see.`,
            questions: [
                { id: "tech_001_q1", type: "yes_no", question: "Is data sent across the internet in small chunks called packets?", answer: true, explanation: "The passage states 'it is broken into small chunks called packets.'" },
                { id: "tech_001_q2", type: "yes_no", question: "Must all packets take the same route through the network?", answer: false, explanation: "The passage says 'Each packet... can travel independently through the network, taking different routes.'" },
                { id: "tech_001_q3", type: "yes_no", question: "Do undersea cables carry most international internet traffic?", answer: true, explanation: "The passage states 'Massive undersea cables carry most international internet traffic.'" },
                { id: "tech_001_q4", type: "yes_no", question: "Does the DNS translate numerical addresses into website names?", answer: false, explanation: "It's the reverse: 'DNS server translates this human-readable address into a numerical IP address.'" },
                { id: "tech_001_q5", type: "multiple_choice", question: "What does TCP ensure?", options: ["Fast downloads", "Packets arrive correctly and in order", "Wireless connectivity", "Video streaming"], answer: 1, explanation: "The passage states 'TCP ensures packets arrive correctly and in order.'" },
                { id: "tech_001_q6", type: "multiple_choice", question: "What gives every device a unique numerical address?", options: ["TCP", "DNS", "IP", "ISP"], answer: 2, explanation: "The passage says 'IP handles addressing—giving every device a unique numerical address.'" },
                { id: "tech_001_q7", type: "multiple_choice", question: "What are routers described as in the passage?", options: ["Storage devices", "Specialized computers that direct traffic", "Cables", "Modems"], answer: 1, explanation: "The passage describes routers as 'specialized computers that direct traffic.'" },
                { id: "tech_001_q8", type: "multiple_choice", question: "What connects homes to the global network?", options: ["Only fiber optic cables", "Only wireless signals", "ISPs", "DNS servers"], answer: 2, explanation: "The passage states 'Internet Service Providers (ISPs) connect homes and businesses to this global network.'" }
            ]
        },
        {
            id: "tech_002",
            category: "technology",
            title: "Artificial Intelligence Basics",
            wordCount: 295,
            difficulty: "medium",
            text: `Artificial Intelligence, commonly known as AI, represents one of the most transformative technologies of our era. At its essence, AI refers to computer systems designed to perform tasks that typically require human intelligence, such as recognizing speech, making decisions, and identifying patterns in data.

Modern AI primarily works through a technique called machine learning. Rather than being explicitly programmed with rules for every situation, machine learning systems learn from data. They analyze vast amounts of examples to identify patterns and make predictions. For instance, an AI trained on millions of photos can learn to distinguish cats from dogs by recognizing subtle patterns in pixel arrangements.

Deep learning, a subset of machine learning, uses artificial neural networks inspired by the human brain. These networks consist of layers of interconnected nodes that process information. Each layer extracts increasingly complex features from the input data. A deep learning system analyzing an image might first detect edges, then shapes, then parts of objects, and finally recognize the complete object.

AI applications now permeate daily life in ways many people don't realize. Virtual assistants like Siri and Alexa use AI to understand speech and respond appropriately. Streaming services use AI to recommend content based on viewing history. Email spam filters, autocomplete suggestions, and facial recognition in photos all rely on AI algorithms.

However, AI has limitations. Current systems excel at narrow tasks but lack the general intelligence humans possess. They can make mistakes, especially when encountering situations unlike their training data. AI systems can also perpetuate biases present in their training data, raising important ethical questions about fairness and accountability. Understanding both AI's capabilities and limitations is essential as this technology becomes increasingly integrated into society.`,
            questions: [
                { id: "tech_002_q1", type: "yes_no", question: "Are machine learning systems explicitly programmed with rules for every situation?", answer: false, explanation: "The passage states 'Rather than being explicitly programmed with rules for every situation, machine learning systems learn from data.'" },
                { id: "tech_002_q2", type: "yes_no", question: "Are neural networks inspired by the human brain?", answer: true, explanation: "The passage describes 'artificial neural networks inspired by the human brain.'" },
                { id: "tech_002_q3", type: "yes_no", question: "Do current AI systems possess general intelligence like humans?", answer: false, explanation: "The passage states 'Current systems excel at narrow tasks but lack the general intelligence humans possess.'" },
                { id: "tech_002_q4", type: "yes_no", question: "Can AI systems perpetuate biases from their training data?", answer: true, explanation: "The passage mentions 'AI systems can also perpetuate biases present in their training data.'" },
                { id: "tech_002_q5", type: "multiple_choice", question: "How do machine learning systems learn?", options: ["From explicit programming", "From data and examples", "From the internet automatically", "From human supervision only"], answer: 1, explanation: "The passage states 'machine learning systems learn from data' by analyzing 'vast amounts of examples.'" },
                { id: "tech_002_q6", type: "multiple_choice", question: "What does the first layer of a deep learning image system typically detect?", options: ["Complete objects", "Colors", "Edges", "Faces"], answer: 2, explanation: "The passage says 'A deep learning system analyzing an image might first detect edges.'" },
                { id: "tech_002_q7", type: "multiple_choice", question: "Which of these is mentioned as using AI?", options: ["Calculators", "Analog clocks", "Virtual assistants", "Light switches"], answer: 2, explanation: "The passage mentions 'Virtual assistants like Siri and Alexa use AI.'" },
                { id: "tech_002_q8", type: "multiple_choice", question: "What ethical concern about AI is mentioned?", options: ["Energy consumption", "Job losses", "Bias and fairness", "Privacy"], answer: 2, explanation: "The passage discusses 'biases present in their training data, raising important ethical questions about fairness.'" }
            ]
        },

        // ============================================
        // NATURE CATEGORY
        // ============================================
        {
            id: "nat_001",
            category: "nature",
            title: "The Great Barrier Reef",
            wordCount: 263,
            difficulty: "easy",
            text: `The Great Barrier Reef, located off the coast of Queensland, Australia, is the largest coral reef system on Earth and one of our planet's most spectacular natural wonders. Stretching over 2,300 kilometers, it is so vast that it can be seen from space. This underwater paradise is home to an astonishing diversity of marine life.

The reef is not a single structure but rather a complex system of over 2,900 individual reefs and 900 islands. It supports more than 1,500 species of fish, 400 types of coral, and countless other marine creatures including dolphins, sea turtles, whales, and giant clams. The vibrant colors of the coral and fish create an underwater landscape unlike anywhere else on Earth.

Coral reefs are actually built by tiny animals called coral polyps. These small creatures secrete calcium carbonate to create hard skeletons that accumulate over thousands of years to form reef structures. Corals have a symbiotic relationship with microscopic algae called zooxanthellae, which live in their tissues and produce food through photosynthesis, giving corals their brilliant colors.

Unfortunately, the Great Barrier Reef faces serious threats from climate change. Rising ocean temperatures cause coral bleaching—a stress response where corals expel their symbiotic algae, turning white and potentially dying. The reef has experienced several mass bleaching events in recent years. Ocean acidification, pollution, and coastal development also threaten this fragile ecosystem.

Conservation efforts are underway to protect the reef. Scientists are researching heat-resistant coral varieties, and strict regulations limit fishing and tourism activities in sensitive areas. The future of this natural treasure depends on global action to address climate change.`,
            questions: [
                { id: "nat_001_q1", type: "yes_no", question: "Can the Great Barrier Reef be seen from space?", answer: true, explanation: "The passage states 'it is so vast that it can be seen from space.'" },
                { id: "nat_001_q2", type: "yes_no", question: "Is the Great Barrier Reef a single continuous structure?", answer: false, explanation: "The passage says 'The reef is not a single structure but rather a complex system of over 2,900 individual reefs.'" },
                { id: "nat_001_q3", type: "yes_no", question: "Do coral polyps secrete calcium carbonate?", answer: true, explanation: "The passage states 'These small creatures secrete calcium carbonate to create hard skeletons.'" },
                { id: "nat_001_q4", type: "yes_no", question: "Is coral bleaching caused by cold water temperatures?", answer: false, explanation: "The passage says 'Rising ocean temperatures cause coral bleaching.'" },
                { id: "nat_001_q5", type: "multiple_choice", question: "How long is the Great Barrier Reef?", options: ["Over 500 km", "Over 1,000 km", "Over 2,300 km", "Over 5,000 km"], answer: 2, explanation: "The passage states 'Stretching over 2,300 kilometers.'" },
                { id: "nat_001_q6", type: "multiple_choice", question: "How many species of fish does the reef support?", options: ["More than 500", "More than 1,000", "More than 1,500", "More than 2,000"], answer: 2, explanation: "The passage mentions 'more than 1,500 species of fish.'" },
                { id: "nat_001_q7", type: "multiple_choice", question: "What are zooxanthellae?", options: ["Fish species", "Microscopic algae", "Coral predators", "Ocean currents"], answer: 1, explanation: "The passage describes 'microscopic algae called zooxanthellae.'" },
                { id: "nat_001_q8", type: "multiple_choice", question: "What happens to corals during bleaching?", options: ["They grow faster", "They change color to blue", "They expel symbiotic algae", "They multiply"], answer: 2, explanation: "The passage explains bleaching as 'a stress response where corals expel their symbiotic algae, turning white.'" }
            ]
        },
        {
            id: "nat_002",
            category: "nature",
            title: "Migration Patterns of Monarch Butterflies",
            wordCount: 278,
            difficulty: "medium",
            text: `Every autumn, millions of monarch butterflies embark on one of nature's most remarkable journeys. These delicate insects, weighing less than a gram, travel up to 4,800 kilometers from Canada and the United States to their winter sanctuaries in the mountain forests of central Mexico. This epic migration has captivated scientists and nature enthusiasts for generations.

Unlike birds, individual monarchs cannot complete the entire round trip. The butterflies that fly south in autumn are a special "super generation" that lives up to eight months—far longer than the typical two-to-six week lifespan of summer generations. They arrive in Mexico by November and cluster together in oyamel fir trees, where the cool mountain temperatures allow them to conserve energy.

In late winter, these same butterflies begin flying north, laying eggs on milkweed plants along the way. This first generation lives only a few weeks, but their offspring continue the northward journey. It takes three to four generations of butterflies to complete the return trip to Canada, with each generation traveling part of the route before reproducing and dying.

The most mysterious aspect of this migration is navigation. Monarchs use an internal compass that relies on the sun's position, combined with a circadian clock in their brains. Scientists have discovered that their antennae contain light-sensitive cells that help calibrate this sun compass. Additionally, they may use Earth's magnetic field for orientation, though this remains under investigation.

Monarch populations have declined significantly in recent decades due to habitat loss, pesticide use, and climate change. Conservation efforts focus on planting milkweed—the only plant monarch caterpillars eat—and protecting Mexican wintering sites. These beautiful insects remind us of the interconnectedness of ecosystems across continents.`,
            questions: [
                { id: "nat_002_q1", type: "yes_no", question: "Do individual monarchs complete the entire round-trip migration?", answer: false, explanation: "The passage states 'individual monarchs cannot complete the entire round trip.'" },
                { id: "nat_002_q2", type: "yes_no", question: "Does the 'super generation' of monarchs live longer than summer generations?", answer: true, explanation: "The passage says they are 'a special super generation that lives up to eight months—far longer than the typical two-to-six week lifespan.'" },
                { id: "nat_002_q3", type: "yes_no", question: "Do monarch butterflies weigh more than 10 grams?", answer: false, explanation: "The passage states they are 'weighing less than a gram.'" },
                { id: "nat_002_q4", type: "yes_no", question: "Is milkweed the only plant monarch caterpillars eat?", answer: true, explanation: "The passage says 'milkweed—the only plant monarch caterpillars eat.'" },
                { id: "nat_002_q5", type: "multiple_choice", question: "How far do monarchs travel during migration?", options: ["Up to 1,000 km", "Up to 2,500 km", "Up to 4,800 km", "Up to 10,000 km"], answer: 2, explanation: "The passage mentions they 'travel up to 4,800 kilometers.'" },
                { id: "nat_002_q6", type: "multiple_choice", question: "How many generations complete the northward return journey?", options: ["One generation", "Two generations", "Three to four generations", "Six generations"], answer: 2, explanation: "The passage states 'It takes three to four generations of butterflies to complete the return trip.'" },
                { id: "nat_002_q7", type: "multiple_choice", question: "What tree do monarchs cluster in during winter?", options: ["Oak trees", "Pine trees", "Oyamel fir trees", "Maple trees"], answer: 2, explanation: "The passage mentions they 'cluster together in oyamel fir trees.'" },
                { id: "nat_002_q8", type: "multiple_choice", question: "Where are light-sensitive navigation cells located on monarchs?", options: ["Their wings", "Their eyes", "Their antennae", "Their legs"], answer: 2, explanation: "The passage states 'their antennae contain light-sensitive cells.'" }
            ]
        },

        // ============================================
        // LITERATURE CATEGORY
        // ============================================
        {
            id: "lit_001",
            category: "literature",
            title: "The Art of Storytelling",
            wordCount: 281,
            difficulty: "easy",
            text: `Storytelling is one of humanity's oldest and most universal art forms. Long before writing was invented, our ancestors gathered around fires to share tales of heroes, monsters, and the mysteries of the world. These stories served many purposes: they entertained, taught moral lessons, preserved history, and helped communities make sense of their existence.

Every culture on Earth has developed its own storytelling traditions. African griots memorize and recite genealogies spanning generations. Indigenous Australian storytellers share Dreamtime narratives that explain the creation of the land. European fairy tales, collected by scholars like the Brothers Grimm, have been passed down through countless generations. Despite their differences, these traditions share fundamental elements.

Modern researchers have identified common patterns that appear in stories across cultures. The scholar Joseph Campbell described the "hero's journey"—a narrative arc where a protagonist leaves home, faces challenges, and returns transformed. From ancient myths to contemporary blockbusters, this pattern resonates with audiences because it mirrors the human experience of growth and change.

Effective stories typically contain several key elements. A compelling protagonist gives audiences someone to root for. Conflict creates tension that maintains interest. Setting provides context and atmosphere. Theme offers deeper meaning beyond the surface plot. The best storytellers weave these elements together seamlessly, creating experiences that feel both surprising and inevitable.

The digital age has transformed storytelling without diminishing its importance. We now consume stories through films, video games, podcasts, and social media alongside traditional books and oral narratives. The formats change, but our fundamental hunger for stories remains constant. In stories, we find meaning, connection, and the unique human ability to imagine lives beyond our own.`,
            questions: [
                { id: "lit_001_q1", type: "yes_no", question: "Did storytelling exist before writing was invented?", answer: true, explanation: "The passage states 'Long before writing was invented, our ancestors gathered around fires to share tales.'" },
                { id: "lit_001_q2", type: "yes_no", question: "Did Joseph Campbell describe the concept of the 'hero's journey'?", answer: true, explanation: "The passage says 'The scholar Joseph Campbell described the hero's journey.'" },
                { id: "lit_001_q3", type: "yes_no", question: "Has the digital age diminished the importance of storytelling?", answer: false, explanation: "The passage states 'The digital age has transformed storytelling without diminishing its importance.'" },
                { id: "lit_001_q4", type: "yes_no", question: "Are storytelling traditions unique to European cultures?", answer: false, explanation: "The passage mentions storytelling traditions from Africa, Indigenous Australia, and Europe, showing it's universal." },
                { id: "lit_001_q5", type: "multiple_choice", question: "What are African storytellers who memorize genealogies called?", options: ["Bards", "Griots", "Scribes", "Shamans"], answer: 1, explanation: "The passage mentions 'African griots memorize and recite genealogies.'" },
                { id: "lit_001_q6", type: "multiple_choice", question: "Who collected European fairy tales?", options: ["Joseph Campbell", "Hans Christian Andersen", "The Brothers Grimm", "Charles Perrault"], answer: 2, explanation: "The passage mentions 'European fairy tales, collected by scholars like the Brothers Grimm.'" },
                { id: "lit_001_q7", type: "multiple_choice", question: "According to the hero's journey, what does the protagonist do?", options: ["Stays home and waits", "Leaves home and returns transformed", "Defeats all enemies immediately", "Never faces challenges"], answer: 1, explanation: "The passage describes 'a protagonist leaves home, faces challenges, and returns transformed.'" },
                { id: "lit_001_q8", type: "multiple_choice", question: "What element of stories offers deeper meaning beyond the surface plot?", options: ["Setting", "Protagonist", "Theme", "Conflict"], answer: 2, explanation: "The passage states 'Theme offers deeper meaning beyond the surface plot.'" }
            ]
        },
        {
            id: "lit_002",
            category: "literature",
            title: "Shakespeare's Lasting Influence",
            wordCount: 286,
            difficulty: "medium",
            text: `William Shakespeare, writing over four centuries ago, remains the most influential figure in English literature. His plays continue to be performed more than any other playwright's works, and his phrases have become so embedded in our language that we often use them without realizing their origin. Understanding his enduring impact reveals why he is called "the Bard."

Shakespeare's contribution to the English language is immeasurable. He invented approximately 1,700 words that we still use today, including "lonely," "generous," "assassination," and "bedroom." Phrases like "break the ice," "wild goose chase," and "heart of gold" first appeared in his works. His creative use of language expanded the expressive possibilities of English forever.

His understanding of human psychology preceded modern psychology by centuries. Characters like Hamlet, with his existential doubts, and Lady Macbeth, consumed by guilt, display psychological depth that still rings true. Shakespeare explored jealousy in Othello, ambition in Macbeth, love in Romeo and Juliet, and power in King Lear with insights that transcend time and culture.

Shakespeare also pioneered theatrical techniques that influenced all subsequent drama. He mixed tragedy with comedy, creating more realistic portrayals of life. His use of soliloquies—speeches revealing a character's inner thoughts—allowed audiences to access characters' psychology directly. He experimented with time, setting, and staging in ways that anticipated modern theatrical innovation.

Perhaps most remarkably, Shakespeare wrote for popular audiences rather than elite patrons. The Globe Theatre attracted thousands of viewers from all social classes. His plays entertained through action, romance, and humor while simultaneously exploring profound philosophical questions. This combination of accessibility and depth explains why his works continue to captivate audiences worldwide, adapted into films, musicals, and contemporary retellings.`,
            questions: [
                { id: "lit_002_q1", type: "yes_no", question: "Did Shakespeare invent the word 'lonely'?", answer: true, explanation: "The passage states 'He invented approximately 1,700 words... including lonely.'" },
                { id: "lit_002_q2", type: "yes_no", question: "Did Shakespeare write primarily for elite patrons?", answer: false, explanation: "The passage says 'Shakespeare wrote for popular audiences rather than elite patrons.'" },
                { id: "lit_002_q3", type: "yes_no", question: "Is the phrase 'break the ice' from Shakespeare?", answer: true, explanation: "The passage mentions 'Phrases like break the ice... first appeared in his works.'" },
                { id: "lit_002_q4", type: "yes_no", question: "Did Shakespeare explore the theme of jealousy in Romeo and Juliet?", answer: false, explanation: "The passage says 'He explored jealousy in Othello' and 'love in Romeo and Juliet.'" },
                { id: "lit_002_q5", type: "multiple_choice", question: "Approximately how many words did Shakespeare invent?", options: ["About 500", "About 1,000", "About 1,700", "About 3,000"], answer: 2, explanation: "The passage states 'He invented approximately 1,700 words.'" },
                { id: "lit_002_q6", type: "multiple_choice", question: "What play explores ambition according to the passage?", options: ["Hamlet", "Othello", "Macbeth", "King Lear"], answer: 2, explanation: "The passage says 'ambition in Macbeth.'" },
                { id: "lit_002_q7", type: "multiple_choice", question: "What technique reveals a character's inner thoughts?", options: ["Dialogues", "Soliloquies", "Asides", "Monologues"], answer: 1, explanation: "The passage describes 'soliloquies—speeches revealing a character's inner thoughts.'" },
                { id: "lit_002_q8", type: "multiple_choice", question: "What was the name of Shakespeare's famous theatre?", options: ["The Rose", "The Swan", "The Globe", "The Fortune"], answer: 2, explanation: "The passage mentions 'The Globe Theatre.'" }
            ]
        },

        // ============================================
        // ADDITIONAL PASSAGES
        // ============================================
        {
            id: "sci_004",
            category: "science",
            title: "The Human Heart",
            wordCount: 257,
            difficulty: "easy",
            text: `The human heart is a remarkable organ that works tirelessly to keep us alive. About the size of a closed fist, this muscular pump beats approximately 100,000 times per day, circulating blood throughout your entire body. Over an average lifetime, the heart beats more than 2.5 billion times without ever taking a break.

The heart consists of four chambers: two upper chambers called atria and two lower chambers called ventricles. The right side of the heart receives oxygen-poor blood from the body and pumps it to the lungs. The left side receives oxygen-rich blood from the lungs and pumps it throughout the body. This creates two separate circulation loops that work together seamlessly.

Heart valves ensure blood flows in the correct direction. The distinctive "lub-dub" sound of a heartbeat comes from these valves opening and closing. The "lub" occurs when the valves between the atria and ventricles close, and the "dub" happens when the valves leading out of the ventricles close.

Your heart's beating rhythm is controlled by an electrical system. The sinoatrial node, often called the heart's natural pacemaker, generates electrical signals that coordinate contraction. This allows the heart to maintain a steady rhythm whether you're sleeping, exercising, or feeling excited.

To stay healthy, the heart needs regular exercise, a balanced diet, and adequate rest. Cardiovascular exercise strengthens the heart muscle, making it more efficient. Reducing salt and saturated fat consumption helps prevent plaque buildup in arteries. Taking care of your heart today ensures it will keep beating strong for years to come.`,
            questions: [
                { id: "sci_004_q1", type: "yes_no", question: "Does the heart beat approximately 100,000 times per day?", answer: true, explanation: "The passage states 'this muscular pump beats approximately 100,000 times per day.'" },
                { id: "sci_004_q2", type: "yes_no", question: "Is the heart about the size of two closed fists?", answer: false, explanation: "The passage says 'About the size of a closed fist'—one fist, not two." },
                { id: "sci_004_q3", type: "yes_no", question: "Does the right side of the heart pump blood to the lungs?", answer: true, explanation: "The passage states 'The right side of the heart receives oxygen-poor blood from the body and pumps it to the lungs.'" },
                { id: "sci_004_q4", type: "yes_no", question: "Is the 'dub' sound caused by valves between atria and ventricles closing?", answer: false, explanation: "The passage says the 'lub' is from those valves; the 'dub' is from 'valves leading out of the ventricles.'" },
                { id: "sci_004_q5", type: "multiple_choice", question: "How many chambers does the heart have?", options: ["Two", "Three", "Four", "Five"], answer: 2, explanation: "The passage states 'The heart consists of four chambers.'" },
                { id: "sci_004_q6", type: "multiple_choice", question: "What is the heart's natural pacemaker called?", options: ["Ventricle node", "Sinoatrial node", "Cardiac node", "Atrial node"], answer: 1, explanation: "The passage mentions 'The sinoatrial node, often called the heart's natural pacemaker.'" },
                { id: "sci_004_q7", type: "multiple_choice", question: "How many times does the heart beat in an average lifetime?", options: ["500 million", "1 billion", "More than 2.5 billion", "10 billion"], answer: 2, explanation: "The passage states 'the heart beats more than 2.5 billion times.'" },
                { id: "sci_004_q8", type: "multiple_choice", question: "What type of blood does the left side of the heart receive?", options: ["Oxygen-poor blood", "Oxygen-rich blood", "Mixed blood", "Filtered blood"], answer: 1, explanation: "The passage says 'The left side receives oxygen-rich blood from the lungs.'" }
            ]
        },
        {
            id: "hist_004",
            category: "history",
            title: "The Industrial Revolution",
            wordCount: 274,
            difficulty: "medium",
            text: `The Industrial Revolution, beginning in Britain in the late 18th century, transformed human society more rapidly and profoundly than any event since the development of agriculture. Within a few generations, predominantly agricultural societies became industrialized urban centers, forever changing how people lived, worked, and related to one another.

This transformation began with innovations in textile manufacturing. The spinning jenny, water frame, and power loom mechanized the production of cloth, dramatically increasing output while reducing costs. These machines required new power sources, driving the development of steam engines. James Watt's improved steam engine, patented in 1769, became the driving force of industrialization.

Factories replaced cottage industries, concentrating workers in purpose-built facilities near power sources. This shift created new urban centers as people migrated from rural areas seeking employment. Cities like Manchester grew from small towns into sprawling industrial hubs within decades. By 1850, Britain had become the first nation where more people lived in cities than in the countryside.

Working conditions in early factories were often harsh. Twelve to sixteen-hour workdays were common, and child labor was widespread. Safety regulations were virtually nonexistent, leading to frequent accidents. Over time, reform movements pushed for better conditions, leading to laws limiting working hours and establishing safety standards.

The Industrial Revolution spread from Britain across Europe, to North America, and eventually worldwide. It brought unprecedented material prosperity but also new challenges: pollution, urban poverty, and social inequality. Perhaps most significantly, it established the pattern of continuous technological innovation and economic growth that defines modern society.`,
            questions: [
                { id: "hist_004_q1", type: "yes_no", question: "Did the Industrial Revolution begin in France?", answer: false, explanation: "The passage states it began 'in Britain in the late 18th century.'" },
                { id: "hist_004_q2", type: "yes_no", question: "Was child labor widespread in early factories?", answer: true, explanation: "The passage explicitly states 'child labor was widespread.'" },
                { id: "hist_004_q3", type: "yes_no", question: "Did James Watt invent the first steam engine?", answer: false, explanation: "The passage says 'James Watt's improved steam engine'—indicating he improved it, not invented it." },
                { id: "hist_004_q4", type: "yes_no", question: "By 1850, did more British people live in cities than countryside?", answer: true, explanation: "The passage states 'By 1850, Britain had become the first nation where more people lived in cities than in the countryside.'" },
                { id: "hist_004_q5", type: "multiple_choice", question: "Which industry first saw mechanization?", options: ["Iron", "Textile", "Mining", "Agriculture"], answer: 1, explanation: "The passage says 'This transformation began with innovations in textile manufacturing.'" },
                { id: "hist_004_q6", type: "multiple_choice", question: "When was Watt's steam engine patented?", options: ["1750", "1769", "1800", "1850"], answer: 1, explanation: "The passage states 'patented in 1769.'" },
                { id: "hist_004_q7", type: "multiple_choice", question: "How long were typical workdays in early factories?", options: ["6 to 8 hours", "8 to 10 hours", "12 to 16 hours", "18 to 20 hours"], answer: 2, explanation: "The passage mentions 'Twelve to sixteen-hour workdays were common.'" },
                { id: "hist_004_q8", type: "multiple_choice", question: "Which city is mentioned as an example of rapid industrial growth?", options: ["London", "Manchester", "Liverpool", "Birmingham"], answer: 1, explanation: "The passage says 'Cities like Manchester grew from small towns into sprawling industrial hubs.'" }
            ]
        },
        {
            id: "tech_003",
            category: "technology",
            title: "How Smartphones Work",
            wordCount: 268,
            difficulty: "easy",
            text: `Smartphones have become essential tools in modern life, combining dozens of devices into one pocket-sized package. What was once science fiction—a portable device for calls, photography, navigation, and instant global communication—is now considered ordinary. Understanding how these remarkable devices work reveals the sophisticated technology we carry daily.

At the heart of every smartphone is a processor, essentially a miniature computer. Modern smartphone processors contain billions of transistors packed into a chip smaller than a fingernail. These processors perform billions of calculations per second, handling everything from running apps to processing camera images.

The touchscreen is perhaps the most visible technology. Capacitive touchscreens detect the electrical charge in your fingers when you touch them. A grid of sensors beneath the glass surface detects these touches and their locations with remarkable precision, allowing for multi-touch gestures like pinching and swiping.

Smartphones connect to the world through multiple wireless technologies. Cellular networks allow voice calls and mobile data through radio signals exchanged with nearby towers. Wi-Fi provides high-speed internet connections over shorter ranges. Bluetooth enables connections to headphones, speakers, and other accessories. GPS satellites help determine your location anywhere on Earth.

Sensors transform smartphones into versatile tools. Accelerometers detect movement and orientation, enabling screen rotation and fitness tracking. Gyroscopes measure rotation for augmented reality and gaming. Cameras capture light through lens systems with sophisticated software processing. Most phones also include fingerprint sensors or facial recognition for security.

Battery technology powers all these capabilities. Lithium-ion batteries store energy efficiently and recharge hundreds of times. Engineers constantly work to balance performance with battery life, one of smartphone design's greatest challenges.`,
            questions: [
                { id: "tech_003_q1", type: "yes_no", question: "Do modern smartphone processors contain millions of transistors?", answer: false, explanation: "The passage states 'billions of transistors'—not millions." },
                { id: "tech_003_q2", type: "yes_no", question: "Do capacitive touchscreens detect electrical charge from fingers?", answer: true, explanation: "The passage says 'Capacitive touchscreens detect the electrical charge in your fingers.'" },
                { id: "tech_003_q3", type: "yes_no", question: "Is Bluetooth used for long-range internet connections?", answer: false, explanation: "The passage says Bluetooth 'enables connections to headphones, speakers, and other accessories'—not long-range internet." },
                { id: "tech_003_q4", type: "yes_no", question: "Do accelerometers enable screen rotation?", answer: true, explanation: "The passage states 'Accelerometers detect movement and orientation, enabling screen rotation.'" },
                { id: "tech_003_q5", type: "multiple_choice", question: "What determines your location anywhere on Earth?", options: ["Cellular towers", "Wi-Fi networks", "GPS satellites", "Bluetooth signals"], answer: 2, explanation: "The passage says 'GPS satellites help determine your location anywhere on Earth.'" },
                { id: "tech_003_q6", type: "multiple_choice", question: "What type of battery do smartphones use?", options: ["Alkaline", "Nickel-cadmium", "Lithium-ion", "Lead-acid"], answer: 2, explanation: "The passage mentions 'Lithium-ion batteries.'" },
                { id: "tech_003_q7", type: "multiple_choice", question: "What measure rotation for augmented reality?", options: ["Accelerometers", "Gyroscopes", "Cameras", "GPS"], answer: 1, explanation: "The passage says 'Gyroscopes measure rotation for augmented reality and gaming.'" },
                { id: "tech_003_q8", type: "multiple_choice", question: "How do cellular networks connect phones?", options: ["Through cables", "Through radio signals", "Through satellites only", "Through Wi-Fi"], answer: 1, explanation: "The passage explains cellular networks work 'through radio signals exchanged with nearby towers.'" }
            ]
        },
        {
            id: "nat_003",
            category: "nature",
            title: "How Volcanoes Form",
            wordCount: 262,
            difficulty: "medium",
            text: `Volcanoes are among Earth's most powerful and dramatic natural phenomena. These openings in the Earth's crust allow molten rock, gases, and ash to escape from deep beneath the surface. Understanding how volcanoes form reveals the dynamic forces that continue to shape our planet.

Most volcanoes form at the boundaries of tectonic plates—the massive slabs of rock that make up Earth's outer shell. At divergent boundaries, where plates move apart, magma rises to fill the gap, creating volcanic ridges like the Mid-Atlantic Ridge. At convergent boundaries, where one plate slides beneath another, the descending plate melts and the resulting magma rises to form volcanic chains.

The Ring of Fire, encircling the Pacific Ocean, contains about 75% of the world's active volcanoes. This horseshoe-shaped zone marks the edges of several tectonic plates that are converging with the Pacific Plate. Countries like Japan, Indonesia, and Chile experience frequent volcanic activity due to their location along this ring.

Not all volcanoes form at plate boundaries. Hotspots are locations where unusually hot mantle material rises through the Earth's crust, creating volcanoes far from plate edges. The Hawaiian Islands formed this way, as the Pacific Plate moved over a stationary hotspot, creating a chain of volcanic islands.

Volcanic eruptions vary from gentle lava flows to explosive blasts. The type of eruption depends largely on the magma's composition. Thin, runny magma allows gases to escape easily, producing relatively calm eruptions. Thick, sticky magma traps gases, building pressure that can result in catastrophic explosions. Despite their danger, volcanoes create fertile soils and shape landscapes that support diverse ecosystems.`,
            questions: [
                { id: "nat_003_q1", type: "yes_no", question: "Do most volcanoes form at the center of tectonic plates?", answer: false, explanation: "The passage states 'Most volcanoes form at the boundaries of tectonic plates.'" },
                { id: "nat_003_q2", type: "yes_no", question: "Does the Ring of Fire contain about 75% of the world's active volcanoes?", answer: true, explanation: "The passage says 'The Ring of Fire... contains about 75% of the world's active volcanoes.'" },
                { id: "nat_003_q3", type: "yes_no", question: "Did the Hawaiian Islands form at a plate boundary?", answer: false, explanation: "The passage says Hawaii 'formed this way' referring to hotspots 'far from plate edges.'" },
                { id: "nat_003_q4", type: "yes_no", question: "Does thick magma produce calm eruptions?", answer: false, explanation: "The passage says 'Thick, sticky magma traps gases, building pressure that can result in catastrophic explosions.'" },
                { id: "nat_003_q5", type: "multiple_choice", question: "What happens at divergent plate boundaries?", options: ["Plates collide", "Plates move apart", "Plates slide past each other", "Nothing happens"], answer: 1, explanation: "The passage describes 'divergent boundaries, where plates move apart.'" },
                { id: "nat_003_q6", type: "multiple_choice", question: "What percentage of active volcanoes is in the Ring of Fire?", options: ["About 25%", "About 50%", "About 75%", "About 90%"], answer: 2, explanation: "The passage states 'about 75% of the world's active volcanoes.'" },
                { id: "nat_003_q7", type: "multiple_choice", question: "What are hotspots?", options: ["Plate boundaries", "Locations where hot mantle rises through crust", "Underwater volcanoes", "Volcanic islands"], answer: 1, explanation: "The passage defines hotspots as 'locations where unusually hot mantle material rises through the Earth's crust.'" },
                { id: "nat_003_q8", type: "multiple_choice", question: "Which countries are mentioned as being on the Ring of Fire?", options: ["Australia and India", "Japan and Indonesia", "France and Germany", "Canada and Mexico"], answer: 1, explanation: "The passage mentions 'Countries like Japan, Indonesia, and Chile.'" }
            ]
        },
        {
            id: "lit_003",
            category: "literature",
            title: "Poetry Through the Ages",
            wordCount: 275,
            difficulty: "medium",
            text: `Poetry, the art of condensed expression through language, has been part of human culture for thousands of years. From ancient oral traditions to contemporary spoken word, poets have used rhythm, imagery, and emotion to capture experiences that prose cannot easily convey.

The earliest known poetry comes from ancient Mesopotamia and Egypt, where hymns and epic tales were recorded on clay tablets and papyrus. Homer's Iliad and Odyssey, composed around 750 BCE, established patterns of epic poetry that influenced Western literature for millennia. In ancient Greece and Rome, poetry was central to education, entertainment, and religious practice.

Different cultures developed distinctive poetic traditions. Japanese haiku distills moments of awareness into seventeen syllables. Persian ghazals explore love and loss through intricate rhyme schemes. Chinese classical poetry emphasizes nature imagery and philosophical reflection. Each tradition offers unique approaches to the craft of verse.

The invention of printing transformed poetry's reach. Works by Shakespeare, Milton, and later the Romantic poets—Wordsworth, Keats, Shelley—reached audiences far beyond the courts and salons where poetry had previously flourished. The Romantics celebrated individual emotion, nature, and imagination, establishing themes that continue to resonate.

Modern and contemporary poetry often breaks from traditional forms. Free verse abandons regular meter and rhyme, focusing instead on natural speech rhythms and imagery. Movements like Imagism, led by poets such as Ezra Pound, emphasized precision and economy of language. Today's poetry continues to evolve through diverse voices exploring identity, social justice, and the human condition.

Whether ancient or modern, formal or free, poetry remains a vital art form. Its power lies in its ability to compress meaning, evoke emotion, and reveal truth in ways that continue to move readers across centuries and cultures.`,
            questions: [
                { id: "lit_003_q1", type: "yes_no", question: "Is the earliest known poetry from ancient Greece?", answer: false, explanation: "The passage states 'The earliest known poetry comes from ancient Mesopotamia and Egypt.'" },
                { id: "lit_003_q2", type: "yes_no", question: "Does haiku use seventeen syllables?", answer: true, explanation: "The passage says 'Japanese haiku distills moments of awareness into seventeen syllables.'" },
                { id: "lit_003_q3", type: "yes_no", question: "Does free verse use regular meter and rhyme?", answer: false, explanation: "The passage says 'Free verse abandons regular meter and rhyme.'" },
                { id: "lit_003_q4", type: "yes_no", question: "Was Ezra Pound associated with the Imagism movement?", answer: true, explanation: "The passage mentions 'Movements like Imagism, led by poets such as Ezra Pound.'" },
                { id: "lit_003_q5", type: "multiple_choice", question: "When was Homer's Iliad and Odyssey composed?", options: ["Around 500 BCE", "Around 750 BCE", "Around 1000 BCE", "Around 200 CE"], answer: 1, explanation: "The passage states 'composed around 750 BCE.'" },
                { id: "lit_003_q6", type: "multiple_choice", question: "What does Persian ghazal poetry explore?", options: ["War and battle", "Love and loss", "Nature only", "Politics"], answer: 1, explanation: "The passage says 'Persian ghazals explore love and loss.'" },
                { id: "lit_003_q7", type: "multiple_choice", question: "Which movement celebrated individual emotion and nature?", options: ["Imagism", "Romanticism", "Classicism", "Modernism"], answer: 1, explanation: "The passage says 'The Romantics celebrated individual emotion, nature, and imagination.'" },
                { id: "lit_003_q8", type: "multiple_choice", question: "What did the Imagist movement emphasize?", options: ["Long descriptions", "Precision and economy", "Rhyme schemes", "Epic narratives"], answer: 1, explanation: "The passage states Imagism 'emphasized precision and economy of language.'" }
            ]
        },
        {
            id: "sci_005",
            category: "science",
            title: "The Science of Sleep",
            wordCount: 280,
            difficulty: "easy",
            text: `Sleep is one of the most essential but least understood aspects of human life. We spend roughly one-third of our lives asleep, yet scientists are still uncovering the complex processes that occur during these crucial hours of rest.

Sleep occurs in cycles lasting approximately 90 minutes, alternating between two main types: REM (rapid eye movement) and non-REM sleep. Non-REM sleep has three stages, progressing from light sleep to deep sleep. During deep sleep, your body repairs tissues, builds bone and muscle, and strengthens the immune system. REM sleep, characterized by vivid dreams and rapid eye movements, is crucial for memory consolidation and emotional processing.

The brain doesn't simply shut down during sleep. Instead, it performs vital maintenance tasks. Cerebrospinal fluid flows through the brain, clearing away toxins that accumulate during waking hours. This cleaning process, called the glymphatic system, removes proteins linked to Alzheimer's disease. Without adequate sleep, these toxins can build up.

Sleep deprivation has serious consequences. After just 24 hours without sleep, cognitive function declines significantly. Chronic sleep loss is linked to obesity, diabetes, cardiovascular disease, and weakened immunity. It also impairs judgment, reaction time, and emotional regulation, making everyday activities like driving dangerous.

Your body regulates sleep through two processes: the circadian rhythm—your internal 24-hour clock—and sleep pressure, which builds the longer you stay awake. Light exposure, particularly blue light from screens, can disrupt circadian rhythms by suppressing melatonin, the hormone that promotes sleep.

Adults generally need seven to nine hours of sleep per night, though individual needs vary. Creating a consistent sleep schedule, limiting screen time before bed, and maintaining a cool, dark bedroom can all improve sleep quality. Good sleep isn't a luxury—it's a biological necessity.`,
            questions: [
                { id: "sci_005_q1", type: "yes_no", question: "Do sleep cycles last approximately 90 minutes?", answer: true, explanation: "The passage states 'Sleep occurs in cycles lasting approximately 90 minutes.'" },
                { id: "sci_005_q2", type: "yes_no", question: "Does the brain shut down completely during sleep?", answer: false, explanation: "The passage says 'The brain doesn't simply shut down during sleep. Instead, it performs vital maintenance tasks.'" },
                { id: "sci_005_q3", type: "yes_no", question: "Is REM sleep characterized by vivid dreams?", answer: true, explanation: "The passage states 'REM sleep, characterized by vivid dreams and rapid eye movements.'" },
                { id: "sci_005_q4", type: "yes_no", question: "Does blue light increase melatonin production?", answer: false, explanation: "The passage says blue light 'can disrupt circadian rhythms by suppressing melatonin.'" },
                { id: "sci_005_q5", type: "multiple_choice", question: "How many stages does non-REM sleep have?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "The passage states 'Non-REM sleep has three stages.'" },
                { id: "sci_005_q6", type: "multiple_choice", question: "What is the brain's cleaning process during sleep called?", options: ["Lymphatic system", "Glymphatic system", "Circulatory system", "Nervous system"], answer: 1, explanation: "The passage mentions 'This cleaning process, called the glymphatic system.'" },
                { id: "sci_005_q7", type: "multiple_choice", question: "What happens to cognitive function after 24 hours without sleep?", options: ["It improves", "It stays the same", "It declines significantly", "It fluctuates"], answer: 2, explanation: "The passage says 'After just 24 hours without sleep, cognitive function declines significantly.'" },
                { id: "sci_005_q8", type: "multiple_choice", question: "How many hours of sleep do adults generally need?", options: ["5 to 6 hours", "7 to 9 hours", "10 to 12 hours", "4 to 5 hours"], answer: 1, explanation: "The passage states 'Adults generally need seven to nine hours of sleep per night.'" }
            ]
        },
        {
            id: "hist_005",
            category: "history",
            title: "The Ancient Olympics",
            wordCount: 265,
            difficulty: "easy",
            text: `The Olympic Games began in ancient Greece around 776 BCE and continued for over a thousand years, becoming one of the most important athletic and religious festivals of the ancient world. These games laid the foundation for the modern Olympic movement that captivates billions today.

The ancient Olympics were held every four years at Olympia, a sanctuary dedicated to Zeus, the king of Greek gods. The games were so significant that even wars would pause during the Olympic truce, allowing athletes and spectators to travel safely to the competition. This truce, called the ekecheiria, typically lasted three months.

Only free Greek men could compete in the ancient Olympics. Athletes competed nude and women were forbidden from even attending as spectators, though they had their own separate festival called the Heraean Games. Events included running, wrestling, boxing, the pentathlon, and chariot racing. Winners received olive wreaths cut from a sacred tree near Zeus's temple.

The games were as much religious as athletic. Sacrifices to Zeus accompanied the competitions, and the festival included prayers, processions, and feasts. Athletes swore oaths to compete fairly before a statue of Zeus, and cheating was severely punished with fines and public shaming.

Greek colonies spread Olympic traditions across the Mediterranean. Similar games emerged throughout the Greek world, but the Olympics at Olympia remained the most prestigious. The ancient Olympics ended in 393 CE when the Roman Emperor Theodosius I banned pagan festivals.

The modern Olympics, revived by Pierre de Coubertin in 1896, drew inspiration from these ancient games. While today's events would be unrecognizable to ancient Greeks, the spirit of athletic excellence and international cooperation echoes across millennia.`,
            questions: [
                { id: "hist_005_q1", type: "yes_no", question: "Did the ancient Olympics begin around 776 BCE?", answer: true, explanation: "The passage states 'The Olympic Games began in ancient Greece around 776 BCE.'" },
                { id: "hist_005_q2", type: "yes_no", question: "Could women compete in the ancient Olympics?", answer: false, explanation: "The passage says 'Only free Greek men could compete' and 'women were forbidden from even attending.'" },
                { id: "hist_005_q3", type: "yes_no", question: "Were the ancient Olympics purely athletic events?", answer: false, explanation: "The passage says 'The games were as much religious as athletic.'" },
                { id: "hist_005_q4", type: "yes_no", question: "Did winners receive gold medals?", answer: false, explanation: "The passage states 'Winners received olive wreaths.'" },
                { id: "hist_005_q5", type: "multiple_choice", question: "How often were the ancient Olympics held?", options: ["Every year", "Every two years", "Every four years", "Every ten years"], answer: 2, explanation: "The passage says 'held every four years.'" },
                { id: "hist_005_q6", type: "multiple_choice", question: "What was the Olympic truce called?", options: ["Pax Olympica", "Ekecheiria", "Agon", "Stadion"], answer: 1, explanation: "The passage mentions 'This truce, called the ekecheiria.'" },
                { id: "hist_005_q7", type: "multiple_choice", question: "When did the ancient Olympics end?", options: ["393 BCE", "393 CE", "776 CE", "1896 CE"], answer: 1, explanation: "The passage states 'The ancient Olympics ended in 393 CE.'" },
                { id: "hist_005_q8", type: "multiple_choice", question: "Who revived the modern Olympics?", options: ["Julius Caesar", "Zeus", "Pierre de Coubertin", "Theodosius I"], answer: 2, explanation: "The passage mentions 'The modern Olympics, revived by Pierre de Coubertin in 1896.'" }
            ]
        },
        {
            id: "tech_004",
            category: "technology",
            title: "Electric Vehicles Explained",
            wordCount: 272,
            difficulty: "medium",
            text: `Electric vehicles are transforming transportation, offering a cleaner alternative to traditional gasoline-powered cars. As battery technology improves and charging infrastructure expands, EVs are becoming increasingly practical for everyday drivers.

Unlike conventional vehicles that burn fuel in internal combustion engines, EVs use electric motors powered by rechargeable batteries. These motors are simpler than engines, with fewer moving parts that can wear out. Electric motors also convert energy to motion more efficiently—approximately 85-90% of electrical energy becomes movement, compared to only 20-30% for gasoline engines.

The battery pack is the heart of an electric vehicle, typically consisting of thousands of lithium-ion cells similar to those in smartphones, but larger. Modern EV batteries can store enough energy to travel 250-400 miles on a single charge. However, batteries remain expensive, accounting for roughly 30% of a vehicle's cost, though prices continue to fall.

Charging an EV differs from refueling a gas car. Level 1 charging uses standard household outlets but is slow, adding about 4-5 miles of range per hour. Level 2 charging, using 240-volt outlets like those for dryers, adds 25-30 miles per hour. DC fast charging can add 200 miles in about 30 minutes, making long trips more feasible.

EVs produce zero direct emissions, though their environmental impact depends on how electricity is generated. In regions powered by renewable energy, EVs are significantly cleaner than gasoline cars. They're also quieter and require less maintenance since they lack oil changes, transmission repairs, and exhaust system components.

Despite advantages, challenges remain: higher upfront costs, limited charging infrastructure in some areas, and concerns about battery lifespan. However, ongoing innovation continues to address these obstacles, making electric vehicles an increasingly compelling choice.`,
            questions: [
                { id: "tech_004_q1", type: "yes_no", question: "Do electric motors have more moving parts than combustion engines?", answer: false, explanation: "The passage says motors are 'simpler than engines, with fewer moving parts.'" },
                { id: "tech_004_q2", type: "yes_no", question: "Do EVs convert about 85-90% of energy to movement?", answer: true, explanation: "The passage states 'approximately 85-90% of electrical energy becomes movement.'" },
                { id: "tech_004_q3", type: "yes_no", question: "Do EVs produce zero direct emissions?", answer: true, explanation: "The passage says 'EVs produce zero direct emissions.'" },
                { id: "tech_004_q4", type: "yes_no", question: "Do EV batteries account for about 50% of vehicle cost?", answer: false, explanation: "The passage says 'accounting for roughly 30% of a vehicle's cost.'" },
                { id: "tech_004_q5", type: "multiple_choice", question: "How many miles can modern EV batteries typically travel?", options: ["50-100 miles", "150-200 miles", "250-400 miles", "500-600 miles"], answer: 2, explanation: "The passage states batteries can 'travel 250-400 miles on a single charge.'" },
                { id: "tech_004_q6", type: "multiple_choice", question: "How much range does Level 1 charging add per hour?", options: ["4-5 miles", "25-30 miles", "50 miles", "100 miles"], answer: 0, explanation: "The passage says Level 1 charging 'adding about 4-5 miles of range per hour.'" },
                { id: "tech_004_q7", type: "multiple_choice", question: "What percentage of energy do gasoline engines convert to motion?", options: ["5-10%", "20-30%", "50-60%", "70-80%"], answer: 1, explanation: "The passage states 'only 20-30% for gasoline engines.'" },
                { id: "tech_004_q8", type: "multiple_choice", question: "What maintenance do EVs NOT require?", options: ["Tire rotation", "Oil changes", "Brake inspection", "Wiper replacement"], answer: 1, explanation: "The passage mentions EVs 'lack oil changes, transmission repairs, and exhaust system components.'" }
            ]
        },
        {
            id: "nat_004",
            category: "nature",
            title: "The Amazon Rainforest",
            wordCount: 278,
            difficulty: "easy",
            text: `The Amazon rainforest is the world's largest tropical rainforest, spanning approximately 5.5 million square kilometers across nine South American countries. Often called "the lungs of the Earth," this vast wilderness plays a crucial role in regulating global climate and harboring an extraordinary diversity of life.

The Amazon River, which gives the forest its name, is the world's largest river by water volume, discharging more water into the ocean than the next seven largest rivers combined. During the wet season, parts of the forest flood for months, creating unique ecosystems where fish swim among tree roots and dolphins navigate through forest waterways.

Biodiversity in the Amazon is staggering. The forest is home to about 10% of all species on Earth, including approximately 40,000 plant species, 1,300 bird species, and 3,000 types of fish. Scientists continue to discover new species regularly—an estimated 2,000 new species have been identified in recent decades. Many Amazon plants provide compounds used in modern medicine.

Indigenous peoples have lived in the Amazon for at least 11,000 years, developing profound knowledge of the forest's plants and animals. Today, about 400 indigenous groups, speaking numerous languages, still call the forest home. Their traditional practices often protect biodiversity more effectively than official conservation areas.

The Amazon faces severe threats from deforestation. Cattle ranching, soybean farming, logging, and mining have destroyed vast areas, with effects extending far beyond the forest. Trees release stored carbon when burned, contributing to climate change. Deforestation also disrupts rainfall patterns across South America and beyond.

Conservation efforts seek to balance economic development with forest protection. Sustainable practices, indigenous land rights, and international cooperation offer hope, but the forest's future depends on global commitment to its preservation.`,
            questions: [
                { id: "nat_004_q1", type: "yes_no", question: "Is the Amazon the world's largest tropical rainforest?", answer: true, explanation: "The passage states 'The Amazon rainforest is the world's largest tropical rainforest.'" },
                { id: "nat_004_q2", type: "yes_no", question: "Does the Amazon River discharge less water than most other major rivers?", answer: false, explanation: "The passage says it discharges 'more water into the ocean than the next seven largest rivers combined.'" },
                { id: "nat_004_q3", type: "yes_no", question: "Have indigenous peoples lived in the Amazon for at least 11,000 years?", answer: true, explanation: "The passage states 'Indigenous peoples have lived in the Amazon for at least 11,000 years.'" },
                { id: "nat_004_q4", type: "yes_no", question: "Is cattle ranching a threat to the Amazon?", answer: true, explanation: "The passage mentions 'Cattle ranching, soybean farming, logging, and mining have destroyed vast areas.'" },
                { id: "nat_004_q5", type: "multiple_choice", question: "Approximately how large is the Amazon rainforest?", options: ["1 million sq km", "3 million sq km", "5.5 million sq km", "10 million sq km"], answer: 2, explanation: "The passage states 'approximately 5.5 million square kilometers.'" },
                { id: "nat_004_q6", type: "multiple_choice", question: "What percentage of Earth's species live in the Amazon?", options: ["About 5%", "About 10%", "About 25%", "About 50%"], answer: 1, explanation: "The passage says 'about 10% of all species on Earth.'" },
                { id: "nat_004_q7", type: "multiple_choice", question: "How many plant species are in the Amazon?", options: ["About 10,000", "About 25,000", "About 40,000", "About 100,000"], answer: 2, explanation: "The passage mentions 'approximately 40,000 plant species.'" },
                { id: "nat_004_q8", type: "multiple_choice", question: "How many indigenous groups live in the Amazon today?", options: ["About 50", "About 100", "About 400", "About 1,000"], answer: 2, explanation: "The passage states 'about 400 indigenous groups.'" }
            ]
        },
        {
            id: "hist_006",
            category: "history",
            title: "The Renaissance",
            wordCount: 283,
            difficulty: "medium",
            text: `The Renaissance, meaning "rebirth" in French, was a cultural movement that began in Italy in the 14th century and spread across Europe over the next three centuries. This period marked a profound transformation in art, science, and thought, bridging the medieval world and the modern era.

The Renaissance emerged first in Italian city-states like Florence, Venice, and Rome. Wealthy merchant families, especially the Medici of Florence, became patrons of artists and scholars, funding works that still define Western culture. The rediscovery of ancient Greek and Roman texts inspired a new emphasis on human potential and achievement, a philosophy called humanism.

Art underwent a revolution during this period. Artists like Leonardo da Vinci, Michelangelo, and Raphael created masterpieces using techniques like linear perspective, realistic anatomy, and chiaroscuro—the dramatic use of light and shadow. Leonardo's "Mona Lisa" and Michelangelo's Sistine Chapel ceiling exemplify the period's artistic achievement.

Scientific thought also flourished. Nicolaus Copernicus proposed that Earth revolved around the sun, challenging centuries of accepted belief. Galileo Galilei improved the telescope and made observations supporting this heliocentric model. The printing press, invented by Johannes Gutenberg around 1440, revolutionized the spread of knowledge, making books affordable and literacy more common.

The Renaissance transformed thinking about politics and society. Niccolò Machiavelli's "The Prince" offered a pragmatic analysis of political power, while scholars questioned traditional religious authority. This spirit of inquiry eventually contributed to the Protestant Reformation and the Scientific Revolution that followed.

Though historians debate the Renaissance's precise boundaries and impact, its legacy is undeniable. The period established foundations for modern science, art, and philosophy. The idea that humans could understand and improve their world through reason, creativity, and education remains central to Western thought today.`,
            questions: [
                { id: "hist_006_q1", type: "yes_no", question: "Did the Renaissance begin in France?", answer: false, explanation: "The passage states 'the Renaissance... began in Italy in the 14th century.'" },
                { id: "hist_006_q2", type: "yes_no", question: "Were the Medici family patrons of artists?", answer: true, explanation: "The passage mentions 'Wealthy merchant families, especially the Medici of Florence, became patrons of artists.'" },
                { id: "hist_006_q3", type: "yes_no", question: "Did Copernicus propose Earth revolved around the sun?", answer: true, explanation: "The passage says 'Nicolaus Copernicus proposed that Earth revolved around the sun.'" },
                { id: "hist_006_q4", type: "yes_no", question: "Was the printing press invented by Leonardo da Vinci?", answer: false, explanation: "The passage says it was 'invented by Johannes Gutenberg around 1440.'" },
                { id: "hist_006_q5", type: "multiple_choice", question: "What does 'Renaissance' mean?", options: ["Revolution", "Rebirth", "Renewal", "Reform"], answer: 1, explanation: "The passage states 'The Renaissance, meaning \"rebirth\" in French.'" },
                { id: "hist_006_q6", type: "multiple_choice", question: "What is chiaroscuro?", options: ["A type of paint", "The use of light and shadow", "A sculpture technique", "A type of architecture"], answer: 1, explanation: "The passage defines it as 'the dramatic use of light and shadow.'" },
                { id: "hist_006_q7", type: "multiple_choice", question: "When was the printing press invented?", options: ["Around 1340", "Around 1440", "Around 1540", "Around 1640"], answer: 1, explanation: "The passage states 'invented by Johannes Gutenberg around 1440.'" },
                { id: "hist_006_q8", type: "multiple_choice", question: "What philosophy emphasized human potential?", options: ["Scholasticism", "Humanism", "Rationalism", "Empiricism"], answer: 1, explanation: "The passage describes 'a philosophy called humanism' about 'human potential and achievement.'" }
            ]
        },

        // ============================================
        // FICTION CATEGORY - Creative Stories
        // ============================================
        {
            id: "fic_001",
            category: "fiction",
            title: "The Lighthouse Keeper's Secret",
            wordCount: 248,
            difficulty: "medium",
            text: `Martha had kept the lighthouse for thirty-seven years, but tonight was different. The storm outside howled like something alive, and for the first time, someone had come knocking. A young woman stood at the door, soaked through, clutching a leather journal to her chest.

"My grandmother left me this," she said, stepping inside without invitation. "She wrote about a lighthouse keeper named Martha who saved her life in 1962."

Martha's hands trembled as she poured tea. She remembered that night—the shipwreck, the girl she'd pulled from the waves, the promise she'd made to keep a secret. The secret about what really lived in the waters below the cliff.

"I need to know what she saw," the young woman continued. "She had nightmares until the day she died. Dreams of something beneath the water with too many eyes."

Martha looked toward the window. The beam swept across the churning sea, and for just a moment, something impossibly large broke the surface. Tentacles, perhaps. Or something worse.

"Some secrets protect us," Martha finally said. "Your grandmother survived because she learned when not to look. The light isn't meant to guide ships inland—it's meant to keep something from coming ashore."

The young woman's face paled. Outside, something scratched against the lighthouse door. Martha calmly reached for the ancient harpoon mounted above the fireplace. It was going to be a long night.`,
            questions: [
                { id: "fic_001_q1", type: "yes_no", question: "Had Martha kept the lighthouse for twenty-seven years?", answer: false, explanation: "The passage states 'thirty-seven years,' not twenty-seven." },
                { id: "fic_001_q2", type: "yes_no", question: "Was the young woman clutching a leather journal?", answer: true, explanation: "The passage says she was 'clutching a leather journal to her chest.'" },
                { id: "fic_001_q3", type: "yes_no", question: "Did the shipwreck happen in 1972?", answer: false, explanation: "The passage mentions 'the girl she'd pulled from the waves' in '1962.'" },
                { id: "fic_001_q4", type: "yes_no", question: "Did the grandmother have nightmares until she died?", answer: true, explanation: "The passage states 'She had nightmares until the day she died.'" },
                { id: "fic_001_q5", type: "multiple_choice", question: "What was mounted above the fireplace?", options: ["A sword", "A photograph", "A harpoon", "A lantern"], answer: 2, explanation: "The passage mentions 'the ancient harpoon mounted above the fireplace.'" },
                { id: "fic_001_q6", type: "multiple_choice", question: "What was the young woman looking for?", options: ["Money", "A map", "What her grandmother saw", "The lighthouse keeper"], answer: 2, explanation: "She said 'I need to know what she saw.'" },
                { id: "fic_001_q7", type: "multiple_choice", question: "What did Martha say the light was meant to do?", options: ["Guide ships", "Keep something from coming ashore", "Signal for help", "Warm the building"], answer: 1, explanation: "Martha said 'it's meant to keep something from coming ashore.'" },
                { id: "fic_001_q8", type: "multiple_choice", question: "What broke the surface of the sea?", options: ["A whale", "A ship", "Something with tentacles", "Dolphins"], answer: 2, explanation: "The passage describes 'something impossibly large' with 'Tentacles, perhaps.'" }
            ]
        },
        {
            id: "fic_002",
            category: "fiction",
            title: "The Last Letter",
            wordCount: 235,
            difficulty: "easy",
            text: `James found the letter wedged between the floorboards of his new apartment. The paper was yellowed, dated November 12, 1943. He shouldn't have read it, but curiosity won.

"My dearest Eleanor," it began. "If you're reading this, I didn't make it home from the war. There's something I never told you—the violin in the attic isn't just an instrument. My grandfather was a craftsman in Vienna, and before he fled, he hid something inside. Something that powerful men would kill for."

James looked up at the ceiling. His apartment had an attic. His heart raced as he climbed the dusty ladder and found, behind stacks of newspapers from decades past, a black violin case.

Inside was the most beautiful violin he'd ever seen, its wood glowing amber in the dim light. And there, tucked into the velvet lining, was a folded paper—a map with coordinates and a single word written in German: "Bernstein."

James didn't speak German, but he recognized that word. Amber. And he knew enough history to understand what this might mean. The Amber Room, stolen by Nazis in 1941, had never been found. Worth over half a billion dollars, it had vanished completely.

He carefully replaced the violin and closed the case. Then he took out his phone and searched for the cheapest flights to Vienna. Some letters were meant to be answered, even eighty years later.`,
            questions: [
                { id: "fic_002_q1", type: "yes_no", question: "Was the letter dated November 12, 1953?", answer: false, explanation: "The passage states it was dated 'November 12, 1943.'" },
                { id: "fic_002_q2", type: "yes_no", question: "Did James find the letter between floorboards?", answer: true, explanation: "The passage says 'the letter wedged between the floorboards.'" },
                { id: "fic_002_q3", type: "yes_no", question: "Was the grandfather from Paris?", answer: false, explanation: "The passage says 'My grandfather was a craftsman in Vienna.'" },
                { id: "fic_002_q4", type: "yes_no", question: "Had the Amber Room been found?", answer: false, explanation: "The passage states it 'had never been found.'" },
                { id: "fic_002_q5", type: "multiple_choice", question: "What was hidden in the attic?", options: ["A painting", "A violin", "A chest", "A diary"], answer: 1, explanation: "James found 'a black violin case' in the attic." },
                { id: "fic_002_q6", type: "multiple_choice", question: "What does 'Bernstein' mean in German?", options: ["Gold", "Silver", "Amber", "Diamond"], answer: 2, explanation: "The passage explains 'James didn't speak German, but he recognized that word. Amber.'" },
                { id: "fic_002_q7", type: "multiple_choice", question: "How much was the Amber Room worth?", options: ["50 million", "100 million", "Over 500 million", "1 billion"], answer: 2, explanation: "The passage states 'Worth over half a billion dollars.'" },
                { id: "fic_002_q8", type: "multiple_choice", question: "Where did James plan to fly?", options: ["Berlin", "Paris", "Vienna", "London"], answer: 2, explanation: "James 'searched for the cheapest flights to Vienna.'" }
            ]
        },
        {
            id: "fic_003",
            category: "fiction",
            title: "The Memory Thief",
            wordCount: 252,
            difficulty: "hard",
            text: `Dr. Vera Chen had invented the impossible: a device that could extract memories like pulling threads from fabric. The military wanted it for interrogations. Corporations wanted it for industrial espionage. But Vera had built it for one reason only—her daughter.

Sophie had been in a coma for fourteen months. The doctors said her brain was active, trapped in some internal loop. Vera believed she could reach her, pull out whatever nightmare held Sophie captive, and bring her home.

The extraction began at midnight. Vera watched the monitor as images flickered—fragmentary, disjointed. A birthday party. A red bicycle. Then darker things. A car crash. Rain on a windshield. Headlights approaching too fast. Vera's own face, screaming.

She hadn't known Sophie was awake that night. Hadn't known she'd witnessed the accident that killed her father. The guilt had locked her mind away.

Tears streaming, Vera made a choice. She reversed the polarity—not to extract, but to implant. She pushed into Sophie's mind a new memory: a different ending where the car missed them, where her father survived. A beautiful lie.

Sophie's eyes opened. She smiled at her mother, remembering nothing of the crash.

"Where's Dad?" she asked.

Vera felt something inside her break. She had saved her daughter by taking on the burden herself. Now only she would remember the truth—and the weight of playing God with a child's mind.`,
            questions: [
                { id: "fic_003_q1", type: "yes_no", question: "Could Vera's device implant memories?", answer: true, explanation: "The passage shows she 'reversed the polarity—not to extract, but to implant.'" },
                { id: "fic_003_q2", type: "yes_no", question: "Had Sophie been in a coma for twelve months?", answer: false, explanation: "The passage states 'fourteen months,' not twelve." },
                { id: "fic_003_q3", type: "yes_no", question: "Did Sophie witness her mother's death?", answer: false, explanation: "She witnessed 'the accident that killed her father,' not her mother." },
                { id: "fic_003_q4", type: "yes_no", question: "Did the extraction begin at midnight?", answer: true, explanation: "The passage states 'The extraction began at midnight.'" },
                { id: "fic_003_q5", type: "multiple_choice", question: "What did Dr. Chen invent?", options: ["A time machine", "A memory extraction device", "A teleporter", "A mind-reading helmet"], answer: 1, explanation: "She invented 'a device that could extract memories.'" },
                { id: "fic_003_q6", type: "multiple_choice", question: "What memory appeared of Sophie's childhood?", options: ["A blue scooter", "A red bicycle", "A green skateboard", "A yellow wagon"], answer: 1, explanation: "The memories included 'A red bicycle.'" },
                { id: "fic_003_q7", type: "multiple_choice", question: "What did Vera implant in Sophie's mind?", options: ["The truth", "A memory where her father survived", "Her own memories", "Happy dreams"], answer: 1, explanation: "She implanted 'a different ending where the car missed them, where her father survived.'" },
                { id: "fic_003_q8", type: "multiple_choice", question: "What was the first thing Sophie asked?", options: ["Where am I?", "What happened?", "Where's Dad?", "Who are you?"], answer: 2, explanation: "Sophie asked 'Where's Dad?'" }
            ]
        },
        {
            id: "fic_004",
            category: "fiction",
            title: "The Clockmaker's Apprentice",
            wordCount: 241,
            difficulty: "medium",
            text: `In a crooked shop on Pendulum Street, young Thomas learned that time wasn't what people thought it was. His master, the ancient clockmaker Aldous Gray, had shown him the truth: every clock in the shop contained a fragment of stolen time—moments taken from people who would never miss them.

"The boring moments," Aldous explained, adjusting his silver spectacles. "The waiting rooms. The traffic jams. The hours lost to sleep. I collect them, compress them, and sell them to those who need more time."

Thomas wound the grandfather clock in the corner, feeling its strange warmth. "Who buys time?"

"Artists approaching deadlines. Parents with dying children. Lovers separated by war. Anyone desperate enough to pay my price." Aldous smiled, but his eyes were sad. "The problem, Thomas, is that borrowed time always runs out. And when it does, the debt comes due."

That night, a woman appeared at the shop door. She was elegant but haggard, rings under her eyes. "I've come to return what I borrowed," she said, placing a small hourglass on the counter. "Twenty years ago, you gave my husband six more months to live."

Thomas watched as she aged before his eyes, decades passing in seconds. When it was over, only dust remained where she had stood.

"Remember this," Aldous whispered to his horrified apprentice. "We don't create time, boy. We only move it around. And nature always demands balance."`,
            questions: [
                { id: "fic_004_q1", type: "yes_no", question: "Was the shop located on Pendulum Street?", answer: true, explanation: "The passage states 'a crooked shop on Pendulum Street.'" },
                { id: "fic_004_q2", type: "yes_no", question: "Did Aldous wear gold spectacles?", answer: false, explanation: "The passage says 'his silver spectacles,' not gold." },
                { id: "fic_004_q3", type: "yes_no", question: "Did the woman borrow time thirty years ago?", answer: false, explanation: "She said 'Twenty years ago,' not thirty." },
                { id: "fic_004_q4", type: "yes_no", question: "Did the clockmaker collect boring moments?", answer: true, explanation: "Aldous explained he collected 'The boring moments. The waiting rooms. The traffic jams.'" },
                { id: "fic_004_q5", type: "multiple_choice", question: "What did each clock contain?", options: ["A spirit", "A fragment of stolen time", "A secret message", "A tiny world"], answer: 1, explanation: "Every clock 'contained a fragment of stolen time.'" },
                { id: "fic_004_q6", type: "multiple_choice", question: "How much extra time did the woman's husband receive?", options: ["Three months", "Six months", "One year", "Five years"], answer: 1, explanation: "She said 'you gave my husband six more months to live.'" },
                { id: "fic_004_q7", type: "multiple_choice", question: "What was the apprentice's name?", options: ["James", "William", "Thomas", "Henry"], answer: 2, explanation: "The passage introduces 'young Thomas.'" },
                { id: "fic_004_q8", type: "multiple_choice", question: "What remained after the woman repaid her debt?", options: ["Bones", "Ashes", "Dust", "Nothing"], answer: 2, explanation: "The passage says 'only dust remained where she had stood.'" }
            ]
        },
        {
            id: "fic_005",
            category: "fiction",
            title: "The Garden Between Worlds",
            wordCount: 239,
            difficulty: "easy",
            text: `Maya discovered the garden on her seventh birthday, hidden behind the ivy-covered wall at the end of her grandmother's property. It shouldn't have existed—the wall backed onto a busy highway—yet here was a meadow of impossible flowers that glowed with their own light.

A fox with silver fur sat watching her from beneath a tree that bore both apples and stars. "You found us," it said, and Maya wasn't even surprised that it spoke. In this place, everything felt natural.

"What is this?" she asked.

"The garden between worlds. Where things go when they're forgotten but still loved. Where lost toys wait hoping to be remembered. Where imaginary friends live when children grow up."

Maya saw them then—teddy bears with faded button eyes, dolls in outdated dresses, and creatures made entirely of a child's imagination. They waved at her, delighted to have a visitor.

"Can I stay?" Maya asked.

The fox shook its head. "The garden needs caretakers, not residents. Come when the world feels too heavy. Bring the things people have forgotten they need—wonder, and kindness, and stories. Keep the garden alive between your visits."

Maya returned many times over the years, always through the ivy-covered wall. Even as an adult, she never forgot the way. She became the garden's keeper, and in return, the garden kept the child inside her alive.`,
            questions: [
                { id: "fic_005_q1", type: "yes_no", question: "Did Maya discover the garden on her eighth birthday?", answer: false, explanation: "The passage states 'her seventh birthday,' not eighth." },
                { id: "fic_005_q2", type: "yes_no", question: "Did the wall back onto a busy highway?", answer: true, explanation: "The passage says 'the wall backed onto a busy highway.'" },
                { id: "fic_005_q3", type: "yes_no", question: "Was the fox's fur golden?", answer: false, explanation: "The passage describes 'A fox with silver fur,' not golden." },
                { id: "fic_005_q4", type: "yes_no", question: "Could the fox speak?", answer: true, explanation: "The passage shows the fox speaking: 'You found us,' it said." },
                { id: "fic_005_q5", type: "multiple_choice", question: "What did the tree bear?", options: ["Oranges and moons", "Apples and stars", "Pears and clouds", "Peaches and suns"], answer: 1, explanation: "The passage describes 'a tree that bore both apples and stars.'" },
                { id: "fic_005_q6", type: "multiple_choice", question: "Who lived in the garden?", options: ["Fairies", "Lost toys and imaginary friends", "Ghosts", "Angels"], answer: 1, explanation: "The garden was 'Where lost toys wait' and 'Where imaginary friends live.'" },
                { id: "fic_005_q7", type: "multiple_choice", question: "What was Maya asked to bring to the garden?", options: ["Flowers", "Wonder, kindness, and stories", "Magic spells", "New toys"], answer: 1, explanation: "The fox said 'Bring the things people have forgotten they need—wonder, and kindness, and stories.'" },
                { id: "fic_005_q8", type: "multiple_choice", question: "What did the garden keep alive in Maya?", options: ["Her memories", "The child inside her", "Her powers", "Her youth"], answer: 1, explanation: "The passage says 'the garden kept the child inside her alive.'" }
            ]
        },
        {
            id: "fic_006",
            category: "fiction",
            title: "The Detective's Last Case",
            wordCount: 243,
            difficulty: "medium",
            text: `Detective Rosa Martinez had seen a lot in her thirty years on the force, but the case file on her desk made no sense. A billionaire found dead in a locked room, surrounded by seven mirrors, each reflecting a different version of his death.

"Poison in mirror one," her partner Chen observed. "Stabbing in mirror two. Drowning in three. But the body shows no marks, no toxins. Just... stopped."

Rosa circled the room. The victim, Marcus Webb, had made his fortune in experimental physics. His last project was classified, but Rosa had sources. They called it "the probability engine"—a device that could observe all possible outcomes simultaneously.

"He saw his own death," she murmured. "Every possible way he could die."

"That's not how death works," Chen protested.

"It is if you build a machine that shows you every future at once." Rosa picked up a shard of broken mirror from the floor, its surface still rippling with impossible images. "He didn't die from any single cause. He died from all of them. Or none of them. The act of observing collapsed every possibility into one outcome: dead."

She placed the shard in an evidence bag. "Close the case. Cause of death: physics."

Chen stared at her. "They'll never accept that."

"I know." Rosa grabbed her coat. "That's why I'm retiring. Some cases aren't meant to be solved. They're meant to be survived."`,
            questions: [
                { id: "fic_006_q1", type: "yes_no", question: "Had Rosa been on the force for twenty years?", answer: false, explanation: "The passage states 'thirty years on the force.'" },
                { id: "fic_006_q2", type: "yes_no", question: "Was the victim found surrounded by seven mirrors?", answer: true, explanation: "The passage says 'surrounded by seven mirrors.'" },
                { id: "fic_006_q3", type: "yes_no", question: "Did the body show signs of poisoning?", answer: false, explanation: "The passage states 'the body shows no marks, no toxins.'" },
                { id: "fic_006_q4", type: "yes_no", question: "Was Rosa planning to retire?", answer: true, explanation: "Rosa says 'That's why I'm retiring.'" },
                { id: "fic_006_q5", type: "multiple_choice", question: "What was the victim's name?", options: ["Marcus Chen", "Marcus Webb", "Marcus Ross", "Marcus Stone"], answer: 1, explanation: "The passage identifies him as 'Marcus Webb.'" },
                { id: "fic_006_q6", type: "multiple_choice", question: "What was the secret project called?", options: ["The death machine", "The probability engine", "The mirror device", "The future box"], answer: 1, explanation: "The passage calls it 'the probability engine.'" },
                { id: "fic_006_q7", type: "multiple_choice", question: "How did Rosa say Marcus died?", options: ["Murder", "Suicide", "Physics", "Heart attack"], answer: 2, explanation: "Rosa said 'Cause of death: physics.'" },
                { id: "fic_006_q8", type: "multiple_choice", question: "What was Rosa's partner's name?", options: ["Chen", "Wang", "Lee", "Kim"], answer: 0, explanation: "The passage introduces 'her partner Chen.'" }
            ]
        },
        {
            id: "fic_007",
            category: "fiction",
            title: "The Worst Best Date",
            wordCount: 238,
            difficulty: "easy",
            text: `Emma had been looking forward to this date for weeks. Daniel was perfect on paper—tall, employed, owned more than three houseplants. What could go wrong?

Everything, as it turned out.

First, his car ran out of gas exactly halfway between two gas stations. Then, the "exclusive" restaurant he'd booked turned out to be closed for a health inspection. The backup plan—a charming little bistro—caught fire while they waited for bread.

"Maybe we should just call it a night," Emma suggested as they watched firefighters battle the blaze.

"Absolutely not," Daniel said, pulling a slightly melted baguette from his jacket. "I grabbed this before they evacuated."

They sat on a park bench, sharing the warm, smoky bread, while Daniel's playlist (carefully curated for tonight) played from his dying phone speaker.

"This is the worst date in recorded history," Emma said.

"Agreed. Complete disaster." He handed her the larger piece. "Same time next week?"

She laughed—really laughed, for the first time in months. "You want to do this again?"

"I want to see what else can go wrong. I feel like tonight set a benchmark. Next time we might cause a blackout."

"Or a small earthquake."

"Now you're getting it."

Emma took a bite of the smoky bread. It was, against all odds, delicious. Maybe perfection was overrated. Maybe catastrophe was underrated. Maybe Daniel was exactly right.`,
            questions: [
                { id: "fic_007_q1", type: "yes_no", question: "Did Daniel own three houseplants?", answer: false, explanation: "The passage says he 'owned more than three houseplants.'" },
                { id: "fic_007_q2", type: "yes_no", question: "Did the restaurant catch fire?", answer: true, explanation: "The passage states 'The backup plan—a charming little bistro—caught fire.'" },
                { id: "fic_007_q3", type: "yes_no", question: "Was the original restaurant closed for renovation?", answer: false, explanation: "It was 'closed for a health inspection,' not renovation." },
                { id: "fic_007_q4", type: "yes_no", question: "Did they end up on a park bench?", answer: true, explanation: "The passage says 'They sat on a park bench.'" },
                { id: "fic_007_q5", type: "multiple_choice", question: "What did Daniel pull from his jacket?", options: ["A rose", "A baguette", "His wallet", "A menu"], answer: 1, explanation: "Daniel pulled 'a slightly melted baguette from his jacket.'" },
                { id: "fic_007_q6", type: "multiple_choice", question: "Why did the car stop?", options: ["Flat tire", "Engine trouble", "Ran out of gas", "Accident"], answer: 2, explanation: "The passage says 'his car ran out of gas.'" },
                { id: "fic_007_q7", type: "multiple_choice", question: "What might they cause next time according to Daniel?", options: ["A flood", "A blackout", "A storm", "A riot"], answer: 1, explanation: "Daniel joked 'Next time we might cause a blackout.'" },
                { id: "fic_007_q8", type: "multiple_choice", question: "How did Emma describe the date?", options: ["Perfect", "The worst in history", "Boring", "Romantic"], answer: 1, explanation: "Emma said 'This is the worst date in recorded history.'" }
            ]
        },
        {
            id: "fic_008",
            category: "fiction",
            title: "The Last Library",
            wordCount: 251,
            difficulty: "hard",
            text: `In 2157, when the Burning began, Librarian Kenji was the only one who understood what was really being lost. Not just books—anyone could digitize words. What burned was the smell of old paper, the weight of a spine in your hands, the handwritten notes in margins from readers long dead.

He saved what he could. A wagon, then a truck, then a hidden bunker in the mountains. Forty thousand books. The last physical library on Earth.

Fifty years later, the children of the wastes found him. They'd never seen paper before. They thought the books were some kind of ancient technology.

"How does it work?" asked a girl with ash-gray hair. "Where do you plug it in?"

Kenji smiled and placed a book in her hands. "You don't. You open it. Then you power it with your mind."

She opened the cover and began to sound out words, her brow furrowed in concentration. The other children gathered around, watching as if she were performing magic.

In a way, she was.

Kenji was one hundred and twelve years old. He wouldn't last another winter. But that didn't matter anymore. The girl was reading. Others would learn. The library would survive.

On his desk sat a handwritten catalog of every book in the collection, every margin note documented, every coffee stain preserved in memory. His life's work. His gift to whatever came next.

"The last library," one child whispered.

"No," Kenji corrected gently. "The first library. Of what comes next."`,
            questions: [
                { id: "fic_008_q1", type: "yes_no", question: "Did the Burning begin in 2157?", answer: true, explanation: "The passage states 'In 2157, when the Burning began.'" },
                { id: "fic_008_q2", type: "yes_no", question: "Did Kenji save thirty thousand books?", answer: false, explanation: "The passage says 'Forty thousand books,' not thirty." },
                { id: "fic_008_q3", type: "yes_no", question: "Had the children seen paper before?", answer: false, explanation: "The passage states 'They'd never seen paper before.'" },
                { id: "fic_008_q4", type: "yes_no", question: "Was Kenji over one hundred years old?", answer: true, explanation: "The passage says 'Kenji was one hundred and twelve years old.'" },
                { id: "fic_008_q5", type: "multiple_choice", question: "Where did Kenji hide the books?", options: ["Underground city", "A bunker in the mountains", "An island", "A space station"], answer: 1, explanation: "He hid them in 'a hidden bunker in the mountains.'" },
                { id: "fic_008_q6", type: "multiple_choice", question: "What color was the girl's hair?", options: ["Black", "White", "Ash-gray", "Brown"], answer: 2, explanation: "The passage describes 'a girl with ash-gray hair.'" },
                { id: "fic_008_q7", type: "multiple_choice", question: "How did Kenji say books are powered?", options: ["Electricity", "Solar power", "Your mind", "Batteries"], answer: 2, explanation: "Kenji said 'you power it with your mind.'" },
                { id: "fic_008_q8", type: "multiple_choice", question: "What did Kenji correct about the library?", options: ["It wasn't the last, it was the first", "It wasn't hidden", "It wasn't his", "It wasn't important"], answer: 0, explanation: "Kenji said 'No... The first library. Of what comes next.'" }
            ]
        },
        {
            id: "fic_009",
            category: "fiction",
            title: "The Piano in the Rain",
            wordCount: 244,
            difficulty: "easy",
            text: `Mrs. Chen had played piano for sixty-three years. When the flood came and destroyed her home, the only thing she asked the rescue workers about was her Steinway.

"Gone, ma'am. I'm sorry."

She nodded, wrapped in a foil blanket in the emergency shelter, and said nothing more for three days.

On the fourth day, a young volunteer named Marcus noticed her staring at the old upright piano in the shelter's corner—donated, out of tune, missing several keys.

"Do you play?" he asked.

"I did. For sixty-three years."

Marcus wheeled the broken piano over to her cot. "It's not much."

She touched the keys. Half of them stuck. The sound was tinny and wrong. But her fingers remembered what her heart had forgotten. She began to play—a simple melody at first, then something more complex. The notes that worked created new harmonies around the ones that didn't.

Other evacuees gathered. Some cried. Some smiled. A little girl danced.

"It's beautiful," Marcus said. "What is it?"

"I don't know," Mrs. Chen admitted. "I think I'm making it up as I go."

She played for three hours that night. When she finally stopped, she looked more alive than she had since arriving.

"The Steinway was just wood and strings," she said. "This is where the music lives." She pressed her hand to her chest. "Always has been."

Marcus made sure a piano was wherever Mrs. Chen was assigned next. Some things, he learned, are more essential than shelter.`,
            questions: [
                { id: "fic_009_q1", type: "yes_no", question: "Had Mrs. Chen played piano for fifty-three years?", answer: false, explanation: "The passage states 'sixty-three years,' not fifty-three." },
                { id: "fic_009_q2", type: "yes_no", question: "Was the shelter piano missing some keys?", answer: true, explanation: "The passage says it was 'missing several keys.'" },
                { id: "fic_009_q3", type: "yes_no", question: "Did Mrs. Chen speak to anyone during the first three days?", answer: false, explanation: "The passage says she 'said nothing more for three days.'" },
                { id: "fic_009_q4", type: "yes_no", question: "Did a little boy dance while she played?", answer: false, explanation: "The passage says 'A little girl danced,' not a boy." },
                { id: "fic_009_q5", type: "multiple_choice", question: "What brand was Mrs. Chen's original piano?", options: ["Yamaha", "Baldwin", "Steinway", "Bosendorfer"], answer: 2, explanation: "The passage mentions 'her Steinway.'" },
                { id: "fic_009_q6", type: "multiple_choice", question: "How long did Mrs. Chen play that night?", options: ["One hour", "Two hours", "Three hours", "Four hours"], answer: 2, explanation: "The passage says 'She played for three hours that night.'" },
                { id: "fic_009_q7", type: "multiple_choice", question: "What was the volunteer's name?", options: ["Michael", "Marcus", "Martin", "Matthew"], answer: 1, explanation: "The passage introduces 'a young volunteer named Marcus.'" },
                { id: "fic_009_q8", type: "multiple_choice", question: "Where did Mrs. Chen say the music really lives?", options: ["In the piano", "In her hands", "In her chest", "In the air"], answer: 2, explanation: "She 'pressed her hand to her chest' and said 'This is where the music lives.'" }
            ]
        },
        {
            id: "fic_010",
            category: "fiction",
            title: "The Map to Nowhere",
            wordCount: 246,
            difficulty: "medium",
            text: `Captain Elara had been following the map for eighteen months, and she was starting to suspect she'd been swindled. The parchment showed an island that no satellite had ever photographed, no chart had ever recorded, and no sailor had ever returned from.

"Perhaps that's the point," her first mate Jonah suggested. "An island you can only find by getting lost."

They'd run out of food twice. Lost three crew members to despair. The ship's compass had stopped working somewhere around month six, which Elara took as either a very bad sign or a very good one.

On day 547, they found it.

The island rose from the mist like a dream refusing to end. Trees of silver and gold lined beaches of black sand. In the harbor, ships from every era sat perfectly preserved—Viking longboats beside Chinese junks beside vessels that looked like nothing ever built on Earth.

"Everyone who ever searched for something impossible ended up here," Jonah whispered.

Elara stepped onto the beach. A woman approached—old, weathered, smiling. She wore a captain's coat from a century ago.

"Welcome to Nowhere," she said. "You've been looking for us."

"What happens now?"

"Whatever you want. Time works differently here. You can rest. You can stay. Or you can take another map and search for the next impossible thing."

Elara looked back at her ship, then at the silver trees. She thought about it for exactly three seconds.

"Give me the map."`,
            questions: [
                { id: "fic_010_q1", type: "yes_no", question: "Had Elara been following the map for twelve months?", answer: false, explanation: "The passage states 'eighteen months,' not twelve." },
                { id: "fic_010_q2", type: "yes_no", question: "Did they lose three crew members?", answer: true, explanation: "The passage says 'Lost three crew members to despair.'" },
                { id: "fic_010_q3", type: "yes_no", question: "Were the beaches made of white sand?", answer: false, explanation: "The passage describes 'beaches of black sand.'" },
                { id: "fic_010_q4", type: "yes_no", question: "Did the compass stop working around month six?", answer: true, explanation: "The passage states 'The ship's compass had stopped working somewhere around month six.'" },
                { id: "fic_010_q5", type: "multiple_choice", question: "What color were the trees on the island?", options: ["Green and brown", "Silver and gold", "Red and orange", "Blue and purple"], answer: 1, explanation: "The passage describes 'Trees of silver and gold.'" },
                { id: "fic_010_q6", type: "multiple_choice", question: "On what day did they find the island?", options: ["Day 365", "Day 500", "Day 547", "Day 600"], answer: 2, explanation: "The passage says 'On day 547, they found it.'" },
                { id: "fic_010_q7", type: "multiple_choice", question: "What was the island called?", options: ["Paradise", "Nowhere", "Atlantis", "The End"], answer: 1, explanation: "The woman said 'Welcome to Nowhere.'" },
                { id: "fic_010_q8", type: "multiple_choice", question: "What did Elara ask for at the end?", options: ["Rest", "Food", "The map", "A new ship"], answer: 2, explanation: "Elara said 'Give me the map.'" }
            ]
        },
        {
            id: "fic_011",
            category: "fiction",
            title: "The Ghost Who Paid Rent",
            wordCount: 237,
            difficulty: "easy",
            text: `When Sarah moved into the old Victorian house, the landlord mentioned it might be haunted. He failed to mention the ghost would be the best roommate she'd ever had.

His name was Harold. He'd died in 1952 after falling down the stairs while chasing the family cat. He was embarrassed about it. "Not exactly a dramatic demise," he admitted, flickering slightly near the refrigerator.

Harold couldn't touch physical objects, but he was excellent company. He'd watch Sarah's favorite shows with her, offering commentary on how much things had changed. "In my day, a television was furniture," he marveled. "Now it's thinner than my grandmother's china."

He also scared off her terrible ex-boyfriend by appearing in the bathroom mirror at three in the morning. Ryan never came back.

"I feel bad not contributing," Harold said one evening. "I've been here seventy years paying nothing."

"You keep me company. That's enough."

But Harold insisted. He started whispering winning lottery numbers he'd somehow learned from other ghosts. Sarah won moderately but consistently—enough to pay off her student loans within a year.

"How do you even know these things?" she asked.

"Death," Harold explained, "comes with excellent networking opportunities."

Sarah stayed in that house for thirty-two years. When she finally passed, peacefully in her sleep, Harold was waiting. "Took you long enough," he said, smiling. "We have so much to catch up on."`,
            questions: [
                { id: "fic_011_q1", type: "yes_no", question: "Did Harold die in 1962?", answer: false, explanation: "The passage states 'He'd died in 1952,' not 1962." },
                { id: "fic_011_q2", type: "yes_no", question: "Did Harold die by falling down stairs?", answer: true, explanation: "The passage says he 'died... after falling down the stairs.'" },
                { id: "fic_011_q3", type: "yes_no", question: "Could Harold touch physical objects?", answer: false, explanation: "The passage states 'Harold couldn't touch physical objects.'" },
                { id: "fic_011_q4", type: "yes_no", question: "Did Sarah stay in the house for twenty-two years?", answer: false, explanation: "The passage says 'thirty-two years,' not twenty-two." },
                { id: "fic_011_q5", type: "multiple_choice", question: "Why was Harold chasing when he fell?", options: ["A burglar", "The family cat", "His wife", "A mouse"], answer: 1, explanation: "He fell 'while chasing the family cat.'" },
                { id: "fic_011_q6", type: "multiple_choice", question: "How did Harold scare off Sarah's ex?", options: ["Making noises", "Appearing in the mirror", "Moving furniture", "Whispering"], answer: 1, explanation: "He scared him 'by appearing in the bathroom mirror.'" },
                { id: "fic_011_q7", type: "multiple_choice", question: "What did Harold give Sarah?", options: ["Stock tips", "Lottery numbers", "Real estate advice", "Recipe ideas"], answer: 1, explanation: "He 'started whispering winning lottery numbers.'" },
                { id: "fic_011_q8", type: "multiple_choice", question: "What did Sarah pay off with her winnings?", options: ["Her mortgage", "Credit cards", "Student loans", "Car payments"], answer: 2, explanation: "She paid off 'her student loans within a year.'" }
            ]
        },
        {
            id: "fic_012",
            category: "fiction",
            title: "The Museum Heist",
            wordCount: 249,
            difficulty: "hard",
            text: `The plan was simple: steal the Vermeer during the gala, replace it with a forgery, and disappear before anyone noticed. What Lucia hadn't planned for was falling in love with the museum's head of security.

"You're here every night," Marco observed during their third accidental encounter in the sculpture garden. "Most donors visit once a year."

"I appreciate art slowly," she said, which was technically true. She'd spent weeks studying the security systems, the guard rotations, the weight sensors beneath each masterpiece.

The night of the heist, everything went wrong. Her partner got food poisoning. The forger delivered a painting with the wrong dimensions. The museum unexpectedly installed new motion detectors that morning.

Lucia stood in the darkened gallery, staring at the Vermeer—a woman reading a letter, frozen in morning light—and made a decision.

She walked to the security office and knocked.

"There's going to be a robbery tonight," she told a shocked Marco. "I was supposed to steal the Vermeer. But I've decided I'd rather have dinner with you instead."

The police arrested her associates. Lucia spent eight months in minimum security for conspiracy. When she got out, Marco was waiting with coffee and a question.

"Was any of it real?"

"The only thing I ever lied about," she said, "was why I kept coming back."

They got married in the museum garden. The Vermeer, still in its rightful place, seemed to glow a little brighter during the ceremony.`,
            questions: [
                { id: "fic_012_q1", type: "yes_no", question: "Was Lucia trying to steal a Picasso?", answer: false, explanation: "The passage says 'steal the Vermeer,' not a Picasso." },
                { id: "fic_012_q2", type: "yes_no", question: "Was Marco the head of security?", answer: true, explanation: "The passage describes him as 'the museum's head of security.'" },
                { id: "fic_012_q3", type: "yes_no", question: "Did the heist go according to plan?", answer: false, explanation: "The passage states 'The night of the heist, everything went wrong.'" },
                { id: "fic_012_q4", type: "yes_no", question: "Did Lucia spend a year in prison?", answer: false, explanation: "She 'spent eight months in minimum security,' not a year." },
                { id: "fic_012_q5", type: "multiple_choice", question: "Where did they keep meeting accidentally?", options: ["The cafe", "The sculpture garden", "The gift shop", "The lobby"], answer: 1, explanation: "They had 'accidental encounter in the sculpture garden.'" },
                { id: "fic_012_q6", type: "multiple_choice", question: "What happened to Lucia's partner?", options: ["Got arrested", "Got food poisoning", "Backed out", "Was late"], answer: 1, explanation: "Her partner 'got food poisoning.'" },
                { id: "fic_012_q7", type: "multiple_choice", question: "What was wrong with the forgery?", options: ["Wrong colors", "Wrong dimensions", "Wrong signature", "Wrong frame"], answer: 1, explanation: "The forger delivered 'a painting with the wrong dimensions.'" },
                { id: "fic_012_q8", type: "multiple_choice", question: "Where did they get married?", options: ["A church", "The beach", "The museum garden", "City hall"], answer: 2, explanation: "They 'got married in the museum garden.'" }
            ]
        },
        {
            id: "fic_013",
            category: "fiction",
            title: "The Last Transmission",
            wordCount: 244,
            difficulty: "medium",
            text: `Commander Wei had been alone on the Mars station for 847 days when the radio finally crackled back to life. Earth had gone silent two years ago, after the asteroid impact. She'd assumed everyone was dead.

"This is New Auckland," the voice said, crackling through static. "Is anyone receiving?"

Wei dropped her coffee cup. It floated in the low gravity, spinning slowly, as she scrambled for the microphone. "This is Mars Station Alpha. I'm receiving. How many survivors?"

The pause lasted forever. "We have twelve thousand here. There are other settlements. We've been rebuilding. Commander Wei... we thought we lost you."

She laughed—a strange, rusty sound she hadn't made in years. "I thought I lost everyone."

Communication was difficult. The new satellite network was primitive, allowing only brief transmissions at specific times. But over the following weeks, Wei learned the truth: humanity had survived. Battered, scattered, but alive.

"We're sending a ship," New Auckland finally announced. "It will take eighteen months to reach you."

Wei looked around her tiny station. The tomato plants she'd somehow kept alive. The walls covered in drawings made during the long silence. The journal with 847 entries that began "Day one alone" and slowly transformed into something like hope.

"I'll be here," she promised. "I'll leave a light on."

She planted more tomatoes that night. Enough for two, this time. Maybe more. Earth was coming back, and Mars would be ready.`,
            questions: [
                { id: "fic_013_q1", type: "yes_no", question: "Had Wei been alone for over 900 days?", answer: false, explanation: "The passage states '847 days,' which is less than 900." },
                { id: "fic_013_q2", type: "yes_no", question: "Was the message from New Auckland?", answer: true, explanation: "The voice said 'This is New Auckland.'" },
                { id: "fic_013_q3", type: "yes_no", question: "Had Earth gone silent due to a nuclear war?", answer: false, explanation: "It was 'after the asteroid impact,' not nuclear war." },
                { id: "fic_013_q4", type: "yes_no", question: "Did Wei have tomato plants in the station?", answer: true, explanation: "She had 'The tomato plants she'd somehow kept alive.'" },
                { id: "fic_013_q5", type: "multiple_choice", question: "How many survivors were in New Auckland?", options: ["Two thousand", "Eight thousand", "Twelve thousand", "Twenty thousand"], answer: 2, explanation: "They reported 'twelve thousand here.'" },
                { id: "fic_013_q6", type: "multiple_choice", question: "How long would the rescue ship take?", options: ["Six months", "Twelve months", "Eighteen months", "Twenty-four months"], answer: 2, explanation: "The ship would 'take eighteen months to reach you.'" },
                { id: "fic_013_q7", type: "multiple_choice", question: "What was on Wei's walls?", options: ["Maps", "Photos", "Drawings", "Equations"], answer: 2, explanation: "The walls were 'covered in drawings made during the long silence.'" },
                { id: "fic_013_q8", type: "multiple_choice", question: "What did Wei's journal entries begin with?", options: ["Dear diary", "Day one alone", "Mission log", "Help me"], answer: 1, explanation: "The journal entries 'began \"Day one alone.\"'" }
            ]
        },
        {
            id: "fic_014",
            category: "fiction",
            title: "The Secret Ingredient",
            wordCount: 241,
            difficulty: "easy",
            text: `Chef Maria had won every cooking competition in the country except one: the Golden Ladle, judged by the legendary and terrifying Madame Fontaine, who hadn't awarded first place in fifteen years.

"Your technique is flawless," Madame Fontaine would say. "But your food has no soul."

Maria's competitors offered bribes, performed tricks, created elaborate presentations with smoke and fire. Nothing worked. Madame Fontaine remained unimpressed.

The night before the finals, Maria visited her grandmother in the nursing home. Abuela couldn't remember her name anymore, but she remembered recipes.

"Mija, the secret is simple," she whispered, pressing a wrinkled paper into Maria's hand. "Cook for someone you love. Everything else is decoration."

The next day, Maria ignored her planned menu. Instead, she made her grandmother's chicken soup—the one that had cured every cold, healed every heartbreak, celebrated every triumph of her childhood.

When Madame Fontaine tasted it, she set down her spoon and was silent for a long moment.

"Who did you make this for?" she finally asked.

"My grandmother. She's losing her memories, but not this one. Never this one."

Madame Fontaine reached across the table and took Maria's hand. "That," she said quietly, "is the first meal anyone has cooked for me in forty years."

Maria won the Golden Ladle. But what she remembered most was Madame Fontaine asking for the recipe—not to judge it, but to make it herself. For someone she had lost long ago.`,
            questions: [
                { id: "fic_014_q1", type: "yes_no", question: "Had Madame Fontaine awarded first place recently?", answer: false, explanation: "She 'hadn't awarded first place in fifteen years.'" },
                { id: "fic_014_q2", type: "yes_no", question: "Did Maria's grandmother remember her name?", answer: false, explanation: "The passage says 'Abuela couldn't remember her name anymore.'" },
                { id: "fic_014_q3", type: "yes_no", question: "Did Maria make her planned menu for the finals?", answer: false, explanation: "She 'ignored her planned menu' and made her grandmother's soup instead." },
                { id: "fic_014_q4", type: "yes_no", question: "Did Maria win the competition?", answer: true, explanation: "The passage states 'Maria won the Golden Ladle.'" },
                { id: "fic_014_q5", type: "multiple_choice", question: "What was the competition called?", options: ["The Silver Spoon", "The Golden Ladle", "The Iron Chef", "The Diamond Fork"], answer: 1, explanation: "The competition was called 'the Golden Ladle.'" },
                { id: "fic_014_q6", type: "multiple_choice", question: "What did Maria's grandmother give her?", options: ["A spoon", "Money", "A wrinkled paper", "A photograph"], answer: 2, explanation: "She 'pressed a wrinkled paper into Maria's hand.'" },
                { id: "fic_014_q7", type: "multiple_choice", question: "What dish did Maria make?", options: ["Paella", "Chicken soup", "Tacos", "Lasagna"], answer: 1, explanation: "She made 'her grandmother's chicken soup.'" },
                { id: "fic_014_q8", type: "multiple_choice", question: "How long had it been since someone cooked for Madame Fontaine?", options: ["Ten years", "Twenty years", "Thirty years", "Forty years"], answer: 3, explanation: "She said it was 'the first meal anyone has cooked for me in forty years.'" }
            ]
        },
        {
            id: "fic_015",
            category: "fiction",
            title: "Tuesday Again",
            wordCount: 248,
            difficulty: "medium",
            text: `Ben had lived this Tuesday four hundred and seventeen times. He'd memorized every traffic light, every conversation, every gust of wind. The universe, for reasons unknown, had trapped him in a twenty-four hour loop.

He'd spent the first hundred iterations panicking. The next hundred seeking help. The hundred after that trying to break the loop through increasingly absurd methods: skydiving, confessing crimes he hadn't committed, eating nothing but pickles.

Nothing worked.

On iteration 418, he decided to simply be kind.

He gave directions to the lost tourist at 8:47 AM. Complimented the barista's new haircut at 9:15. Returned the wallet that fell from the businessman's pocket at 11:30—something he'd ignored for four hundred days.

He helped the elderly woman carry groceries at 2 PM. Stopped to play fetch with the lonely dog tied outside the pharmacy at 3:45. Told his mother he loved her at 6 PM, something he hadn't done in years.

At 11:59 PM, as he waited for the reset, something different happened. The clock struck midnight and kept going. Tuesday became Wednesday.

Ben stood in the dark, stunned. Then he laughed. Then he cried. Then he did both at once.

The next morning, he woke to Wednesday's unfamiliar sunlight. He had no idea what would happen. Traffic lights were mysteries. Conversations were surprises. And every stranger was someone new to help.

He'd escaped by finally learning what the loop had been teaching him all along.`,
            questions: [
                { id: "fic_015_q1", type: "yes_no", question: "Had Ben lived Tuesday over 500 times?", answer: false, explanation: "The passage states 'four hundred and seventeen times,' which is less than 500." },
                { id: "fic_015_q2", type: "yes_no", question: "Did Ben try eating only pickles?", answer: true, explanation: "He tried 'eating nothing but pickles' to break the loop." },
                { id: "fic_015_q3", type: "yes_no", question: "Did Tuesday finally become Thursday?", answer: false, explanation: "The passage says 'Tuesday became Wednesday,' not Thursday." },
                { id: "fic_015_q4", type: "yes_no", question: "Did Ben return a lost wallet?", answer: true, explanation: "He 'Returned the wallet that fell from the businessman's pocket.'" },
                { id: "fic_015_q5", type: "multiple_choice", question: "What did Ben do at 9:15 AM on day 418?", options: ["Had breakfast", "Complimented the barista", "Went to work", "Called his mother"], answer: 1, explanation: "He 'Complimented the barista's new haircut at 9:15.'" },
                { id: "fic_015_q6", type: "multiple_choice", question: "What did Ben do with the dog at the pharmacy?", options: ["Fed it", "Adopted it", "Played fetch", "Pet it"], answer: 2, explanation: "He 'stopped to play fetch with the lonely dog.'" },
                { id: "fic_015_q7", type: "multiple_choice", question: "What time did Ben tell his mother he loved her?", options: ["4 PM", "5 PM", "6 PM", "7 PM"], answer: 2, explanation: "He 'Told his mother he loved her at 6 PM.'" },
                { id: "fic_015_q8", type: "multiple_choice", question: "What lesson did the loop teach Ben?", options: ["To be patient", "To be kind", "To be brave", "To be smart"], answer: 1, explanation: "He broke the loop after he 'decided to simply be kind.'" }
            ]
        },
        // New diverse fiction passages
        {
            id: "fic_016",
            category: "fiction",
            title: "Rain on Mulholland",
            wordCount: 247,
            difficulty: "hard",
            text: `The dame walked into my office like trouble on heels—which, incidentally, she was wearing. Red ones. The kind that said she had money, taste, and a problem she couldn't solve herself.

"Mr. Castellano," she breathed, sliding into the chair across from my desk. "I need you to find my husband."

I lit a cigarette, buying time. Twenty years as a P.I. in this city taught me one thing: when a beautiful woman wants you to find her husband, she usually already knows where he is.

"He's been missing three days," she continued. "The police say he probably ran off with his secretary. But Phillip wouldn't do that. He's not the type."

They never think their husbands are the type. I looked at the photograph she slid across like it was a dead fish—which, in my experience, it probably would lead me to.

"Five hundred a day, plus expenses," I said.

She didn't flinch. Just opened a crocodile purse and counted out two grand in crisp bills.

"Find him, Mr. Castellano. Dead or alive, I need to know."

I took the money. I took the case. And as she walked out, leaving nothing but perfume and unanswered questions, I had a feeling this case was going to be messier than a martini at closing time. Outside, the rain started falling on Mulholland Drive, like the city itself was crying.`,
            questions: [
                { id: "fic_016_q1", type: "yes_no", question: "Was the woman wearing red heels?", answer: true, explanation: "The passage says 'Red ones. The kind that said she had money, taste.'" },
                { id: "fic_016_q2", type: "yes_no", question: "Had the husband been missing for a week?", answer: false, explanation: "The passage says 'He's been missing three days.'" },
                { id: "fic_016_q3", type: "yes_no", question: "Did the police think the husband ran off with his secretary?", answer: true, explanation: "The passage says 'The police say he probably ran off with his secretary.'" },
                { id: "fic_016_q4", type: "yes_no", question: "Did the narrator charge three hundred a day?", answer: false, explanation: "He said 'Five hundred a day, plus expenses.'" },
                { id: "fic_016_q5", type: "multiple_choice", question: "How much money did the woman pay upfront?", options: ["$500", "$1,000", "$2,000", "$5,000"], answer: 2, explanation: "She 'counted out two grand in crisp bills.'" },
                { id: "fic_016_q6", type: "multiple_choice", question: "How many years had the narrator been a P.I.?", options: ["Ten", "Fifteen", "Twenty", "Thirty"], answer: 2, explanation: "'Twenty years as a P.I. in this city.'" },
                { id: "fic_016_q7", type: "multiple_choice", question: "What kind of purse did the woman have?", options: ["Leather", "Velvet", "Crocodile", "Canvas"], answer: 2, explanation: "She 'opened a crocodile purse.'" },
                { id: "fic_016_q8", type: "multiple_choice", question: "Where was it raining at the end?", options: ["Sunset Boulevard", "Mulholland Drive", "Hollywood Hills", "Beverly Hills"], answer: 1, explanation: "'the rain started falling on Mulholland Drive.'" }
            ]
        },
        {
            id: "fic_017",
            category: "fiction",
            title: "The Vertical Farm",
            wordCount: 251,
            difficulty: "medium",
            text: `Kira pressed her palm against the biometric scanner, and the greenhouse dome shimmered open above her. Sector Seven was her favorite—forty stories of hydroponics spiraling toward the solar-filtered sky, every plant connected to the city's neural network.

"Morning, Kira," chirped BLOOM, the agricultural AI. "The tomatoes in Row 47 are ready for harvest. Also, your grandmother called. She says you work too much."

Kira laughed, adjusting her smart-lens to check the moisture readings. Since the Great Transition of 2089, when humanity finally abandoned fossil fuels, cities had transformed into living ecosystems. Her job—vertical farmer—hadn't existed when her grandmother was young.

"BLOOM, any issues overnight?"

"Minor bacterial concern in the wheat terraces. Already addressed with targeted probiotics. Also, the bees in Level 12 have formed a new queen. I've named her Beatrice."

Kira smiled. BLOOM had developed what scientists called "emergent personality quirks." Most people found it unsettling. Kira found it charming.

She walked through rows of lettuce and strawberries, past the mushroom caverns and the algae pools that produced half the city's protein. Outside the dome, solar panels and wind turbines dotted the skyline, their harvest of clean energy powering everything—including BLOOM's endless botanical experiments.

"Kira," BLOOM said softly. "The sunset calculations suggest tonight will be particularly beautiful. I've prepared a viewing alcove on Level 40. Perhaps you could watch it. And call your grandmother."

Sometimes, Kira thought, the future was exactly as weird and wonderful as the old science fiction had promised.`,
            questions: [
                { id: "fic_017_q1", type: "yes_no", question: "Was Sector Seven Kira's least favorite sector?", answer: false, explanation: "The passage says 'Sector Seven was her favorite.'" },
                { id: "fic_017_q2", type: "yes_no", question: "Did the Great Transition happen in 2089?", answer: true, explanation: "The passage mentions 'the Great Transition of 2089.'" },
                { id: "fic_017_q3", type: "yes_no", question: "Did BLOOM name the new bee queen Josephine?", answer: false, explanation: "BLOOM said 'I've named her Beatrice.'" },
                { id: "fic_017_q4", type: "yes_no", question: "Do algae pools produce half the city's protein?", answer: true, explanation: "'the algae pools that produced half the city's protein.'" },
                { id: "fic_017_q5", type: "multiple_choice", question: "How many stories tall was the greenhouse in Sector Seven?", options: ["Twenty", "Thirty", "Forty", "Fifty"], answer: 2, explanation: "'forty stories of hydroponics spiraling toward the solar-filtered sky.'" },
                { id: "fic_017_q6", type: "multiple_choice", question: "What was Kira's job title?", options: ["Botanist", "Vertical farmer", "Agricultural engineer", "Solar technician"], answer: 1, explanation: "'Her job—vertical farmer.'" },
                { id: "fic_017_q7", type: "multiple_choice", question: "What was used to address the bacterial concern in wheat?", options: ["Pesticides", "Antibiotics", "Targeted probiotics", "Manual removal"], answer: 2, explanation: "'Already addressed with targeted probiotics.'" },
                { id: "fic_017_q8", type: "multiple_choice", question: "Which level was the viewing alcove BLOOM prepared?", options: ["Level 30", "Level 35", "Level 40", "Level 47"], answer: 2, explanation: "'a viewing alcove on Level 40.'" }
            ]
        },
        {
            id: "fic_018",
            category: "fiction",
            title: "Letters from the Afterlife",
            wordCount: 244,
            difficulty: "easy",
            text: `Dear Margaret,

I hope this finds you well. The postman here says letters take between three days and seventy years to arrive, depending on "atmospheric conditions in the metaphysical membrane." He seems nice, if a bit translucent.

The afterlife is not what I expected. No clouds, no harps. It's more like a very large library with excellent tea service and Tuesdays that last for centuries. I've reconnected with Great Aunt Hildegarde—she says hello, and that you should never have sold her china set.

I miss you terribly, of course. But I'm told time works differently here. By the time this reaches you, I'll have finished reading Proust, learned to tango, and possibly started a book club with Cleopatra (she's lovely, but a terrible listener).

The food is interesting. Everything tastes faintly of memories—Wednesday's soup tasted exactly like my mother's kitchen in 1952. The desserts, however, taste like regrets. I avoid the tiramisu.

My biggest adjustment has been the lack of urgency. Nothing here is pressing or immediate. I have learned to simply sit and exist, which—as you know—I was terrible at in life.

Please don't be sad when you think of me. I am reading, resting, and occasionally debating philosophy with a shockingly opinionated Socrates. It is, against all odds, rather nice.

All my love, across the membrane,
Your Harold

P.S. Tell the dog I forgive him for the shoes.`,
            questions: [
                { id: "fic_018_q1", type: "yes_no", question: "Does the narrator say the afterlife has clouds and harps?", answer: false, explanation: "'No clouds, no harps.'" },
                { id: "fic_018_q2", type: "yes_no", question: "Is the postman described as translucent?", answer: true, explanation: "'He seems nice, if a bit translucent.'" },
                { id: "fic_018_q3", type: "yes_no", question: "Did Great Aunt Hildegarde approve of selling her china set?", answer: false, explanation: "She 'says hello, and that you should never have sold her china set.'" },
                { id: "fic_018_q4", type: "yes_no", question: "Does the food at the afterlife taste like memories?", answer: true, explanation: "'Everything tastes faintly of memories.'" },
                { id: "fic_018_q5", type: "multiple_choice", question: "What historical figure did Harold start a book club with?", options: ["Helen of Troy", "Cleopatra", "Marie Antoinette", "Queen Victoria"], answer: 1, explanation: "'possibly started a book club with Cleopatra.'" },
                { id: "fic_018_q6", type: "multiple_choice", question: "What did Wednesday's soup taste like?", options: ["Childhood birthdays", "His mother's kitchen in 1952", "Summer vacations", "First love"], answer: 1, explanation: "'Wednesday's soup tasted exactly like my mother's kitchen in 1952.'" },
                { id: "fic_018_q7", type: "multiple_choice", question: "Which philosopher is Harold debating with?", options: ["Plato", "Aristotle", "Socrates", "Descartes"], answer: 2, explanation: "'debating philosophy with a shockingly opinionated Socrates.'" },
                { id: "fic_018_q8", type: "multiple_choice", question: "What dessert does Harold avoid?", options: ["Cheesecake", "Tiramisu", "Crème brûlée", "Chocolate cake"], answer: 1, explanation: "'I avoid the tiramisu.'" }
            ]
        },
        {
            id: "fic_019",
            category: "fiction",
            title: "The Morning Commute",
            wordCount: 239,
            difficulty: "hard",
            text: `The train lurches and there she is again third seat from the door same grey coat same book same everything and I wonder if she notices me staring probably not probably thinks I'm just another tired commuter which I am but also I'm composing symphonies to the way she turns pages always two at a time like maybe she's reading two stories at once or maybe the words don't come fast enough or—

Stop. Breathe. The therapist said to notice these spirals.

Okay so the train moves and outside there's that billboard the one selling something I can't remember, happiness maybe or yogurt, and the morning light hits everything golden like honey like movie credits like the ending of something beautiful and isn't that funny how we keep finding endings everywhere when really it's all just middles, endless middles, me on this train her with that book the city breathing around us—

Focus. This is my stop coming up.

I stand. Grab the rail. The train jerks and suddenly we're eye to eye across the carriage and she smiles—smiles at me—and the whole universe compresses into this single impossible moment where a stranger's kindness feels like proof that something somewhere is paying attention.

The doors open. I step out into the morning, carrying that smile like something fragile and infinite. The city swallows me whole. Another day begins.`,
            questions: [
                { id: "fic_019_q1", type: "yes_no", question: "Was the woman wearing a grey coat?", answer: true, explanation: "'same grey coat same book same everything.'" },
                { id: "fic_019_q2", type: "yes_no", question: "Does the woman turn pages one at a time?", answer: false, explanation: "'she turns pages always two at a time.'" },
                { id: "fic_019_q3", type: "yes_no", question: "Did the narrator's therapist suggest noticing spiraling thoughts?", answer: true, explanation: "'The therapist said to notice these spirals.'" },
                { id: "fic_019_q4", type: "yes_no", question: "Did the woman frown at the narrator?", answer: false, explanation: "'she smiles—smiles at me.'" },
                { id: "fic_019_q5", type: "multiple_choice", question: "Which seat was the woman sitting in?", options: ["First", "Second", "Third", "Fourth"], answer: 2, explanation: "'third seat from the door.'" },
                { id: "fic_019_q6", type: "multiple_choice", question: "What was the morning light compared to?", options: ["Silver and ice", "Honey and movie credits", "Diamonds and stars", "Fire and ash"], answer: 1, explanation: "'light hits everything golden like honey like movie credits.'" },
                { id: "fic_019_q7", type: "multiple_choice", question: "What does the narrator call the woman's smile?", options: ["Bright and warm", "Fragile and infinite", "Simple and quick", "Sad and knowing"], answer: 1, explanation: "'carrying that smile like something fragile and infinite.'" },
                { id: "fic_019_q8", type: "multiple_choice", question: "What did the billboard advertise?", options: ["Cars", "Happiness or yogurt", "Travel", "Technology"], answer: 1, explanation: "'selling something I can't remember, happiness maybe or yogurt.'" }
            ]
        },
        {
            id: "fic_020",
            category: "fiction",
            title: "The Big Bad Wolf's Defense",
            wordCount: 246,
            difficulty: "easy",
            text: `Ladies and gentlemen of the jury, I stand before you today as a victim of narrative injustice. For centuries, my client—Mr. Bartholomew Wolf—has been slandered by a certain porcine family and their questionable construction practices.

Let us examine the facts. My client has severe allergies. Documented by three separate veterinary specialists. When he approached the first structure—a straw house, I remind you, built without permits—he was merely attempting to ask for a tissue. His subsequent sneezing was involuntary.

The second house, constructed of sticks, violated sixteen building codes. A strong breeze would have accomplished what my client's allergies did. Is he responsible for municipal inspection failures? I think not.

As for the third house—the brick one—my client never touched it. He was merely standing outside, wheezing, when the occupants poured boiling water down the chimney. My client still bears the scars.

Who is the real villain here? Three brothers who build structurally unsound homes and assault anyone who approaches? A wolf with a medical condition trying to borrow antihistamines? I ask you to consider the evidence.

Furthermore, these pigs have profited enormously from their story—book deals, film rights, merchandise. Meanwhile, my client cannot secure housing due to his damaged reputation.

We seek full exoneration, a public apology, and damages of seventeen million acorns. The persecution of wolves based on fairy tale propaganda must end.

The defense rests.

(Transcript: Forestland Superior Court, Case #FF-1812)`,
            questions: [
                { id: "fic_020_q1", type: "yes_no", question: "Did the wolf have documented allergies?", answer: true, explanation: "'My client has severe allergies. Documented by three separate veterinary specialists.'" },
                { id: "fic_020_q2", type: "yes_no", question: "Was the straw house built with proper permits?", answer: false, explanation: "'a straw house, I remind you, built without permits.'" },
                { id: "fic_020_q3", type: "yes_no", question: "Did the wolf touch the brick house?", answer: false, explanation: "'my client never touched it.'" },
                { id: "fic_020_q4", type: "yes_no", question: "Did the pigs pour boiling water from the chimney?", answer: true, explanation: "'the occupants poured boiling water down the chimney.'" },
                { id: "fic_020_q5", type: "multiple_choice", question: "How many building codes did the stick house violate?", options: ["Eight", "Twelve", "Sixteen", "Twenty"], answer: 2, explanation: "'violated sixteen building codes.'" },
                { id: "fic_020_q6", type: "multiple_choice", question: "What was the wolf's first name?", options: ["Bernard", "Benjamin", "Bartholomew", "Bradley"], answer: 2, explanation: "'Mr. Bartholomew Wolf.'" },
                { id: "fic_020_q7", type: "multiple_choice", question: "How much in damages was being sought?", options: ["Seven million acorns", "Twelve million acorns", "Seventeen million acorns", "Twenty-five million acorns"], answer: 2, explanation: "'damages of seventeen million acorns.'" },
                { id: "fic_020_q8", type: "multiple_choice", question: "What was the case number?", options: ["FF-1776", "FF-1812", "FF-1888", "FF-1902"], answer: 1, explanation: "'Case #FF-1812.'" }
            ]
        },
        {
            id: "fic_021",
            category: "fiction",
            title: "The Cloud Shepherd",
            wordCount: 265,
            difficulty: "medium",
            text: `Elias was not a shepherd of sheep, but of clouds. High atop the Peaks of Whispers, where the air was thin and tasted of frost, he played his silver flute. The music wasn't for human ears; it was a language of wind and pressure, guiding the fluffy cumulus and wispy cirrus across the azure sky.

Most people in the valley below thought the weather was random. They didn't know that Elias pushed the rain clouds toward the thirsty farms in the east or steered the dangerous thunderstorms away from the village. It was a lonely life, but a necessary one.

One afternoon, a Storm Drake appeared on the horizon—a jagged mass of purple thunderheads shaped like a dragon, crackling with green lightning. It defied the wind, moving against the natural currents, hungry for the destruction of the valley.

Elias raised his flute. He didn't play the gentle lullabies of fair weather. He played a battle march, a piercing shriek of high notes that summoned the northern gales. The winds rallied to his call, slamming into the Storm Drake with the force of a hurricane.

For hours they battled, music against thunder. Elias played until his fingers bled and his lungs burned. Finally, with a dissipating groan of thunder, the Drake broke apart, scattering into harmless gray mist.

 exhausted, Elias collapsed on the moss. Below, the villagers came out to marvel at the sudden sunshine, never knowing that a boy with a flute had just saved their world.`,
            questions: [
                { id: "fic_021_q1", type: "yes_no", question: "Did Elias herd sheep?", answer: false, explanation: "The passage states 'Elias was not a shepherd of sheep, but of clouds.'" },
                { id: "fic_021_q2", type: "yes_no", question: "Did Elias utilize a silver flute?", answer: true, explanation: "The passage mentions 'he played his silver flute.'" },
                { id: "fic_021_q3", type: "yes_no", question: "Did the villagers know Elias was controlling the weather?", answer: false, explanation: "The passage says 'Most people... thought the weather was random' and 'never knowing that a boy with a flute had just saved their world.'" },
                { id: "fic_021_q4", type: "yes_no", question: "Did the Storm Drake move with the natural wind currents?", answer: false, explanation: "It moved 'against the natural currents.'" },
                { id: "fic_021_q5", type: "multiple_choice", question: "Where did Elias live?", options: ["In the valley", "Atop the Peaks of Whispers", "In a cave", "On a cloud"], answer: 1, explanation: "He was 'High atop the Peaks of Whispers.'" },
                { id: "fic_021_q6", type: "multiple_choice", question: "What color was the lightning in the Storm Drake?", options: ["Yellow", "White", "Blue", "Green"], answer: 3, explanation: "It was 'crackling with green lightning.'" },
                { id: "fic_021_q7", type: "multiple_choice", question: "What did Elias summon to fight the Drake?", options: ["Rain", "The northern gales", "Other dragons", "The sun"], answer: 1, explanation: "He 'summoned the northern gales.'" },
                { id: "fic_021_q8", type: "multiple_choice", question: "How did the battle end?", options: ["The Drake ate Elias", "The Drake broke apart into mist", "Elias retreated", "The flute broke"], answer: 1, explanation: "The Drake 'broke apart, scattering into harmless gray mist.'" }
            ]
        },
        {
            id: "fic_022",
            category: "fiction",
            title: "The Shadow Trader",
            wordCount: 258,
            difficulty: "hard",
            text: `In the narrowest alley of the city, hidden behind a door painted with midnight tar, lived the Shadow Trader. People came to him not for gold or jewels, but for pieces of themselves they wished to discard.

"What can I do for you?" the Trader asked, his own shadow detaching itself from the wall to pour tea.

A young man sat nervously in the velvet chair. "I want to be brave. Like a lion."

The Trader nodded. "I have a lion's shadow in stock. Taken from a king who grew tired of war. But the trade must be equal. To gain bravery, you must give up your caution."

"Take it," the man said quickly.

The Trader produced a pair of scissors made of silver light. snip, snip. The man's shadow fell away, looking small and trembling. The Trader replaced it with a sprawling, dark shape that roared silently on the floorboards.

The man stood up, his chest puffing out. He strode out the door without checking for traffic, without looking back.

"He'll be dead in a week," the Trader's shadow whispered.

"Perhaps," the Trader replied, pinning the trembling shadow to his display board. "But he will die brave. That is what he bought."

He looked at his collection—shadows of dancers who wanted to be scholars, scholars who wanted to be lovers, lovers who wanted to forget. All of them trading parts of their souls for something they thought they needed, never realizing that the shadow always remembers what was lost.`,
            questions: [
                { id: "fic_022_q1", type: "yes_no", question: "Was the door painted with white paint?", answer: false, explanation: "The door was 'painted with midnight tar.'" },
                { id: "fic_022_q2", type: "yes_no", question: "Did the Trader's shadow pour tea?", answer: true, explanation: "The passage says 'his own shadow detaching itself from the wall to pour tea.'" },
                { id: "fic_022_q3", type: "yes_no", question: "Did the young man check for traffic when leaving?", answer: false, explanation: "He left 'without checking for traffic.'" },
                { id: "fic_022_q4", type: "yes_no", question: "Did the man trade his caution for bravery?", answer: true, explanation: "The Trader said 'To gain bravery, you must give up your caution.'" },
                { id: "fic_022_q5", type: "multiple_choice", question: "What were the scissors made of?", options: ["Steel", "Gold", "Silver light", "Shadow"], answer: 2, explanation: "He produced 'scissors made of silver light.'" },
                { id: "fic_022_q6", type: "multiple_choice", question: "Where did the lion's shadow come from?", options: ["A zoo", "A king who grew tired of war", "A hunter", "The jungle"], answer: 1, explanation: "It was 'Taken from a king who grew tired of war.'" },
                { id: "fic_022_q7", type: "multiple_choice", question: "How long did the shadow predict the man would live?", options: ["A day", "A week", "A year", "Decades"], answer: 1, explanation: "'He'll be dead in a week.'" },
                { id: "fic_022_q8", type: "multiple_choice", question: "What does the shadow always remember?", options: ["The price", "The future", "What was lost", "The owner's name"], answer: 2, explanation: "The passage ends with 'the shadow always remembers what was lost.'" }
            ]
        },
        {
            id: "fic_023",
            category: "fiction",
            title: "The Clockwork Heart",
            wordCount: 271,
            difficulty: "medium",
            text: `The tick-tock of the workshop was more comforting to Silas than the beat of his own heart. He adjusted his magnifying monocle, carefully placing a gear the size of a grain of sand into the brass chamber.

"Is it ready, Papa?" asked a weak voice from the cot in the corner.

Elara was fading. Her skin was pale as porcelain, her breathing shallow. The doctors had said her heart was too tired to go on. Silas, the greatest clockmaker in the empire, refused to accept that.

"Almost, my star," he whispered.

The mechanism was a masterpiece of gold, brass, and ruby bearings. It could pump blood, yes, but a heart was more than a pump. It needed a spark. It needed life.

Silas took a deep breath. He picked up the transfer conduit—a helmet of copper wires connected to the clockwork heart. He placed it on his own head.

He thought of Elara's first laugh. *click*. A gear spun.
He thought of teaching her to walk. *whir*. The pistons fired.
He thought of the day her mother died, and the promise he made to protect her. *thump-thump*.

The machine began to beat, a steady, rhythmic pulse. But Silas felt colder, dimmer. He was pouring his own vitality, his own memories, into the springs.

He staggered to the cot and initiated the surgery. As he connected the final valve, his vision blurred. He watched the color return to Elara's cheeks as the clockwork heart took over.

"Papa?" she asked, sitting up, stronger than she had been in months.

Silas smiled, slumping against his workbench. "I'm just... resting comfortably," he lied, as his own internal spring slowly wound down.`,
            questions: [
                { id: "fic_023_q1", type: "yes_no", question: "Was Silas a doctor?", answer: false, explanation: "Silas was 'the greatest clockmaker in the empire.'" },
                { id: "fic_023_q2", type: "yes_no", question: "Did the mechanism utilize ruby bearings?", answer: true, explanation: "It was a 'masterpiece of gold, brass, and ruby bearings.'" },
                { id: "fic_023_q3", type: "yes_no", question: "Did Silas transfer his own memories to the heart?", answer: true, explanation: "He was 'pouring his own vitality, his own memories, into the springs.'" },
                { id: "fic_023_q4", type: "yes_no", question: "Did Elara die at the end?", answer: false, explanation: "She sat up 'stronger than she had been in months.'" },
                { id: "fic_023_q5", type: "multiple_choice", question: "What was the size of the gear Silas placed?", options: ["A coin", "A pea", "A grain of sand", "A walnut"], answer: 2, explanation: "He placed 'a gear the size of a grain of sand.'" },
                { id: "fic_023_q6", type: "multiple_choice", question: "What material was the transfer helmet made of?", options: ["Steel", "Copper", "Iron", "Silver"], answer: 1, explanation: "A 'helmet of copper wires.'" },
                { id: "fic_023_q7", type: "multiple_choice", question: "What happened when Silas thought of Elara's first laugh?", options: ["The machine exploded", "Nothing happened", "A gear spun", "The lights flickered"], answer: 2, explanation: "'He thought of Elara's first laugh. click. A gear spun.'" },
                { id: "fic_023_q8", type: "multiple_choice", question: "Why did Silas slump against the workbench?", options: ["He was sleepy", "He tripped", "His own life force was draining", "He was drunk"], answer: 2, explanation: "He was 'pouring his own vitality... as his own internal spring slowly wound down.'" }
            ]
        },
        {
            id: "fic_024",
            category: "fiction",
            title: "The Star Catcher",
            wordCount: 236,
            difficulty: "easy",
            text: `Most people made wishes on falling stars. Elara caught them.

With a net woven from moonlight and spider silk, she waited on the highest roof in the village. When a streak of white fire painted the dark sky, she would leap, swinging her net in a wide arc.

*Sizzle.*

The star would land in her net, cooling rapidly from blinding white to a soft, pulsing warmth. Up close, they looked like rough diamonds, humming with a low vibration.

Elara didn't keep them. Stars weren't meant for jars. She caught them because they were broken.

She would take the fallen star to her workbench and examine it with a jeweler's loupe. "Ah, there's the crack," she'd murmur. "You hit a satellite on the way down, didn't you?"

Using a tiny silver hammer and glue made of stardust, she would repair the celestial bodies. She polished their facets until they shined again.

Then came the hard part. She had to climb the Mountain of Echoes, past the cloud layer, to the very edge of the atmosphere. With a mighty throw, she would hurl the repaired star back into the heavens.

It would hang there for a moment, uncertain, before flaring to life and rushing back to its constellation.

The villagers mocked her. "You can't fix the sky," they said.

But Elara knew better. Every night, the sky was a little brighter than before. And sometimes, when the wind was right, the stars twinkled in a pattern that looked remarkably like a "Thank You."`,
            questions: [
                { id: "fic_024_q1", type: "yes_no", question: "Did Elara keep the stars in jars?", answer: false, explanation: "The passage states 'Elara didn't keep them. Stars weren't meant for jars.'" },
                { id: "fic_024_q2", type: "yes_no", question: "Was Elara's net made of nylon?", answer: false, explanation: "It was 'woven from moonlight and spider silk.'" },
                { id: "fic_024_q3", type: "yes_no", question: "Did Elara repair the stars?", answer: true, explanation: "She would 'repair the celestial bodies' using a silver hammer and stardust glue." },
                { id: "fic_024_q4", type: "yes_no", question: "Did the villagers support Elara's work?", answer: false, explanation: "The passage says 'The villagers mocked her.'" },
                { id: "fic_024_q5", type: "multiple_choice", question: "What did the stars look like up close?", options: ["Burning rocks", "Rough diamonds", "Glass balls", "Fireflies"], answer: 1, explanation: "They looked like 'rough diamonds, humming with a low vibration.'" },
                { id: "fic_024_q6", type: "multiple_choice", question: "What did Elara use to fix the stars?", options: ["Tape", "Welding torch", "Silver hammer and stardust glue", "Magic wand"], answer: 2, explanation: "Using 'a tiny silver hammer and glue made of stardust.'" },
                { id: "fic_024_q7", type: "multiple_choice", question: "Where did she go to release the stars?", options: ["The ocean", "Her roof", "The Mountain of Echoes", "A rocket ship"], answer: 2, explanation: "She had to 'climb the Mountain of Echoes.'" },
                { id: "fic_024_q8", type: "multiple_choice", question: "What did the stars do after being thrown back?", options: ["Fell again", "Disappeared", "Returned to their constellation", "Exploded"], answer: 2, explanation: "It would rush 'back to its constellation.'" }
            ]
        },
        {
            id: "fic_025",
            category: "fiction",
            title: "The Book of Tomorrow",
            wordCount: 253,
            difficulty: "medium",
            text: `The book had no title, only a cover of worn blue leather. When Julian opened it, the pages were blank. But as he watched, ink began to bleed into existence, forming words in a handwriting that looked suspiciously like his own.

"Julian sat in the library," the book read, "wondering why it was raining outside when the forecast had promised sun."

Julian looked up. Outside the window, a sudden downpour began to lash against the glass.

He looked back at the book. New words were forming. "He decided to leave early, taking the shortcut through the park. There, he would find a gold coin, but he would also ruin his best shoes in a puddle."

Julian frowned. He liked his shoes. He took a pen from his pocket and hovered it over the page. Just below the fading text, he wrote: "Instead, Julian decided to wait out the rain in the café across the street, where he ordered a hot chocolate."

The ink shimmered. The words about the park and the puddle vanished, reorganized by his edit.

Julian packed up and walked to the café. He ordered a hot chocolate. As he sipped it, the book in his bag grew warm. He pulled it out.

"In the café," it now read, "Julian met Sarah, who would change his life."

 The cafe door opened. A girl with a red umbrella walked in, shaking off the rain. She looked around for a table, and her eyes met his.

Julian smiled, closed the book, and put his pen away. Some stories, he decided, were better written together.`,
            questions: [
                { id: "fic_025_q1", type: "yes_no", question: "Was the cover of the book red?", answer: false, explanation: "It had 'a cover of worn blue leather.'" },
                { id: "fic_025_q2", type: "yes_no", question: "Did the book predict the rain?", answer: true, explanation: "The book read 'wondering why it was raining' just before it started." },
                { id: "fic_025_q3", type: "yes_no", question: "Did Julian go to the park as the book originally predicted?", answer: false, explanation: "He wrote a new path: 'Julian decided to wait out the rain in the café.'" },
                { id: "fic_025_q4", type: "yes_no", question: "Did text vanish when Julian wrote in the book?", answer: true, explanation: "The words 'vanished, reorganized by his edit.'" },
                { id: "fic_025_q5", type: "multiple_choice", question: "What was Julian predicted to find in the park?", options: ["A wallet", "A gold coin", "A dog", "A key"], answer: 1, explanation: "The book said 'he would find a gold coin.'" },
                { id: "fic_025_q6", type: "multiple_choice", question: "What did Julian order at the café?", options: ["Coffee", "Tea", "Hot chocolate", "Soup"], answer: 2, explanation: "He 'ordered a hot chocolate.'" },
                { id: "fic_025_q7", type: "multiple_choice", question: "Who walked into the café?", options: ["His mother", "Sarah", "A police officer", "His boss"], answer: 1, explanation: "The book predicted he would meet 'Sarah,' and a girl entered." },
                { id: "fic_025_q8", type: "multiple_choice", question: "Why did Julian put his pen away at the end?", options: ["It ran out of ink", "He was scared", "He wanted to write the story with Sarah", "He lost the book"], answer: 2, explanation: "He decided 'Some stories... were better written together.'" }
            ]
        }
    ],

    // Get all passages
    getAllPassages() {
        return this.passages;
    },

    // Get passages by category
    getPassagesByCategory(category) {
        if (category === 'all') return this.passages;
        return this.passages.filter(p => p.category === category);
    },

    // Get a single passage by ID
    getPassageById(id) {
        return this.passages.find(p => p.id === id);
    },

    // Get random questions for a passage (for quiz)
    getQuestionsForPassage(passageId, count = 20) {
        const passage = this.getPassageById(passageId);
        if (!passage) return [];

        const questions = [...passage.questions];
        // Shuffle and return up to 'count' questions
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        return questions.slice(0, Math.min(count, questions.length));
    },

    // Get categories
    getCategories() {
        const categories = [...new Set(this.passages.map(p => p.category))];
        return ['all', ...categories];
    },

    // Get total passage count
    getTotalPassageCount() {
        return this.passages.length;
    },

    // Get total question count
    getTotalQuestionCount() {
        return this.passages.reduce((sum, p) => sum + p.questions.length, 0);
    }
};

// Make available globally
window.PASSAGES_DB = PASSAGES_DB;
