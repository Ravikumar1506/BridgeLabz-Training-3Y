// Q5. Frontend Rush: Avoiding Callback Hell

// Each stage takes 1 second to complete
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName + " completed");
        if (callback) {
            callback();
        }
    }, 1000);
}

// Part 1: Using nested callbacks (Callback Hell)
function runWithCallbacks() {
    console.log("Starting pipeline with callbacks...");

    runStage("Design", () => {
        runStage("Build", () => {
            runStage("Test", () => {
                runStage("Deploy", () => {
                    runStage("Celebrate", () => {
                        console.log("Pipeline completed!");
                    });
                });
            });
        });
    });
}

// Part 2: Using async/await
function runStageAsync(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Starting pipeline with async/await...");

    await runStageAsync("Design");
    await runStageAsync("Build");
    await runStageAsync("Test");
    await runStageAsync("Deploy");
    await runStageAsync("Celebrate");

    console.log("Pipeline completed!");
}

// Run both versions one after another
runWithCallbacks();

setTimeout(() => {
    console.log("\n-----------------------------\n");
    runWithAsyncAwait();
}, 5500);

// Explanation:
// Nested callbacks make the code move deeper with every stage,
// which makes it harder to read and maintain.
// Async/await makes asynchronous code look more like normal,
// step-by-step code and is easier to understand.
