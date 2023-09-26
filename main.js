let current_question = 0;
let score = 0;

const questions = {
    0 : {
        'question-text': "Which is the largest animal in the world?",
        'option-1': "Shark",
        'option-2': "Blue Whale",
        'option-3': "Elephant",
        'option-4': "Your mom",
        'ans': "Your mom",
    },
    1 : {
        'question-text': "Which is the smallest country in the world?",
        'option-1': "Vatican City",
        'option-2': "Bhutan",
        'option-3': "Nepal",
        'option-4': "Shri Lanka",
        'ans': "option-1",
    },
    2 : {
        'question-text': "Which is the largest desert in the world?",
        'option-1': "Kalahari",
        'option-2': "Gabi",
        'option-3': "Sahara",
        'option-4': "Antarctica",
        'ans': "option-3",
    },
    3 : {
        'question-text': "Which is the smallest continent in the world?",
        'option-1': "Asia",
        'option-2': "Australia",
        'option-3': "Arctic",
        'option-4': "Africa",
        'ans': "option-2",
    },
}

function renderQuestion(questions, current_question) {
    document.getElementById('questions').innerHTML += `
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
}

window.addEventListener('Load', renderQuestion(questions, current_question));


let flag = false;

document.getElementById('questions').addEventListener('click', ev => {
    if (!flag) {
        flag = true;
        if (ev.target.textContent == questions[current_question]['ans']) {
            ev.target.classList.add("right-ans");
            document.getElementById('nextBtn').style.display = 'block';
        } else {
            ev.target.classList.add("wrong-ans");
            const ul = document.getElementById('options');

            for (let i = 0; i < Object.keys(ul.children).length; i++) {
                if (ul.children[i].textContent == questions[current_question]['ans']) {
                    ul.children[i].classList.add('right-ans');
                }
            }

            document.getElementById('nextBtn').style.display = 'block';
        }
    }
})