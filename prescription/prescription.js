let id = 1;

function addQuery(ele) {
    let qnaPart = document.getElementById('qnaPart');

    let mainDiv = document.createElement('div')
    mainDiv.setAttribute('class', 'eachElement')

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
    answer.setAttribute('id', id++)



    let submit = document.createElement('div');
    submit.setAttribute('class', 'SubmitAnswer');
    // submit.setAttribute('id', id++);

    submit.innerHTML = `<i style="font-size:24px" class="fa">&#xf2c6;</i><button onclick="submitAnswer(${id++})">Submit Answer</button>`;
    // submit.innerHTML = '<i style="font-size:24px" class="fa">&#xf2c6;</i>Submit Answer'

    mainDiv.append(datePosted, ques, answer, submit);
    qnaPart.append(mainDiv)


}

let questions = JSON.parse(localStorage.getItem('questions'))
for (var k = questions.length - 1; k >= 0; k--) {
    addQuery(questions[k])
}


function submitAnswer(ans) {
    let answer = document.getElementById(ans - 1).value;
    if (answer != '') {
        let ques = document.getElementById(ans - 2).innerHTML;
        let storedQues = JSON.parse(localStorage.getItem('questions'));
        for (var i = 0; i < storedQues.length; i++) {
            if (storedQues[i].question == ques) {
                storedQues[i]['answered'] = answer;
                localStorage.setItem('questions', JSON.stringify(storedQues))
                break
            }
        }
    }
}