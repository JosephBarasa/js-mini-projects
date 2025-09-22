//TEXT-BASED CALCULATOR

const prompt = require("prompt-sync")();
let leftOperand = prompt("Enter first number : ");
const operator = prompt("Enter operator : ");
let rightOperand = prompt("Enter second number : ");

leftOperand = parseInt(leftOperand);
rightOperand = parseInt(rightOperand);

while(isNaN(leftOperand) || isNaN(rightOperand) || leftOperand === '' || rightOperand === '') {
    console.log('Please enter a valid number.');
    let leftOperand = prompt("Enter first number : ");
    const operator = prompt("Enter operator : ");
    let rightOperand = prompt("Enter second number : ");
}

switch (operator) {
    case '+':
        result = leftOperand + rightOperand;
        console.log(`The result is : ${result} `);
        break;
    case '-':
        result = leftOperand - rightOperand;
        console.log(`The result is : ${result}`);
        break;
    case '*':
        result = leftOperand * rightOperand;
        console.log(`The result is : ${result}`);
        break;
    case '%':
        result = leftOperand % rightOperand;
        console.log(`The result is : ${result}`);
        break;
    case '/':
        result = leftOperand / rightOperand;
        console.log(`The result is : ${result}`);
        break;
    default:
        console.log('Please enter a valid operator.');
}

