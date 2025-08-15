(function () {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem("theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
})();

document.addEventListener("turbo:load", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    themeToggle.addEventListener("click", function () {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});