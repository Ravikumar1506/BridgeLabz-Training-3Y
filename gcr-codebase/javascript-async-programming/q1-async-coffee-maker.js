// Q1. The Startup Morning: Async Coffee Maker
// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("Water is boiling...");
                resolve();
            }
        }, 1500);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to brew coffee!");
            } else {
                console.log("Coffee is brewing...");
                resolve();
            }
        }, 1500);
    });
}

// Step 3: Pour coffee into a cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("Pouring coffee into the cup...");
                resolve();
            }
        }, 1500);
    });
}

// Execute the steps one by one using Promise chaining
boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation failed:", error);
    });

