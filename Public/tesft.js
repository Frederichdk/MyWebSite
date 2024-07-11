const zoom = document.querySelector(".zoom");
const minZoom = 1;
const maxZoom = 4;

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 800 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
    zoom.style.transform = `scale(${scale})`;
  }
});
