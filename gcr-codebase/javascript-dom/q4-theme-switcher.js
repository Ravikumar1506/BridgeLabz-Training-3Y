// Q4: Apply theme classes and data-theme using setAttribute().
const buttons = document.querySelectorAll("[data-theme-choice]");
const currentTheme = document.querySelector("#current-theme");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme-choice");
        document.body.setAttribute("class", `theme-${theme}`);
        document.body.setAttribute("data-theme", theme);
        currentTheme.textContent = theme;
    });
});
