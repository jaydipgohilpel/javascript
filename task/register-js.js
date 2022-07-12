function password_match(pass, confirm_pass) {
    if (pass !== confirm_pass) {
        alert("Passwords did not match");
        return false;
    } else {
        return true;
    }
}
function check_if_exist(username, email) {
    let l = localStorage.length;
    for (let i = 1; i <= l; i++) {
        let id = JSON.parse(localStorage.getItem("id:" + i));
        console.log();
        if (id.username == username || id.email == email) {
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


    const user_data = {};
    user_data.first_name = first_name;
    user_data.last_name = last_name;
    user_data.username = username;
    user_data.role = role;
    user_data.email = email;
    user_data.pass = confirm_pass;

    return user_data;

}


//main function
//register now button click
function validate_register() {

    const user_data_arr = get_data();
    if (user_data_arr === false) {
        return false;
    }
    // console.log(user_data_arr);


    //database
    let ls = localStorage;

    localStorage.setItem("id:" + (ls.length + 1), JSON.stringify(user_data_arr));
    alert("Registration succsesfully\nPlease login...")
    return true;
}
// let  name=JSON.parse(localStorage.getItem("id"));
// let  name2=localStorage.getItem("id");
// console.log(name.username);
