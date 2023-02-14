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
        let newUserObject = {
            name: firstNameLastName,
            email: email.value,
            password: password.value, 
        };
        


        fetchCall(newUserObject)
};
};

let fetchCall = async (newUser) => {
        await fetch('/signup/newuser', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
}


button.addEventListener("click", function() {
    checkPasswords();
});

