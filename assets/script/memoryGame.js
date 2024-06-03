class MemoryGame {
  constructor() {
    this.card = document.querySelectorAll('.card');
    this.failedCombinationSpan = document.querySelector('.failed-combination span');
    this.pointsSpan = document.querySelector('.points span');
    this.buttonNewGame = document.querySelector('.details button');

    this.cardOne;
    this.cardTwo;
    this.matched = 0;
    this.disableDeck = false;
    this.failed = 0;
    this.points = 0;
    this.normalPoints = 50;
    this.specialPoints = 100;
    this.pointsToWin = 1000;
  }

  initGame() {
    this.flipCard = this.flipCard.bind(this);
    this.card.forEach(card => {
      card.addEventListener('click', this.flipCard);
    });
  }

  newGame() {
    this.buttonNewGame.addEventListener('click', () => {
      if (this.matched < 6) {
        alert('Finalize o jogo!');
      } else {
        this.shuffleCards();
      }
    });
  }

  flipCard({ target: clickedCard }) {
    if (clickedCard !== this.cardOne && !this.disableDeck) {
      clickedCard.classList.add('flip');

      if (!this.cardOne) return (this.cardOne = clickedCard);

      this.cardTwo = clickedCard;
      this.disableDeck = true;
      let cardOneImg = this.cardOne.querySelector('.back-view img').src;
      let cardTwoImg = this.cardTwo.querySelector('.back-view img').src;
      this.matchCards(cardOneImg, cardTwoImg);
    }
  }

  matchCards(img1, img2) {
    if (img1 === img2) {
      this.matched++;

      setTimeout(() => {
        if (this.matched === 6) {
          alert('Você venceu. Continue jogando para acumular pontos!');
          this.failed <= 3 ? (this.points += this.specialPoints) : (this.points += this.normalPoints);
          this.pointsSpan.innerHTML = this.points;

          if (this.points >= this.pointsToWin) {
            setTimeout(() => {
              alert(`Você acumulou ${this.pointsToWin}! Você venceu!`);
            }, 500);
          }
        }
      }, 500);

      this.cardOne.removeEventListener('click', this.flipCard);
      this.cardTwo.removeEventListener('click', this.flipCard);
      this.cardOne = this.cardTwo = '';
      return (this.disableDeck = false);
    }
    this.failed++;
    this.failedCombinationSpan.innerHTML = this.failed;

    setTimeout(() => {
      if (this.failed > 6) {
        alert('Você perdeu!');
        this.shuffleCards();
        this.points -= this.normalPoints;
        this.pointsSpan.innerHTML = this.points;
      }
    }, 500);

    setTimeout(() => {
      this.cardOne.classList.add('shake');
      this.cardTwo.classList.add('shake');
    }, 400);

    setTimeout(() => {
      this.cardOne.classList.remove('shake', 'flip');
      this.cardTwo.classList.remove('shake', 'flip');
      this.cardOne = this.cardTwo = '';
      this.disableDeck = false;
    }, 1200);
  }

  resetAll() {
    this.cardOne = this.cardTwo = '';
    this.matched = 0;
    this.disableDeck = false;
    this.failed = 0;
    this.failedCombinationSpan.innerHTML = this.failed;
    if (this.points === this.pointsToWin) {
      this.points = 0;
      this.pointsSpan.innerHTML = this.points;
    }
  }

  shuffleCards() {
    this.resetAll();

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

    this.card.forEach((card, index) => {
      card.classList.remove('flip');
      let IMGTag = card.querySelector('.back-view img');
      setTimeout(() => {
        IMGTag.src = `assets/img/memoryGame/img-${arr[index]}.png`;
      }, 500);
      card.addEventListener('click', this.flipCard);
    });
  }
}
const game = new MemoryGame();
game.initGame();
game.newGame();
