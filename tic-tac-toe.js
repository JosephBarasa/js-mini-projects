const prompt = require('prompt-sync')();

function makeMove(turn, board) {
    while(true) {
        const row = parseFloat(prompt("Enter row : "));
        const col = parseFloat(prompt("Enter column : "));

        if (isNaN(row) || row < 0 || row > 3) console.log("Invalid row.");
        else if (isNaN(col) || col < 0 || col > 3) console.log("Invalid column.");
        else if ( board[row-1][col-1] !== " ") console.log("Please enter a position that is empty.");
        else {
            board[row -1][col -1] = turn
            break;
        };
    }

}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]


let turn = "X";
let turnCount = 0;
printBoard(board);

while (turnCount < 9) {
    makeMove(turn, board);
    printBoard(board);
    if (turn === "X") turn = "O"
    else turn = "X";
    turnCount++;
}

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        let rowString = "";
        for (let j = 0; j < row.length; j++) {
            rowString += row[j];
            if (j !== row.length -1) rowString += " | "
        }
        console.log(rowString)
        if (i !== board.length - 1) console.log("------------");
    }
}