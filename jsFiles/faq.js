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

// var listItems = document.querySelectorAll(".faqList");
// console.log(listItems);
// var tabs = document.querySelectorAll(".tab");
// console.log(tabs);

// listItems.forEach(function(item,index1) {
//     var clicker = item;
//     clicker.addEventListener("click",function() {
//         event.preventDefault();
//         console.log("clickked")
//         tabs.forEach(function(tab,index2) {
//             if(index1 == 0) {
//                 console.log(index1,"here",index2,"there");
//                 if(index1 = index2) {
//                     window.pageYOffset = 642;
//                 }
//             } else if(index1 == 1) {
//                 if(index1 = index2) {
//                     window.pageYOffset = 642;
//                 }
//             } else if(index1 == 2) {
//                 if(index1 = index2) {
//                     window.pageYOffset = 1386;
//                 }
//             } else if(index1 == 3) {
//                 if(index1 = index2) {
//                     window.pageYOffset = 1929;
//                 }
//             }
//         })
//     })
    
// })
