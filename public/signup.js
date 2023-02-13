const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const phoneNum = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const button = document.getElementById("button");



let checkPasswords = () => {
    if (password != confirmPassword){

        return false;
    } else {
        return true;
    }
}


button.addEventListener("click", function() {
    checkPasswords();
})