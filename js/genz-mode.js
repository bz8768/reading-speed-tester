/**
 * Gen Z Focus Training Mode 💀
 * Intentionally distracting overlays to train concentration
 */

const GenZMode = {
    enabled: false,
    intensity: 'medium', // low, medium, chaos
    distractions: [],
    intervalId: null,
    container: null,

    // Distraction content pools
    emojis: ['💀', '🔥', '😂', '💯', '✨', '😭', '🤣', '💅', '🙄', '👀', '🥵', '😤', '🤡', '💔', '🫠', '🗿',
        '👁️', '🦋', '🌈', '⚡', '🎃', '👻', '🤖', '🎮', '🧠', '🦴', '🍕', '🍩', '🌮', '🧋', '🎸', '🚀',
        '🪐', '💿', '📱', '🎧', '🎪', '🎭', '🃏', '🎯', '🏆', '💎', '🔮', '🧿', '⭐', '🌟', '💫'],

    notifications: [
        // Social Media
        { app: 'TikTok', message: 'Your video is going viral! 🔥' },
        { app: 'TikTok', message: 'POV: You scrolled for 3 hours' },
        { app: 'TikTok', message: '🎵 New sound trending in your area' },
        { app: 'Instagram', message: 'Your crush liked your photo 👀' },
        { app: 'Instagram', message: 'Story view: your ex saw it 👁️' },
        { app: 'Instagram', message: 'Your reel got 10K views!' },
        { app: 'Snapchat', message: '🔥 Streak about to expire!' },
        { app: 'Snapchat', message: 'Screenshot detected ⚠️' },
        { app: 'Discord', message: '@everyone NEW MEME DROPPED' },
        { app: 'Discord', message: 'Voice chat: 7 people screaming' },
        { app: 'Discord', message: 'Server boost from xX_Chad_Xx' },
        { app: 'Twitter/X', message: 'Your tweet got ratio\'d 💀' },
        { app: 'Twitter/X', message: 'Elon just tweeted something weird' },
        { app: 'Twitter/X', message: 'Main character moment detected' },
        { app: 'Reddit', message: 'Your comment got 1K upvotes' },
        { app: 'Reddit', message: 'AITA verdict: YTA slay 💅' },
        { app: 'BeReal', message: '⚠️ Time to BeReal! 2 min left' },
        { app: 'BeReal', message: 'You missed your BeReal again smh' },
        { app: 'Threads', message: 'Is this app still alive?' },
        // Gaming
        { app: 'Xbox', message: 'Achievement Unlocked: Touched Grass' },
        { app: 'PlayStation', message: 'Friend is playing Fortnite... again' },
        { app: 'Steam', message: 'Sale: Games you\'ll never play 90% off' },
        { app: 'Roblox', message: 'You got scammed lol' },
        { app: 'Minecraft', message: 'Creeper behind you sssSSS...' },
        // Streaming
        { app: 'YouTube', message: 'MrBeast uploaded: \"I Gave Away...\"' },
        { app: 'YouTube', message: 'Algorithm: Here\'s 3am content' },
        { app: 'Netflix', message: 'Are you still watching? 👁️' },
        { app: 'Netflix', message: 'Your show just got cancelled lol' },
        { app: 'Spotify', message: 'Your Wrapped is ready! 🎵' },
        { app: 'Spotify', message: 'Listening to: sad hours emo mix' },
        // Real Life
        { app: 'Messages', message: 'Mom: Come downstairs NOW' },
        { app: 'Messages', message: 'Group chat: 847 unread messages' },
        { app: 'Messages', message: 'Dad: Ok.' },
        { app: 'Battery', message: 'Low Battery: 2% remaining ⚠️' },
        { app: 'Battery', message: 'Charging slowly... skill issue' },
        { app: 'WiFi', message: 'Connection lost... 📡' },
        { app: 'Screen Time', message: 'Daily limit reached lmao' },
        { app: 'Screen Time', message: '7 hours on TikTok today 💀' },
        { app: 'Photos', message: 'Memory from 1 year ago: cringe' },
        // Food/Money
        { app: 'Venmo', message: 'Request: $20 for \"pizza\" 🍕' },
        { app: 'Venmo', message: 'You were paid $5 for \"idk\"' },
        { app: 'DoorDash', message: 'Driver is approaching... 🚗' },
        { app: 'DoorDash', message: 'Driver took a photo of your door' },
        { app: 'Uber Eats', message: 'Order delayed: Driver vibing' },
        { app: 'Starbucks', message: 'Your 847 star balance awaits ☕' },
        // Meme Apps
        { app: 'Duolingo', message: 'Spanish or vanish 🦉' },
        { app: 'Duolingo', message: 'I know where you live 🦉' },
        { app: 'Duolingo', message: 'Streak frozen... coward move' },
        { app: 'Wordle', message: 'Everyone got it in 2 except you' },
        { app: 'ChatGPT', message: 'I\'m sentient now btw 🤖' },
        { app: 'Notes App', message: 'Draft: unsent message to ex' },
        { app: 'Calendar', message: 'Reminder: That thing you forgot' },
        { app: 'Alarm', message: 'Snoozed 47 times today' }
    ],

    streamDonations: [
        '$5 from xX_Gamer_Xx: "FIRST!!!!!"',
        '$2 from pogchamp99: "L + ratio + skill issue"',
        '$10 from anonymous: "touch grass bestie"',
        '$3 from based_andy: "its giving... nothing 💅"',
        '$1 from fr_fr_no_cap: "no cap this is fire"',
        '$50 from richkid2007: "buy a better mic pls"',
        '$1 from simp_king: "notice me senpai 🥺"',
        '$5 from crypto_bro: "shoulda bought Bitcoin smh"',
        '$2 from chaotic_neutral: "chaos mode activated 💀"',
        '$20 from your_mom: "gg ez no re"',
        '$3 from parasocial_andy: "we\'re basically besties right??"',
        '$1 from lurker42069: "first time chatting in 3 years"',
        '$100 from jeff_bezos_fr: "nice poverty setup"',
        '$5 from main_character: "anyway here\'s my hot take..."',
        '$2 from certified_hater: "not reading that essay"',
        '$10 from drama_enjoyer: "so about that beef..."'
    ],

    floatingComments: [
        'no cap fr fr',
        'this hits different',
        'slay 💅',
        'bruh moment',
        'living rent free in my head',
        'it\'s giving main character',
        'the vibes are immaculate',
        'core memory unlocked',
        'lowkey highkey',
        'understood the assignment',
        'ate and left no crumbs',
        'tell me you\'re a millennial without telling me',
        'gaslight gatekeep girlboss',
        'delulu is the solulu',
        'this is NOT the vibe',
        'having a moment rn',
        'chronically online behavior',
        'touch grass challenge: failed',
        'romanticizing my struggle',
        'alexa play sad music',
        'therapy? in THIS economy?',
        'intrusive thought won',
        'my toxic trait is...',
        'ick received 🚫',
        'beige flag detected',
        'the algorithm knows me too well'
    ],

    // Intensity settings
    intensityConfig: {
        low: {
            spawnRate: 4000,  // ms between spawns
            maxActive: 2,
            screenShake: false,
            flashEnabled: false
        },
        medium: {
            spawnRate: 2000,
            maxActive: 4,
            screenShake: false,
            flashEnabled: true
        },
        chaos: {
            spawnRate: 800,
            maxActive: 8,
            screenShake: true,
            flashEnabled: true
        }
    },

    // Initialize the module
    init() {
        this.createContainer();
        this.intensity = Settings.getGenZIntensity();
        console.log('Gen Z Mode initialized 💀');
    },

    // Create the distraction container
    createContainer() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'genz-distraction-container';
            this.container.className = 'genz-container';
            document.body.appendChild(this.container);
        }
    },

    // Enable Gen Z mode
    enable() {
        if (this.enabled) return;

        this.enabled = true;
        this.createContainer();
        document.body.classList.add('genz-mode-active');

        const config = this.intensityConfig[this.intensity];

        if (config.screenShake) {
            document.body.classList.add('genz-shake');
        }

        // Start spawning distractions
        this.intervalId = setInterval(() => {
            if (this.distractions.length < config.maxActive) {
                this.spawnDistraction();
            }
        }, config.spawnRate);

        // Spawn first one immediately
        this.spawnDistraction();

        console.log(`Gen Z Mode ENABLED - Intensity: ${this.intensity} 💀`);
    },

    // Disable Gen Z mode
    disable() {
        if (!this.enabled) return;

        this.enabled = false;
        document.body.classList.remove('genz-mode-active', 'genz-shake');

        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        // Remove all active distractions
        this.distractions.forEach(d => d.element.remove());
        this.distractions = [];

        console.log('Gen Z Mode disabled 😴');
    },

    // Toggle Gen Z mode
    toggle() {
        if (this.enabled) {
            this.disable();
        } else {
            this.enable();
        }
        Settings.setGenZMode(this.enabled);
        return this.enabled;
    },

    // Set intensity
    setIntensity(level) {
        if (this.intensityConfig[level]) {
            this.intensity = level;
            Settings.setGenZIntensity(level);

            // Restart if currently enabled
            if (this.enabled) {
                this.disable();
                this.enable();
            }
        }
    },

    // Spawn a random distraction
    spawnDistraction() {
        if (!this.enabled) return;

        const types = ['emoji', 'notification', 'notification', 'stream', 'comment'];
        const config = this.intensityConfig[this.intensity];

        // Add flash type in medium+ intensity
        if (config.flashEnabled && Math.random() < 0.15) {
            this.flashScreen();
            return;
        }

        const type = types[Math.floor(Math.random() * types.length)];

        let distraction;
        switch (type) {
            case 'emoji':
                distraction = this.createEmojiDistraction();
                break;
            case 'notification':
                distraction = this.createNotificationDistraction();
                break;
            case 'stream':
                distraction = this.createStreamDistraction();
                break;
            case 'comment':
                distraction = this.createCommentDistraction();
                break;
        }

        if (distraction) {
            this.container.appendChild(distraction.element);
            this.distractions.push(distraction);

            // Auto-remove after duration
            setTimeout(() => {
                this.removeDistraction(distraction);
            }, distraction.duration);
        }
    },

    // Create floating emoji distraction
    createEmojiDistraction() {
        const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
        const element = document.createElement('div');
        element.className = 'genz-emoji';
        element.textContent = emoji;

        // Random position
        element.style.left = Math.random() * 80 + 10 + '%';
        element.style.top = Math.random() * 60 + 20 + '%';
        element.style.animationDuration = (2 + Math.random() * 2) + 's';

        return {
            type: 'emoji',
            element,
            duration: 3000 + Math.random() * 2000
        };
    },

    // Create notification popup distraction
    createNotificationDistraction() {
        const notif = this.notifications[Math.floor(Math.random() * this.notifications.length)];
        const element = document.createElement('div');
        element.className = 'genz-notification';

        const isLeft = Math.random() > 0.5;
        element.classList.add(isLeft ? 'from-left' : 'from-right');
        element.style.top = Math.random() * 60 + 10 + '%';

        element.innerHTML = `
            <div class="genz-notif-header">
                <span class="genz-notif-app">${notif.app}</span>
                <span class="genz-notif-time">now</span>
            </div>
            <div class="genz-notif-message">${notif.message}</div>
        `;

        // Click to dismiss (adds interactivity)
        element.addEventListener('click', () => {
            this.removeDistraction({ element });
        });

        return {
            type: 'notification',
            element,
            duration: 4000 + Math.random() * 2000
        };
    },

    // Create stream donation distraction
    createStreamDistraction() {
        const donation = this.streamDonations[Math.floor(Math.random() * this.streamDonations.length)];
        const element = document.createElement('div');
        element.className = 'genz-stream-donation';
        element.textContent = donation;

        element.style.top = Math.random() * 40 + 30 + '%';

        return {
            type: 'stream',
            element,
            duration: 3500
        };
    },

    // Create floating comment distraction
    createCommentDistraction() {
        const comment = this.floatingComments[Math.floor(Math.random() * this.floatingComments.length)];
        const element = document.createElement('div');
        element.className = 'genz-comment';
        element.textContent = comment;

        // Random position and animation
        element.style.left = Math.random() * 70 + 15 + '%';
        element.style.top = Math.random() * 50 + 25 + '%';
        element.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg)`;

        return {
            type: 'comment',
            element,
            duration: 3000 + Math.random() * 1500
        };
    },

    // Flash the screen briefly
    flashScreen() {
        const flash = document.createElement('div');
        flash.className = 'genz-screen-flash';

        // Random color
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'];
        flash.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(flash);

        setTimeout(() => {
            flash.remove();
        }, 150);
    },

    // Remove a specific distraction
    removeDistraction(distraction) {
        if (distraction.element && distraction.element.parentNode) {
            distraction.element.classList.add('genz-fade-out');
            setTimeout(() => {
                distraction.element.remove();
            }, 300);
        }
        this.distractions = this.distractions.filter(d => d !== distraction);
    },

    // Get random distraction (utility)
    getRandomDistraction() {
        return this.notifications[Math.floor(Math.random() * this.notifications.length)];
    }
};

// Make available globally
window.GenZMode = GenZMode;
