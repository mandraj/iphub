import { Swiper, Parallax, Navigation} from 'swiper';
Swiper.use([ Parallax, Navigation ])


const swiper = new Swiper('.solutions__slider', {
    
    spaceBetween: 20,
    loop: true,
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    parallax:true,
  
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },

    breakpoints: {
      1001: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    },
  });

  const cases = new Swiper('.cases__slider', {
    
    spaceBetween: 20,
    loop: true,
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    parallax:true,
  
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },

    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 1,
      },
    },
  });

  const team = new Swiper('.team__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    parallax:true,
  
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
