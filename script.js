// Hamburger Menu

var menu = document.getElementById("bar");
var item = document.getElementById("item");

item.style.right = "-300px";
menu.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};

document.getElementById('sendMessageBtn').addEventListener('click', function(event) {
  // Prevent default action
  event.preventDefault();

  // Get the email input and other fields
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  
  // Email Validation Check
  if (!email.endsWith('@gmail.com')) {
    // Add red border if email is invalid
    document.getElementById('email').style.border = '2px solid red';
    alert('Please enter a valid Gmail address.');
  } else {
    // Remove red border if valid
    document.getElementById('email').style.border = '1px solid #95a5a6';

    // Display success pop-up message
    alert('Your response has been recorded.');

    // Reset form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
});
