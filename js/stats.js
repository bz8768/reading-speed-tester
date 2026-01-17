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
        const enhanced = this.getEnhancedStats();
        return {
            totalSessions: stats.sessions.length,
            totalWordsRead: stats.totalWordsRead,
            averageWPM: stats.averageWPM,
            averageComprehension: stats.averageComprehension,
            bestWPM: stats.bestWPM,
            streak: stats.streak,
            // Enhanced stats
            totalReadingTime: enhanced.totalReadingTime,
            sessionsThisWeek: enhanced.sessionsThisWeek,
            averageSessionLength: enhanced.averageSessionLength,
            genZModeSessions: enhanced.genZModeSessions
        };
    },

    // Get enhanced statistics
    getEnhancedStats() {
        const stats = this.load();
        const sessions = stats.sessions;
        const now = new Date();
        const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);

        // Total reading time (sum of all session reading times)
        const totalReadingTime = sessions.reduce((sum, s) => sum + (s.readingTime || 0), 0);

        // Sessions this week
        const sessionsThisWeek = sessions.filter(s => new Date(s.date) >= weekAgo).length;

        // Average session length
        const averageSessionLength = sessions.length > 0
            ? Math.round(totalReadingTime / sessions.length)
            : 0;

        // Gen Z mode sessions (if tracked)
        const genZModeSessions = sessions.filter(s => s.genZMode).length;

        return {
            totalReadingTime,
            sessionsThisWeek,
            averageSessionLength,
            genZModeSessions
        };
    },

    // Get category performance breakdown
    getCategoryPerformance() {
        const stats = this.load();
        const sessions = stats.sessions;
        const categories = {};

        sessions.forEach(session => {
            // Extract category from passageId (e.g., "sci_001" -> "science")
            const categoryMap = {
                'sci': 'Science',
                'hist': 'History',
                'tech': 'Technology',
                'nat': 'Nature',
                'lit': 'Literature',
                'fic': 'Fiction'
            };

            const prefix = session.passageId?.split('_')[0];
            const category = categoryMap[prefix] || 'Other';

            if (!categories[category]) {
                categories[category] = {
                    sessions: 0,
                    totalWPM: 0,
                    totalComprehension: 0
                };
            }

            categories[category].sessions++;
            categories[category].totalWPM += session.wpm || 0;
            categories[category].totalComprehension += session.comprehensionScore || 0;
        });

        // Calculate averages
        return Object.entries(categories).map(([name, data]) => ({
            name,
            sessions: data.sessions,
            avgWPM: Math.round(data.totalWPM / data.sessions),
            avgComprehension: Math.round(data.totalComprehension / data.sessions)
        })).sort((a, b) => b.sessions - a.sessions);
    },

    // Get question type accuracy (Yes/No vs Multiple Choice)
    getQuestionTypeAccuracy() {
        const stats = this.load();
        const sessions = stats.sessions;

        let yesNoCorrect = 0;
        let yesNoTotal = 0;
        let mcCorrect = 0;
        let mcTotal = 0;

        sessions.forEach(session => {
            if (session.yesNoScore !== undefined) {
                yesNoCorrect += session.yesNoScore;
                yesNoTotal += session.yesNoTotal || 0;
            }
            if (session.mcScore !== undefined) {
                mcCorrect += session.mcScore;
                mcTotal += session.mcTotal || 0;
            }
        });

        return {
            yesNo: {
                correct: yesNoCorrect,
                total: yesNoTotal,
                percentage: yesNoTotal > 0 ? Math.round((yesNoCorrect / yesNoTotal) * 100) : 0
            },
            multipleChoice: {
                correct: mcCorrect,
                total: mcTotal,
                percentage: mcTotal > 0 ? Math.round((mcCorrect / mcTotal) * 100) : 0
            }
        };
    },

    // Get best time of day for reading
    getHourlyPerformance() {
        const stats = this.load();
        const sessions = stats.sessions;
        const hourlyData = {};

        sessions.forEach(session => {
            const hour = new Date(session.date).getHours();
            const timeOfDay = hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';

            if (!hourlyData[timeOfDay]) {
                hourlyData[timeOfDay] = { sessions: 0, totalWPM: 0, totalComp: 0 };
            }

            hourlyData[timeOfDay].sessions++;
            hourlyData[timeOfDay].totalWPM += session.wpm || 0;
            hourlyData[timeOfDay].totalComp += session.comprehensionScore || 0;
        });

        return Object.entries(hourlyData).map(([time, data]) => ({
            time,
            sessions: data.sessions,
            avgWPM: Math.round(data.totalWPM / data.sessions),
            avgComprehension: Math.round(data.totalComp / data.sessions)
        }));
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
