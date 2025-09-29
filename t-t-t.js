const prompt = require('prompt-sync')();

//function to get the position that a user selects

function getPosition(turn, board) {

    while (true) {
        const row = parseInt(prompt("Enter a row : "));
        const col = parseInt(prompt("Enter a column : "));

        if (isNaN(row) || row < 0 || row > 3) console.log("Invalid row.")
        else if (isNaN(col) || col < 0 || col > 3) console.log("Invalid column.")
        else if (board[row-1][col-1] !== " ") console.log("This position has already been filled.")
        else {
            board[row-1][col-1] = turn
            break
        }
    }
}

//initiating the board array

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


//function to print the board

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i]
        let seperator = ""
        for (let j = 0; j < row.length; j++) {
            seperator += row[j]
            if ( j !== row.length - 1) seperator += " | "
        }
        console.log(seperator)
        if (i !== board.length - 1) console.log("----------")
    }
}

let turn = "X"
let turnCount = 0
printBoard(board)

while (turnCount < 9) {
    getPosition(turn, board)
    printBoard(board)
    if (turn === "X") turn = "O"
    else turn = "X"
    turnCount++
    console.log(` ${turn} - your turn to play.`)
}