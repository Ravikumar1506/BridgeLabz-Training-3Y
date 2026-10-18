// Q5. Hoisting Lab: The Sequence Trap
"use strict";
// var is hoisted and initialized as undefined; function declarations are callable early.
// Reading let status before its declaration would throw ReferenceError (temporal dead zone).
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
console.log(score); announce();
function startGame() { console.log(status); }
startGame();
// Arrow functions are not hoisted like function declarations; call after assignment.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);
announceArrow(); startGameArrow();
