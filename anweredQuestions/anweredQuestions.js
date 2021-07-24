let answeredques = 1;

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

    let ans = document.createElement('div');
    ans.setAttribute('class', 'response');
    ans.innerHTML = ele.answered;

    let submit = document.createElement('div');
    submit.setAttribute('class', 'SubmitAnswer');
    submit.innerHTML = `<i style="font-size:24px" class="fa">&#xf2c6;</i><button onclick="submitAnswer()">Change Response</button>`;

    mainDiv.append(datePosted, ques, ans, submit);
    qnaPart.append(mainDiv)


}

let questions = JSON.parse(localStorage.getItem('questions'))
for (var k = questions.length - 1; k >= 0; k--) {
    if (questions[k]['answered'] != undefined) {
        addQuery(questions[k])
        document.getElementById('answersCount').innerHTML = answeredques++;
    }
}


function questionsPage() {
    window.location.href = '../prescription/prescription.html'
}