

const openPopup = (popup) => {
    popup.classList.add('active');
    document.querySelector('.popup-background').classList.add('active');
    document.body.classList.add('no-scroll');
    lenis.stop();
};

const closePopup = (popup) => {
    popup.classList.remove('active');
    document.querySelector('.popup-background').classList.remove('active');
    document.body.classList.remove('no-scroll');
    lenis.start();
};

document.querySelectorAll('.header__search, .header__search-mobile').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup(document.querySelector('.search-popup'));
    });
});

document.querySelector('.search-popup__close')?.addEventListener('click', (e) => {
    e.preventDefault();
    closePopup(document.querySelector('.search-popup'));
});

document.querySelectorAll('.scrollable').forEach(el => {
    el.addEventListener('wheel', (e) => {
        const delta = e.deltaY;
        const up = delta < 0;
        const scrollTop = el.scrollTop;
        const scrollHeight = el.scrollHeight;
        const offsetHeight = el.offsetHeight;
        const atTop = scrollTop === 0;
        const atBottom = scrollTop + offsetHeight >= scrollHeight - 1;

        if ((up && !atTop) || (!up && !atBottom)) {
            e.stopPropagation();
        }
    }, { passive: false });
});

const scrollable = document.querySelector('.search-popup__filter');

scrollable.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
        e.preventDefault();
        scrollable.scrollLeft += e.deltaY;
    }
});

const textarea = document.getElementById("giftMessage");
const charCount = document.getElementById("gift-card-charCount");

if (textarea && charCount) {
    textarea.addEventListener("input", function () {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength} из 300`;
    });
}



const deliveryDateBlock = document.querySelector('.gift-card__delivery__date');
const radio1 = document.getElementById('gift-card__delivery-1');
const radio2 = document.getElementById('gift-card__delivery-2');

if (deliveryDateBlock && radio1 && radio2) {
    radio1.addEventListener('change', () => {
        if (radio1.checked) deliveryDateBlock.style.display = 'none';
    });

    radio2.addEventListener('change', () => {
        if (radio2.checked) deliveryDateBlock.style.display = 'flex';
    });
}
const btnCookies = document.querySelectorAll('.cookie-popup__accept-btn, .cookie-popup__decline-btn');
btnCookies.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        document.querySelector('.cookie-popup').classList.remove('active');
    });
});

const btn = document.querySelector('.catalog-page__filter__type-btn');
const btnClose = document.querySelector('.catalog-page__filter__type-container__close');
const menu = document.querySelector('.catalog-page__filter__type-container');

const sortBtn = document.querySelector('.catalog-page__filter__sort-btn');
const sortMenu = document.querySelector('.catalog-page__filter__sort-container');
const sortRadios = document.querySelectorAll('input[name="product-sort"]');

if (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        btn.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

if (btnClose) {
    btnClose.addEventListener('click', function (e) {
        e.stopPropagation();
        btn.classList.remove('active');
        menu.classList.remove('active');
    });
}

if (sortBtn) {
    sortBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        sortBtn.classList.toggle('active');
        sortMenu.classList.toggle('active');

        if (isMobile) {
            document.querySelector('.popup-background').classList.toggle('active');
        }
    });
}

document.addEventListener('click', function (e) {
    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        btn.classList.remove('active');
        menu.classList.remove('active');
    }

    if (sortBtn && sortMenu && !sortBtn.contains(e.target) && !sortMenu.contains(e.target)) {
        sortBtn.classList.remove('active');
        sortMenu.classList.remove('active');

        if (isMobile) {
            const popupBg = document.querySelector('.popup-background');
            if (popupBg) {
                popupBg.classList.remove('active');
            }
        }
    }
});

sortRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        sortBtn.textContent = radio.value;
        sortBtn.classList.remove('active');
        sortMenu.classList.remove('active');

        if (isMobile) {
            document.querySelector('.popup-background').classList.remove('active');
        }
    });
});


let thankyouSwiper = null;

function initThankyouSwiper() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile && !thankyouSwiper) {
        thankyouSwiper = new Swiper('.thankyou-page__order__swiper', {
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 16,
            speed: 600,
        });
    } else if (!isMobile && thankyouSwiper) {
        thankyouSwiper.destroy(true, true);
        thankyouSwiper = null;
    }
}

initThankyouSwiper();

window.addEventListener('resize', initThankyouSwiper);


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
const article__swiper = new Swiper('.article__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,

    speed: 600,

    navigation: {
        nextEl: '.article__swiper__next',
        prevEl: '.article__swiper__prev',
    },

    pagination: {
        el: '.article__swiper__pagination',
        clickable: true,
    },

});

const about_ingredients__swiper = new Swiper('.about-ingredients__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 10,

    speed: 600,

    navigation: {
        nextEl: '.about-ingredients__swiper__next',
        prevEl: '.about-ingredients__swiper__prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});

const aboutSlider = new Swiper('.about-slider-section__swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    speed: 1000,
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





const video = document.getElementById('history-video');
const playButton = document.querySelector('.play');

if (video) {
    video.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            video.classList.remove('pointer');
            if (playButton) {
                playButton.classList.remove('playing');
            }
        }
    });
}

if (video && playButton) {
    playButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
            video.play();
            video.classList.add('pointer');
            playButton.classList.add('playing');
        } else {
            video.pause();
            video.classList.remove('pointer');
            playButton.classList.remove('playing');
        }
    });
}


