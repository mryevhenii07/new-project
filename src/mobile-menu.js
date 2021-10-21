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

<<<<<<< HEAD
=======

  }
  menurefs.mobMenulist.addEventListener('click', hiddenMenu);
  function hiddenMenu (even) {
  
    if(!even.target.classList.contains("mob-menu-link")) return
    menurefs.menuBackdrop.classList.add('is-hidden');

>>>>>>> 4c17b16a370f40ee13aa39bb98347ef0f8de57f2
  }