let x = document.body.addEventListener("click", function (event) {
  console.log(event.target.id);
  if (event.target.id != "search")
    document.getElementById("dropDown").style.display = "none";
  else document.getElementById("dropDown").style.display = "block";
});
