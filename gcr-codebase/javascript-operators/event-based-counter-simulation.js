// Q6. Event-Based Counter Simulation
let count = 0;

function showCount(action) {
    // Nested function can access count from the outer scope.
    function displayCurrentCount() {
        console.log(`${action}: count = ${count}`);
    }
    displayCurrentCount();
}

function increment() {
    count++;
    showCount("Increment clicked");
}

function decrement() {
    count--;
    showCount("Decrement clicked");
}

// Simulate clicks by calling the functions.
increment();
increment();
decrement();
