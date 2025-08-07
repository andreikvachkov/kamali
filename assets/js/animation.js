const isMobile = window.innerWidth < 769;

const lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
    wheelMultiplier: 1,
    gestureTarget: window
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
        header.classList.add('header_sticky');
    } else {
        header.classList.remove('header_sticky');
    }
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        header.classList.remove('show-on-scroll');
        header.classList.add('hide-on-scroll');
    } else if (currentScroll < lastScrollTop) {
        header.classList.remove('hide-on-scroll');
        header.classList.add('show-on-scroll');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});



const navItems = document.querySelectorAll('.about-slider-section__bottom li');
const contentBlocks = document.querySelectorAll('.about-slider-section__content');

let hoverTimeout;


navItems.forEach((item) => {
    const index = parseInt(item.dataset.index, 10);

    const activateSlide = () => {
        aboutSlider.slideToLoop(index);

        navItems.forEach(i => i.classList.remove('active'));
        contentBlocks.forEach(block => block.classList.remove('active'));

        item.classList.add('active');
        const activeContent = document.querySelector(`.about-slider-section__content[data-content="${index}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    };

    if (isMobile) {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            activateSlide();
        });
    } else {

        item.addEventListener('click', (e) => {
            e.preventDefault();
        });
        item.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(activateSlide, 150);
        });

        item.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
        });
    }
});

aboutSlider.on('slideChange', () => {
    const realIndex = aboutSlider.realIndex;

    navItems.forEach((item) => item.classList.remove('active'));

    const activeItem = document.querySelector(`.about-slider-section__bottom li[data-index="${realIndex}"]`);
    if (activeItem) activeItem.classList.add('active');
});

