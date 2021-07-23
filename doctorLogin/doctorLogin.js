document.getElementById('loginForm2').style.display = 'none';
function DisplayNone() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loginForm2').style.display = 'block';
}

function authenticate() {
    // accepting values from input 
    const userPhone = document.getElementById('email2').value;
    const password = document.getElementById('password').value;

    // checking if any of the fields are empty
    if (userPhone == '')
        alert('Enter user email to proceed');
    else if (password == '')
        alert('Enter pasword to proceed');
    else {
        if (userPhone != 'sagar@ankur.com')
            alert('Enter correct email!');
        else if (password != 'sagar_ankur')
            alert('Enter correct password!');
        else {
            alert('correct')
        }
    }
}