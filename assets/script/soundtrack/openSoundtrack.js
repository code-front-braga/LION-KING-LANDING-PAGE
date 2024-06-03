class Soundtrack {
  constructor() {
    this.openButton = document.querySelector('.button-open-soundtrack');
    this.layoutSoundtrack = document.querySelector('.new-layout-soundtrack');
    this.wrapperSoundtrack = document.querySelector('.div-new-layout-soundtrack-wrapper');
    this.slideButton = document.querySelector('.div-container-svg-arrow-soundtrack');
    this.playlistContainer = document.querySelector('.div-container-playlist-and-player');
    this.dropDown = document.querySelector('.nav-dropdown-language-playlist');

    this.click = 0;
  }

  openSoundtrack() {
    let defaultTextButton = this.openButton.innerText;

    this.openButton.addEventListener('click', () => {
      if (this.openButton.classList.toggle('change-button-position')) {
        this.layoutSoundtrack.style.display = 'flex';
        this.setAttribute(this.layoutSoundtrack, 'transition-style', 'in:circle:hesitate');

        setTimeout(() => {
          this.wrapperSoundtrack.classList.add('soundtrack-wrapper-visible');
        }, 1400);
        this.openButton.innerHTML = 'X';
      } else {
        this.setAttribute(this.layoutSoundtrack, 'transition-style', 'out:circle:hesitate');
        this.dropDown.classList.remove('dropdown-visible');

        setTimeout(() => {
          this.openButton.innerHTML = defaultTextButton;
        }, 400);
        this.slideButton.classList.remove('disabled-svg-arrow');
        this.playlistContainer.classList.remove('playlist-visible');

        window.location.hash = '#div-main-home-link-soundtrack';
      }
    });
  }

  setAttribute(element, attribute, className) {
    return element.setAttribute(attribute, className);
  }
}
new Soundtrack().openSoundtrack();
