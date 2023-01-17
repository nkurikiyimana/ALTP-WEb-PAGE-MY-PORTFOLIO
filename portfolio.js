$(document).ready(function(){
  $('#menu').ckick(function(){
    $(this).toggleclass('fa-times');
    $('header').toggleclass('toggle');
  });

});


$(window).on('scroll load', function(){

    $('#menu').removeclass('fa-times');
    $('header').removeclass('toggle');
  });


 function adddata(){
  var email= document.getElementById(email).value;
  var pass= document.getElementsById(login-password).value;
 localStorage.setItem('userEmail', email);
 localStorage.setItem('userPwd', login-password);

}
 
 