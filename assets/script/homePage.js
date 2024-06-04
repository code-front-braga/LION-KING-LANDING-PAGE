class HomePageControls {
  constructor() {
    this.buttonPlay = document.querySelectorAll('.button-home-play-song-and-video');
    this.buttonStop = document.querySelectorAll('.button-home-stop-song-and-video');
    this.imgHomePage = document.querySelector('#div-background-home-page');
    this.videoHomePage = document.querySelector('#video-home-page');
    this.iconClosePaw = document.querySelectorAll('.img-icon-closePaw');
    this.iconOpenPaw = document.querySelectorAll('.img-icon-openPaw');
    this.songHomePage = new Audio('assets/audio/song-home.mp3');
    this.fadeIN = 'fade-in';
    this.fadeOUT = 'fade-out';
  }

  initControls() {
    this.playMedias();
    this.stopMedias();
  }

  playMedias() {
    this.buttonPlay.forEach(button => {
      button.addEventListener('click', () => {
        play(this.songHomePage, 0.5);
        play(this.videoHomePage, '');
        this.videoHomePage.loop = true;

        this.fadeEffect({ el: this.imgHomePage, value: 0, addEffect: this.fadeOUT, removeEffect: this.fadeIN });
        this.fadeEffect({ el: this.videoHomePage, value: 1, addEffect: this.fadeIN, removeEffect: this.fadeOUT });

        this.iconClosePaw.forEach(icon => {
          this.fadeEffect({ el: icon, value: 0, addEffect: this.fadeOUT, removeEffect: this.fadeIN });
        });

        this.iconOpenPaw.forEach(icon => {
          this.fadeEffect({ el: icon, value: 1, addEffect: this.fadeIN, removeEffect: this.fadeOUT });
        });
      });
    });
  }

  stopMedias() {
    this.buttonStop.forEach(button => {
      button.addEventListener('click', () => {
        stop(this.songHomePage);
        stop(this.videoHomePage);

        this.videoHomePage.removeAttribute('loop');

        this.fadeEffect({ el: this.imgHomePage, value: 1, addEffect: this.fadeIN, removeEffect: this.fadeOUT });
        this.fadeEffect({ el: this.videoHomePage, value: 0, addEffect: this.fadeOUT, removeEffect: this.fadeIN });

        this.iconClosePaw.forEach(icon => {
          this.fadeEffect({ el: icon, value: 1, addEffect: this.fadeIN, removeEffect: this.fadeOUT });
        });

        this.iconOpenPaw.forEach(icon => {
          this.fadeEffect({ el: icon, value: 0, addEffect: this.fadeOUT, removeEffect: this.fadeIN });
        });
      });
    });
  }

  fadeEffect({ el, value, addEffect, removeEffect }) {
    el.style.opacity = value;
    el.classList.add(addEffect);
    el.classList.remove(removeEffect);
  }
}

const homePage = new HomePageControls();
homePage.initControls();
