function password_match(pass, confirm_pass) {
    if (pass !== confirm_pass) {
        alert("Passwords did not match");
        return false;
    } else {
        return true;
    }
}
function check_if_exist(username, email) {
    let id = JSON.parse(localStorage.getItem("register"));
    for (let i = 0; i < id.length; i++) {
        if (id[i].username == username || id[i].email == email) {
            alert("User Already exist\nPlease Login...");
            return false;
        }
    }
}
function get_data() {

    const pass = document.getElementById("pass").value;
    const confirm_pass = document.getElementById("confim_pass").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const check_if_exit_result = check_if_exist(username, email);
    if (check_if_exit_result == false) {
        return false;
    }

    const pass_match_result = password_match(pass, confirm_pass);
    if (pass_match_result === false) {
        return false;
    }
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const role = document.getElementById("role").value;

    let user_data_arr = [];
    const data_obj = {
        "first_name": first_name,
        "last_name": last_name,
        "username": username,
        "role": role,
        "email": email,
        "pass": pass,
        "is_active": false
    };
    
        user_data_arr = JSON.parse(localStorage.getItem("register"));
        user_data_arr.push(data_obj);
        return user_data_arr;
}

//main function
//register now button click
function validate_register() {

    const user_data_arr = get_data();
    if (user_data_arr === false) {
        return false;
    }

    //local storage database
    let ls = localStorage;
    localStorage.setItem("register", JSON.stringify(user_data_arr));
    alert("Registration succsesfully\nPlease login...")
    return true;
}
// console.log(localStorage.key("register") != "register");











