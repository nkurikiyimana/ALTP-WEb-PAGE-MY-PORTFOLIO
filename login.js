
    

  function login() {

var email = document.getElementById('email').value;
var passward = document.getElementById('login-passward').value;
console.log(email,login-passward);

var email1= localStorage.getItem("email1");
var pass1= localStorage.getItem("pass1");
if(email==email1 && pass==pass1){
  window.location.href="partfolio";
}
else{
  alert(" email and pass is incorrect")

}
}

