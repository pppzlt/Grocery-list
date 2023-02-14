// const { response } = require("express");

// GET ELEMENTS
const loginButton = document.getElementById("login-button");

// LOGIN FUNCTION TAKES YOU TO GROCERIES PAGE 
const navLogin = async(userLogin) => {
  await fetch('home/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(userLogin) ,
  })
  
  .then((response) => {
    console.log(response.status);
    if (response.status === 404){
      return;
    } else if (response.status === 400){
      return;
    } else {
      directToListPage();
    };
  });
};

let directToListPage = () => {
  window.location.href ="/masterlist"
}




// EVENT LISTENER FOR LOGIN BUTTON
loginButton.addEventListener('click', (event) => {
  //get values entered in the form fields
  const username = document.getElementById("email");
  const password = document.getElementById("inputPassword");
  
  let userLogin = {
    email: username.value,
    password: password.value,
  }

  if (!username || !password) {
    alert("Please enter a username and password");
    return;
  } else {
    navLogin(userLogin);
  }

});
