// alert("form is load");
function validate() {
    const pass = document.getElementById("pass").value;
    const confirm_pass = document.getElementById("confim_pass").value;

    if (password_match(pass, confirm_pass) == false) {
        return false;
    }
}
function password_match(pass, confirm_pass) {
    if (pass != confirm_pass) {
        alert("Passwords did not match");
        return false;
    } else {
        return true;
    }
}