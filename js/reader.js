/**
 * Reader Module - RSVP and Scroll reading engines
 */

const Reader = {
    // State
    words: [],
    currentIndex: 0,
    wpm: 300,
    isPlaying: false,
    mode: 'rsvp', // 'rsvp' or 'scroll'
    intervalId: null,
    startTime: null,
    elapsedTime: 0,
    pausedTime: 0,

    // Callbacks
    onWordChange: null,
    onProgress: null,
    onComplete: null,

    // Initialize with text
    init(text) {
        // Split text into words, preserving punctuation
        this.words = text.split(/\s+/).filter(w => w.length > 0);
        this.currentIndex = 0;
        this.isPlaying = false;
        this.startTime = null;
        this.elapsedTime = 0;
        this.pausedTime = 0;
        this.stop();
    },

    // Set reading mode
    setMode(mode) {
        this.mode = mode;
        if (this.mode === 'scroll') {
            this.renderScrollView();
        }
    },

    // Set WPM
    setWPM(wpm) {
        this.wpm = Math.max(100, Math.min(1000, wpm));
        if (this.isPlaying) {
            this.stop();
            this.play();
        }
    },

    // Get current word with focus letter position
    getCurrentWord() {
        if (this.currentIndex >= this.words.length) {
            return { before: '', focus: '', after: '', full: '' };
        }

        const word = this.words[this.currentIndex];
        const focusIndex = this.calculateFocusIndex(word);

        return {
            before: word.substring(0, focusIndex),
            focus: word.charAt(focusIndex),
            after: word.substring(focusIndex + 1),
            full: word
        };
    },

    // Calculate optimal focus letter position (ORP - Optimal Recognition Point)
    calculateFocusIndex(word) {
        // Remove punctuation for length calculation
        const cleanWord = word.replace(/[^\w]/g, '');
        const len = cleanWord.length;

        if (len <= 1) return 0;
        if (len <= 5) return 1;
        if (len <= 9) return 2;
        if (len <= 13) return 3;
        return 4;
    },

    // Calculate delay based on word (pause longer for punctuation)
    calculateDelay() {
        const baseDelay = 60000 / this.wpm;
        const word = this.words[this.currentIndex] || '';

        // Pause longer at sentence endings
        if (/[.!?]$/.test(word)) {
            return baseDelay * 2.5;
        }
        // Pause slightly at commas, colons, semicolons
        if (/[,;:]$/.test(word)) {
            return baseDelay * 1.5;
        }
        // Pause at paragraph breaks (if word ends with newline)
        if (/\n$/.test(word)) {
            return baseDelay * 3;
        }

        return baseDelay;
    },

    // Play reading
    play() {
        if (this.currentIndex >= this.words.length) {
            this.currentIndex = 0;
        }

        this.isPlaying = true;

        if (!this.startTime) {
            this.startTime = Date.now();
        } else {
            // Adjust start time for pauses
            this.startTime = Date.now() - this.elapsedTime;
        }

        this.scheduleNextWord();
    },

    // Schedule next word display
    scheduleNextWord() {
        if (!this.isPlaying) return;

        const delay = this.calculateDelay();

        this.intervalId = setTimeout(() => {
            this.displayCurrentWord();
            this.currentIndex++;

            if (this.currentIndex >= this.words.length) {
                this.complete();
            } else {
                this.scheduleNextWord();
            }
        }, delay);
    },

    // Display current word
    displayCurrentWord() {
        if (this.onWordChange) {
            this.onWordChange(this.getCurrentWord(), this.currentIndex);
        }

        if (this.onProgress) {
            const progress = Math.round((this.currentIndex / this.words.length) * 100);
            this.onProgress(progress, this.words.length - this.currentIndex);
        }

        if (this.mode === 'scroll') {
            this.updateScrollView();
        }
    },

    // Pause reading
    pause() {
        this.isPlaying = false;
        if (this.intervalId) {
            clearTimeout(this.intervalId);
            this.intervalId = null;
        }
        this.elapsedTime = Date.now() - this.startTime;
    },

    // Stop reading
    stop() {
        this.isPlaying = false;
        if (this.intervalId) {
            clearTimeout(this.intervalId);
            this.intervalId = null;
        }
    },

    // Complete reading
    complete() {
        this.stop();
        this.elapsedTime = Date.now() - this.startTime;

        if (this.onComplete) {
            this.onComplete({
                wordsRead: this.words.length,
                readingTime: Math.round(this.elapsedTime / 1000),
                actualWPM: Math.round((this.words.length / this.elapsedTime) * 60000)
            });
        }
    },

    // Jump to word
    jumpTo(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.words.length - 1));
        this.displayCurrentWord();
    },

    // Skip forward
    skipForward(count = 10) {
        this.jumpTo(this.currentIndex + count);
    },

    // Skip backward
    skipBackward(count = 10) {
        this.jumpTo(this.currentIndex - count);
    },

    // Render scroll view (paragraph mode)
    renderScrollView() {
        const container = document.getElementById('scroll-display');
        if (!container) return;

        container.innerHTML = this.words.map((word, i) =>
            `<span class="word" data-index="${i}">${word} </span>`
        ).join('');
    },

    // Update scroll view (highlight current word)
    updateScrollView() {
        const container = document.getElementById('scroll-display');
        if (!container) return;

        const words = container.querySelectorAll('.word');
        words.forEach((el, i) => {
            el.classList.remove('active', 'past');
            if (i === this.currentIndex) {
                el.classList.add('active');
                // Scroll into view
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (i < this.currentIndex) {
                el.classList.add('past');
            }
        });
    },

    // Get reading stats
    getStats() {
        return {
            totalWords: this.words.length,
            currentWord: this.currentIndex,
            progress: Math.round((this.currentIndex / this.words.length) * 100),
            wpm: this.wpm,
            mode: this.mode,
            isPlaying: this.isPlaying,
            elapsedTime: this.startTime ? Date.now() - this.startTime : 0
        };
    },

    // Toggle play/pause
    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
        return this.isPlaying;
    }
};

// Make available globally
window.Reader = Reader;
