// Q4. Debugging Mystery
"use strict";
// Original greeting = "Welcome" throws ReferenceError because greeting is undeclared.
function showMessage() {
    const greeting = "Welcome"; // Declare locally to fix the error.
    const watchGreeting = greeting; // Add watchGreeting to the VS Code Watch panel.
    console.log(greeting);
    console.log("Watch variable:", watchGreeting);
}
showMessage();

