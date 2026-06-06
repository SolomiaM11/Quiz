document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Яка столиця країни, де знаходиться Ейфелева вежа?",
            answers: ["Рим", "Париж", "Берлін", "Лондон"],
            correct: 1
        },
         {
            question: "У якій столиці є Біг-Бен та червоні автобуси?",
            answers: ["Лондон", "Мадрид", "Київ", "Варшава"],
            correct: 0
        },
         {
            question: "Яка столиця США, де стоїть Білий дім?",
            answers: ["Нью-Йорк", "Вашингтон", "Лос-Анджелес", "Чикаго"],
            correct: 1
        },
         {
            question: "У якій столиці можна побачити Колізей?",
            answers: ["Афіни", "Париж", "Рим", "Прага"],
            correct: 2
        },
         {
            question: "Яка столиця України, відома Майданом Незалежності?",
            answers: ["Львів", "Харків", "Одеса", "Київ"],
            correct: 3
        },
         {
            question: "Яка столиця Японії, де дуже популярне аніме?",
            answers: ["Пекін", "Сеул", "Токіо", "Бангкок"],
            correct: 2
        },
         {
            question: "У якій столиці є статуя Свободи неподалік?",
            answers: ["Оттава", "Вашингтон", "Нью-Йорк", "Париж"],
            correct: 2
        },
         {
            question: "Яка столиця Іспанії, де грає футбольний клуб “Реал”?",
            answers: ["Барселона", "Мадрид", "Лісабон", "Рим"],
            correct: 1
        },
         {
            question: "У якій столиці Австралії знаходиться знаменитий оперний театр?",
            answers: ["Канберра", "Сідней", "Мельбурн", "Перт"],
            correct: 1
        },
         {
            question: "Яка столиця країни, де знаходиться піраміда Лувру?",
            answers: ["Париж", "Рим", "Лондон", "Берлін"],
            correct: 0
        },
        
    ];
  
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startScreen = document.querySelector("#start-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    const resultText = document.querySelector("#result-text")
    let interval
    let timer = 15
    function startGame(){
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("show");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
        score = 0
        scoreDisplay.textContent = `Бали: 0`;
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
    resultScreen.classList.remove("show");
    resultScreen.classList.add("hide");

    quizScreen.classList.remove("show");
    quizScreen.classList.add("hide");

    startScreen.classList.remove("hide");
    startScreen.classList.add("show");
}
    restartBtn.onclick = goToStartScreen
    
    function showQuestion(question) {
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            // Завдання 5 - Перевірка відповіді
            button.addEventListener('click', () => checkAnswer(button,i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);

    // Завдання 5 - Перевірка відповіді
    function checkAnswer(button,answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            button.classList.add("correct");
            scoreDisplay.textContent = `Бали:  ${score} `
            

        } else {
            button.classList.add("wrong");

        }
        questionIndex++;
        if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
    } else {
        showResult();
    }
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        }
        else {
            showResult()
        }
    }
    function showResult(){
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
        
    }
   
});
