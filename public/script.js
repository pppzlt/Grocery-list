// GET ELEMENTS
const form = document.getElementsById("login-form");
const loginButton = document.getElementById("login-button");
const signUpButton = document.getElementById("signup-button");

// LOGIN FUNCTION - TWO FIELDS USERNAME & RESTFUL
// need a login function that i can call when the form is submitted
function login ()



// EVENT LISTENER FOR LOGIN BUTTON
loginButton.addEventListener("click", (event) => {
    event.preventDefault();
  //get values entered in the form fields
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (!username || !password) {
        alert("Please enter a username and password");
        return; 
        } else if (form.username.value == "username" && form.password.value == "password") {
            window.open('target.html') // put actual target page here 
        } else {
            alert("Incorrect password or username");
        }
});

// EVENT LISTENER FOR SIGN UP BUTTON
signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
  //get values entered in the form fields
    const username = document.getElementById("username");
    const password = document.getElementById("password");

  // validate the input data
    if (!username || !password) {
        alert("Please enter a username and password");
        return;
    }
});

// Verify credentials function - back end do later
// If input is valid then send an HTTP request to back-end. check response from server and display succcess or error message accordingly
