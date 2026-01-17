/**
 * UI Module - DOM manipulation and UI updates
 */

const UI = {
    // DOM element cache
    elements: {},

    // Initialize UI elements
    init() {
        // Cache frequently used elements
        this.elements = {
            // Views
            homeView: document.getElementById('view-home'),
            libraryView: document.getElementById('view-library'),
            statsView: document.getElementById('view-stats'),
            readingView: document.getElementById('view-reading'),
            quizView: document.getElementById('view-quiz'),
            resultsView: document.getElementById('view-results'),

            // Header
            headerAvgWPM: document.getElementById('header-avg-wpm'),
            headerAccuracy: document.getElementById('header-accuracy'),

            // Hero stats
            totalPassages: document.getElementById('total-passages'),
            totalWordsRead: document.getElementById('total-words-read'),
            sessionsCompleted: document.getElementById('sessions-completed'),

            // Reading view
            rsvpContainer: document.getElementById('rsvp-container'),
            scrollContainer: document.getElementById('scroll-container'),
            rsvpWord: document.getElementById('rsvp-word'),
            currentPassageTitle: document.getElementById('current-passage-title'),
            readingProgress: document.getElementById('reading-progress'),
            currentWPM: document.getElementById('current-wpm'),
            wordsRemaining: document.getElementById('words-remaining'),
            speedSlider: document.getElementById('speed-slider'),
            playIcon: document.getElementById('play-icon'),

            // Quiz view
            quizCurrent: document.getElementById('quiz-current'),
            quizTotal: document.getElementById('quiz-total'),
            questionText: document.getElementById('question-text'),
            answersContainer: document.getElementById('answers-container'),
            currentScore: document.getElementById('current-score'),
            nextQuestionBtn: document.getElementById('next-question-btn'),

            // Results view
            resultWPM: document.getElementById('result-wpm'),
            resultAccuracy: document.getElementById('result-accuracy'),
            resultTime: document.getElementById('result-time'),
            resultWords: document.getElementById('result-words'),
            breakdownList: document.getElementById('breakdown-list'),

            // Stats view
            statAvgWPM: document.getElementById('stat-avg-wpm'),
            statAccuracy: document.getElementById('stat-accuracy'),
            statTotalWords: document.getElementById('stat-total-words'),
            statStreak: document.getElementById('stat-streak'),
            sessionHistory: document.getElementById('session-history'),

            // Library
            passageGrid: document.getElementById('passage-grid'),
            recentActivity: document.getElementById('recent-activity'),

            // Modal
            passageModal: document.getElementById('passage-modal'),
            passagePreview: document.getElementById('passage-preview')
        };
    },

    // Show a view (hide others)
    showView(viewName) {
        const views = ['home', 'library', 'stats', 'reading', 'quiz', 'results'];

        // First, remove active from ALL views
        views.forEach(v => {
            const el = this.elements[`${v}View`];
            if (el) {
                el.classList.remove('active');
            }
        });

        // Then add active to the target view
        const targetEl = this.elements[`${viewName}View`];
        if (targetEl) {
            targetEl.classList.add('active');
        }

        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewName);
        });
    },

    // Update header stats
    updateHeaderStats(stats) {
        if (this.elements.headerAvgWPM) {
            this.elements.headerAvgWPM.textContent = stats.averageWPM || '--';
        }
        if (this.elements.headerAccuracy) {
            this.elements.headerAccuracy.textContent = stats.averageComprehension
                ? `${stats.averageComprehension}%`
                : '--';
        }
    },

    // Update hero stats
    updateHeroStats(passageCount, stats) {
        if (this.elements.totalPassages) {
            this.elements.totalPassages.textContent = passageCount;
        }
        if (this.elements.totalWordsRead) {
            this.elements.totalWordsRead.textContent = Stats.formatNumber(stats.totalWordsRead);
        }
        if (this.elements.sessionsCompleted) {
            this.elements.sessionsCompleted.textContent = stats.totalSessions;
        }
    },

    // Render passage grid
    renderPassageGrid(passages, onSelect) {
        if (!this.elements.passageGrid) return;

        if (passages.length === 0) {
            this.elements.passageGrid.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📚</span>
                    <p>No passages found in this category.</p>
                </div>
            `;
            return;
        }

        this.elements.passageGrid.innerHTML = passages.map(p => `
            <div class="passage-card" data-id="${p.id}">
                <span class="passage-card-category">${p.category}</span>
                <h3 class="passage-card-title">${p.title}</h3>
                <div class="passage-card-meta">
                    <span>${p.wordCount} words</span>
                    <span>${p.difficulty}</span>
                    <span>${p.questions.length} questions</span>
                </div>
            </div>
        `).join('');

        // Add click handlers
        this.elements.passageGrid.querySelectorAll('.passage-card').forEach(card => {
            card.addEventListener('click', () => onSelect(card.dataset.id));
        });
    },

    // Render recent activity
    renderRecentActivity(sessions, onSelect) {
        if (!this.elements.recentActivity) return;

        if (sessions.length === 0) {
            this.elements.recentActivity.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📚</span>
                    <p>No reading sessions yet. Start your first one!</p>
                </div>
            `;
            return;
        }

        this.elements.recentActivity.innerHTML = sessions.slice(0, 5).map(s => `
            <div class="history-item" data-id="${s.passageId}">
                <div>
                    <span class="history-item-title">${s.passageTitle}</span>
                    <span class="history-item-date">${Stats.formatDate(s.date)}</span>
                </div>
                <div class="history-item-stats">
                    <span class="history-item-stat"><span>${s.wpm}</span> WPM</span>
                    <span class="history-item-stat"><span>${s.comprehensionScore}%</span> accuracy</span>
                </div>
            </div>
        `).join('');
    },

    // Show passage preview modal
    showPassageModal(passage) {
        if (!this.elements.passageModal || !this.elements.passagePreview) return;

        const excerpt = passage.text.substring(0, 300) + '...';

        this.elements.passagePreview.innerHTML = `
            <div class="passage-preview-header">
                <h3 class="passage-preview-title">${passage.title}</h3>
                <div class="passage-preview-meta">
                    <span>${passage.category}</span>
                    <span>${passage.wordCount} words</span>
                    <span>${passage.difficulty}</span>
                </div>
            </div>
            <p class="passage-preview-excerpt">${excerpt}</p>
        `;

        this.elements.passageModal.classList.add('active');
    },

    // Hide passage modal
    hidePassageModal() {
        if (this.elements.passageModal) {
            this.elements.passageModal.classList.remove('active');
        }
    },

    // Update RSVP word display
    updateRSVPWord(wordParts) {
        if (!this.elements.rsvpWord) return;

        this.elements.rsvpWord.innerHTML = `
            <span class="word-before">${wordParts.before}</span>
            <span class="focus-letter">${wordParts.focus}</span>
            <span class="word-after">${wordParts.after}</span>
        `;
    },

    // Update reading progress
    updateReadingProgress(progress, wordsRemaining) {
        if (this.elements.readingProgress) {
            this.elements.readingProgress.textContent = `${progress}%`;
        }
        if (this.elements.wordsRemaining) {
            this.elements.wordsRemaining.textContent = wordsRemaining;
        }
    },

    // Update WPM display
    updateWPMDisplay(wpm) {
        if (this.elements.currentWPM) {
            this.elements.currentWPM.textContent = wpm;
        }
        if (this.elements.speedSlider) {
            this.elements.speedSlider.value = wpm;
        }
    },

    // Update play/pause icon
    updatePlayIcon(isPlaying) {
        if (this.elements.playIcon) {
            this.elements.playIcon.textContent = isPlaying ? '⏸' : '▶';
        }
    },

    // Set reading mode display
    setReadingMode(mode) {
        if (this.elements.rsvpContainer) {
            this.elements.rsvpContainer.classList.toggle('hidden', mode !== 'rsvp');
        }
        if (this.elements.scrollContainer) {
            this.elements.scrollContainer.classList.toggle('hidden', mode !== 'scroll');
        }

        document.querySelectorAll('.mode-toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.readerMode === mode);
        });
    },

    // Render question
    renderQuestion(question, index, total) {
        if (this.elements.quizCurrent) {
            this.elements.quizCurrent.textContent = index + 1;
        }
        if (this.elements.quizTotal) {
            this.elements.quizTotal.textContent = total;
        }
        if (this.elements.questionText) {
            this.elements.questionText.textContent = question.question;
        }
        if (this.elements.nextQuestionBtn) {
            this.elements.nextQuestionBtn.disabled = true;
        }

        // For yes/no questions, just show the text (no indicator needed)
        // For multiple choice, show A/B/C/D indicators
        if (question.type === 'yes_no') {
            this.elements.answersContainer.innerHTML = question.displayOptions.map((opt, i) => `
                    <button class="answer-btn yes-no-btn" data-index="${i}">
                        <span class="answer-text">${opt}</span>
                    </button>
                `).join('');
        } else {
            const labels = ['A', 'B', 'C', 'D'];
            this.elements.answersContainer.innerHTML = question.displayOptions.map((opt, i) => `
                    <button class="answer-btn" data-index="${i}">
                        <span class="answer-indicator">${labels[i]}</span>
                        <span class="answer-text">${opt}</span>
                    </button>
                `).join('');
        }
    },

    // Show answer result
    showAnswerResult(answerRecord) {
        const buttons = this.elements.answersContainer.querySelectorAll('.answer-btn');

        buttons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === answerRecord.correctIndex) {
                btn.classList.add('correct');
            }
            if (i === answerRecord.selectedIndex && !answerRecord.isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        if (this.elements.currentScore) {
            this.elements.currentScore.textContent = Questions.score;
        }
        if (this.elements.nextQuestionBtn) {
            this.elements.nextQuestionBtn.disabled = false;
            // Change button text on last question
            const isLastQuestion = Questions.currentIndex >= Questions.currentQuestions.length - 1;
            this.elements.nextQuestionBtn.textContent = isLastQuestion ? 'Finish Quiz' : 'Next Question';
        }
    },

    // Render results
    renderResults(readingStats, quizResults) {
        if (this.elements.resultWPM) {
            this.elements.resultWPM.textContent = readingStats.actualWPM;
        }
        if (this.elements.resultAccuracy) {
            this.elements.resultAccuracy.textContent = `${quizResults.percentage}%`;
        }
        if (this.elements.resultTime) {
            this.elements.resultTime.textContent = Stats.formatTime(readingStats.readingTime);
        }
        if (this.elements.resultWords) {
            this.elements.resultWords.textContent = readingStats.wordsRead;
        }

        if (this.elements.breakdownList) {
            this.elements.breakdownList.innerHTML = quizResults.answers.map(a => `
                <div class="breakdown-item">
                    <span class="breakdown-icon">${a.isCorrect ? '✓' : '✗'}</span>
                    <div class="breakdown-content">
                        <p class="breakdown-question">${a.question}</p>
                        <p class="breakdown-answer">
                            ${a.isCorrect
                    ? `Correct: ${a.correctAnswer}`
                    : `Your answer: ${a.selectedAnswer} | Correct: ${a.correctAnswer}`
                }
                        </p>
                    </div>
                </div>
            `).join('');
        }
    },

    // Update stats view
    updateStatsView(summary, sessions) {
        if (this.elements.statAvgWPM) {
            this.elements.statAvgWPM.textContent = summary.averageWPM || '--';
        }
        if (this.elements.statAccuracy) {
            this.elements.statAccuracy.textContent = summary.averageComprehension
                ? `${summary.averageComprehension}%`
                : '--';
        }
        if (this.elements.statTotalWords) {
            this.elements.statTotalWords.textContent = Stats.formatNumber(summary.totalWordsRead);
        }
        if (this.elements.statStreak) {
            this.elements.statStreak.textContent = summary.streak || '0';
        }

        // New enhanced stats
        const statBestWPM = document.getElementById('stat-best-wpm');
        const statTotalSessions = document.getElementById('stat-total-sessions');
        const statTotalTime = document.getElementById('stat-total-time');
        const statWeekSessions = document.getElementById('stat-week-sessions');

        if (statBestWPM) {
            statBestWPM.textContent = summary.bestWPM || '--';
        }
        if (statTotalSessions) {
            statTotalSessions.textContent = summary.totalSessions || '0';
        }
        if (statTotalTime) {
            statTotalTime.textContent = Stats.formatTime(summary.totalReadingTime || 0);
        }
        if (statWeekSessions) {
            statWeekSessions.textContent = summary.sessionsThisWeek || '0';
        }

        // Question type breakdown
        this.updateQuestionTypeBreakdown();

        // Category performance
        this.updateCategoryPerformance();

        if (this.elements.sessionHistory) {
            if (sessions.length === 0) {
                this.elements.sessionHistory.innerHTML = `
                    <div class="empty-state">
                        <span class="empty-icon">📊</span>
                        <p>No sessions recorded yet.</p>
                    </div>
                `;
            } else {
                this.elements.sessionHistory.innerHTML = sessions.map(s => `
                    <div class="history-item">
                        <div>
                            <span class="history-item-title">${s.passageTitle}</span>
                            <span class="history-item-date">${Stats.formatDate(s.date)}</span>
                        </div>
                        <div class="history-item-stats">
                            <span class="history-item-stat"><span>${s.wpm}</span> WPM</span>
                            <span class="history-item-stat"><span>${s.comprehensionScore}%</span></span>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Render simple charts if there are sessions
        this.renderCharts(sessions);
    },

    // Update question type breakdown display
    updateQuestionTypeBreakdown() {
        const accuracy = Stats.getQuestionTypeAccuracy();

        const yesNoAccuracy = document.getElementById('yesno-accuracy');
        const yesNoDetail = document.getElementById('yesno-detail');
        const yesNoBar = document.getElementById('yesno-bar');
        const mcAccuracy = document.getElementById('mc-accuracy');
        const mcDetail = document.getElementById('mc-detail');
        const mcBar = document.getElementById('mc-bar');

        if (yesNoAccuracy) yesNoAccuracy.textContent = `${accuracy.yesNo.percentage}%`;
        if (yesNoDetail) yesNoDetail.textContent = `${accuracy.yesNo.correct}/${accuracy.yesNo.total} correct`;
        if (yesNoBar) yesNoBar.style.width = `${accuracy.yesNo.percentage}%`;

        if (mcAccuracy) mcAccuracy.textContent = `${accuracy.multipleChoice.percentage}%`;
        if (mcDetail) mcDetail.textContent = `${accuracy.multipleChoice.correct}/${accuracy.multipleChoice.total} correct`;
        if (mcBar) mcBar.style.width = `${accuracy.multipleChoice.percentage}%`;
    },

    // Update category performance display
    updateCategoryPerformance() {
        const container = document.getElementById('category-performance');
        if (!container) return;

        const categories = Stats.getCategoryPerformance();

        if (categories.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📊</span>
                    <p>Complete sessions to see category breakdown.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = categories.map(cat => `
            <div class="category-card">
                <div class="category-header">
                    <span class="category-name">${cat.name}</span>
                    <span class="category-sessions">${cat.sessions} session${cat.sessions !== 1 ? 's' : ''}</span>
                </div>
                <div class="category-stats">
                    <div class="category-stat">
                        <span class="category-stat-value">${cat.avgWPM}</span>
                        <span class="category-stat-label">Avg WPM</span>
                    </div>
                    <div class="category-stat">
                        <span class="category-stat-value">${cat.avgComprehension}%</span>
                        <span class="category-stat-label">Accuracy</span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Render simple line charts
    renderCharts(sessions) {
        const wpmChart = document.getElementById('wpm-chart');
        const accuracyChart = document.getElementById('accuracy-chart');

        if (sessions.length < 2) {
            if (wpmChart) wpmChart.innerHTML = '<div class="chart-placeholder">Complete a few sessions to see your progress!</div>';
            if (accuracyChart) accuracyChart.innerHTML = '<div class="chart-placeholder">Complete a few sessions to see your progress!</div>';
            return;
        }

        // Take last 10 sessions in reverse order (oldest first)
        const data = sessions.slice(0, 10).reverse();

        // Create simple SVG charts
        if (wpmChart) {
            wpmChart.innerHTML = this.createLineChart(data.map(s => s.wpm), 'WPM', '#8B5CF6');
        }
        if (accuracyChart) {
            accuracyChart.innerHTML = this.createLineChart(data.map(s => s.comprehensionScore), '%', '#22C55E');
        }
    },

    // Create simple SVG line chart
    createLineChart(values, unit, color) {
        const width = 300;
        const height = 150;
        const padding = 30;

        const max = Math.max(...values);
        const min = Math.min(...values);
        const range = max - min || 1;

        const points = values.map((v, i) => {
            const x = padding + (i / (values.length - 1)) * (width - padding * 2);
            const y = height - padding - ((v - min) / range) * (height - padding * 2);
            return { x, y, value: v };
        });

        const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

        return `
            <svg viewBox="0 0 ${width} ${height}" class="chart-svg">
                <defs>
                    <linearGradient id="gradient-${color.replace('#', '')}" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
                        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
                    </linearGradient>
                </defs>
                <path d="${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z" 
                      fill="url(#gradient-${color.replace('#', '')})" />
                <path d="${pathD}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
                ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}"/>`).join('')}
                <text x="${padding}" y="${height - 5}" class="chart-label">${values[0]}${unit}</text>
                <text x="${width - padding}" y="${height - 5}" class="chart-label" text-anchor="end">${values[values.length - 1]}${unit}</text>
            </svg>
        `;
    }
};

// Make available globally
window.UI = UI;
