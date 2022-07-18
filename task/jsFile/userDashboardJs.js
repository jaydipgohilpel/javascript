var loginUser = "";
var role = "";

// let l = localStorage.length;
let id = JSON.parse(localStorage.getItem("register"));
for (let i = 0; i < id.length; i++) {
    if (id[i].is_active) {
        loginUser = id[i].username;
        role = id[i].role;
        // console.log(loginUser);
    }
}
if (!loginUser) {
    alert("Please login first");
    window.location.replace("../login.html");
}
// if (role === "admin") {
//     console.log("role is admin :", role);
// }
// else {
//     console.log("role is user :", role);
// }
function logout() {
    for (let i = 0; i < id.length; i++) {
        if (id[i].is_active) {
            id[i].is_active = false;
            console.log(id);
            localStorage.setItem("register", JSON.stringify(id));

        }
    }
}

// book data add
function saveBookData() {
    const bName = document.getElementById("bookname").value;
    const bPrice = document.getElementById("bookprice").value;
    const bAutherName = document.getElementById("authername").value;
    if (!bName || !bPrice || !bAutherName) { return true; }
    alert("Book was added ");
    reset();
    window.location.reload();
    return true;
}
function reset() {
    document.getElementById("bookAddForm").reset();
}
function selectbook() {
    var select = document.getElementById('choosebook');
    var value = select.options[select.selectedIndex].value;
    if (confirm(`Are you sure you want to choose  " ${value} " book?`)) {
        const bookData = JSON.parse(localStorage.getItem("bookDb"));
        bookData.forEach(e => {
            if (e.bookname === value) {
                // check if user already purchased
                if (!e.purchaseBy.includes(loginUser)) { e.purchaseBy.push(loginUser); } else { alert("This book already purchase"); }
                localStorage.setItem("bookDb", JSON.stringify(bookData));
                window.location.reload();
            }
        });
    }
}


function deleteBook(bookid, bookname) {
    if (confirm(`Are you sure you want to delete this Book ${bookname}?`)) {
        const bookData = JSON.parse(localStorage.getItem("bookDb"));
        bookData.forEach(e => {  
            if(e.bId===bookid)
            {
                e.purchaseBy.forEach(user => {
                    if (user === loginUser) {
                        let index = e.purchaseBy.indexOf(loginUser);
                        e.purchaseBy.splice(index, 1);
                        localStorage.setItem("bookDb", JSON.stringify(bookData));
                        window.location.reload();
                    }
                });
            }      
        });


    }

}



