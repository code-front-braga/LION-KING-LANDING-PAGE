class Character {
  mufasa = document.querySelector('.div-character-mufasa');
  simba = document.querySelector('.div-character-simba');
  sarabi = document.querySelector('.div-character-sarabi');
  zazu = document.querySelector('.div-character-zazu');
  scar = document.querySelector('.div-character-scar');
  timao = document.querySelector('.div-character-timao');
  pumba = document.querySelector('.div-character-pumba');
  nala = document.querySelector('.div-character-nala');
  rafiki = document.querySelector('.div-character-rafiki');
  shenzi = document.querySelector('.div-character-shenzi');
  banzai = document.querySelector('.div-character-banzai');
  ed = document.querySelector('.div-character-ed');

  charactersContainer = document.querySelectorAll('.style-character');

  modal = document.querySelector('.div-card-character-modal-container');
  card = document.querySelector('.div-card-character-modal');
  h2 = document.querySelector('.h2-character-name');
  h3 = document.querySelector('.h3-character-title');
  p = document.querySelector('.p-character-text');
  image = document.querySelector('.img-character-modal');
  buttonClose = document.querySelector('.button-close-character-modal');
  backDrop = document.querySelector('.div-backdrop');

  flipped = false;

  createModal({ character, name, title, text }) {
    character.addEventListener('click', () => {
      this.backDrop.classList.add('visible');
      this.modal.classList.add('show-modal');
      this.h2.innerHTML = name;
      this.h3.innerHTML = title;
      this.p.innerHTML = text;
      this.image.setAttribute('src', `./assets/img/characters/${name}-character.png`);
      this.resetAll();
    });
  }

  showModal() {
    this.createModal({
      character: this.mufasa,
      name: this.mufasa.innerText,
      title: 'O REI SÁBIO',
      text: 'Pai de Simba, marido de Sarabi e irmão mais velho de Scar. Mufasa é um líder sábio e justo, muito respeitado por todos os animais do Reino do Orgulho. Ele é morto por Scar no início do filme.',
    });
    this.createModal({
      character: this.simba,
      name: this.simba.innerText,
      title: 'O REI CORAJOSO',
      text: 'Filho de Mufasa e Sarabi, sobrinho de Scar e companheiro de Nala. Simba é o protagonista da franquia. Ele é conhecido por sua coragem e determinação, mas também por sua inicial relutância em aceitar seu destino como rei.',
    });
    this.createModal({
      character: this.sarabi,
      name: this.sarabi.innerText,
      title: 'A FORÇA SILENCIOSA',
      text: 'Mãe de Simba, esposa de Mufasa. Sarabi é uma rainha forte e digna, que mantém a fé e a esperança mesmo quando Scar assume o controle do Reino do Orgulho.',
    });
    this.createModal({
      character: this.zazu,
      name: this.zazu.innerText,
      title: 'A VOZ DA LEALDADE',
      text: 'Conselheiro leal de Mufasa e posteriormente de Simba. Zazu é um pássaro diligente e um pouco nervoso, que leva suas responsabilidades muito a sério.',
    });
    this.createModal({
      character: this.scar,
      name: this.scar.innerText,
      title: 'A SOMBRA DO PODER',
      text: 'Irmão mais novo de Mufasa, tio de Simba. Scar é o principal antagonista do filme. Ele é conhecido por sua astúcia e ambição, que o levam a matar Mufasa e usurpar o trono.',
    });
    this.createModal({
      character: this.timao,
      name: this.timao.innerText,
      title: 'O ESPÍRITO LIVRE',
      text: 'Timão é um suricata inteligente e autoconfiante que vive pelo lema “Hakuna Matata”, que significa “sem preocupações”. Ele é conhecido por seu espírito livre e por ser o melhor amigo de Pumba.',
    });
    this.createModal({
      character: this.pumba,
      name: this.pumba.innerText,
      title: 'O CORAÇÃO DA DIVERSÃO',
      text: 'Pumba é um javali de bom coração, mas um pouco ingênuo. Ele é melhor amigo de Timão e também vive pelo lema “Hakuna Matata”. Pumba é conhecido por sua natureza amigável e seu senso de humor.',
    });
    this.createModal({
      character: this.nala,
      name: this.nala.innerText,
      title: 'A DETERMINADA',
      text: 'Filha de Sarafina, melhor amiga e depois companheira de Simba. Nala é conhecida por sua lealdade e coragem. Ela desempenha um papel crucial em convencer Simba a retornar ao Reino do Orgulho e reivindicar seu lugar como rei.',
    });
    this.createModal({
      character: this.rafiki,
      name: this.rafiki.innerText,
      title: 'O ANCIÃO SÁBIO',
      text: 'Rafiki é um mandril sábio que serve como xamã do Reino do Orgulho. Ele é conhecido por sua sabedoria e por suas maneiras um tanto excêntricas.',
    });
    this.createModal({
      character: this.shenzi,
      name: this.shenzi.innerText,
      title: 'A ASTÚCIA DA HIENA',
      text: 'Shenzi é uma hiena fêmea. Ela é a líder de um clã de hienas. Eles formaram uma amizade com um membro da família real chamado Scar, que os recrutou para ajudar no assassinato de seu irmão, Mufasa, e de seu sobrinho, Simba.',
    });
    this.createModal({
      character: this.banzai,
      name: this.banzai.innerText,
      title: 'A VOZ DA REBELIÃO',
      text: 'Banzai é uma hiena macho. Ele é um membro de alto escalão do clã de Shenzi, junto com seu companheiro Ed. Eles formaram uma amizade com um membro da família real chamado Scar, que os recrutou para ajudar no assassinato de seu irmão, Mufasa, e de seu sobrinho, Simba.',
    });
    this.createModal({
      character: this.ed,
      name: this.ed.innerText,
      title: 'O SILÊNCIO DOS SORRISOS',
      text: 'Ed é uma hiena macho. Ele é um membro de alto escalão do clã de Shenzi, junto com seu companheiro Banzai. Eles formaram uma amizade com um membro da família real chamado Scar, que os recrutou para ajudar no assassinato de seu irmão, Mufasa, e de seu sobrinho, Simba.',
    });
  }

  closeModal() {
    this.buttonClose.addEventListener('click', () => {
      this.backDrop.classList.remove('visible');
      this.modal.classList.remove('show-modal');
    });
  }

  flip() {
    this.card.addEventListener('click', () => {
      if (!this.flipped) {
        this.flipped = true;
        this.card.classList.add('flip');
      } else {
        this.flipped = false;
        this.card.classList.remove('flip');
      }
    });
  }

  resetAll() {
    this.flipped = false;
    this.card.classList.remove('flip');
  }
}

const modal = new Character();
modal.showModal();
modal.closeModal();
modal.flip();
