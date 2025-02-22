function calculator() {
    // Get user input
    const number1 = parseFloat(prompt("Enter the first number:"));
    const number2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter the mathematical operation (+, -, *, /):");

    let result;

    // Perform the operation based on user input
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            return "Invalid operation";
    }

    // Return the formatted string
    return `${number1} ${operation} ${number2} = ${result}`;
}

// Call the function and display the result
const resultString = calculator();
console.log(resultString);