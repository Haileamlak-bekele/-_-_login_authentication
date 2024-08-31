
// Function to check if a user exists
function checkUserExists(email) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === email);
}

// Function to handle the signup process
function signup(username, email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (!checkUserExists(email)) {
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true; // Signup successful
  }
  return false; // User already exists
}

// Event listener for signup form submission
document.querySelector('#signForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  const signupResult = signup(username, email, password);

  if(signupResult){
    const successMessage = document.getElementById('success-message1');

    alert("You have successfully registered. Please login to access your account." );
     
  } else {
    const errorMessage = document.getElementById('error-message1');
    alert("This account already exists. Please login or use a different email." );
   
  }
})
