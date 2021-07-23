function askAQuestion() {
    let question = document.getElementById("inp").value;
    let gender = document.getElementById('ip1').value;
    let email = document.getElementById('mail').value;
    let phone = document.getElementById('mob').value;
    let details = {
        question,
        gender,
        email,
        phone
    };
    let arr;
    arr = localStorage.getItem('questions');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('questions'))
    }
    arr.push(details);
    localStorage.setItem('questions', JSON.stringify(arr));
}

function movetoLogin() {
    window.location.href = '../login/lonin.html'
}
function gotoDoctors() {
    window.location.href = '../doctorLogin/doctorLogin.html'
}