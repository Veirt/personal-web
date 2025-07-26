function createSnow(options = {}) {
  const snow = document.createElement("div");
  snow.classList.add("snow");

  const sizeRange = options.smallSize ? 2 : 6;
  const size = `${Math.random() * sizeRange + (options.smallSize ? 1 : 2)}px`;
  snow.style.width = size;
  snow.style.height = size;

  snow.style.top = `${-Math.random() * 130}px`;
  snow.style.left = `${Math.random() * 120 - 10}%`;

  // Set opacity - more transparent for header snow
  if (options.transparent) {
    snow.style.opacity = `${Math.random() * 0.3 + 0.1}`; // 0.1 to 0.4 opacity
  }

  const animations = ["fall1", "fall2", "fall3"];
  const anim = animations[Math.floor(Math.random() * animations.length)];

  const duration = 15 - parseFloat(size) / 2 + Math.random() * 3;
  snow.style.animation = `${anim} ${duration}s linear forwards`;

  snow.addEventListener("animationend", () => snow.remove());
  return snow;
}

document.addEventListener("turbo:load", function () {
  let snowInterval;
  
  // Continuous snow for now page banner
  const nowBanner = document.querySelector(".now__banner");
  if (nowBanner) {
    // Add snow container class to the banner
    nowBanner.classList.add("snow__container");
    
    // Start continuous snow
    const _continuousSnowInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        nowBanner.appendChild(createSnow());
      }
    }, 800);
  }
  
  // Hover snow for other snow containers (blog, projects, etc.)
  document.querySelectorAll(".snow__container:not(.now__banner)").forEach((container) => {
    container.addEventListener("mouseenter", () => {
      if (!snowInterval) {
        snowInterval = setInterval(() => {
          for (let i = 0; i < 5; i++) container.appendChild(createSnow());
        }, 500);
      }
    });

    container.addEventListener("mouseleave", () => {
      clearInterval(snowInterval);
      snowInterval = null;
    });
  });
  
  // Page header snow - continuous but lighter
  const pageHeader = document.querySelector(".page__header");
  if (pageHeader) {
    pageHeader.classList.add("snow__container");
    
    const _headerSnowInterval = setInterval(() => {
      for (let i = 0; i < 2; i++) {
        pageHeader.appendChild(createSnow({ smallSize: true, transparent: true }));
      }
    }, 1200);
  }
});
