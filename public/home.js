// GET ELEMENTS
const loginButton = document.getElementById("login-button");
const signUpButton = document.getElementById("signup-button");

// LOGIN FUNCTION TAKES YOU TO GROCERIES PAGE 
const navLogin = () =>
  fetch("/groceries", {
    method: "GET",
  });

// EVENT LISTENER FOR LOGIN BUTTON
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  //get values entered in the form fields
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (!username || !password) {
    alert("Please enter a username and password");
    return;
  } else if (
    form.username.value == "username" &&
    form.password.value == "password"
  ) {
    window.open(navLogin); // put actual target page here
  } else {
    alert("Incorrect password or username. Please try again.");
  }
});

// SIGN UP BUTTON TAKES YOU TO SIGNUP PAGE 
const navSignUp = () =>
  fetch("/signup", {
    method: "GET",
  });

// EVENT LISTENER FOR SIGN UP BUTTON
signUpButton.addEventListener('click', navSignUp);

// Verify credentials function - back end do later
// If input is valid then send an HTTP request to back-end. check response from server and display succcess or error message accordingly
