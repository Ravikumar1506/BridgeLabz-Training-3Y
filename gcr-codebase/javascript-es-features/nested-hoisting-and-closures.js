// Q10. Nested Hoisting and Closures
"use strict";
function outer() {
    console.log("Outer count before assignment:", count); // undefined: var is hoisted.
    var count = 5;
    function inner() {
        console.log("Inner count before assignment:", count); // undefined: inner count shadows outer count.
        var count = 10;
        console.log("Inner count after assignment:", count);
    }
    inner();
    console.log("Outer count after inner():", count);
}
outer();
// Arrow version still has its own local var and closes over outer count.
function outerWithArrow() {
    var count = 5;
    const innerArrow = () => {
        console.log("Arrow local count before assignment:", arrowCount);
        var arrowCount = 10;
        console.log("Arrow local count after assignment:", arrowCount);
        console.log("Outer count via closure:", count);
    };
    innerArrow();
}
outerWithArrow();
