// Q6: Case-insensitive live table filter.
const search = document.querySelector("#search");
const rows = [...document.querySelectorAll("#rows tr")];
const noResults = document.querySelector("#no-results");
search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    let matches = 0;
    rows.forEach(row => {
        const visible = row.textContent.toLowerCase().includes(query);
        row.hidden = !visible;
        if (visible) matches++;
    });
    noResults.hidden = matches !== 0;
});
