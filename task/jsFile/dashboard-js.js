var loginUser = "";
var role = "";


let id = JSON.parse(localStorage.getItem("register"));
for (let i = 0; i < id.length; i++) {
    if (id[i].is_active == true) {
        loginUser = id[i].username;
        role = id[i].role;
    }
}
if (!loginUser) {
    alert("Please login first");
    window.location.replace("../login.html");

}
function logout() {
    for (let i = 0; i < id.length; i++) { 
        if (id[i].is_active == true) {
            id[i].is_active = false;
            console.log(id);
            localStorage.setItem("register", JSON.stringify(id));

        }
    }
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
        "username": loginUser,
        "purchaseBy":[]
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
    document.getElementById("bookAddForm").reset();
  }
