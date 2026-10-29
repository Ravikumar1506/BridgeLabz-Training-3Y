// Q4. DevOps Delay: Async Timeout Race

// Simulate a server response
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random server failure
            if (Math.random() < 0.2) {
                reject(serverName + " deployment failed!");
            } else {
                resolve(serverName + " deployment completed");
            }
        }, delay);
    });
}

// Start deployment on both servers at the same time
const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all() waits for both servers to complete
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

// Promise.race() returns the result of the first settled Promise
Promise.race([serverA, serverB])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response error:", error);
    });

