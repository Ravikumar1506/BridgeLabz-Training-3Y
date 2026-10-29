// Q8: Custom dropdown; outside-click closing uses capture phase.
const dropdown = document.querySelector("#dropdown");
const toggle = document.querySelector("#toggle");
const options = document.querySelector("#options");
toggle.addEventListener("click", () => {
    const opening = options.hidden;
    options.hidden = !opening;
    toggle.setAttribute("aria-expanded", String(opening));
});
options.addEventListener("click", event => {
    const option = event.target.closest("button[data-value]");
    if (!option) return;
    toggle.textContent = option.dataset.value;
    options.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
});
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        options.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    }
}, true);
