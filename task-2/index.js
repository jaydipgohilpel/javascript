const mainArray = [[]];
let le = mainArray.length;
function select() {
    var select = document.getElementById('choose');
    var value = select.options[select.selectedIndex].value;


// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("Water");

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);


    






    // let t = "";
    // let first = "";
    // first = mainArray[0][0];
    // for (let i = 0; i < mainArray.length; i++) {

    //     for (let j = mainArray[i].length - 1; j < mainArray[i].length; j++) {
    //         if (mainArray[i][j] === value) {
    //             break;
    //         }    
    //         if (mainArray[i][j] !== value) {               
    //             mainArray[i].push(value);              
    //             display();
    //             return false;
    //         }
    //     }
    // }
    // mainArray.push([value]);
    // display();
    // return false;
}


function display() {

    let t = "";
    let first = "";
    let second = "";
    for (let i = 0; i < mainArray.length; i++) {
        first = mainArray[0][0];
        second = mainArray[0][1];
        for (let j = 0; j < mainArray[i].length; j++) {
            if (i == 0) {
                t += mainArray[i][j];
            }
            if (i > 0) {
                if (mainArray[i - 1][j] === mainArray[i][j]) {
                    t += mainArray[i][j];
                    continue;
                }
                if (mainArray[i - 1][j] !== mainArray[i][j]) {
                    // t += "&nbsp;&nbsp;" + mainArray[i][j];
                    t += "" + mainArray[i][j];
                    continue;
                }
            }

        }
        t += "<br>";
        document.getElementById("output").innerHTML = t;
    }
}

// mainArray[0].push("1");
// mainArray[0].push("2");
// mainArray[0].push("3");
// mainArray[0].push("f");

// mainArray.push(["4"]);
// mainArray.push("5");
// mainArray.push("6");
// mainArray.push("7");
// mainArray[1].push("1");
// mainArray[1].push("2");
// mainArray[1].push("3");
// mainArray[1].push("f");






// console.log(mainArray);
// console.log(mainArray[0].length - 1);
// console.log(mainArray[0][0]);
// console.log(mainArray.length - 1);
// console.log(mainArray[mainArray.length - 1].length);
// let t = "";
// for (let i = 0; i < mainArray.length; i++) {
//     for (let j = 0; j < mainArray[i].length; j++) {
//         t += mainArray[i][j];
//     }
//     t += "<br>";
// }
// document.write(t);
// // document.write("m==>"+mainArray[4][mainArray[4].length - 1]);

// var table = document.getElementById("myTable");
// var row = table.insertRow(0);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell2 = row.insertCell(2);
// cell1.innerHTML = "h";
// cell2.innerHTML = "t";



//main code add

// for (let j = mainArray[i].length - 1; j < mainArray[i].length; j++) {

//     if (mainArray[i][j] === value) {
//         break;
//     }
//     if (mainArray[i][j] !== value) {
//         mainArray[i].push(value);
//         display();
//         return false;
//     }
  


// }


// }

// mainArray.push([value]);
// // document.getElementById("output").innerHTML = t;
// display();
// return false;

                                                                                                                    