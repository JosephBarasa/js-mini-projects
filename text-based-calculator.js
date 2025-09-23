//TEXT-BASED CALCULATOR

const prompt = require("prompt-sync")();

function getNumber(numberString) {
    while (true) {
    number = parseFloat(prompt(`Enter Number ${numberString} : `));
    if (isNaN(number)) {
        console.log(`${number} is not a valid number.`);
    } else {
        return number;
    }
}
}
 

const leftOperand = getNumber("One");

const operator = (prompt("Enter Operator : ")); 

const rightOperand = getNumber("Two");

let result;
let valid = true;
switch (operator) {
    case '+':
        result = leftOperand + rightOperand;
        break;
    case '-':
        result = leftOperand - rightOperand;
        break;
    case '*':
        result = leftOperand * rightOperand;
        break;
    case '%':
        result = leftOperand % rightOperand;
        break;
    case '/':
        if(leftOperand === 0 || rightOperand === 0) {
            valid = false;
            console.log('Zero Division Error !');
        } else {
            result = leftOperand / rightOperand;
        }
        break;
    default:
        valid = false;
        console.log('Please enter a valid operator.');
}

if (valid) console.log(`${leftOperand} ${operator} ${rightOperand} = ${result}`);