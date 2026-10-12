// Q7. Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Change this test value to try different guesses.

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (userGuess >= 1 && userGuess <= 50 && Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
} else if (userGuess > secretNumber && userGuess <= 50) {
    console.log("Too high");
} else if (userGuess < secretNumber && userGuess >= 1) {
    console.log("Too low");
} else {
    console.log("Guess a number between 1 and 50.");
}
console.log("Secret number (for testing):", secretNumber);
