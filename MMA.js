const correctAnswers = {
    q1: 'b', // Question 1
    q2: 'c', // Question 2
    q3: 'a', // Question 3
    q4: 'e', // Question 4
    q5: 'a', // Question 5
    q6: 'd', // Question 6
    q7: 'c', // Question 7
    q8: 'b', // Question 8
    q9: 'd', // Question 9
    q10: 'a', // Question 10
    q11: 'a', // Question 11       
    q12: 'b', // Question 12
    q13: 'c', // Question 13
    q14: 'd', // Question 14
    q15: 'e', // Question 15
    q16: 'c', // Question 16
    q17: 'a', // Question 17
    q18: 'a', // Question 18
    q19: 'a', // Question 19
    q20: 'a', // Question 20         
};

// Fonction pour vérifier les réponses
function checkAnswers() {
    let score = 0;
    for (const question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }
    alert(`Vous avez obtenu ${score} bonnes réponses sur ${Object.keys(correctAnswers).length} questions.`);
}

// Écouteur d'événement pour le bouton de vérification
document.getElementById('check-answers').addEventListener('click', checkAnswers);

// Fonction pour afficher les réponses
function showAnswers() {
    let answers = "Réponses correctes :\n";
    for (const question in correctAnswers) {
        answers += `Question ${question.substr(1)} : ${correctAnswers[question]}\n`;
    }
    alert(answers);
}

// Écouteur d'événement pour le bouton "Voir les réponses"
document.getElementById('show-answers').addEventListener('click', showAnswers);
