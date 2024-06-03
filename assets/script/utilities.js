const play = (el, value) => {
  el.play();
  el.volume = value;
};

const pause = el => {
  el.pause();
};

const stop = el => {
  el.pause();
  el.currentTime = 0;
};