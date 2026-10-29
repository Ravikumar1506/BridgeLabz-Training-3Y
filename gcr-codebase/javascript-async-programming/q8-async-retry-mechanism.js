// Q8. Order Processing Flow: Async Retry Mechanism

// Submit an order and randomly simulate API failure
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }
        }, 1000);
    });
}

// Try to submit the order up to 3 times
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // Throw an error if all three attempts fail
    throw new Error("Order could not be processed");
}

// Handle the final result
async function main() {
    try {
        await processOrder();
        console.log("Order processing completed.");
    } catch (error) {
        console.log(error.message);
    }
}

main();
