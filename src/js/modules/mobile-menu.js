function mobileMenu() {
  const hamburger = document.querySelector('.hamburger'),
        navigation = document.querySelector('.header__navigation'),
        navigationSubstrate = 
          document.querySelector('.header__navigation-substrate'),
        navigationClose = document.querySelector('.header__navigation-close');

  function showMenu() {
    navigation.classList.remove('header__navigation_hidden');
    navigationSubstrate.classList.remove('header__navigation-substrate_hidden');

    [
      navigation,
      navigationSubstrate,
      navigationClose
    ].forEach(el => el.style.display = "flex");

    hamburger.classList.add('hamburger_hidden');
  }

  function hideMenu() {
    navigation.classList.add('header__navigation_hidden');
    navigationSubstrate.classList.add('header__navigation-substrate_hidden');

    const ANIMATION_DURATION = 500;
    setTimeout(() => {
      [
        navigation,
        navigationSubstrate,
        navigationClose
      ].forEach(el => el.style.display = "none");

      hamburger.classList.remove('hamburger_hidden');
    }, ANIMATION_DURATION);
  }

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    showMenu();
  });

  navigationClose.addEventListener('click', hideMenu);
  navigationSubstrate.addEventListener('click', hideMenu);
}

export default mobileMenu;