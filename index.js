var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const audio = document.querySelector("audio");
const iconPlay = document
  .querySelector(".bx-music")
  .addEventListener("click", () => {
    audio.play();
    if (audio.play()) {
      audio.pause();
    }
  });
