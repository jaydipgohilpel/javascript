var w = "";
var role = "";
let l = localStorage.length;
let id = JSON.parse(localStorage.getItem("register"));
for (let i = 0; i < id.length; i++) {
    if (id[i].is_active == true) {
        w = id[i].username;
        role = id[i].role;
        console.log(w);
    }
}
if (w === "") {
    alert("Please login first");
    window.location.replace("../login.html");

}
if (role === "admin") {
    console.log("role is admin :", role);
}
else {
    console.log("role is user :", role);
}
function logout() {
    for (let i = 0; i < id.length; i++) { //&& localStorage.getItem("login_user") == id[i].username)
        if (id[i].is_active == true) {
            id[i].is_active = false;
            console.log(id);
            localStorage.setItem("register", JSON.stringify(id));

        }
    }
    // window.location.replace("login.html");
    // return false;

}




