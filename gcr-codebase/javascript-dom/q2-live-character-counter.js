// Q2: Count remaining characters and prevent typing past 100.
const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#reset-button");
const maxCharacters = 100;

function updateCounter() {
    const remaining = maxCharacters - message.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
    counter.classList.toggle("limit", remaining === 0);
}
message.addEventListener("input", updateCounter);
message.addEventListener("keydown", event => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Tab"];
    const shortcut = event.ctrlKey || event.metaKey || event.altKey;
    if (message.value.length >= maxCharacters && !allowedKeys.includes(event.key) && !shortcut && event.key.length === 1) {
        event.preventDefault();
    }
});
resetButton.addEventListener("click", () => {
    message.value = "";
    updateCounter();
    message.focus();
});
updateCounter();
