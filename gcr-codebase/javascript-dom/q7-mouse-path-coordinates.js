// Q7: Show client coordinates and place a red dot on double-click.
const box = document.querySelector("#box");
const coordinates = document.querySelector("#coordinates");
box.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});
box.addEventListener("dblclick", event => {
    const bounds = box.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.left = `${event.clientX - bounds.left}px`;
    dot.style.top = `${event.clientY - bounds.top}px`;
    box.appendChild(dot);
});
