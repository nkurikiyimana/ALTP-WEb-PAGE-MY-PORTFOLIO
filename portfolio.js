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
function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  
  </script>  
  <body>  
  <form name="myform" method="post" action="http://www.javatpoint.com/javascriptpages/valid.jsp" onsubmit="return validateform()" >  
  Name: <input type="text" name="name"><br/>  
  Password: <input type="password" name="psrd"><br/>  
  <input type="submit" value="register">  
  </form>  
 
 