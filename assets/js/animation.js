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

    // if (currentScroll === 0) {
    //     header.classList.add('animate-bg');
    //     header.classList.remove('scroll-background');
    // }
});