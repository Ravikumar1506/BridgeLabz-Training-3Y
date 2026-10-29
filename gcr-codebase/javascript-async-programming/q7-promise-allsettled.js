// Q7. The Lazy Loader: Promise Combinator Practice

// Load profile after 2 seconds
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Profile failed to load");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

// Load posts after 1.5 seconds
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Posts failed to load");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

// Load messages after 1 second
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Messages failed to load");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

// Record the start time
const startTime = Date.now();

// Handle all three Promises together
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
]).then((results) => {
    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(moduleNames[index] + ": Success - " + result.value);
        } else {
            console.log(moduleNames[index] + ": Failed - " + result.reason);
        }
    });

    // Calculate total time taken
    const endTime = Date.now();
    const totalTime = endTime - startTime;

    console.log("Total time taken: " + totalTime + " ms");
});
