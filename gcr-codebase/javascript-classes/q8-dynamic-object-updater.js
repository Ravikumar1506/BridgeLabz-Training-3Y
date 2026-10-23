// Q8: Dynamic Object Updater (open in a browser)
"use strict";
const user = { name: "John", email: "john@mail.com", age: 21 };
if (typeof document === "undefined") {
    console.log("Initial user object:", user);
    console.log("Open this script through an HTML page in a browser to edit values.");
} else {
    document.body.innerHTML = `<main style="max-width:420px;margin:30px auto;font-family:Arial"><h2>Edit User</h2>
    <form id="userForm"><label>Name</label><input id="name" value="John" required>
    <label>Email</label><input id="email" type="email" value="john@mail.com" required>
    <label>Age</label><input id="age" type="number" min="0" value="21" required>
    <button>Update User</button></form><h3>Updated details</h3><pre id="details"></pre></main>`;
    const style = document.createElement("style");
    style.textContent = "label,input{display:block;width:100%;box-sizing:border-box;margin:8px 0}input{padding:8px}pre{background:#eee;padding:12px}";
    document.head.appendChild(style);
    function displayUser() {
        document.getElementById("details").textContent = JSON.stringify(user, null, 2);
        console.log("Current user object:", user);
    }
    displayUser();
    document.getElementById("userForm").addEventListener("submit", event => {
        event.preventDefault();
        user.name = document.getElementById("name").value.trim();
        user.email = document.getElementById("email").value.trim();
        user.age = Number(document.getElementById("age").value);
        displayUser();
    });
}
