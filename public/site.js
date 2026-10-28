(() => {
	const root = document.documentElement;

	function syncThemeButtons() {
		const dark = root.dataset.theme === "dark";
		const themeColor = document.querySelector('meta[name="theme-color"]');
		if (themeColor) themeColor.setAttribute("content", dark ? "#111213" : "#fafafa");
		document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
			button.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
			button.setAttribute("aria-pressed", String(dark));
		});
	}

	document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
		button.addEventListener("click", () => {
			const theme = root.dataset.theme === "dark" ? "light" : "dark";
			root.dataset.theme = theme;
			try {
				localStorage.setItem("theme", theme);
			} catch {}
			syncThemeButtons();
		});
	});

	syncThemeButtons();
})();
