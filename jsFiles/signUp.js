let userLoginDataRevv=JSON.parse(localStorage.getItem("userLoginDataRevv"))||[];
let email=document.querySelector("#undefined-Pleaseenteryouremail-EmailID-58912");
let pass1=document.querySelector("#pass1");
let pass2=document.querySelector("#pass2");
let btn=document.querySelector("button");

btn.addEventListener("click",signUp);
function signUp(){
    if(email.value!==""&&pass1.value!==""&&pass2.value!==""){
        if(pass1.value===pass2.value){
            userLoginDataRevv.push({email:email.value,password:JSON.stringify(pass1.value)});
            localStorage.setItem("userLoginDataRevv",JSON.stringify(userLoginDataRevv));
            alert("congratulations, you have signed up successfully");
            window.location.href="signIn.html";
        }
        else{
            alert("failed in conferming password, please enter same passwords")
        }
    }else{
        alert("please, fill the complete the form")
    }
}