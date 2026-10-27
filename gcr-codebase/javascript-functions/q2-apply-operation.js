// Q2: Apply an Operation with a Callback
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number.
console.log("Doubled:", applyOperation(numbers, number => number * 2));

// Square each number.
console.log("Squared:", applyOperation(numbers, number => number * number));
