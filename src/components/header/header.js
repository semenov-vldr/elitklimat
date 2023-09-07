const header = document.querySelector('header.header');

if (header) {

  const menu = header.querySelector('.header__nav');
  const burger = header.querySelector('.header__burger');
  const menuClose = header.querySelector('.header__nav-close');
  const navLinks = header.querySelectorAll(".header__nav-link");
  const menuActiveClass = "js-menu-open";

  function closeMobileMenu () {
    menu.classList.remove(menuActiveClass);
    unblockScrollBody();
  };

  burger.addEventListener('click', () => {
    menu.classList.add(menuActiveClass);
    blockScrollBody();

    if (menu.classList.contains(menuActiveClass)) {
      console.log('open menu')
      let mc = new Hammer(menu);
      mc.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
      });
      mc.on('swipeup', closeMobileMenu);
    }
  });

  menuClose.addEventListener('click', closeMobileMenu);

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMobileMenu)
  });

}






