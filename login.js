// Function to check if a user exists
function checkUserExists(email) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === email);
}

// Function to handle the login process
function login(emailOrUsername, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => (user.email === emailOrUsername || user.username === emailOrUsername));

  if (user && user.password === password) {
    return user; // Returns the user object if login is successful
  }
  return 'error'; // Returns an error message if login fails
}

// Event listener for login form submission
document.querySelector('#login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailOrUsername = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;

  const loginResult = login(emailOrUsername, password);

  if (loginResult === 'error') {
    alert("Invalid username or password. Please try again.");
  } else {
    setTimeout(function() {
      alert("Login successful!");
    }, 3000);
    
    window.location.href = 'https://oasisinfobyte.com/';
   
 
  }
});
