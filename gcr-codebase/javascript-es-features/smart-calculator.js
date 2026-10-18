// Q7. Smart Calculator
"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0, selectedOperation = "divide";
class InvalidOperationError extends Error { constructor(operation) { super(`Unsupported operation: ${operation}`); this.name = "InvalidOperationError"; } }
function calculate(operation, a, b) {
    switch (operation) {
        case "add": return a + b;
        case "divide": if (b === 0) throw new RangeError("Cannot divide by zero."); return a / b;
        case "power": return Math.pow(a, b);
        case "root": if (a < 0) throw new RangeError("Cannot take square root of a negative number."); return Math.sqrt(a);
        case "subtract": return a - b;
        default: throw new InvalidOperationError(operation);
    }
}
try { console.log(`Operation: ${selectedOperation}; Inputs: ${num1}, ${num2}; Result: ${calculate(selectedOperation, num1, num2)}`); }
catch (error) { console.log(`Operation: ${selectedOperation}; Inputs: ${num1}, ${num2}; Error: ${error.name} - ${error.message}`); }

