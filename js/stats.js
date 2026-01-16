/**
 * Stats Module - Handles all statistics and localStorage persistence
 */

const Stats = {
    STORAGE_KEY: 'speedreader_stats',

    // Default stats structure
    defaultStats: {
        sessions: [],
        totalWordsRead: 0,
        averageWPM: 0,
        averageComprehension: 0,
        bestWPM: 0,
        streak: 0,
        lastSessionDate: null
    },

    // Load stats from localStorage
    load() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                return { ...this.defaultStats, ...JSON.parse(stored) };
            }
        } catch (e) {
            console.error('Error loading stats:', e);
        }
        return { ...this.defaultStats };
    },

    // Save stats to localStorage
    save(stats) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stats));
        } catch (e) {
            console.error('Error saving stats:', e);
        }
    },

    // Record a new session
    recordSession(sessionData) {
        const stats = this.load();

        const session = {
            id: Date.now(),
            date: new Date().toISOString(),
            passageId: sessionData.passageId,
            passageTitle: sessionData.passageTitle,
            wpm: sessionData.wpm,
            wordsRead: sessionData.wordsRead,
            comprehensionScore: sessionData.comprehensionScore,
            correctAnswers: sessionData.correctAnswers,
            totalQuestions: sessionData.totalQuestions,
            readingTime: sessionData.readingTime,
            mode: sessionData.mode
        };

        stats.sessions.unshift(session);

        // Keep only last 100 sessions
        if (stats.sessions.length > 100) {
            stats.sessions = stats.sessions.slice(0, 100);
        }

        // Update totals
        stats.totalWordsRead += session.wordsRead;

        // Recalculate averages
        const validSessions = stats.sessions.filter(s => s.wpm > 0);
        if (validSessions.length > 0) {
            stats.averageWPM = Math.round(
                validSessions.reduce((sum, s) => sum + s.wpm, 0) / validSessions.length
            );
            stats.averageComprehension = Math.round(
                validSessions.reduce((sum, s) => sum + s.comprehensionScore, 0) / validSessions.length
            );
        }

        // Update best WPM
        if (session.wpm > stats.bestWPM) {
            stats.bestWPM = session.wpm;
        }

        // Update streak
        const today = new Date().toDateString();
        const lastDate = stats.lastSessionDate ? new Date(stats.lastSessionDate).toDateString() : null;

        if (lastDate === today) {
            // Same day, streak continues
        } else if (lastDate === new Date(Date.now() - 86400000).toDateString()) {
            // Yesterday, increment streak
            stats.streak++;
        } else if (lastDate !== today) {
            // More than a day gap, reset streak
            stats.streak = 1;
        }
        stats.lastSessionDate = new Date().toISOString();

        this.save(stats);
        return session;
    },

    // Get summary stats
    getSummary() {
        const stats = this.load();
        return {
            totalSessions: stats.sessions.length,
            totalWordsRead: stats.totalWordsRead,
            averageWPM: stats.averageWPM,
            averageComprehension: stats.averageComprehension,
            bestWPM: stats.bestWPM,
            streak: stats.streak
        };
    },

    // Get recent sessions
    getRecentSessions(count = 10) {
        const stats = this.load();
        return stats.sessions.slice(0, count);
    },

    // Get all sessions for charts
    getAllSessions() {
        const stats = this.load();
        return stats.sessions;
    },

    // Format number with commas
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    },

    // Format time in seconds to readable format
    formatTime(seconds) {
        if (seconds < 60) {
            return `${seconds}s`;
        }
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
    },

    // Format date for display
    formatDate(isoString) {
        const date = new Date(isoString);
        const now = new Date();
        const diff = now - date;

        // Less than 24 hours
        if (diff < 86400000) {
            if (diff < 3600000) {
                const mins = Math.floor(diff / 60000);
                return mins <= 1 ? 'Just now' : `${mins} mins ago`;
            }
            const hours = Math.floor(diff / 3600000);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        }

        // Less than 7 days
        if (diff < 604800000) {
            const days = Math.floor(diff / 86400000);
            return days === 1 ? 'Yesterday' : `${days} days ago`;
        }

        // Older
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    },

    // Clear all stats (for testing)
    clear() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// Make available globally
window.Stats = Stats;
