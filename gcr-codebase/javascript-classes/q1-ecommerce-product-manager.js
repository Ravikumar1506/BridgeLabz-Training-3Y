// Q1: E-Commerce Product Manager
"use strict";
class Product {
    constructor(id, name, price, category) {
        Object.assign(this, { id, name, price, category });
    }
    applyDiscount(percent) { this.price -= this.price * percent / 100; }
    getDetails() { return `ID: ${this.id} | ${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`; }
}
const products = [
    new Product(1, "Headphones", 1500, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Keyboard", 2200, "Electronics"),
    new Product(4, "Bottle", 650, "Accessories")
];
products[0].applyDiscount(10);
console.log("All products:");
products.forEach(product => console.log(product.getDetails()));
console.log("Products priced above ₹1000:");
products.filter(product => product.price > 1000).forEach(product => console.log(product.getDetails()));
