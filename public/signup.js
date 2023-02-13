const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const phoneNum = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const button = document.getElementById("button");



let checkPasswords = () => {
    if (password.value != confirmPassword.value){
        return;
    } else {
        let firstNameLastName = firstName.value + " " + lastName.value;
        let newUserArray = [];
        newUserArray.push(firstNameLastName, email.value, password.value);
        fetchCall(newUserArray)
};
};

let fetchCall = (newUser) => {
    fetch('/signup/newuser', {
        method: 'POST', 
        body: JSON.stringify(newUser)
    })
}


button.addEventListener("click", function() {
    checkPasswords();
});

