# SpeedReader - Reading Speed Tester

A premium reading speed testing application with comprehension tracking. Train your reading speed while maintaining comprehension through curated passages and targeted questions.

![SpeedReader Preview](https://img.shields.io/badge/Theme-Royal%20Purple-7C3AED?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 📖 Two Reading Modes
- **RSVP Mode** - Rapid Serial Visual Presentation. One word at a time with focus letter highlighting for maximum reading speed
- **Scroll Mode** - Full paragraph display with word-by-word highlighting. Keeps context visible while you read

### 📊 Comprehensive Statistics
- Words Per Minute (WPM) tracking
- Comprehension accuracy percentage
- Reading history with trend charts
- Day streak tracking
- Total words read counter

### ❓ Comprehension Testing
- Each passage has dedicated questions about its content
- Mix of Yes/No and Multiple Choice questions
- Instant feedback with explanations
- Questions tied to what you just read (no guessing!)

### 🎨 Modern Design
- Royal purple dark theme
- Glassmorphism effects
- Smooth animations
- Fully responsive for mobile and desktop

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/bz8768/reading-speed-tester.git
cd reading-speed-tester
```

2. Start a local server:
```bash
npx serve .
```

3. Open `http://localhost:3000` in your browser

### Live Demo
Visit [https://bz8768.github.io/reading-speed-tester/](https://bz8768.github.io/reading-speed-tester/)

## 📚 Passage Library

Currently includes 10 passages across 5 categories:

| Category | Passages | Questions |
|----------|----------|-----------|
| Science | 3 | 24 |
| History | 3 | 24 |
| Technology | 2 | 16 |
| Nature | 2 | 16 |
| Literature | 2 | 16 |

### Adding New Passages

Add new passages to `data/passages.js` following this structure:

```javascript
{
    id: "unique_id",
    category: "category_name",
    title: "Passage Title",
    wordCount: 250,
    difficulty: "easy|medium|hard",
    text: `Your passage text here...`,
    questions: [
        {
            id: "unique_q_id",
            type: "yes_no",
            question: "Is this a yes/no question?",
            answer: true,
            explanation: "Why this is correct"
        },
        {
            id: "unique_mc_id",
            type: "multiple_choice",
            question: "What is the answer?",
            options: ["A", "B", "C", "D"],
            answer: 0, // Index of correct option
            explanation: "Why this is correct"
        }
    ]
}
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks, modular architecture

### Project Structure

```
reading-speed-tester/
├── index.html              # Main HTML file
├── css/
│   ├── design-system.css   # Theme variables & utilities
│   ├── components.css      # Reusable component styles
│   └── main.css            # Page-specific styles
├── js/
│   ├── app.js              # Main application controller
│   ├── reader.js           # RSVP & Scroll reading engines
│   ├── questions.js        # Quiz logic and scoring
│   ├── stats.js            # Statistics and localStorage
│   └── ui.js               # DOM manipulation & updates
└── data/
    └── passages.js         # Passage database with questions
```

## ⌨️ Keyboard Shortcuts

While reading:
- `Space` - Play/Pause
- `←` Arrow Left - Decrease speed by 25 WPM
- `→` Arrow Right - Increase speed by 25 WPM
- `Escape` - Exit reading session

## 📱 Responsive Design

Optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Add more passages** - The more content, the better!
2. **Improve questions** - Make them more challenging or add more variety
3. **Bug fixes** - Found an issue? Submit a PR!
4. **New features** - Ideas for improvements are always welcome

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Credits

Inspired by [Focus Reader](https://mstrawberryman-ui.github.io/focus-reader-/) and designed with aesthetics inspired by [Artin Education](https://artineducation.com.au).

---

Made with 💜 by Bob Zhu
