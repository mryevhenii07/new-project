const menurefs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menuBackdrop: document.querySelector('[data-menu]'),
    mobMenulist: document.querySelector('.mob-menu-list'),
  };
console.log(menurefs)
  menurefs.openMenuBtn.addEventListener('click', toggleMenu);
  menurefs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {

    menurefs.menuBackdrop.classList.toggle('is-hidden');


  }
  menurefs.mobMenulist.addEventListener('click', hiddenMenu);
  function hiddenMenu (even) {
  
    if(!even.target.classList.contains("mob-menu-link")) return
    menurefs.menuBackdrop.classList.add('is-hidden');

  }