function slider({
  slidesContainerSelector,
  slideIndicatorSelector,
  slideIndicatorActiveClass,
  backBtnSelector,
  forwardBtnSelector,
  autoscrollInterval = null
}) {
  const slidesContainer = document.querySelector(slidesContainerSelector),
        slideIndicators = document.querySelectorAll(slideIndicatorSelector),
        backBtn = document.querySelector(backBtnSelector),
        forwardBtn = document.querySelector(forwardBtnSelector);

  let currentSlideIdx = 0;
  let autoscrollId;

  function updateView() {
    const slidesContainerWidth = slidesContainer.offsetWidth;
    const slidesCount = slidesContainer.childNodes.length;
    const translationSize = currentSlideIdx * (slidesContainerWidth / slidesCount);
    slidesContainer.style.transform = `translateX(-${ translationSize }px)`;
    
    slideIndicators.forEach((indicator, i) => {
      if (currentSlideIdx === i) {
        indicator.classList.add(slideIndicatorActiveClass);
      } else {
        indicator.classList.remove(slideIndicatorActiveClass);
      }
    });
  }

  updateView();

  function disableAutoscroll() {
    if (autoscrollId) {
      clearInterval(autoscrollId);
    }
  }

  slideIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', (e) => {
      e.preventDefault();
      currentSlideIdx = i;
      disableAutoscroll();
      updateView();
    });
  });

  function scrollBack() {
    currentSlideIdx -= 1;
    if (currentSlideIdx === -1) {
      currentSlideIdx = slidesContainer.childNodes.length - 1;
    }

    disableAutoscroll();
    updateView();
  }

  function scrollForward(toDisableAutoscroll) {
    currentSlideIdx += 1;
    if (currentSlideIdx === slidesContainer.childNodes.length) {
      currentSlideIdx = 0;
    }

    if (toDisableAutoscroll) {
      disableAutoscroll();
    }
    updateView();
  }

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollBack();
  });

  forwardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollForward(true);
  });

  if (autoscrollInterval) {
    autoscrollId = setInterval(() => {
      scrollForward(false);
    }, autoscrollInterval);
  }

  // Swipes

  let xDown = null;
  let yDown = null;

  function getTouches(e) {
    return e.touches || e.originalEvent.touches;
  }

  function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(e) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = e.touches[0].clientX;                                    
    const yUp = e.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // left swipe
        scrollForward(true);
      } else {
        // right swipe
        scrollBack();
      }                       
    } else {
      if (yDiff > 0) {
        // up swipe 
      } else { 
        // down swipe
      }                                                                 
    }
    
    xDown = null;
    yDown = null; 
  }

  slidesContainer.addEventListener('touchstart', handleTouchStart, false);
  slidesContainer.addEventListener('touchmove', handleTouchMove, false);
}

export default slider;