// to display underline when click in input part
let form = document.getElementById("form");
form.addEventListener("click", function (event) {
  // console.log(event.target)
  let element = event.target.parentElement;
  element.style.borderBottom = "thin solid red";
});

// accepting user details and storing to local storage
function acceptDetails(event) {
  event.preventDefault();

  // colecting details entered in form
  const username = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userContact = document.getElementById("userPhone").value;
  const userPas = document.getElementById("userPass").value;

  // checking if any of the fields are empty
  if (username == "") alert("Enter user Name to proceed");
  else if (userContact == "") alert("Enter Contact number to proceed");
  else if (userEmail == "") alert("Enter email to proceed");
  else if (userPas == "") alert("Enter password to proceed");
  // if everthing entered is correct and in as per correct format than continue
  else {
    // combining all details of user
    let userDetail = {
      userName,
      userEmail,
      userContact,
      userPas,
    };
    let arr;
    if (localStorage.getItem("users") == null)
      //checking if local storage is null
      arr = [];
    else arr = JSON.parse(localStorage.getItem("users"));
    for (x of arr) {
      // if email already is unique or not
      if (x.userEmail == userEmail) {
        alert("Email already in use");
        return;
      }
    }
    // if everthing is correct than store data and allow user to log in
    arr.push(userDetail);
    localStorage.setItem("users", JSON.stringify(arr));
    alert("You have successfully sign up ,\nLog in! to continue");
  }
}
