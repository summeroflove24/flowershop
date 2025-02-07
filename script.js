document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        touchEventsTarget: 'container',
        slidesPerView: 1,
        speed: 300, // Fast swipe transition
    });
});
