class SwiperPlay {
  containersIMG = document.querySelectorAll('.div-img-slide-container');

  audios = [
    'assets/audio/slide-1.mp3',
    'assets/audio/slide-2.mp3',
    'assets/audio/slide-3.mp3',
    'assets/audio/slide-4.mp3',
    'assets/audio/slide-5.mp3',
  ];

  playSong() {
    const audioMap = this.audios.map(song => new Audio(song));

    this.containersIMG.forEach((containerIMG, index) => {
      containerIMG.onmouseover = () => {
        play(audioMap[index], 0.5);
      };
      containerIMG.onmouseout = () => {
        stop(audioMap[index]);
      };
    });
  }
}
new SwiperPlay().playSong();
