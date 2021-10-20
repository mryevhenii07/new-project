const menurefs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menuBackdrop: document.querySelector('[data-menu]'),
  };

  menurefs.openMenuBtn.addEventListener('click', toggleMenu);
  menurefs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menurefs.menuBackdrop.classList.toggle('is-hidden');
  }