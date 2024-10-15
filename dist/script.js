document.getElementById('navButton').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('hidden');
});

const carouselNextButton = document.getElementById('carouselNextButton');
const carouselPrevButton = document.getElementById('carouselPrevButton');
const carousel = document.getElementById('carousel');

console.log(carousel, carouselNextButton)
if (carousel && carouselNextButton && carouselPrevButton) {
  let slide = 0;
  let slides = 0;
  let carouselWidth = 0;

  slides = carousel.children.length;
  carouselWidth = carousel.clientWidth;
  console.log(carousel, slides)

  carouselNextButton.addEventListener('click', function() {
    slide = (slide + 1) % slides;
    carousel.scrollLeft = slide * carouselWidth;
  });
  carouselPrevButton.addEventListener('click', function() {
    slide = (slides + slide - 1) % slides;
    carousel.scrollLeft = slide * carouselWidth;
  });
}
