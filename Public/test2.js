const zoom = document.querySelector(".zobject");
const minZoom = 0.2; // Starting scale value
const maxZoom = 1; // Maximum zoom value

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 200 * vh;

  if (scrollTop > start && scrollTop < stop) {
    const progress = (scrollTop - start) / (stop - start);
    const scale = Math.min(minZoom + progress * (maxZoom - minZoom), maxZoom);
    zoom.style.transform = `scale(${scale})`;
  } else if (scrollTop <= start) {
    zoom.style.transform = `scale(${minZoom})`;
  } else if (scrollTop >= stop) {
    zoom.style.transform = `scale(${maxZoom})`;
  }
});
