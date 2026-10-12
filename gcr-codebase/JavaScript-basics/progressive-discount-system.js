// Q6. Progressive Discount System
// Change this sample purchase total to test other discount tiers.
const totalPurchase = 6500;
let discountPercentage;

if (totalPurchase >= 10000) {
    discountPercentage = 25;
} else if (totalPurchase >= 5000) {
    discountPercentage = 15;
} else if (totalPurchase >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = Math.round(totalPurchase * discountPercentage / 100);
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log("Original Total: ₹" + Math.round(totalPurchase));
console.log("Discount: " + discountPercentage + "%");
console.log("Final Price: ₹" + finalPrice);
