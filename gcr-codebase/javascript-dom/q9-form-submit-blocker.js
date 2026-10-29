// Q9: Validate fields, prevent submission, and show live errors.
const form = document.querySelector("#signup");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const success = document.querySelector("#success");
const fields = [
    { input: nameInput, error: document.querySelector("#name-error") },
    { input: emailInput, error: document.querySelector("#email-error") },
    { input: passwordInput, error: document.querySelector("#password-error") }
];
function validate(input) {
    const value = input.value.trim();
    if (input === nameInput && !value) return "Name is required.";
    if (input === emailInput && !value) return "Email is required.";
    if (input === emailInput && !value.includes("@")) return "Email must contain @.";
    if (input === passwordInput && input.value.length < 6) return "Password must be at least 6 characters.";
    return "";
}
function updateError(input) {
    const field = fields.find(item => item.input === input);
    field.error.textContent = validate(input);
    success.textContent = "";
}
fields.forEach(({ input }) => input.addEventListener("input", () => updateError(input)));
form.addEventListener("submit", event => {
    event.preventDefault();
    let valid = true;
    fields.forEach(({ input, error }) => {
        error.textContent = validate(input);
        if (error.textContent) valid = false;
    });
    if (!valid) {
        success.textContent = "";
        fields.find(item => item.error.textContent).input.focus();
        return;
    }
    success.textContent = "Form Submitted Successfully";
    form.reset();
    fields.forEach(({ error }) => { error.textContent = ""; });
});
