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
