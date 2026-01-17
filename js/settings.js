/**
 * Settings Module - User preferences management
 */

const Settings = {
    STORAGE_KEY: 'speedreader_settings',

    // Default settings
    defaults: {
        font: 'inter',
        theme: 'dark',
        genZMode: false,
        genZIntensity: 'medium'
    },

    // Load settings from localStorage
    load() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                return { ...this.defaults, ...JSON.parse(stored) };
            }
        } catch (e) {
            console.error('Error loading settings:', e);
        }
        return { ...this.defaults };
    },

    // Save settings to localStorage
    save(settings) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
        } catch (e) {
            console.error('Error saving settings:', e);
        }
    },

    // Get a specific setting
    get(key) {
        const settings = this.load();
        return settings[key] !== undefined ? settings[key] : this.defaults[key];
    },

    // Set a specific setting
    set(key, value) {
        const settings = this.load();
        settings[key] = value;
        this.save(settings);
        return value;
    },

    // =========================================
    // Font Management
    // =========================================

    // Available fonts
    fonts: [
        { id: 'inter', name: 'Inter', description: 'Clean & Modern' },
        { id: 'lexend', name: 'Lexend', description: 'Reading Fluency' },
        { id: 'atkinson', name: 'Atkinson Hyperlegible', description: 'Maximum Clarity' },
        { id: 'opendyslexic', name: 'OpenDyslexic', description: 'Dyslexia-Friendly' },
        { id: 'comic', name: 'Comic Neue', description: 'Friendly & Fun' },
        { id: 'serif', name: 'Source Serif', description: 'Classic Book Feel' }
    ],

    // Get current font
    getFont() {
        return this.get('font');
    },

    // Set font and apply to document
    setFont(fontId) {
        const validFont = this.fonts.find(f => f.id === fontId);
        if (validFont) {
            this.set('font', fontId);
            this.applyFont(fontId);
            return true;
        }
        return false;
    },

    // Apply font to document
    applyFont(fontId) {
        document.body.setAttribute('data-font', fontId || this.getFont());
    },

    // Get all available fonts
    getFonts() {
        return this.fonts;
    },

    // =========================================
    // Gen Z Mode Settings
    // =========================================

    // Get Gen Z mode status
    getGenZMode() {
        return this.get('genZMode');
    },

    // Set Gen Z mode
    setGenZMode(enabled) {
        this.set('genZMode', enabled);
        return enabled;
    },

    // Get Gen Z intensity
    getGenZIntensity() {
        return this.get('genZIntensity');
    },

    // Set Gen Z intensity
    setGenZIntensity(intensity) {
        const validIntensities = ['low', 'medium', 'chaos'];
        if (validIntensities.includes(intensity)) {
            this.set('genZIntensity', intensity);
            return intensity;
        }
        return this.getGenZIntensity();
    },

    // =========================================
    // Initialization
    // =========================================

    // Initialize settings on page load
    init() {
        // Apply saved font
        this.applyFont();

        console.log('Settings initialized:', this.load());
    },

    // Reset all settings to defaults
    reset() {
        this.save(this.defaults);
        this.applyFont(this.defaults.font);
    }
};

// Make available globally
window.Settings = Settings;
