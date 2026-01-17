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
    emojis: ['💀', '🔥', '😂', '💯', '✨', '😭', '🤣', '💅', '🙄', '👀', '🥵', '😤', '🤡', '💔', '🫠', '🗿'],

    notifications: [
        { app: 'TikTok', message: 'Your video is going viral! 🔥' },
        { app: 'Instagram', message: 'Your crush liked your photo 👀' },
        { app: 'Snapchat', message: '🔥 Streak about to expire!' },
        { app: 'Discord', message: '@everyone NEW MEME DROPPED' },
        { app: 'Twitter', message: 'Your tweet got ratio\'d 💀' },
        { app: 'YouTube', message: 'MrBeast uploaded: "I Gave Away..."' },
        { app: 'Messages', message: 'Mom: Come downstairs NOW' },
        { app: 'Battery', message: 'Low Battery: 2% remaining ⚠️' },
        { app: 'WiFi', message: 'Connection lost... 📡' },
        { app: 'Netflix', message: 'Are you still watching? 👁️' },
        { app: 'Spotify', message: 'Your Wrapped is ready! 🎵' },
        { app: 'Venmo', message: 'Request: $20 for "pizza" 🍕' },
        { app: 'DoorDash', message: 'Driver is approaching... 🚗' },
        { app: 'BeReal', message: '⚠️ Time to BeReal! 2 min left' },
        { app: 'Duolingo', message: 'Spanish or vanish 🦉' }
    ],

    streamDonations: [
        '$5 from xX_Gamer_Xx: "FIRST!!!!!"',
        '$2 from pogchamp99: "L + ratio + skill issue"',
        '$10 from anonymous: "touch grass bestie"',
        '$3 from based_andy: "its giving... nothing"',
        '$1 from fr_fr_no_cap: "no cap this is fire"',
        '$50 from richkid2007: "buy a better mic pls"'
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

        const types = ['emoji', 'notification', 'notification', 'stream'];
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
