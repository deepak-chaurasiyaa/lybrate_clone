
// displays a thin line whn user clicks to input section
let form = document.getElementById('form');
form.addEventListener('click', function (event) {
    // console.log(event.target)
    let element = event.target.parentElement;
    element.style.borderBottom = "thin solid red";
})

// when user click in log in page submit
function startLogin(event) {
    event.preventDefault();

    // accepting values from input 
    const userPhone = document.getElementById('userPhone').value;
    const password = document.getElementById('userPass').value;

    // checking if any of the fields are empty
    if (userPhone == '')
        alert('Enter user Contact to proceed');
    else if (password == '')
        alert('Enter pasword to proceed');
    else {
        let arr;
        if (localStorage.getItem('users') == null) //checking if local storage is null
            alert('user not found!')
        else {
            var found = false;
            arr = JSON.parse(localStorage.getItem('users'));
            for (x of arr) {
                // if email exists or not
                if (x.userContact == userPhone) {
                    // checking password is correct or not
                    if (x.userPas == password) {
                        found = true;
                        alert('Successfully Log in !')
                    }
                    else {
                        //for incorrect password
                        alert('password is incorrect');
                        return;
                    }
                }
            }
            if (!found)
                alert('user not found!')
        }
    }

}