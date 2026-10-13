// Q8. Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const cartTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedTotal = 0;

// Apply category discounts.
for (const product of cart) {
    let discountRate = 0;
    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }
    discountedTotal += product.price * (1 - discountRate);
}

// Apply extra 5% discount when original cart total exceeds ₹50,000.
if (cartTotal > 50000) {
    discountedTotal *= 0.95;
}

console.log(`Original cart total: ₹${cartTotal.toFixed(2)}`);
console.log(`Final total after discounts: ₹${discountedTotal.toFixed(2)}`);
