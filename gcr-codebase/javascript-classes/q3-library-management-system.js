// Q3: Library Management System
"use strict";
class Book {
    constructor(title, author, isbn, isIssued = false) { Object.assign(this, { title, author, isbn, isIssued }); }
    issueBook() {
        if (this.isIssued) { console.log(`${this.title} is already issued.`); return false; }
        this.isIssued = true; console.log(`Issued: ${this.title}`); return true;
    }
    returnBook() { this.isIssued = false; console.log(`Returned: ${this.title}`); }
}
const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
    new Book("Atomic Habits", "James Clear", "ISBN103", true),
    new Book("Ikigai", "Hector Garcia", "ISBN104")
];
console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => console.log(`${book.title} by ${book.author} (${book.isbn})`));
const requestedISBN = "ISBN102"; // Change ISBN to test another book.
const selectedBook = books.find(book => book.isbn === requestedISBN);
if (selectedBook) selectedBook.issueBook(); else console.log("No book found with that ISBN.");
console.log("Book status:", books.map(book => `${book.title}: ${book.isIssued ? "Issued" : "Available"}`));
