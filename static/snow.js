function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snow");

  const size = `${Math.random() * 6 + 2}px`;
  snow.style.width = size;
  snow.style.height = size;

  snow.style.top = `${-Math.random() * 20 - 10}px`;
  snow.style.right = `${Math.random() * 100}%`;

  const animations = ["fall1", "fall2", "fall3"];
  const anim = animations[Math.floor(Math.random() * animations.length)];

  const duration = 15 - parseFloat(size) / 2 + Math.random() * 3;
  snow.style.animation = `${anim} ${duration}s linear forwards`;

  snow.addEventListener("animationend", () => snow.remove());
  return snow;
}

let snowInterval;
document.querySelectorAll(".snow__container").forEach((article) => {
  article.addEventListener("mouseenter", () => {
    if (!snowInterval) {
      snowInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) article.appendChild(createSnow());
      }, 500);
    }
  });

  article.addEventListener("mouseleave", () => {
    clearInterval(snowInterval);
    snowInterval = null;
  });
});
