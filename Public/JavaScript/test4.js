const zoom = document.querySelector(".zobject");
const minZoom = 0.2; // Minimum zoom value
const maxZoom = 2; // Starting scale value

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 200 * vh;

  if (scrollTop > start && scrollTop < stop) {
    const progress = (scrollTop - start) / (stop - start);
    const scale = Math.max(maxZoom - progress * (maxZoom - minZoom), minZoom);
    zoom.style.transform = `scale(${scale})`;
  } else if (scrollTop <= start) {
    zoom.style.transform = `scale(${maxZoom})`;
  } else if (scrollTop >= stop) {
    zoom.style.transform = `scale(${minZoom})`;
  }
});
