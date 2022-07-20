const mainArray = [[]];
let le = mainArray.length;
function select() {
    var select = document.getElementById('choose');
    var value = select.options[select.selectedIndex].value;


    console.log(mainArray);
    // console.log(mainArray.length-1);
    // console.log(mainArray[mainArray.length - 1].length);

    for (let i = 0; i < le; i++) {
        // if (mainArray.length===1) {
        //     mainArray[i].push(value);
        //     break;
        // }
        for (let j = mainArray[i].length - 1; j < mainArray[i].length; j++) {

            if (mainArray[i][j] !== value) {
                console.log("selected", mainArray[i][j]);
                console.log("value", value);
                display();
                break;
                mainArray.push(value);
            }
            else {
                mainArray[i].push(value);
                display();
                // break;
            }
            // if (!mainArray[i][j] == value) {
            //     console.log("selected", mainArray[i][j]);
            //     console.log("value", value);
            //     mainArray[i].push(value);
            // }



            //     if (!mainArray[i][j] == value) {
            //     mainArray[i].push(value);
            //     break;
            // }
        }
        console.log("mainArray", mainArray[i]);
        // if (mainArray !== value) {
        //     console.log("selected", mainArray[i][j]);
        //     console.log("value", value);
        //     mainArray.push(value);
        //     display();
        //     break;

        // }
        // else {
        //     display();
        //     continue;
        //     // break;
        // }



        // if (!mainArray[i][mainArray[i].length] == value) {
        //     mainArray[i].push(value);
        //     break;
        // }
        // mainArray[i].push(value);
        // break;
    }
    return false;
}

function display() {

    let t = "";
    for (let i = 0; i < mainArray.length; i++) {
        for (let j = 0; j < mainArray[i].length; j++) {
            t += mainArray[i][j] + " ";
        }
        t += "<br>";
        document.getElementById("output").innerHTML = t;
    }

}
//  window.location.reload();
function reset() {
    document.getElementById("bookAddForm").reset();
}





mainArray[0].push("1");
mainArray[0].push("2");
mainArray[0].push("3");
mainArray[0].push("f");

mainArray.push(["4"]);
mainArray[1].push("1");
mainArray[1].push("2");
mainArray[1].push("3");
mainArray[1].push("f");
mainArray.push("5");
mainArray.push("6");
mainArray.push("7");

console.log(mainArray);
console.log(mainArray[0].length - 1);
console.log(mainArray[0][0]);
console.log(mainArray.length - 1);
console.log(mainArray[mainArray.length - 1].length);
let t = "";
for (let i = 0; i < mainArray.length; i++) {
    for (let j = 0; j < mainArray[i].length; j++) {
        t += mainArray[i][j];
    }
    t += "<br>";
}
document.write(t);

