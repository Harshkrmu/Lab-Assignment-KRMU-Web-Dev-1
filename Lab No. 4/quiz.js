// --------------------------------------
// QUIZ QUESTIONS ARRAY
// --------------------------------------
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Who is known as the father of computers?", answer: "charles babbage" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "What is the largest mammal?", answer: "blue whale" }
];


// --------------------------------------
// FUNCTION TO RUN QUIZ
// --------------------------------------
function runQuiz() {
    let score = 0; // initialize score

    // Loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // If user cancels quiz
        if (userAnswer === null) {
            alert("You cancelled the quiz.");
            return;
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            alert("✅ Correct!");
            score++;
        } else {
            alert("❌ Wrong! Correct answer is: " + quizQuestions[i].answer);
        }
    }

    // Final score display
    alert("🎉 Quiz Completed!\nYour Final Score: " + score + "/" + quizQuestions.length);
}


// --------------------------------------
// START THE QUIZ
// --------------------------------------
runQuiz();
