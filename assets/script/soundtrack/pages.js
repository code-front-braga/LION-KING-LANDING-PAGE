// class Pages {
//   constructor() {
//     this.curiosities = document.querySelectorAll('.child-home-soundtrack');
//     this.slideButton = document.querySelector('.div-container-svg-arrow-soundtrack');
//     this.homeLink = document.querySelector('.li-link-home-soundtrack');
//     this.playlistLink = document.querySelector('.li-link-playlist-soundtrack');
//     this.lyricLink = document.querySelector('.li-link-lyric-soundtrack');
//     this.dropDown = document.querySelector('.nav-dropdown-language-playlist');

//     this.svgOpenPlaylist = document.querySelector('.div-open-playlist-link-svg-soundtrack');
//     this.svgClosePlaylist = document.querySelector('.div-close-playlist-link-svg-soundtrack');
//     this.svgOpenHome = document.querySelector('.div-open-home-link-svg-soundtrack')
//     this.svgCloseHome = document.querySelector('.div-close-home-link-svg-soundtrack')

//     this.click = 0;
//   }

//   manipulatePages() {
//     const curiositiesLength = this.curiosities.length;
//     this.slideButton.addEventListener('click', () => {
//       this.click++;
//       if (this.click) {
//         for (let i = 1; i < curiositiesLength; i++) {
//           if (this.click === i) return (window.location.href = `#div-${i}-curiosity`);
//           if (this.click === 5) {
//             window.location.href = '#div-5-curiosity';
//             this.slideButton.classList.add('disabled-svg-arrow');
//           }
//         }
//       }
//     });
//   }

//   resetAll() {
//     this.homeLink.addEventListener('click', () => {
//       this.click = 0;
//       this.slideButton.classList.remove('disabled-svg-arrow');
//       this.dropDown.classList.remove('dropdown-visible');
//       this.svgOpenPlaylist.classList.remove('hide-open-svg');
//       this.svgClosePlaylist.classList.remove('show-close-svg');
//     });
//     this.lyricLink.addEventListener('click', () => {
//       this.click = 0;
//       this.slideButton.classList.add('disabled-svg-arrow');
//       this.dropDown.classList.remove('dropdown-visible');
//       this.svgOpenPlaylist.classList.remove('hide-open-svg');
//       this.svgClosePlaylist.classList.remove('show-close-svg');
//     });
//     this.playlistLink.addEventListener('click', () => {
//       this.click = 0;
//       this.slideButton.classList.add('disabled-svg-arrow');
//     });
//   }
// }
// const page = new Pages();
// page.manipulatePages();
// page.resetAll();
