import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const doctorsSlider = new Swiper('.doctors-slider', {
  // modules: [Pagination, Navigation, Scrollbar],
  modules: [Navigation],

  // Optional parameters
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   1400: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  // },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

(function () {
  const doctorsItem = document.querySelectorAll('.doctors__item');

  doctorsSlider.on('slideChange', function () {
    const realIndex = doctorsSlider.realIndex;
    doctorsItem.forEach(item => item.classList.remove('active'));
    doctorsItem[realIndex].classList.add('active');
  });
})();

const gallerySlider = new Swiper('.gallery-slider', {
  // modules: [Pagination, Navigation, Scrollbar],
  modules: [Navigation],

  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 210,
  // grabCursor: true,
  centeredSlides: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1051: {
      slidesPerView: 3,
      spaceBetween: 150,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 180,
    },
    1550: {
      slidesPerView: 3,
      spaceBetween: 210,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
