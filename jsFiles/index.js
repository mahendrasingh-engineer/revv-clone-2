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

var selectCity = document.querySelector("#selectcity");
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


// signin or login section 
document.querySelector("#right > div.loginOrSignup").addEventListener("click",redirectToSignIn);
function redirectToSignIn(){
  secondwindow =open('signIn.html', 'yahoo', 'left=500px,top=500px,height=500,width=360,scrollbars=yes');
}

// var startTime = document.querySelector(".initialTime");
// var finalTime = document.querySelector(".finalTime");
// startTime.addEventListener("click",function() {
//   document.querySelector("input").style.display="inline-block";
// })
// finalTime.addEventListener("click",function() {
//   document.querySelector("input").style.display="inline-block";
// })

// startTime.addEventListener("click",function() {
  //   console.log("here")
  //   startTime.innerHTML = "<input type='datetime-local' />";
  // })
  
  var startTime = document.querySelector(".initialTime");
  startTime.addEventListener("click",function() {
    document.querySelector(".sTime").style.display="block";
    // var date = document.querySelector("#cityAndTime > div.timeDiv > div.initialTime > input").value;
    // date = date.split("T");
    // date[0] = date[0].split("-").map(Number);
    // date[1] = date[1].split(":").map(Number);
    // console.log(date);
  })
  

  var duration ;
  var searchBtn = document.querySelector("#leftContainer > div.searchBtn > button");
  searchBtn.addEventListener("click",function() {
    var date = document.querySelector("#cityAndTime > div.timeDiv > div.initialTime > input").value;
    var date1 = new Date(date);
    var date2 = new Date(document.querySelector("#cityAndTime > div.timeDiv > div.finalTime > input").value);
    var dura = date2 - date1;
    dura = dura/60000;
    var day  = dura;
    localStorage.setItem("dayDuration01",JSON.stringify(Math.floor(day/1440)));
    duration = " " + Math.floor(dura/1440);
    dura = dura % 1440;
    duration = duration + "day " + Math.floor(dura/60)  + "hours ";
    dura = dura%60;
    duration = duration + dura + "minutes";
    console.log(duration);
    document.querySelector(".duration").innerText = "Duration " + duration;
    document.querySelector(".duration").style= "color:red;text-align:center;padding:30px 20px";

    var get = JSON.parse(localStorage.getItem("carDataBase"));
    console.log(get);
    
  })
  var endTime = document.querySelector(".initialTime");
  endTime.addEventListener("click",function() {
    document.querySelector(".eTime").style.display="block";
  })
 