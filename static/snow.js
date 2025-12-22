const rand = (min, max) => Math.random() * (max - min) + min;
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const ANIMATIONS = ["fall1", "fall2", "fall3", "fall4", "fall5"];

function createSnow(options = {}) {
	const snow = document.createElement("div");
	const { smallSize, transparent } = options;

	const baseSize = smallSize ? 1 : 2;
	const size = rand(baseSize, baseSize + (smallSize ? 2 : 6));
	const sizeClass = size < 2.5 ? "small" : size < 4.5 ? "medium" : "large";

	const r = Math.random();
	const depth = r < 0.2 ? "near" : r < 0.6 ? "mid" : "far";

	snow.className = `snow snow--${sizeClass} snow--${depth}`;

	const sizePx = `${size.toFixed(1)}px`;
	snow.style.width = sizePx;
	snow.style.height = sizePx;
	snow.style.left = `${rand(-10, 110)}%`;
	snow.style.top = `${-rand(20, 100)}px`;

	let baseOp = depth === "near" ? 0.7 : depth === "mid" ? 0.5 : 0.2;
	if (transparent) {
		baseOp = depth === "near" ? 0.3 : depth === "mid" ? 0.2 : 0.1;
	}
	snow.style.opacity = (baseOp + rand(0, 0.2)).toFixed(2);

	const anim = sample(ANIMATIONS);
	const baseDuration = depth === "near" ? 12 : depth === "mid" ? 15 : 18;
	const duration = baseDuration - size / 3 + rand(0, 4);

	snow.style.animation = `${anim} ${duration.toFixed(1)}s linear forwards`;
	snow.onanimationend = () => snow.remove();

	return snow;
}

function startLoop(callback, interval) {
	let last = performance.now();
	let id;

	const loop = (now) => {
		const delta = now - last;
		if (delta >= interval) {
			callback();
			last += interval;
			// Prevent burst after tab suspension
			if (now - last > interval) last = now;
		}
		id = requestAnimationFrame(loop);
	};

	id = requestAnimationFrame(loop);
	return () => cancelAnimationFrame(id);
}

document.addEventListener("turbo:load", () => {
	const cleanups = [];
	let hoverCleanup = null;

	const cleanupAll = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
		if (hoverCleanup) {
			hoverCleanup();
			hoverCleanup = null;
		}
	};

	// Permanent Snow (Banner)
	const nowBanner = document.querySelector(".now__banner");
	if (nowBanner) {
		nowBanner.classList.add("snow__container");
		cleanups.push(
			startLoop(() => {
				const fragment = document.createDocumentFragment();
				for (let i = 0; i < 3; i++) fragment.appendChild(createSnow());
				nowBanner.appendChild(fragment);
			}, 800),
		);
	}

	// Permanent Snow (Header)
	const pageHeader = document.querySelector(".page__header");
	if (pageHeader) {
		pageHeader.classList.add("snow__container");
		cleanups.push(
			startLoop(() => {
				const fragment = document.createDocumentFragment();
				for (let i = 0; i < 2; i++) {
					fragment.appendChild(
						createSnow({ smallSize: true, transparent: true }),
					);
				}
				pageHeader.appendChild(fragment);
			}, 1200),
		);
	}

	// Hover Effects
	document
		.querySelectorAll(".snow__container:not(.now__banner)")
		.forEach((container) => {
			container.addEventListener("mouseenter", () => {
				if (!hoverCleanup) {
					hoverCleanup = startLoop(() => {
						const fragment = document.createDocumentFragment();
						for (let i = 0; i < 5; i++) fragment.appendChild(createSnow());
						container.appendChild(fragment);
					}, 500);
				}
			});

			container.addEventListener("mouseleave", () => {
				if (hoverCleanup) {
					hoverCleanup();
					hoverCleanup = null;
				}
			});
		});

	document.addEventListener("turbo:before-visit", cleanupAll, { once: true });
});
