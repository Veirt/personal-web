(() => {
	const htmlElement = document.documentElement;
	const savedTheme = localStorage.getItem("theme") || "dark";
	htmlElement.setAttribute("data-theme", savedTheme);
})();

document.addEventListener("turbo:load", () => {
	const htmlElement = document.documentElement;

	function applyThemeToggle() {
		const currentTheme = htmlElement.getAttribute("data-theme");
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		htmlElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	}

	// Bind all theme toggle buttons
	document.querySelectorAll('[id^="theme-toggle"]').forEach((btn) => {
		btn.addEventListener("click", applyThemeToggle);
	});
});
