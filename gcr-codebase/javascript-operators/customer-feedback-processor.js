// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;
const lowerFeedback = feedback.toLowerCase();
const containsNegativeWord = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!containsNegativeWord) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
