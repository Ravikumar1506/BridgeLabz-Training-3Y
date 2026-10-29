// Q9. Debugging the Event Loop

// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

// setTimeout callback runs as a macrotask
setTimeout(() => console.log("Timeout callback"), 0);

// Promise callback runs as a microtask
Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// JavaScript executes synchronous code first.
// After synchronous code finishes, it processes microtasks.
// Promise callbacks are microtasks, so they execute before
// setTimeout callbacks, which are macrotasks.
