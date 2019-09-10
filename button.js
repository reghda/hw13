const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match");
    } else {
        confirm_password.setCustomValidity('Access');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//
// ///////////////
// function logIn() {
//     const logIn = document.getElementById('logIn');
//     logIn.style.display = logIn.style.display === "block" ? "none" : "block";
// }
// function signIn() {
//     const signIn = document.getElementById('signIn');
//     signIn.style.display = signIn.style.display === "block" ? "none" : "block";
// }