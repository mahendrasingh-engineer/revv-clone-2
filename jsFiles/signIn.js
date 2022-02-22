var form=document.querySelector("form");
let userLoginDataRevv=JSON.parse(localStorage.getItem("userLoginDataRevv"))||[];
let email=document.querySelector("#user-email");
let pass=document.querySelector("#password-login");
let validEmail=false;
let validPassword=false;
form.addEventListener("submit",loginFunction);
function loginFunction(event){
    event.preventDefault();
    userLoginDataRevv.map(function(elem){
        console.log(elem.email,"entered",email.value)
        if(elem.email==email.value){
            validEmail=true;
            if(elem.password==JSON.stringify(pass.value)){
                validPassword=true;
            }
        }
        
    });
    validate();
}
    
function validate(){
    if(validEmail&&validPassword){
        alert("you have logged in successfully");
        window.location.href="index.html";
    }
    else if(validEmail){
        alert("login failed, wrong passwod")
    }else{
        alert("this emial address not registered yet,\n please enter validemail or sign-up first");
    }
    console.log(validEmail);
    console.log(userLoginDataRevv);
}
    
    
