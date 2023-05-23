const quizData = [
    {
        question: "Which of the following attributes is used to add link to any element?",
        a: "link",
        b: "href",
        c: "ref",
        d: "newref",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Central Simple Style Sheets",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hypertext and links markup language",
        correct: "a",
    },
    {
        question: "Which of the following HTML element is used for creating an unordered list?",
        a: "<ui>",
        b: "<ol>",
        c: "<em>",
        d: "<ul>",
        correct: "d",
    },
    {
        question: "Which of the following will write the message “Hello World!” in an alert box?",
        a: "alertBox(“Hello World!”);",
        b: "alert(Hello World!);",
        c: "msgAlert(“Hello World!”);",
        d: "alert(“Hello World!”);",
        correct: "d",
    },
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        a: "if(x 2)",
        b: "if(x = 2)",
        c: "if(x == 2)",
        d: "if(x != 2 )",
        correct: "c",
    },
    {
        question: "Inside which element do you put JavaScript?",
        a: "<var>",
        b: "<script>",
        c: "<section>",
        d: "<code>",
        correct: "b",
    },
    {
        question: "Which one of the following is correct?",
        a: "i =+ 1;",
        b: "i += 1;",
        c: "i = i++1;",
        d: "+i+;",
        correct: "b",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_answer = document.getElementById("a-answer")
const b_answer = document.getElementById("b-answer")
const c_answer = document.getElementById("c-answer")
const d_answer = document.getElementById("d-answer")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question

    a_answer.innerText = currentQuizData.a
    b_answer.innerText = currentQuizData.b
    c_answer.innerText = currentQuizData.c
    d_answer.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly </h2>
    <button onclick= "location.reload()">Reload</button>`
        }
    }
})

loadQuiz()




















