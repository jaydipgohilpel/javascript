// check user is exsist
let l = localStorage.length;
let role = "";
function check_if_exist(username) {
    let id = JSON.parse(localStorage.getItem("register"));
    for (let i = 0; i < id.length; i++) {
        if (id[i].username === username) {
            return true;
        }
    }
}
function check_if_pass_result2(pass, username) {
    let id = JSON.parse(localStorage.getItem("register"));
    for (let i = 0; i < id.length; i++) {
        if (id[i].username == username) {
            if (id[i].pass === pass) {
                id[i].is_active = true;
                localStorage.setItem("register", JSON.stringify(id));
                role = id[i].role;
                return true;
            }

        }
    }
}

function get_data() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    const check_if_exit_result = check_if_exist(username);
    if (!check_if_exit_result) {
        alert("User Does Not exist\nPlease Register...");
        return false;
    }
    const check_if_pass_result1 = check_if_pass_result2(pass, username);
    if (!check_if_pass_result1) {
        alert("Invalid Username or Password");
        return false;
    }
    else {
        console.log(role);
        alert("login succses");
        if (role === "admin") {
            return window.location.replace("adminDashboard/dashboard.html")
        }
        else {
            return window.location.replace("user/userDashboard.html");
        }

    }
}
function validate_login() {
    const user_data_arr = get_data();
    if (user_data_arr === false) {
        return false;
    }
    // window.location.replace("dashboard.html")
    return false;
}



