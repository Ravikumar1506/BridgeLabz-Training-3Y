// Q5: Open a larger image in a modal; close by clicking outside.
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const largeImage = document.querySelector("#large-image");
gallery.addEventListener("click", event => {
    if (event.target.tagName !== "IMG") return;
    largeImage.src = event.target.src;
    largeImage.alt = event.target.alt;
    modal.hidden = false;
});
modal.addEventListener("click", () => { modal.hidden = true; });
modalContent.addEventListener("click", event => event.stopPropagation());
document.querySelector("#close").addEventListener("click", () => { modal.hidden = true; });
document.addEventListener("keydown", event => { if (event.key === "Escape") modal.hidden = true; });
