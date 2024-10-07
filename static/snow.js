function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snow");

  const size = `${Math.random() * 6 + 2}px`;
  snow.style.width = size;
  snow.style.height = size;

  snow.style.top = `${Math.random() * 1}px`;
  snow.style.right = `${Math.random() * 900}px`;

  snow.addEventListener("animationend", () => {
    snow.remove();
  });

  return snow;
}

let snowInterval;
const articles = document.querySelectorAll("article");
for (const article of articles) {
  article.addEventListener("mouseenter", () => {
    if (!snowInterval) {
      snowInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) {
          article.appendChild(createSnow());
        }
      }, 300);
    }
  });

  article.addEventListener("mouseleave", () => {
    clearInterval(snowInterval);
    snowInterval = null;
  });
}
