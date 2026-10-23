// Q7: Login Form Validation using RegExp (open in a browser)
"use strict";
if (typeof document === "undefined") {
    console.log("Open this script through an HTML page in a browser.");
} else {
    document.body.innerHTML = `<main style="max-width:400px;margin:30px auto;font-family:Arial"><h2>Login</h2>
    <form id="login" novalidate><label>Username</label><input id="username"><small id="userError"></small>
    <label>Password</label><input id="password" type="password"><small id="passError"></small>
    <button>Log In</button><p id="message"></p></form></main>`;
    const style = document.createElement("style");
    style.textContent = "label,input,small{display:block;width:100%;box-sizing:border-box;margin:6px 0}input{padding:8px;border:2px solid #aaa}small{color:red;min-height:16px}";
    document.head.appendChild(style);
    document.getElementById("login").addEventListener("submit", event => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const userOkay = /^.{5,}$/.test(username);
        const errors = [];
        if (password.length < 8) errors.push("at least 8 characters");
        if (!/[0-9]/.test(password)) errors.push("a number");
        if (!/[A-Z]/.test(password)) errors.push("an uppercase letter");
        if (!/[a-z]/.test(password)) errors.push("a lowercase letter");
        if (!/[^A-Za-z0-9]/.test(password)) errors.push("a special character");
        document.getElementById("username").style.borderColor = userOkay ? "green" : "red";
        document.getElementById("password").style.borderColor = errors.length ? "red" : "green";
        document.getElementById("userError").textContent = userOkay ? "" : "Username must contain at least 5 characters.";
        document.getElementById("passError").textContent = errors.length ? `Password needs ${errors.join(", ")}.` : "";
        const valid = userOkay && errors.length === 0;
        document.getElementById("message").textContent = valid ? "Validation successful!" : "Please fix the errors above.";
        document.getElementById("message").style.color = valid ? "green" : "red";
        console.log("Login form valid:", valid);
    });
}
