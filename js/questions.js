/**
 * Questions Module - Quiz handling and scoring
 */

const Questions = {
    currentQuestions: [],
    currentIndex: 0,
    answers: [],
    score: 0,

    // Callbacks
    onQuestionChange: null,
    onQuizComplete: null,

    // Initialize quiz with passage questions
    init(passageId, questionCount = 20) {
        this.currentQuestions = PASSAGES_DB.getQuestionsForPassage(passageId, questionCount);
        this.currentIndex = 0;
        this.answers = [];
        this.score = 0;

        // Shuffle MC options for each question
        this.currentQuestions.forEach(q => {
            if (q.type === 'multiple_choice') {
                q.shuffledOptions = this.shuffleOptions(q.options, q.answer);
            }
        });

        return this.currentQuestions.length;
    },

    // Shuffle options while tracking correct answer
    shuffleOptions(options, correctIndex) {
        const correctAnswer = options[correctIndex];
        const shuffled = [...options];

        // Fisher-Yates shuffle
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return {
            options: shuffled,
            correctIndex: shuffled.indexOf(correctAnswer)
        };
    },

    // Get current question
    getCurrentQuestion() {
        if (this.currentIndex >= this.currentQuestions.length) {
            return null;
        }

        const q = this.currentQuestions[this.currentIndex];

        if (q.type === 'yes_no') {
            return {
                ...q,
                displayOptions: ['Yes', 'No'],
                correctDisplayIndex: q.answer ? 0 : 1
            };
        } else {
            return {
                ...q,
                displayOptions: q.shuffledOptions.options,
                correctDisplayIndex: q.shuffledOptions.correctIndex
            };
        }
    },

    // Submit answer
    submitAnswer(selectedIndex) {
        const question = this.getCurrentQuestion();
        if (!question) return null;

        const isCorrect = selectedIndex === question.correctDisplayIndex;

        const answerRecord = {
            questionId: question.id,
            question: question.question,
            selectedIndex,
            selectedAnswer: question.displayOptions[selectedIndex],
            correctIndex: question.correctDisplayIndex,
            correctAnswer: question.displayOptions[question.correctDisplayIndex],
            isCorrect,
            explanation: question.explanation,
            type: question.type
        };

        this.answers.push(answerRecord);

        if (isCorrect) {
            this.score++;
        }

        return answerRecord;
    },

    // Move to next question
    nextQuestion() {
        this.currentIndex++;

        if (this.currentIndex >= this.currentQuestions.length) {
            this.complete();
            return null;
        }

        const question = this.getCurrentQuestion();
        if (this.onQuestionChange) {
            this.onQuestionChange(question, this.currentIndex, this.currentQuestions.length);
        }

        return question;
    },

    // Complete quiz
    complete() {
        const results = {
            score: this.score,
            total: this.currentQuestions.length,
            percentage: Math.round((this.score / this.currentQuestions.length) * 100),
            answers: this.answers
        };

        if (this.onQuizComplete) {
            this.onQuizComplete(results);
        }

        return results;
    },

    // Get progress
    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.currentQuestions.length,
            score: this.score,
            percentage: Math.round(((this.currentIndex + 1) / this.currentQuestions.length) * 100)
        };
    },

    // Get results summary
    getResults() {
        return {
            score: this.score,
            total: this.currentQuestions.length,
            percentage: Math.round((this.score / this.currentQuestions.length) * 100),
            answers: this.answers,
            yesNoScore: this.answers.filter(a => a.type === 'yes_no' && a.isCorrect).length,
            yesNoTotal: this.answers.filter(a => a.type === 'yes_no').length,
            mcScore: this.answers.filter(a => a.type === 'multiple_choice' && a.isCorrect).length,
            mcTotal: this.answers.filter(a => a.type === 'multiple_choice').length
        };
    },

    // Check if quiz is complete
    isComplete() {
        return this.currentIndex >= this.currentQuestions.length;
    },

    // Reset quiz
    reset() {
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.answers = [];
        this.score = 0;
    }
};

// Make available globally
window.Questions = Questions;
