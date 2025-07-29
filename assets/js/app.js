const category__swiper = new Swiper('.category-section__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 10,

    speed: 600,

    navigation: {
        nextEl: '.category-section__swiper__next',
        prevEl: '.category-section__swiper__prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});

const imgSwiper = new Swiper('.product-slider__img__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    loop: false,

    speed: 600,
});

const mainSwiper = new Swiper('.product-slider__main__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    loop: false,

    speed: 600,

    navigation: {
        nextEl: '.product-slider__main__swiper__next',
        prevEl: '.product-slider__main__swiper__prev',
    },

    on: {
        init: function () {
            const navEl = this.el.querySelector('.product-slider__main__swiper__navigation');
            updateMainSliderNav(this, navEl);
        },
        slideChange: function () {
            const navEl = this.el.querySelector('.product-slider__main__swiper__navigation');
            updateMainSliderNav(this, navEl);
        }
    }
});

imgSwiper.controller.control = mainSwiper;
mainSwiper.controller.control = imgSwiper;


function updateMainSliderNav(swiper, navElement) {
    const current = swiper.realIndex + 1;
    const total = swiper.slides.length;

    if (navElement) {
        navElement.innerHTML = `<span>${current}</span> / <span>${total}</span>`;
    }
}


window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

