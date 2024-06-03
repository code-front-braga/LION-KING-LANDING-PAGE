class Playlist {
  constructor() {
    this.curiosities = document.querySelectorAll('.child-home-soundtrack');
    this.slideButton = document.querySelector('.div-container-svg-arrow-soundtrack');

    this.allLinksSoundtrack = document.querySelectorAll('.li-link-soundtrack');
    this.homeLink = document.querySelector('.li-link-home-soundtrack');
    this.playlistLink = document.querySelector('.li-link-playlist-soundtrack');
    this.lyricLink = document.querySelector('.li-link-lyric-soundtrack');

    this.svgOpenPlaylist = document.querySelector('.div-open-playlist-link-svg-soundtrack');
    this.svgClosePlaylist = document.querySelector('.div-close-playlist-link-svg-soundtrack');

    this.svgOpenHome = document.querySelector('.div-home-link-svg-soundtrack');

    this.svgOpenLyric = document.querySelector('.div-open-lyric-link-svg-soundtrack');
    this.svgCloseLyric = document.querySelector('.div-close-lyric-link-svg-soundtrack');

    this.dropDown = document.querySelector('.nav-dropdown-language-playlist');
    this.h2Dropdown = document.querySelector('.h2-dropdown-language');

    this.openPlaylistButton = document.querySelector('.button-open-playlist');
    this.closePlaylistButton = document.querySelector('.button-close-playlist');
    this.playlistContainer = document.querySelector('.div-container-playlist-and-player');

    this.openSoundtrackButton = document.querySelector('.button-open-soundtrack');
    this.informationAboutCloseSoundtrack = document.querySelector('.div-button-open-soundtrack-information');

    this.click = 0;
  }

  manipulateSwiper() {
    const curiositiesLength = this.curiosities.length;
    this.slideButton.addEventListener('click', () => {
      this.click++;
      if (this.click) {
        for (let i = 1; i < curiositiesLength; i++) {
          if (this.click === i) return (window.location.href = `#div-${i}-curiosity`);
          if (this.click === 5) {
            window.location.href = '#div-5-curiosity';
            this.slideButton.classList.add('disabled-svg-arrow');
          }
        }
      }
    });
  }

  manipulatingDropdown() {
    this.playlistLink.addEventListener('click', () => {
      if (this.dropDown.classList.toggle('dropdown-visible')) {
        this.svgOpenPlaylist.classList.add('hide-open-svg');
        this.svgOpenLyric.classList.remove('hide-open-svg');
        this.slideButton.classList.add('disabled-svg-arrow');
        this.svgClosePlaylist.classList.add('show-close-svg');
        this.svgCloseLyric.classList.remove('show-close-svg');
      } else {
        this.svgOpenPlaylist.classList.remove('hide-open-svg');
        this.svgClosePlaylist.classList.remove('show-close-svg');
      }
    });
  }

  showPlaylist() {
    this.openPlaylistButton.addEventListener('click', () => {
      this.dropDown.classList.add('dropdown-change-position');
      this.playlistContainer.classList.add('playlist-visible');
      this.openPlaylistButton.classList.add('hide-open-playlist-button');
      this.closePlaylistButton.classList.add('show-close-playlist-button');
      this.h2Dropdown.innerHTML = 'VOLTE SEMPRE';
    });
  }

  hidePlaylist() {
    this.closePlaylistButton.addEventListener('click', () => {
      this.dropDown.classList.remove('dropdown-visible');
      this.svgOpenPlaylist.classList.remove('hide-open-svg');
      this.svgClosePlaylist.classList.remove('show-close-svg');
      this.dropDown.classList.remove('dropdown-change-position');
      this.playlistContainer.classList.remove('playlist-visible');
      this.openSoundtrackButton.classList.remove('disabled-link');
      this.openPlaylistButton.classList.remove('hide-open-playlist-button');
      this.closePlaylistButton.classList.remove('show-close-playlist-button');
      this.informationAboutCloseSoundtrack.classList.remove('show-information');
      this.h2Dropdown.innerHTML = 'BEM VINDO';
    });
  }

  manipulatingHomeLink() {
    this.homeLink.addEventListener('click', () => {
      this.click = 0;
      this.dropDown.classList.remove('dropdown-visible');
      this.svgOpenLyric.classList.remove('hide-open-svg');
      this.svgCloseLyric.classList.remove('show-close-svg');
      this.svgOpenPlaylist.classList.remove('hide-open-svg');
      this.slideButton.classList.remove('disabled-svg-arrow');
      this.svgClosePlaylist.classList.remove('show-close-svg');
    });
  }

  manipulatingLyricLink() {
    this.lyricLink.addEventListener('click', () => {
      this.click = 0;
      this.svgOpenLyric.classList.add('hide-open-svg');
      this.dropDown.classList.remove('dropdown-visible');
      this.svgCloseLyric.classList.add('show-close-svg');
      this.slideButton.classList.add('disabled-svg-arrow');
      this.svgOpenPlaylist.classList.remove('hide-open-svg');
      this.svgClosePlaylist.classList.remove('show-close-svg');
    });
  }
}
const playlist = new Playlist();
playlist.manipulateSwiper();
playlist.manipulatingDropdown();
playlist.showPlaylist();
playlist.hidePlaylist();
playlist.manipulatingHomeLink();
playlist.manipulatingLyricLink();
