/**
 * App Module - Main application controller
 */

const App = {
    // Current state
    currentPassage: null,
    readingStats: null,
    selectedMode: 'rsvp',

    // Initialize application
    init() {
        console.log('SpeedReader initializing...');

        // Initialize Settings (must be first to apply saved preferences)
        Settings.init();

        // Initialize UI
        UI.init();

        // Initialize Gen Z Mode
        GenZMode.init();

        // Initialize Stats Card
        StatsCard.init();

        // Load initial data
        this.loadInitialData();

        // Setup event listeners
        this.setupEventListeners();

        // Set font selector to current value
        const fontSelect = document.getElementById('font-select');
        if (fontSelect) {
            fontSelect.value = Settings.getFont();
        }

        // Show home view
        UI.showView('home');

        console.log('SpeedReader ready!');
    },

    // Load initial data
    loadInitialData() {
        const stats = Stats.getSummary();
        const passages = PASSAGES_DB.getAllPassages();
        const recentSessions = Stats.getRecentSessions(5);

        // Update header
        UI.updateHeaderStats(stats);

        // Update hero
        UI.updateHeroStats(passages.length, stats);

        // Render recent activity
        UI.renderRecentActivity(recentSessions, (id) => this.selectPassage(id));

        // Render library
        UI.renderPassageGrid(passages, (id) => this.selectPassage(id));
    },

    // Setup event listeners
    setupEventListeners() {
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                if (view === 'stats') {
                    this.loadStatsView();
                } else if (view === 'library') {
                    UI.renderPassageGrid(PASSAGES_DB.getAllPassages(), (id) => this.selectPassage(id));
                }
                UI.showView(view);
            });
        });

        // Hero buttons
        const startBtn = document.getElementById('start-reading-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                UI.showView('library');
                UI.renderPassageGrid(PASSAGES_DB.getAllPassages(), (id) => this.selectPassage(id));
            });
        }

        const libraryBtn = document.getElementById('view-library-btn');
        if (libraryBtn) {
            libraryBtn.addEventListener('click', () => {
                UI.showView('library');
                UI.renderPassageGrid(PASSAGES_DB.getAllPassages(), (id) => this.selectPassage(id));
            });
        }

        // Mode cards
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectedMode = card.dataset.mode;
                UI.showView('library');
                UI.renderPassageGrid(PASSAGES_DB.getAllPassages(), (id) => this.selectPassage(id));
            });
        });

        // Library filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.dataset.category;
                const passages = PASSAGES_DB.getPassagesByCategory(category);
                UI.renderPassageGrid(passages, (id) => this.selectPassage(id));
            });
        });

        // Modal
        const closeModal = document.getElementById('close-passage-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => UI.hidePassageModal());
        }

        const cancelBtn = document.getElementById('cancel-passage');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => UI.hidePassageModal());
        }

        const confirmBtn = document.getElementById('confirm-passage');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => this.startReading());
        }

        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => UI.hidePassageModal());
        }

        // Reading controls
        const exitBtn = document.getElementById('exit-reading');
        if (exitBtn) {
            exitBtn.addEventListener('click', () => this.exitReading());
        }

        const playPauseBtn = document.getElementById('btn-play-pause');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => this.toggleReading());
        }

        const slowerBtn = document.getElementById('btn-slower');
        if (slowerBtn) {
            slowerBtn.addEventListener('click', () => this.adjustSpeed(-25));
        }

        const fasterBtn = document.getElementById('btn-faster');
        if (fasterBtn) {
            fasterBtn.addEventListener('click', () => this.adjustSpeed(25));
        }

        const speedSlider = document.getElementById('speed-slider');
        if (speedSlider) {
            speedSlider.addEventListener('input', (e) => {
                Reader.setWPM(parseInt(e.target.value));
                UI.updateWPMDisplay(Reader.wpm);
            });
        }

        // Mode toggle
        document.querySelectorAll('.mode-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.readerMode;
                Reader.setMode(mode);
                UI.setReadingMode(mode);
            });
        });

        // Quiz controls
        const answersContainer = document.getElementById('answers-container');
        if (answersContainer) {
            answersContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.answer-btn');
                if (btn && !btn.disabled) {
                    this.submitAnswer(parseInt(btn.dataset.index));
                }
            });
        }

        const nextQuestionBtn = document.getElementById('next-question-btn');
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        }

        // Results buttons
        const readAgainBtn = document.getElementById('read-again-btn');
        if (readAgainBtn) {
            readAgainBtn.addEventListener('click', () => {
                UI.showView('library');
                UI.renderPassageGrid(PASSAGES_DB.getAllPassages(), (id) => this.selectPassage(id));
            });
        }

        const viewStatsBtn = document.getElementById('view-stats-btn');
        if (viewStatsBtn) {
            viewStatsBtn.addEventListener('click', () => {
                this.loadStatsView();
                UI.showView('stats');
            });
        }

        // Font selector
        const fontSelect = document.getElementById('font-select');
        if (fontSelect) {
            fontSelect.addEventListener('change', (e) => {
                Settings.setFont(e.target.value);
            });
        }

        // Share stats button
        const shareStatsBtn = document.getElementById('share-stats-btn');
        if (shareStatsBtn) {
            shareStatsBtn.addEventListener('click', () => {
                const stats = Stats.getSummary();
                StatsCard.showPreview(stats);
            });
        }

        // Stats card modal controls
        const closeStatsModal = document.getElementById('close-stats-modal');
        const cancelStatsModal = document.getElementById('cancel-stats-modal');
        const downloadStatsCard = document.getElementById('download-stats-card');

        if (closeStatsModal) {
            closeStatsModal.addEventListener('click', () => StatsCard.hidePreview());
        }
        if (cancelStatsModal) {
            cancelStatsModal.addEventListener('click', () => StatsCard.hidePreview());
        }
        if (downloadStatsCard) {
            downloadStatsCard.addEventListener('click', () => {
                StatsCard.downloadCard();
            });
        }

        // Gen Z Mode toggle
        const genzToggle = document.getElementById('genz-toggle');
        if (genzToggle) {
            genzToggle.addEventListener('click', () => {
                const isActive = GenZMode.toggle();
                genzToggle.classList.toggle('active', isActive);
                document.getElementById('genz-controls')?.classList.toggle('active', isActive);
            });
        }

        // Gen Z intensity buttons (supports both old and new classes)
        document.querySelectorAll('.genz-intensity-btn, .genz-int-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.genz-intensity-btn, .genz-int-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                GenZMode.setIntensity(btn.dataset.intensity);
            });
        });

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            // Only in reading view
            if (!UI.elements.readingView?.classList.contains('active')) return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    this.toggleReading();
                    break;
                case 'ArrowLeft':
                    this.adjustSpeed(-25);
                    break;
                case 'ArrowRight':
                    this.adjustSpeed(25);
                    break;
                case 'Escape':
                    this.exitReading();
                    break;
            }
        });
    },

    // Select a passage
    selectPassage(passageId) {
        this.currentPassage = PASSAGES_DB.getPassageById(passageId);
        if (this.currentPassage) {
            UI.showPassageModal(this.currentPassage);
        }
    },

    // Start reading session
    startReading() {
        if (!this.currentPassage) return;

        UI.hidePassageModal();
        UI.showView('reading');

        // Setup title
        const titleEl = document.getElementById('current-passage-title');
        if (titleEl) titleEl.textContent = this.currentPassage.title;

        // Initialize reader
        Reader.init(this.currentPassage.text);
        Reader.setMode(this.selectedMode);
        Reader.setWPM(300);

        // Setup callbacks
        Reader.onWordChange = (wordParts, index) => {
            if (this.selectedMode === 'rsvp') {
                UI.updateRSVPWord(wordParts);
            }
        };

        Reader.onProgress = (progress, remaining) => {
            UI.updateReadingProgress(progress, remaining);
        };

        Reader.onComplete = (stats) => {
            this.readingStats = stats;
            this.startQuiz();
        };

        // Update UI
        UI.setReadingMode(this.selectedMode);
        UI.updateWPMDisplay(Reader.wpm);
        UI.updateReadingProgress(0, this.currentPassage.wordCount);

        // Show initial word
        if (this.selectedMode === 'rsvp') {
            UI.updateRSVPWord({ before: 'Press', focus: ' ', after: 'Play' });
        }
    },

    // Toggle reading play/pause
    toggleReading() {
        const isPlaying = Reader.toggle();
        UI.updatePlayIcon(isPlaying);
    },

    // Adjust reading speed
    adjustSpeed(delta) {
        Reader.setWPM(Reader.wpm + delta);
        UI.updateWPMDisplay(Reader.wpm);
    },

    // Exit reading
    exitReading() {
        Reader.stop();
        UI.showView('home');
        this.loadInitialData();
    },

    // Start quiz
    startQuiz() {
        UI.showView('quiz');

        const questionCount = Questions.init(this.currentPassage.id);

        if (questionCount === 0) {
            // No questions, skip to results
            this.showResults();
            return;
        }

        // Show first question
        const question = Questions.getCurrentQuestion();
        UI.renderQuestion(question, 0, questionCount);
    },

    // Submit quiz answer
    submitAnswer(selectedIndex) {
        const result = Questions.submitAnswer(selectedIndex);
        UI.showAnswerResult(result);
    },

    // Next question
    nextQuestion() {
        const question = Questions.nextQuestion();

        if (!question) {
            // Quiz complete
            this.showResults();
            return;
        }

        UI.renderQuestion(question, Questions.currentIndex, Questions.currentQuestions.length);
    },

    // Show results
    showResults() {
        const quizResults = Questions.getResults();

        // Record session
        const session = Stats.recordSession({
            passageId: this.currentPassage.id,
            passageTitle: this.currentPassage.title,
            wpm: this.readingStats.actualWPM,
            wordsRead: this.readingStats.wordsRead,
            comprehensionScore: quizResults.percentage,
            correctAnswers: quizResults.score,
            totalQuestions: quizResults.total,
            readingTime: this.readingStats.readingTime,
            mode: this.selectedMode
        });

        // Update UI
        UI.renderResults(this.readingStats, quizResults);
        UI.showView('results');

        // Update header stats
        UI.updateHeaderStats(Stats.getSummary());
    },

    // Load stats view
    loadStatsView() {
        const summary = Stats.getSummary();
        const sessions = Stats.getAllSessions();
        UI.updateStatsView(summary, sessions);
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Make available globally
window.App = App;
