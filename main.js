let current_question = 0;
let score = 0;
const questionsList = document.getElementById('questions');
const nextBtn = document.getElementById('nextBtn');
const result = document.getElementById('result');
const resultText = document.getElementById('result-text');
const playBtn = document.getElementById('playBtn');


const questions = {
    0 : {
        'question-text': "Which is the largest animal in the world?",
        'option-1': "Shark",
        'option-2': "Blue Whale",
        'option-3': "Elephant",
        'option-4': "Giraffe",
        'ans': "Blue Whale",
    },
    1 : {
        'question-text': "Which is the smallest country in the world?",
        'option-1': "Vatican City",
        'option-2': "Bhutan",
        'option-3': "Nepal",
        'option-4': "Shri Lanka",
        'ans': "Vatican City",
    },
    2 : {
        'question-text': "Which is the largest desert in the world?",
        'option-1': "Kalahari",
        'option-2': "Gabi",
        'option-3': "Sahara",
        'option-4': "Antarctica",
        'ans': "Sahara",
    },
    3 : {
        'question-text': "Which is the smallest continent in the world?",
        'option-1': "Asia",
        'option-2': "Australia",
        'option-3': "Arctic",
        'option-4': "Africa",
        'ans': "Australia",
    },
    4 : {
        'question-text': "How many days do we have in a week?",
        'option-1': "7",
        'option-2': "9",
        'option-3': "10",
        'option-4': "8",
        'ans': "7",
    },
}

function renderQuestion(questions, current_question) {
    if (current_question < Object.keys(questions).length) {
        questionsList.innerHTML = `
            <div id="${current_question+1}" class="question">
                <span class="question-text">${current_question+1}. ${questions[current_question]['question-text']}</span>
                <ul id="options">
                    <li class="option">${questions[current_question]['option-1']}</li>
                    <li class="option">${questions[current_question]['option-2']}</li>
                    <li class="option">${questions[current_question]['option-3']}</li>
                    <li class="option">${questions[current_question]['option-4']}</li>
                </ul>
            </div>
            `;
    } else {
        questionsList.innerHTML = '';
        resultText.innerHTML = `
            <span>You Scored ${score} out of ${Object.keys(questions).length}</span>
        `;
        result.style.display = 'block';
        result.style.marginTop = '-20px';
    }
}

window.addEventListener('Load', renderQuestion(questions, current_question));


let flag = false;

questionsList.addEventListener('click', ev => {
    if (!flag && ev.target.classList[0] == 'option') {
        flag = true;
        if (ev.target.textContent == questions[current_question]['ans']) {
            ev.target.classList.add("right-ans");
            score += 1;
            nextBtn.style.display = 'block';
        } else {
            ev.target.classList.add("wrong-ans");
            const ul = document.getElementById('options');
            for (let i = 0; i < Object.keys(ul.children).length; i++) {
                if (ul.children[i].textContent == questions[current_question]['ans']) {
                    ul.children[i].classList.add('right-ans');
                }
            }

            nextBtn.style.display = 'block';
        }
    }
});

nextBtn.addEventListener('click', () => {
    nextBtn.style.display = 'none';
    flag = false;
    current_question += 1;
    renderQuestion(questions, current_question);
});

playBtn.addEventListener('click', () => {
    console.log("Play again clicked!");
    current_question = 0;
    score = 0;
    flag = false;
    nextBtn.style.display = 'none';
    result.style.display = 'none';
    renderQuestion(questions, current_question);
})

