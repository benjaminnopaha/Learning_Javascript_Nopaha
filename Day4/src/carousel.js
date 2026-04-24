import { debounce } from "./debounce.js";
import { lazyLoadImages } from "./lazyLoad.js";

const track = document.querySelector(".track");
const images = document.querySelectorAll("img");

let index = 0;
const total = images.length;


lazyLoadImages(images);


function showSlide(i) {
  track.style.transform = `translateX(-${i * 600}px)`;
}

function startCarousel() {
  setInterval(() => {
    index = (index + 1) % total;
    showSlide(index);
  }, 3000);
} 

startCarousel();