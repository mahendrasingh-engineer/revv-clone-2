var queBox = document.querySelectorAll(".queBox");

queBox.forEach(function(data) {
    var question = data.querySelector(".question");
    question.addEventListener("click",function () {
        data.querySelector(".solution").classList.toggle("active");
    })
})


var newData = document.querySelectorAll(".tab");
var collapse = false;

newData.forEach(function(elem) {
    var expandBtn = elem.querySelector(".expandAll");
    expandBtn.addEventListener("click",function () {
        newData.forEach(function(innerElem) {
            var solutions = innerElem.querySelectorAll(".solution");
            var expandBtnAll = innerElem.querySelector(".expandAll");
                if(collapse) {
                    expandBtnAll.innerText = "EXPAND ALL";
                } else {
                    expandBtnAll.innerText = "COLLAPSE ALL"
                }
            // console.log(collapse);
            solutions.forEach(function(solution){
                solution.classList.toggle("active"); 
            })
        })
        collapse = !collapse;
    })
})
