// Q3. Bug Tracker: Callback to Promise Migration

// Convert the callback-based function into a Promise-based function
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random API failure
            const apiFailed = Math.random() < 0.5;

            if (apiFailed) {
                reject("Failed to fetch bugs from the API!");
            } else {
                const bugs = ["UI glitch", "API timeout", "Login failure"];
                resolve(bugs);
            }
        }, 1000);
    });
}

// Fetch bugs and display them in a table
getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

