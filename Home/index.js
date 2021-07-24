var searchInput = document.querySelector(".searchbar");
var dropdown = document.querySelector(".dropdown");
searchInput.addEventListener("focus", function () {
  dropdown.classList.remove("hide");
});
searchInput.addEventListener("blur", function () {
  dropdown.classList.add("hide");
});

function showDropdown(a) {
  var navBelowHeroItem = document.querySelector(`.items ${a}`);
  var navItems = document.querySelector(`${a} .dropdown`);
  navItems.classList.remove("hide");
}

function hideDropdown(a) {
  var navBelowHeroItem = document.querySelector(`.items ${a}`);
  var navItems = document.querySelector(`${a} .dropdown`);
  navItems.classList.add("hide");
}

var askedQuestions = [
  {
    time: "2 mins",
    content: "21 year old Female from Agra just asked about Fever",
  },
  {
    time: "5 mins",
    content: "45 year old Male from Visakhapatnam just asked about Hair Growth",
  },
  {
    time: "10 mins",
    content: "25 year old Male from Delhi just asked about Weight Loss",
  },
  {
    time: "12 mins",
    content: "30 year old Male from Delhi just asked about Sugar",
  },
];

// if local storage is null set askedAbout in local storage
if (localStorage.getItem("askedAbout") == null) {
  localStorage.setItem("askedAbout", JSON.stringify(askedQuestions));
}

function displayAskedAbout() {
  var postTeaser = document.querySelector(".hero_post_teaser");

  // get postTeaser from local storage
  let data = JSON.parse(localStorage.getItem("askedAbout"));

  // go through all products
  var i = 0;

  setInterval(function () {
    if (i == data.length) {
      i = 0;
    }

    postTeaser.innerHTML = `<p class="post_time">${data[i].time}</p>
      <p class="post_about">${data[i].content}</p>`;
    i++;
  }, 2000);
}

displayAskedAbout();
