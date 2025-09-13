let currentInput = "";
let operator = "";
let firstNumber = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;
    firstNumber = currentInput;
    operator = op;
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || firstNumber === "") return;

    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);

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
            result = num2 === 0 ? "Error" : num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById("display").value = result;
    currentInput = result.toString();
    operator = "";
    firstNumber = "";
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    firstNumber = "";
    document.getElementById("display").value = "";
}