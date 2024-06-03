class Voices {
  characters = document.querySelectorAll('.style-character');

  voices = [
    'assets/audio/voz-mufasa.mp3',
    'assets/audio/voz-simba.mp3',
    'assets/audio/voz-sarabi.mp3',
    'assets/audio/voz-zazu.mp3',
    'assets/audio/voz-scar.mp3',
    'assets/audio/voz-timao.mp3',
    'assets/audio/voz-pumba.mp3',
    'assets/audio/voz-nala.mp3',
    'assets/audio/voz-rafiki.mp3',
    'assets/audio/voz-shenzi.mp3',
    'assets/audio/voz-banzai.mp3',
    'assets/audio/voz-ed.mp3',
  ];
  voicesMap = this.voices.map(voice => new Audio(voice));

  playVoices() {
    this.characters.forEach((character, index) => {
      character.onmouseover = () => {
        play(this.voicesMap[index], 0.3);
      };
      character.onmouseout = () => {
        stop(this.voicesMap[index]);
      };
    });
  }
}
new Voices().playVoices();
