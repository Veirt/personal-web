const snowPool = [];
const maxPoolSize = 50;

function getSnowFromPool() {
    return snowPool.pop() || document.createElement("div");
}

function returnSnowToPool(snow) {
    if (snowPool.length < maxPoolSize) {
        snow.style.animation = "";
        snow.style.transform = "";
        snow.style.opacity = "";
        snow.style.width = "";
        snow.style.height = "";
        snow.style.top = "";
        snow.style.left = "";
        snow.className = "snow";
        snowPool.push(snow);
    }
}

function createSnow(options = {}) {
    const snow = getSnowFromPool();
    snow.className = "snow";

    const sizeRange = options.smallSize ? 2 : 6;
    const baseSize = options.smallSize ? 1 : 2;
    const size = Math.random() * sizeRange + baseSize;
    const sizeStr = `${size}px`;

    snow.style.width = sizeStr;
    snow.style.height = sizeStr;
    snow.style.top = `${-Math.random() * 130}px`;
    snow.style.left = `${Math.random() * 120 - 10}%`;

    const animations = ["fall1", "fall2", "fall3", "fall4", "fall5"];

    const sizeVariation = size < 2.5
        ? "small"
        : size < 4.5
        ? "medium"
        : "large";
    snow.classList.add(`snow--${sizeVariation}`);

    const depthRandom = Math.random();
    let depthLayer;
    if (depthRandom < 0.2) {
        depthLayer = "near";
    } else if (depthRandom < 0.6) {
        depthLayer = "mid";
    } else {
        depthLayer = "far";
    }
    snow.classList.add(`snow--${depthLayer}`);

    if (options.transparent) {
        const baseOpacity = depthLayer === "near"
            ? 0.3
            : depthLayer === "mid"
            ? 0.2
            : 0.1;
        snow.style.opacity = `${baseOpacity + Math.random() * 0.2}`;
    } else if (depthLayer === "far") {
        snow.style.opacity = `${0.2 + Math.random() * 0.2}`;
    } else if (depthLayer === "mid") {
        snow.style.opacity = `${0.5 + Math.random() * 0.2}`;
    } else {
        snow.style.opacity = `${0.7 + Math.random() * 0.2}`;
    }

    const anim = animations[Math.floor(Math.random() * animations.length)];
    const baseDuration = depthLayer === "near"
        ? 12
        : depthLayer === "mid"
        ? 15
        : 18;
    const duration = baseDuration - size / 3 + Math.random() * 4;

    snow.style.animation = `${anim} ${duration}s linear forwards`;

    const cleanup = () => {
        snow.removeEventListener("animationend", cleanup);
        if (snow.parentNode) {
            snow.parentNode.removeChild(snow);
        }
        returnSnowToPool(snow);
    };

    snow.addEventListener("animationend", cleanup);
    return snow;
}

document.addEventListener("turbo:load", () => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
        return;
    }

    let animationFrameId;
    let lastBannerSnow = 0;
    let lastHeaderSnow = 0;

    const nowBanner = document.querySelector(".now__banner");
    const pageHeader = document.querySelector(".page__header");

    const animateSnow = (timestamp) => {
        if (nowBanner && timestamp - lastBannerSnow > 800) {
            lastBannerSnow = timestamp;
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < 3; i++) {
                fragment.appendChild(createSnow());
            }
            nowBanner.appendChild(fragment);
        }

        if (pageHeader && timestamp - lastHeaderSnow > 1200) {
            lastHeaderSnow = timestamp;
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < 2; i++) {
                fragment.appendChild(
                    createSnow({ smallSize: true, transparent: true }),
                );
            }
            pageHeader.appendChild(fragment);
        }

        animationFrameId = requestAnimationFrame(animateSnow);
    };

    const startPermanentSnow = () => {
        if (nowBanner) nowBanner.classList.add("snow__container");
        if (pageHeader) pageHeader.classList.add("snow__container");
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animateSnow);
    };

    const stopPermanentSnow = () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    };

    const cleanup = () => {
        stopPermanentSnow();
    };

    document.addEventListener("turbo:before-visit", cleanup);

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cleanup();
        } else {
            startPermanentSnow();
        }
    });

    motionQuery.addEventListener("change", () => {
        if (motionQuery.matches) {
            cleanup();
        } else {
            startPermanentSnow();
        }
    });

    startPermanentSnow();
});
