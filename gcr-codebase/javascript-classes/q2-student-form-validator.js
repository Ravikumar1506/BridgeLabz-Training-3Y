// Q2: Student Form Validator (open in a browser)
"use strict";
if (typeof document === "undefined") {
    console.log("Open this script through an HTML page in a browser.");
} else {
    document.body.innerHTML = `<main style="max-width:420px;margin:30px auto;font-family:Arial">
    <h2>Student Registration</h2><form id="studentForm" novalidate>
    <label>Name</label><input id="name"><small id="nameError"></small>
    <label>Email</label><input id="email"><small id="emailError"></small>
    <label>Phone</label><input id="phone"><small id="phoneError"></small>
    <label>Password</label><input id="password" type="password"><small id="passwordError"></small>
    <button>Validate</button><p id="message"></p></form></main>`;
    const style = document.createElement("style");
    style.textContent = "label,input,small{display:block;width:100%;box-sizing:border-box;margin:6px 0}input{padding:8px;border:2px solid #aaa}small{color:red;min-height:16px}";
    document.head.appendChild(style);
    const checks = [
        ["name", "nameError", /^[A-Za-z ]+$/, "Name must contain alphabets only."],
        ["email", "emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email."],
        ["phone", "phoneError", /^\d{10}$/, "Phone must contain exactly 10 digits."],
        ["password", "passwordError", /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Password needs uppercase, number and special character."]
    ];
    document.querySelector("#studentForm").addEventListener("submit", event => {
        event.preventDefault();
        let valid = true;
        checks.forEach(([id, errorId, regex, message]) => {
            const input = document.getElementById(id);
            const okay = regex.test(input.value.trim());
            input.style.borderColor = okay ? "green" : "red";
            document.getElementById(errorId).textContent = okay ? "" : message;
            if (!okay) valid = false;
        });
        document.getElementById("message").textContent = valid ? "Registration details are valid." : "Please correct highlighted fields.";
        console.log("Student form valid:", valid);
    });
}
