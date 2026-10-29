// Q3: Three-step form with validation and summary.
const form = document.querySelector("#form");
const steps = [...document.querySelectorAll(".step")];
const status = document.querySelector("#status");
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const finish = document.querySelector("#finish");
const error = document.querySelector("#error");
const summary = document.querySelector("#summary");
let currentStep = 0;

function validateStep() {
    const field = steps[currentStep].querySelector("input");
    field.setCustomValidity("");
    if (!field.value.trim()) field.setCustomValidity("This field is required.");
    else if (field.type === "email" && !field.validity.valid) field.setCustomValidity("Enter a valid email address.");
    else if (field.type === "password" && field.value.length < 6) field.setCustomValidity("Password must have at least 6 characters.");
    if (!field.checkValidity()) {
        error.textContent = field.validationMessage;
        field.focus();
        return false;
    }
    error.textContent = "";
    return true;
}
function showStep(index) {
    currentStep = index;
    steps.forEach((step, i) => step.classList.toggle("active", i === index));
    status.textContent = `Step ${index + 1} of 3`;
    back.hidden = index === 0;
    next.hidden = index === 2;
    finish.hidden = index !== 2;
    error.textContent = "";
}
next.addEventListener("click", () => { if (validateStep()) showStep(currentStep + 1); });
back.addEventListener("click", () => showStep(currentStep - 1));
form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validateStep()) return;
    document.querySelector("#summary-name").textContent = `Name: ${document.querySelector("#name").value.trim()}`;
    document.querySelector("#summary-email").textContent = `Email: ${document.querySelector("#email").value.trim()}`;
    form.hidden = true; status.hidden = true; summary.hidden = false;
});
