var swiper = new Swiper(".swiper-carusel", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
      767: {
        slidesPerView: 1.6,
      },
    },
  });