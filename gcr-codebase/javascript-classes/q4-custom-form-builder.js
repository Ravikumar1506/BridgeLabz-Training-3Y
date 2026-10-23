// Q4: Custom Form Builder (open in a browser)
"use strict";
if (typeof document === "undefined") {
    console.log("Open this script through an HTML page in a browser.");
} else {
    class FormBuilder {
        constructor(fields, container) { this.fields = fields; this.container = container; }
        buildForm() {
            const inputs = this.fields.map((field, i) => `<label for="field${i}">${field.label}</label><input id="field${i}" name="${field.name}" type="${field.type}" required>`).join("");
            this.container.innerHTML = `<h2>Dynamic Form</h2><form id="generatedForm">${inputs}<button>Submit</button></form><pre id="output"></pre>`;
            document.getElementById("generatedForm").addEventListener("submit", event => {
                event.preventDefault();
                const data = this.getFormData();
                document.getElementById("output").textContent = JSON.stringify(data, null, 2);
                console.log("Form data:", data);
            });
        }
        getFormData() {
            const data = {};
            this.fields.forEach(field => data[field.name] = this.container.querySelector(`[name="${field.name}"]`).value);
            return data;
        }
    }
    const container = document.createElement("section");
    container.style.cssText = "max-width:420px;margin:30px auto;font-family:Arial";
    document.body.replaceChildren(container);
    const style = document.createElement("style");
    style.textContent = "label,input{display:block;width:100%;box-sizing:border-box;margin:8px 0}input{padding:8px}button{padding:8px}";
    document.head.appendChild(style);
    new FormBuilder([{type:"text",label:"Username",name:"username"},{type:"email",label:"Email",name:"email"},{type:"password",label:"Password",name:"password"}], container).buildForm();
}
