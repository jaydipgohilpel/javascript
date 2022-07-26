var flag = false;
var player = "";
disabled = (d) => d.disabled = 'true';
function putValues(btn) {
    if (flag) {
        btn.value = "X"
        flag = false;
    }
    else {
        btn.value = "0"
        flag = true;
    }
}
function checkWinner() {
    const b = [];
    for (let i = 1; i <= 9; i++) {
        b[i] = document.getElementById(`b${i}`).value;
    }
    if (b[1] === b[2] && b[2] === b[3] || b[4] === b[5] && b[5] === b[6] || b[7] === b[8] && b[8] === b[9]
    
    
    
    
        ) {
        if (flag === false) {
            alert("Player is 2 winner")
        }
        else {
            alert("Player is 1 winner")
        }

    }

}
function main(btn) {
    disabled(btn);
    putValues(btn);
    checkWinner();
}
