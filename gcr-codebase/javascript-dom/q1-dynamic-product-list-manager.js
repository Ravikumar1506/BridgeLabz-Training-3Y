// Q1: Add, edit, and delete products using event delegation.
const form = document.querySelector("#product-form");
const input = document.querySelector("#product-input");
const list = document.querySelector("#product-list");
let editingItem = null;
let editingInput = null;

function saveEdit() {
    if (!editingItem || !editingInput) return;
    const label = editingItem.querySelector(".product-name");
    const newName = editingInput.value.trim();
    if (newName) label.textContent = newName;
    label.hidden = false;
    editingInput.remove();
    editingItem = editingInput = null;
}

function startEdit(item) {
    if (editingItem === item) return;
    saveEdit();
    const label = item.querySelector(".product-name");
    editingInput = document.createElement("input");
    editingInput.value = label.textContent;
    editingInput.className = "edit-input";
    item.insertBefore(editingInput, label);
    label.hidden = true;
    editingItem = item;
    editingInput.focus();
    editingInput.select();
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = input.value.trim();
    if (!name) return;
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.className = "product-name";
    label.textContent = name;
    const edit = document.createElement("button");
    edit.type = "button"; edit.dataset.action = "edit"; edit.textContent = "Edit";
    const remove = document.createElement("button");
    remove.type = "button"; remove.dataset.action = "delete"; remove.textContent = "Delete";
    item.append(label, edit, remove);
    list.appendChild(item);
    input.value = "";
});

list.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const item = button.closest("li");
    if (button.dataset.action === "edit") startEdit(item);
    if (button.dataset.action === "delete") {
        if (editingItem === item) editingItem = editingInput = null;
        item.remove();
    }
});
list.addEventListener("keydown", event => {
    if (!event.target.classList.contains("edit-input")) return;
    if (event.key === "Enter" || event.key === "Escape") {
        event.preventDefault();
        saveEdit();
    }
});
// Clicking outside the edited item auto-saves it.
document.addEventListener("click", event => {
    if (editingItem && !editingItem.contains(event.target)) saveEdit();
});
