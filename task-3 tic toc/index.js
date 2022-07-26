var flag = false;
var player = "";
function disabled(d) {
    d.disabled = 'true';
}
function putValues(btn) {
    if (flag) {
        btn.value = "X";
        flag = false;
    }
    else {
        btn.value = "0";
        flag = true;
    }
}
function checkWinner() {
    var result = document.getElementById("result");
    var b = [];
    for (var i = 1; i <= 9; i++) {
        b[i] = document.getElementById("b".concat(i)).value;
    }
    if (b[1] === b[2] && b[2] === b[3] && b[1] != " " && b[2] != " " && b[3] != " " ||
        b[4] === b[5] && b[5] === b[6] && b[4] != " " && b[5] != " " && b[6] != " " ||
        b[7] === b[8] && b[8] === b[9] && b[7] != " " && b[8] != " " && b[9] != " " ||
        b[1] === b[4] && b[4] === b[7] && b[1] != " " && b[4] != " " && b[7] != " " ||
        b[2] === b[5] && b[5] === b[8] && b[2] != " " && b[5] != " " && b[8] != " " ||
        b[3] === b[6] && b[6] === b[9] && b[3] != " " && b[6] != " " && b[9] != " " ||
        b[1] === b[5] && b[5] === b[9] && b[1] != " " && b[5] != " " && b[9] != " " ||
        b[7] === b[5] && b[5] === b[3] && b[7] != " " && b[5] != " " && b[3] != " ") {
        if (flag === false) {
            alert("Player is 2 winner");
            disabledAll();
        }
        else {
            alert("Player is 1 winner");
            disabledAll();
        }
    }
    else if (b[1] != " " && b[2] != " " && b[3] != " " &&
        b[4] != " " && b[5] != " " && b[6] != " " &&
        b[7] != " " && b[8] != " " && b[9] != " ") {
        alert("Game is Draw");
        restart();
    }
}
function disabledAll() {
    var k = [];
    for (var i = 1; i <= 9; i++) {
        k[i] = document.getElementById("b".concat(i));
        k[i].disabled = true;
    }
}
function restart() {
    var k = [];
    for (var i = 1; i <= 9; i++) {
        k[i] = document.getElementById("b".concat(i));
        k[i].disabled = false;
        k[i].value = " ";
    }
}
function main(btn) {
    disabled(btn);
    putValues(btn);
    checkWinner();
}
