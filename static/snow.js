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

  if (options.transparent) {
    snow.style.opacity = `${Math.random() * 0.3 + 0.1}`;
  } else {
    snow.style.opacity = "0.8";
  }

  const animations = ["fall1", "fall2", "fall3"];
  const anim = animations[Math.floor(Math.random() * 3)];
  const duration = 15 - size / 2 + Math.random() * 3;

  snow.style.animation = `${anim} ${duration}s linear forwards`;

  // Use a single event listener with cleanup
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

document.addEventListener("turbo:load", function () {
  const intervals = [];

  const cleanup = () => {
    intervals.forEach((interval) => clearInterval(interval));
    intervals.length = 0;
  };

  document.addEventListener("turbo:before-visit", cleanup);

  let hoverSnowInterval;

  const nowBanner = document.querySelector(".now__banner");
  if (nowBanner) {
    nowBanner.classList.add("snow__container");

    const bannerInterval = setInterval(() => {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 3; i++) {
        fragment.appendChild(createSnow());
      }
      nowBanner.appendChild(fragment);
    }, 800);
    intervals.push(bannerInterval);
  }

  document
    .querySelectorAll(".snow__container:not(.now__banner)")
    .forEach((container) => {
      container.addEventListener("mouseenter", () => {
        if (!hoverSnowInterval) {
          hoverSnowInterval = setInterval(() => {
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < 5; i++) {
              fragment.appendChild(createSnow());
            }
            container.appendChild(fragment);
          }, 500);
        }
      });

      container.addEventListener("mouseleave", () => {
        if (hoverSnowInterval) {
          clearInterval(hoverSnowInterval);
          hoverSnowInterval = null;
        }
      });
    });

  const pageHeader = document.querySelector(".page__header");
  if (pageHeader) {
    pageHeader.classList.add("snow__container");

    const headerInterval = setInterval(() => {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 2; i++) {
        fragment.appendChild(
          createSnow({ smallSize: true, transparent: true }),
        );
      }
      pageHeader.appendChild(fragment);
    }, 1200);
    intervals.push(headerInterval);
  }
});
