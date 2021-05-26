import slider from './modules/slider';
import mobileMenu from './modules/mobile-menu';

document.addEventListener('DOMContentLoaded', () => {
  slider({
    slidesContainerSelector: '.promo__slider-slides',
    slideIndicatorSelector: '.promo__slider-controllers-indicator',
    slideIndicatorActiveClass: 'promo__slider-controllers-indicator_active',
    backBtnSelector: '.promo__slider-controllers-back',
    forwardBtnSelector: '.promo__slider-controllers-forward',
    autoscrollInterval: 5000
  });
  slider({
    slidesContainerSelector: '.you-will-get__slider-slides',
    slideIndicatorSelector: '.you-will-get__tab',
    slideIndicatorActiveClass: 'you-will-get__tab_active',
    backBtnSelector: '.you-will-get__slider-back',
    forwardBtnSelector: '.you-will-get__slider-forward'
  });
  mobileMenu();
});