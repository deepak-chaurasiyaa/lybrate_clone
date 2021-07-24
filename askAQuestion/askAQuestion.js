let age = [22, 24, 28, 32, 68, 56, 60, 18]
let k = 0;
function askAQuestion() {
    if (k == 8)
        k = 0
    let question = document.getElementById("inp").value;
    let gender = document.getElementById('ip1').value;
    let email = document.getElementById('mail').value;
    let phone = document.getElementById('mob').value;
    let details = {
        question,
        gender,
        email,
        phone,
        age: age[k++]
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
    alert('submitted! you will get a doctors response soon');
}

function movetoLogin() {
    window.location.href = '../login/lonin.html'
}
function gotoDoctors() {
    window.location.href = '../ForDoctors/fordoctors.html'
}