const faq_div = document.querySelectorAll(".faq_div")
faq_div.forEach( (faqs) => {
    faqs.addEventListener('click', () => {
        console.log("hello")
        document.querySelector(".faq_hidden").style.display = 'block';
    })

})

var searchbarContainer = document.getElementById("searchbarContainer")
var searchBar = document.getElementById("searchBar");
window.onscroll = function(){
    if(window.pageYOffset >= 582){
    searchBar.style.display="grid";
    searchbarContainer.style.display= "block";
    } else {
    searchBar.style.display="none";
    searchbarContainer.style.display= "none"; 
    }
}