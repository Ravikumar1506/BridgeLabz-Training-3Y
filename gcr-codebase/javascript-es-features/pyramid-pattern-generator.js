// Q6. Pyramid Pattern Generator
"use strict";
const userLimit = 5; // Change to simulate user input; default = 5.
const limit = Number.isInteger(userLimit) && userLimit > 0 ? userLimit : 5;
console.log("Pyramid using let:");
for (let row = 1; row <= limit; row++) { let pattern = ""; for (let column = 1; column <= row; column++) pattern += "* "; console.log(pattern.trim()); }
console.log("Pyramid using var:");
for (var varRow = 1; varRow <= limit; varRow++) { var varPattern = ""; for (var varColumn = 1; varColumn <= varRow; varColumn++) varPattern += "* "; console.log(varPattern.trim()); }
console.log("varRow after loop:", varRow, "varColumn after loop:", varColumn);
