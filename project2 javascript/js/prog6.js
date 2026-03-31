//  Create a calculator using switch-case (+, -, *, /). 

let num1 = 20;
let num2 = 10;
let operator = "*";  // change +, -, *, /

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        result = (num2 !== 0) ? num1 / num2 : "Cannot divide by 0";
        break;

    default:
        result = "Invalid operator";
}

console.log("Result:", result);