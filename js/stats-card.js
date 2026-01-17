/**
 * Stats Card Generator
 * Creates shareable PNG images of user statistics
 */

const StatsCard = {
    canvas: null,
    ctx: null,
    width: 1200,
    height: 630,

    // Colors matching the app theme
    colors: {
        bgGradientStart: '#0A0612',
        bgGradientEnd: '#1E1432',
        primary: '#8B5CF6',
        primaryLight: '#A78BFA',
        primaryGlow: 'rgba(139, 92, 246, 0.4)',
        textPrimary: '#FFFFFF',
        textSecondary: '#A8A3B8',
        textMuted: '#6B6680',
        accent: '#F97316',
        success: '#22C55E',
        cardBg: 'rgba(30, 20, 50, 0.8)'
    },

    // Initialize canvas
    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
    },

    // Generate the stats card
    async generateCard(stats) {
        if (!this.canvas) this.init();

        const ctx = this.ctx;
        const w = this.width;
        const h = this.height;

        // Clear canvas
        ctx.clearRect(0, 0, w, h);

        // Draw background gradient
        const bgGradient = ctx.createLinearGradient(0, 0, w, h);
        bgGradient.addColorStop(0, this.colors.bgGradientStart);
        bgGradient.addColorStop(1, this.colors.bgGradientEnd);
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, w, h);

        // Add subtle pattern/glow
        this.drawBackgroundGlow(ctx, w, h);

        // Draw decorative border
        this.drawBorder(ctx, w, h);

        // Draw header with logo
        this.drawHeader(ctx, w);

        // Draw main stats
        this.drawStats(ctx, stats, w, h);

        // Draw footer
        this.drawFooter(ctx, w, h);

        return this.canvas;
    },

    // Draw background glow effects
    drawBackgroundGlow(ctx, w, h) {
        // Top left glow
        const glow1 = ctx.createRadialGradient(0, 0, 0, 0, 0, 400);
        glow1.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
        glow1.addColorStop(1, 'transparent');
        ctx.fillStyle = glow1;
        ctx.fillRect(0, 0, 500, 400);

        // Bottom right glow
        const glow2 = ctx.createRadialGradient(w, h, 0, w, h, 500);
        glow2.addColorStop(0, 'rgba(107, 70, 193, 0.1)');
        glow2.addColorStop(1, 'transparent');
        ctx.fillStyle = glow2;
        ctx.fillRect(w - 600, h - 500, 600, 500);
    },

    // Draw decorative border
    drawBorder(ctx, w, h) {
        const borderWidth = 3;
        const borderRadius = 20;

        ctx.strokeStyle = this.colors.primary;
        ctx.lineWidth = borderWidth;
        ctx.beginPath();
        ctx.roundRect(borderWidth, borderWidth, w - borderWidth * 2, h - borderWidth * 2, borderRadius);
        ctx.stroke();

        // Inner glow effect
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.roundRect(10, 10, w - 20, h - 20, borderRadius);
        ctx.stroke();
    },

    // Draw header section
    drawHeader(ctx, w) {
        const headerY = 60;

        // Logo emoji
        ctx.font = '48px Arial';
        ctx.fillText('📖', 50, headerY + 10);

        // Logo text
        ctx.font = 'bold 42px Inter, Arial, sans-serif';
        ctx.fillStyle = this.colors.textPrimary;
        ctx.fillText('Speed', 115, headerY);

        ctx.fillStyle = this.colors.primary;
        ctx.fillText('Reader', 235, headerY);

        // Subtitle
        ctx.font = '20px Inter, Arial, sans-serif';
        ctx.fillStyle = this.colors.textSecondary;
        ctx.fillText('Reading Progress Report', 115, headerY + 35);

        // Date
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '18px Inter, Arial, sans-serif';
        ctx.fillStyle = this.colors.textMuted;
        ctx.textAlign = 'right';
        ctx.fillText(date, w - 50, headerY);
        ctx.textAlign = 'left';
    },

    // Draw main stats
    drawStats(ctx, stats, w, h) {
        const startY = 160;
        const cardWidth = 250;
        const cardHeight = 180;
        const cardGap = 30;
        const startX = (w - (cardWidth * 4 + cardGap * 3)) / 2;

        const statCards = [
            {
                icon: '⚡',
                value: stats.averageWPM || 0,
                label: 'Average WPM',
                color: this.colors.primary
            },
            {
                icon: '🏆',
                value: stats.bestWPM || 0,
                label: 'Best WPM',
                color: this.colors.accent
            },
            {
                icon: '🎯',
                value: (stats.averageComprehension || 0) + '%',
                label: 'Comprehension',
                color: this.colors.success
            },
            {
                icon: '📚',
                value: stats.totalSessions || 0,
                label: 'Sessions',
                color: this.colors.primaryLight
            }
        ];

        statCards.forEach((stat, i) => {
            const x = startX + i * (cardWidth + cardGap);
            this.drawStatCard(ctx, x, startY, cardWidth, cardHeight, stat);
        });

        // Second row - additional stats
        const row2Y = startY + cardHeight + 40;
        const smallCardWidth = 180;
        const smallCardHeight = 120;
        const row2StartX = (w - (smallCardWidth * 4 + cardGap * 3)) / 2;

        const additionalStats = [
            {
                icon: '📖',
                value: this.formatNumber(stats.totalWordsRead || 0),
                label: 'Words Read',
                color: this.colors.textSecondary
            },
            {
                icon: '🔥',
                value: stats.streak || 0,
                label: 'Day Streak',
                color: '#FF6B6B'
            },
            {
                icon: '⏱️',
                value: this.formatTime(stats.totalReadingTime || 0),
                label: 'Total Time',
                color: '#4ECDC4'
            },
            {
                icon: '📅',
                value: stats.sessionsThisWeek || 0,
                label: 'This Week',
                color: '#FFE66D'
            }
        ];

        additionalStats.forEach((stat, i) => {
            const x = row2StartX + i * (smallCardWidth + cardGap);
            this.drawStatCard(ctx, x, row2Y, smallCardWidth, smallCardHeight, stat, true);
        });
    },

    // Draw individual stat card
    drawStatCard(ctx, x, y, width, height, stat, small = false) {
        // Card background
        ctx.fillStyle = this.colors.cardBg;
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, 16);
        ctx.fill();

        // Card border
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        const centerX = x + width / 2;

        if (small) {
            // Small card layout
            ctx.font = '28px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(stat.icon, centerX, y + 35);

            ctx.font = 'bold 32px Inter, Arial, sans-serif';
            ctx.fillStyle = stat.color;
            ctx.fillText(String(stat.value), centerX, y + 75);

            ctx.font = '14px Inter, Arial, sans-serif';
            ctx.fillStyle = this.colors.textMuted;
            ctx.fillText(stat.label, centerX, y + 100);
        } else {
            // Large card layout
            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(stat.icon, centerX, y + 50);

            ctx.font = 'bold 48px Inter, Arial, sans-serif';
            ctx.fillStyle = stat.color;
            ctx.fillText(String(stat.value), centerX, y + 110);

            ctx.font = '18px Inter, Arial, sans-serif';
            ctx.fillStyle = this.colors.textMuted;
            ctx.fillText(stat.label, centerX, y + 145);
        }

        ctx.textAlign = 'left';
    },

    // Draw footer
    drawFooter(ctx, w, h) {
        const footerY = h - 50;

        // CTA
        ctx.font = '18px Inter, Arial, sans-serif';
        ctx.fillStyle = this.colors.textSecondary;
        ctx.textAlign = 'center';
        ctx.fillText('Train your reading speed at:', w / 2, footerY - 20);

        ctx.font = 'bold 22px Inter, Arial, sans-serif';
        ctx.fillStyle = this.colors.primary;
        ctx.fillText('bz8768.github.io/reading-speed-tester', w / 2, footerY + 10);

        ctx.textAlign = 'left';
    },

    // Format large numbers
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
        if (!seconds || seconds === 0) return '0m';

        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);

        if (hours > 0) {
            return `${hours}h ${mins}m`;
        }
        return `${mins}m`;
    },

    // Download the card as PNG
    downloadCard(filename = 'speedreader-stats.png') {
        if (!this.canvas) return;

        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL('image/png');
        link.click();
    },

    // Get data URL for preview
    getDataURL() {
        if (!this.canvas) return null;
        return this.canvas.toDataURL('image/png');
    },

    // Show preview modal
    showPreview(stats) {
        this.generateCard(stats).then(() => {
            const modal = document.getElementById('stats-card-modal');
            const preview = document.getElementById('stats-card-preview');

            if (modal && preview) {
                preview.src = this.getDataURL();
                modal.classList.add('active');
            }
        });
    },

    // Hide preview modal
    hidePreview() {
        const modal = document.getElementById('stats-card-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
};

// Make available globally
window.StatsCard = StatsCard;
