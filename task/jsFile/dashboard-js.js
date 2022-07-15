var w = "";
var role = "";
var e = "";
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


function checkBookExist(bName) {
    if(JSON.parse(localStorage.getItem("bookDb")===0))
    {
        return true;
    }
    let id = JSON.parse(localStorage.getItem("bookDb"));
    for (let i = 0; i < id.length; i++) {
        if (id[i].bookname === bName) {
            alert("Book was Already exist\nPlease add New Book...");
            return false;
        }
    }
}


// book data add
function saveBookData() {
    const bName = document.getElementById("bookname").value;
    const bPrice = document.getElementById("bookprice").value;
    const bAutherName = document.getElementById("authername").value;
    if (bName==="" || bPrice==="" || bAutherName==="") {return true;}

   const ifBookExistResult=checkBookExist(bName);
   if (ifBookExistResult === false) {
       return false;
   }


    let le = 0;
        JSON.parse(localStorage.getItem("bookDb"));
        le = JSON.parse(localStorage.getItem("bookDb"));
      
    let bookData = [];
    const bookObj = {
        "bId":(le.length+1),
        "bookname": bName,
        "bookprice": bPrice,
        "authername": bAutherName,
        "username": w,
        "purchaseBy":"Not purchase Yet"
    }
    bookData = JSON.parse(localStorage.getItem("bookDb"));
    console.log(bookData);
    bookData.push(bookObj);
    localStorage.setItem("bookDb", JSON.stringify(bookData));
    alert("Book was added ");
    reset();
    window.location.reload();
    return true;
}
function reset() {
    // window.location.replace("dashboard.html")
    document.getElementById("bookAddForm").reset();
  }
// console.log(localStorage.getItem("bookDb") + 1);

// let user_data_arr = [];
//     const data_obj = {
      
//     };
    
//         user_data_arr = JSON.parse(localStorage.getItem("register"));
//         user_data_arr.push(data_obj);
//         return user_data_arr;

//         let ls = localStorage;
//         localStorage.setItem("register", JSON.stringify(user_data_arr));
//         alert("Registration succsesfully\nPlease login...")
//         return true;
//     }
//     console.log(localStorage.key("register") != "register");