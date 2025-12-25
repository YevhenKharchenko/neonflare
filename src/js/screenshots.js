import Swiper from 'swiper';
import 'swiper/css/bundle';

const screenshotsLeftArrow = document.getElementById('screenshotsLeftArrow');
const screenshotsRightArrow = document.getElementById('screenshotsRightArrow');

let screenshotsSwiper;

screenshotsSwiper = new Swiper('.screenshots-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 12,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      initialSlide: 2,
      spaceBetween: 24,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.screenshots-swiper-container')
        .classList.add('show');
      updateScreenshotsArrows(swiper);
    },
    slideChange(swiper) {
      updateScreenshotsArrows(swiper);
    },
  },
});

updateScreenshotsArrows(screenshotsSwiper);

function updateScreenshotsArrows(swiper) {
  screenshotsLeftArrow.disabled = swiper.isBeginning;
  screenshotsRightArrow.disabled = swiper.isEnd;
}

screenshotsLeftArrow.addEventListener('click', () => {
  screenshotsSwiper.slidePrev();
});

screenshotsRightArrow.addEventListener('click', () => {
  screenshotsSwiper.slideNext();
});
