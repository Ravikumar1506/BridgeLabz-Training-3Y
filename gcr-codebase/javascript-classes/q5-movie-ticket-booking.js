// Q5: Movie Ticket Booking (open in a browser)
"use strict";
if (typeof document === "undefined") {
    console.log("Open this script through an HTML page in a browser.");
} else {
    document.body.innerHTML = `<main style="max-width:420px;margin:30px auto;font-family:Arial"><h2>Movie Ticket Booking</h2>
    <form id="booking" novalidate><label>Name</label><input id="name"><small id="nameError"></small>
    <label>Email</label><input id="email"><small id="emailError"></small>
    <label>Seats (1-10)</label><input id="seats" type="number"><small id="seatsError"></small>
    <button>Book Tickets</button></form><p id="ticket"></p></main>`;
    const style = document.createElement("style");
    style.textContent = "label,input,small{display:block;width:100%;box-sizing:border-box;margin:6px 0}input{padding:8px;border:2px solid #aaa}small{color:red;min-height:16px}";
    document.head.appendChild(style);
    document.getElementById("booking").addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const seatsText = document.getElementById("seats").value.trim();
        const seats = Number(seatsText);
        const checks = [
            ["name","nameError",/^[A-Za-z ]+$/.test(name),"Name must contain alphabets only."],
            ["email","emailError",/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),"Enter a valid email."],
            ["seats","seatsError",/^\d+$/.test(seatsText)&&seats>=1&&seats<=10,"Seats must be a whole number from 1 to 10."]
        ];
        let valid = true;
        checks.forEach(([id,errorId,okay,message]) => {
            document.getElementById(id).style.borderColor = okay ? "green" : "red";
            document.getElementById(errorId).textContent = okay ? "" : message;
            if (!okay) valid = false;
        });
        if (valid) {
            const booking = { name, email, seats };
            document.getElementById("ticket").textContent = `Booking Confirmed: ${name} | ${email} | Seats: ${seats}`;
            console.log("Booking details:", booking);
        } else {
            document.getElementById("ticket").textContent = "Please correct highlighted fields.";
            console.log("Booking validation failed.");
        }
    });
}
