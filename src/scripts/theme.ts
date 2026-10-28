const root = document.documentElement;
const THEME_COLORS = { dark: "#111213", light: "#fafafa" } as const;

type Theme = keyof typeof THEME_COLORS;

function storedTheme(): Theme | null {
	try {
		const theme = localStorage.getItem("theme");
		return theme === "dark" || theme === "light" ? theme : null;
	} catch {
		return null;
	}
}

function currentTheme(): Theme {
	return root.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
	root.dataset.theme = theme;
	document
		.querySelector('meta[name="theme-color"]')
		?.setAttribute("content", THEME_COLORS[theme]);
	document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
		button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
		button.setAttribute("aria-pressed", String(theme === "dark"));
	});
}

document.addEventListener("click", (event) => {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const button = target.closest("[data-theme-toggle]");
	if (!button) return;

	const theme = currentTheme() === "dark" ? "light" : "dark";
	try {
		localStorage.setItem("theme", theme);
	} catch {}
	applyTheme(theme);
});

document.addEventListener("astro:after-swap", () => applyTheme(storedTheme() ?? currentTheme()));

applyTheme(storedTheme() ?? currentTheme());
