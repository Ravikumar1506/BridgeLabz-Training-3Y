// Q8. Strict Mode Showdown
"use strict";
// In strict mode duplicate parameter names cause SyntaxError, undeclared assignment
// causes ReferenceError, and deleting an unqualified identifier is illegal.
// The original invalid function is commented out so this file remains runnable.
// Without strict mode, duplicate parameters are allowed in ordinary functions;
// undeclared assignment may create a global, and delete total returns false.
function demo(firstValue, secondValue) {
    let total = 10; // ES6 declaration avoids an implicit global.
    console.log("Parameters:", firstValue, secondValue);
    console.log("Total:", total);
    total = 20; console.log("Updated total:", total);
}
demo(5, 10);

