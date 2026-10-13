// Q2. String Manipulation Report
const productName = " wireless headphones PRO ";

// Trim spaces, lowercase, then capitalize each word.
let cleanedTitle = productName.trim().toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace the product label and display its length.
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");
console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
