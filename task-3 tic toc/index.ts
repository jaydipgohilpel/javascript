var flag = false;
var player = "";
function disabled(d) {
    d.disabled = 'true'
}
function putValues(btn): void {
    if (flag) {
        btn.value = "X"
        flag = false;
    }
    else {
        btn.value = "0"
        flag = true;
    }
}
function checkWinner(): void {
    let result = document.getElementById("result");
    const b = [];
    for (let i = 1; i <= 9; i++) {
        b[i] = document.getElementById(`b${i}`).value;
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
function disabledAll(): void {
    const k = [];
    for (let i = 1; i <= 9; i++) {
        k[i] = document.getElementById(`b${i}`);
        k[i].disabled = true;
    }
}
function restart(): void {
    const k = [];
    for (let i = 1; i <= 9; i++) {
        k[i] = document.getElementById(`b${i}`);
        k[i].disabled = false;
        k[i].value = " ";
    }
}
function main(btn): void {
    disabled(btn);
    putValues(btn);
    checkWinner();
}
