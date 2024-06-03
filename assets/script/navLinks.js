class NavbarLinks {
  constructor() {
    this.openNavbarButton = document.querySelector('.menu-hamburger');
    this.navbar = document.querySelector('#div-nav-links');
    this.liIcons = document.querySelectorAll('.li-link-nav-icon');
    this.checkBoxMenu = document.querySelector('.menu-hamburger input');
  }

  manipulatingNavbar() {
    this.openNavbarButton.addEventListener('click', () => {
      if (this.checkBoxMenu.checked) {
        this.navbar.classList.add('show-nav-links');
      } else {
        this.navbar.classList.remove('show-nav-links');
      }
    });
  }
}
const navLinks = new NavbarLinks();
navLinks.manipulatingNavbar();
