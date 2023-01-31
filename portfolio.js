
function showNotification(message) {
  var notification = document.getElementById("notification");
  var notificationMessage = document.getElementById("notification-message");
  notificationMessage.innerHTML = message;
  notification.style.display = "block";
  setTimeout(function() {
    notification.style.display = "none";
  }, 5000);
}

const form = document.getElementById("login-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const role = form.elements.role.value;

  // Perform form validation
  if (username === "" || password === "") {
    alert("Please enter a username and password.");
    return;
  }

  // Check role of user
  if (role === "admin") {
    showNotification("Welcome, Admin!");
   
    // Perform admin specific actions
  } else {
    showNotification("Welcome, User!");

    form.reset();
  
    // Show a message to the user
   
  
    window.location.href='./admin.html';
  }});

 

  





