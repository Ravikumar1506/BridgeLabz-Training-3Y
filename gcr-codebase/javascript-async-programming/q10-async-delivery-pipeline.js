// Q10. The Final Delivery: Async Pipeline Debugger

// Simulate each delivery step with a random delay and result
function deliveryStep(message) {
    return new Promise((resolve, reject) => {
        // Generate a delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            // Randomly simulate success or failure
            if (Math.random() < 0.2) {
                reject(new Error("Delivery step failed"));
            } else {
                resolve(message);
            }
        }, delay);
    });
}

// Run all delivery steps one by one
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Wait for each step before starting the next one
        const order = await deliveryStep("Step 1: Order taken");
        console.log(order);

        const preparation = await deliveryStep("Step 2: Food prepared");
        console.log(preparation);

        const packageReady = await deliveryStep("Step 3: Package ready");
        console.log(packageReady);

        const dispatch = await deliveryStep("Step 4: Out for delivery");
        console.log(dispatch);

        const delivery = await deliveryStep("Delivery completed!");
        console.log(delivery);

    } catch (error) {
        // Stop the pipeline if any step fails
        console.log("Pipeline failed!");
    }
}

// Start the delivery pipeline
runPipeline();

// Explanation:
// 1. Each deliveryStep() call returns a Promise.
// 2. setTimeout() schedules the callback to run after a delay.
// 3. await pauses runPipeline() until the current Promise settles.
// 4. While waiting, JavaScript can execute other tasks.
// 5. If a Promise rejects, execution moves to the catch block.
// 6. After a failure, the remaining delivery steps are skipped.
