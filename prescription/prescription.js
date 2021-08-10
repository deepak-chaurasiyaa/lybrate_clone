let id = 1;  //to assign id to elementa
let x = 0;    //to track first time answered question
let availableques = 1;   //to keep track of unanswered questions
let answeredques = 1;    //to keep track of answered quesstion

// adding quaetion to page
function addQuery(ele) {
    let qnaPart = document.getElementById('qnaPart');

    let mainDiv = document.createElement('div')
    mainDiv.setAttribute('class', 'eachElement')
    mainDiv.setAttribute('id', id++)

    let datePosted = document.createElement('div');
    datePosted.setAttribute('class', 'dateOfPost')
    datePosted.innerHTML = `(JULY 7, 2021), ${ele.age}, ${ele.gender}`;

    let ques = document.createElement('div');
    ques.setAttribute('class', 'questionAsked');
    ques.innerHTML = ele.question;
    ques.setAttribute('id', id++)

    let answer = document.createElement('textarea');
    answer.rows = '10';
    answer.cols = '80';
    answer.placeholder = 'Prescription.....'
    answer.setAttribute('id', id++)



    let submit = document.createElement('div');
    submit.setAttribute('class', 'SubmitAnswer');
    // submit.setAttribute('id', id++);
    // setting a button and adding click eventlistener onto it
    submit.innerHTML = `<i style="font-size:24px" class="fa">&#xf2c6;</i><button onclick="submitAnswer(${id++})">Submit Answer</button>`;
    // submit.innerHTML = '<i style="font-size:24px" class="fa">&#xf2c6;</i>Submit Answer'

    mainDiv.append(datePosted, ques, answer, submit);
    qnaPart.append(mainDiv)


}

// taking data from local storage
let questions = JSON.parse(localStorage.getItem('questions'))
for (var k = questions.length - 1; k >= 0; k--) {
    // if the question is unanswered than add to page
    if (questions[k]['answered'] == undefined) {
        addQuery(questions[k])
        // increase available question count
        document.getElementById('questionCount').innerHTML = availableques++;
    }
    else {
        // showing total answered questions count
        document.getElementById('answersCount').innerHTML = answeredques++;
    }
}

// if submit answer is click than store the answer in local storage
function submitAnswer(ans) {
    let answer = document.getElementById(ans - 1).value;
    if (answer != '') {
        let ques = document.getElementById(ans - 2).innerHTML;
        let storedQues = JSON.parse(localStorage.getItem('questions'));
        for (let i = 0; i < storedQues.length; i++) {
            if (storedQues[i]['answered'] == undefined) {
                if (storedQues[i].question == ques) {
                    storedQues[i]['answered'] = answer;
                    localStorage.setItem('questions', JSON.stringify(storedQues));
                    break
                }
            }
        }
        // remove that question
        document.getElementById(ans - 3).innerHTML = null;
        // decrease available question count
        if (x == 0) {
            x++;
            availableques = availableques - 1;
        }
        document.getElementById('questionCount').innerHTML = --availableques;
        // document.getElementById('questionCount').innerHTML = 4;
        // increase answered question count
        document.getElementById('answersCount').innerHTML = answeredques++;
    }
    else {
        alert('Please fill response to submit')
    }
}
// navigate to answered queries page
function answersPage() {
    window.location.href = '../anweredQuestions/anweredQuestions.html'
}