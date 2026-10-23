// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
"use strict";
class Cart {
    constructor() { this.items = []; }
    addItem(name, price, quantity) {
        if (price < 0 || quantity < 1) { console.log("Invalid price or quantity."); return; }
        this.items.push({ name, price, quantity });
    }
    getTotal() { return this.items.reduce((total, item) => total + item.price * item.quantity, 0); }
    applyCoupon(code) {
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code);
        if (!match || Number(match[2]) > 100) return { valid: false, discountPercent: 0, finalTotal: this.getTotal() };
        const discountPercent = Number(match[2]);
        return { valid: true, discountPercent, finalTotal: this.getTotal() * (1 - discountPercent / 100) };
    }
}
const cart = new Cart();
cart.addItem("Headphones", 1500, 2);
cart.addItem("Notebook", 100, 3);
cart.addItem("Keyboard", 2200, 1);
console.log("Cart items:", JSON.stringify(cart.items));
console.log(`Cart total: ₹${cart.getTotal().toFixed(2)}`);
const couponCode = "SAVE20"; // Try DISC10 or an invalid code.
const result = cart.applyCoupon(couponCode);
if (result.valid) {
    console.log(`Coupon ${couponCode} accepted: ${result.discountPercent}% discount`);
    console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
} else {
    console.log(`Invalid coupon. Final total: ₹${result.finalTotal.toFixed(2)}`);
}
