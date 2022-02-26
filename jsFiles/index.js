// SEARCHBAR CONTAINER
var searchbarContainer = document.getElementById("searchbarContainer");
var searchBar = document.getElementById("searchBar");
window.onscroll = function () {
  if (window.pageYOffset >= 582) {
    searchBar.style.display = "grid";
    searchbarContainer.style.display = "block";
  } else {
    searchBar.style.display = "none";
    searchbarContainer.style.display = "none";
  }
};

// SELECTCITY BOX POPUP WINDOW

var selectCity = document.querySelector(".selectcity");
selectCity.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "block";
  container.style.display = "flex";
  container.style.backgroungcolor = "rgba(0,0,0,0.3)";
});

var close = document.querySelector(".fa-xmark");
close.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "none";
  container.style.display = "none";
});

var citiesDiv = document.querySelectorAll(".city-div");
// console.log(citiesDiv)
citiesDiv.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var cityText = document.querySelector(".cityText");
    var check = document.querySelectorAll(".fa-check");
    var citySpan = document.querySelector(".citySpan");
    check.forEach(function (data) {
      data.classList.remove("active");
    });
    cityText.innerText = event.target.innerText;
    citySpan.innerText = event.target.innerText;
    elem.querySelector(".fa-check").classList.add("active");
  });
});

