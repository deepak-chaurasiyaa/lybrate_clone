let x = document.body.addEventListener('click', function (event) {
    console.log(event.target.id);
    if (event.target.id != "search")
        document.getElementById('dropDown').style.display = 'none'
    else
        document.getElementById('dropDown').style.display = 'block'
})

let fedAr = [
    {
        name: 'Dr.Narasimhalu C.R.V.(Professor)',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/418fd0875b98e604669aa561225a8a34/Dermatology-NarasimhaluCrv-Chennai-b7b784.JPG',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/managing-acne/female/Managing-Acne-female-02.jpg'
    },
    {
        name: 'Dr.Yasmin Asma Zohara',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/d560175ec52a981d88f6eabe4f716e42/Dentistry-YasminAsmaZohara-Chennai-456afe.jpg',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/improving-oral-and-dental-health/female/Improving-Oral-Dental-Health-female-22.jpg'
    },
    {
        name: 'Dr.Sajeev Kumar',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/06dba1f9cb563ebd8e679b8950342df1/Pediatrics-SajeevKumar-CHENGANNUR-eaeebf.JPG',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/preventing-flu-cold-and-cough/Female/preventing-flu-cold-cough-female-06.jpg'
    },
    {
        name: 'Dr.N S S Gauri',
        doc: 'https://assets.lybrate.com/q_auto:low,f_auto,h_80,w_80,c_fill,g_auto:face/img/documents/doctor/dp/4157d9f89525e7436a6e29fab0f70f19/Unani-NSSGauri-kanpur-d31dd1.jpg',
        pat: 'https://assets.lybrate.com/q_auto:eco,f_auto,w_850/imgs/tic/improving-skin-health/female/improving-skin-health-female-106.jpg'
    }

]
let z = 0;
function appendPost(post) {
    if (z == 4)
        z = 0;
    let blogContainer = document.getElementById('blogContainer');

    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'containerPost')
    // first line
    let healthQuery = document.createElement('p')
    healthQuery.innerHTML = 'Health Query';
    // question posted
    let ques = document.createElement('a')
    ques.innerHTML = `<p class="postTitle"> ${post.question}.</p>`
    // inswring a line
    let line = document.createElement('hr');
    line.style.margin = '20px';
    // whole details of doctor
    let doctorsDiv = document.createElement('div');
    doctorsDiv.setAttribute('class', 'doctorPart');
    // doctor image
    let doctorImg = document.createElement('img');
    doctorImg.setAttribute('class', 'doctorImage');
    doctorImg.src = `${fedAr[z].doc}`;
    // doctor name
    let docName = document.createElement('p');
    docName.setAttribute('class', 'doctorName')
    docName.innerHTML = `<a href="descrption">${fedAr[z].name}</a>`
    // doctor details
    let docDet = document.createElement('p');
    docDet.setAttribute('class', 'doctorDetails');
    docDet.innerHTML = `MBBS, Bachelor of Unani Medicine and Surgery (B.U.M.S) Unani Specialist, Kanpur
    • 17yrs exp`;
    // /any randon image
    let pers = document.createElement('p');
    pers.setAttribute('class', 'PersonImage')
    pers.innerHTML = `<a href=""><img
    src='${fedAr[z++].pat}'
    alt=""></a>`;
    // solution by doctor
    let sol = document.createElement('p');
    sol.setAttribute('class', 'solution');
    sol.innerHTML = `<span>Hello, thanks for the query,</span>
    <br>`;

    let answ = document.createElement('span');
    answ.setAttribute('class', 'lastSpan')
    answ.innerHTML = post.answered;

    doctorsDiv.append(doctorImg, docName, docDet, pers, sol, answ);
    // actions buttons
    let actions = document.createElement('div')
    actions.setAttribute('class', 'actionButtons')
    actions.innerHTML = `<a href="submitFeedback"><i class="far fa-comment-alt"></i>Submit FeedBack</a>
    <a href="comments"><i class="far fa-comments"></i>Consult-Online</a>
    <a href="apointment"><i class="far fa-calendar-alt"></i>Book-Appointment</a>`;

    mainDiv.append(healthQuery, ques, line, doctorsDiv, actions);
    blogContainer.append(mainDiv)
}


let questions = JSON.parse(localStorage.getItem('questions'))
for (var k = questions.length - 1; k >= 0; k--) {
    if (questions[k]['answered'] != undefined)
        appendPost(questions[k])
}