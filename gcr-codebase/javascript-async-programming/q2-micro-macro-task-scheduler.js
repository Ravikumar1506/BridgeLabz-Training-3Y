// Q2. Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout callback is a macrotask
setTimeout(() => {
    console.log("setTimeout callback (Macrotask)");
}, 0);

// Promise.then() callback is a microtask
Promise.resolve().then(() => {
    console.log("Promise callback (Microtask)");
});

// This is a synchronous statement
console.log("Synchronous log");

console.log("End");

// Explanation:
// Synchronous code runs first.
// After synchronous code finishes, JavaScript processes microtasks.
// Microtasks have priority over macrotasks, so the Promise callback
// runs before the setTimeout callback.
