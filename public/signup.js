// grabs all relevant elements from the page
const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const phoneNum = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const button = document.getElementById("button");
// makes sure the password confirm and password check out, and then encrypts and pushes to database
let checkPasswords = async () => {
    if (password.value != confirmPassword.value) {
        return;
    } else {
        let firstNameLastName = firstName.value + " " + lastName.value;
        let newUserObject = {
            name: firstNameLastName,
            email: email.value,
            password: password.value,
        };

        let response = await fetchCall(newUserObject);
        if (response.ok) {
            document.location.replace("/masterlist");
        } else {
            alert(response.statusText);
        }
    }
};
// posts username and password to db
let fetchCall = async (newUser) => {
    let response = await fetch("/signup/newuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    });
    return response;
};
// sign up button event listener
button.addEventListener("click", function () {
    checkPasswords();
});
