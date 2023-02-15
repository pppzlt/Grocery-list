const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const phoneNum = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const button = document.getElementById("button");

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

button.addEventListener("click", function () {
    checkPasswords();
});
