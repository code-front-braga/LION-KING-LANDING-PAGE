class Player {
  constructor() {
    this.playButton = document.querySelector('.button-play-song-soundtrack');
    this.pauseButton = document.querySelector('.button-pause-song-soundtrack');
    this.prevButton = document.querySelector('.button-previous-song-soundtrack');
    this.nextButton = document.querySelector('.button-next-song-soundtrack');

    this.openSoundtrackButton = document.querySelector('.button-open-soundtrack');

    this.songs = document.querySelectorAll('.li-song-playlist');

    this.h2 = document.querySelectorAll('.h2-song-name');
    this.p = document.querySelector('.p-lyric');

    this.allSongs = [
      {
        pathSong: 'assets/audio/1-ciclo-sem-fim.mp3',
        lyric:
          'Nats ingonya ba bagithi Baba Sithi uhm ingonya aba Nats ingonya ba bagithi babo Sithi uhhmm ingony aba Ingonya aba Siyo Nqoba Ingony ba Ingonyama nengw enamabala. Desde o dia em que ao mundo chegamos. Caminhamos ao rumo do Sol. Há mais coisas pra ver. Mais que a imaginação. Muito mais pro tempo permitir. E são tantos caminhos pra se seguir. E lugares pra se descobrir. E o Sol à girar sob o azul deste céu. Nos mantém neste rio a fluir. É o ciclo sem fim que nos guiará. À dor e emoção, pela fé e o amor! Até encontrar o nosso caminho. Neste ciclo, neste ciclo sem fim!',
      },
      {
        pathSong: 'assets/audio/2-o-que-eu-quero-e-ser-rei.mp3',
        lyric:
          'Quando eu for rei ninguém vai me vencer em nenhum duelo. Eu nunca vi um rei leão sem juba e sem pêlo. A juba que eu vou ter, vai ver, será de arrasar E todo mundo vai tremer quando me ouvir urrar. He he mas por enquanto eu digo que não sei. O que eu quero mais é ser rei. Ainda falta muito pra isso garoto, se pensa que...ninguém dizendo: não faça isso! Ou então pare com isso! Eu quero sumiço! Livre pra poder viver...Isso não é bem assim...Pra fazer o que quiser! Acho que agora é a hora de a gente conversar! Reis não tem que ter calão nenhum pra aconselhar. Eu vejo que a monarquia assim vai fracassar! Eu vou embora daqui da Africa, eu vou me aposentar! Dessa criança eu não irei...E o que eu quero mais é ser rei! Olhe pra esquerda! Olhe pra direita! Pra que lado olhe eu estou em foco! Seus amigos todos vão vibrar quando a boa nova se espalhar, que o novo rei Simba vai reinar! O que eu quero mais é ser rei! O que eu quero mais é ser rei! O que eu quero mais é ser rei!',
      },
      {
        pathSong: 'assets/audio/3-se-preparem.mp3',
        lyric:
          'Eu sei que sua inteligência. Nunca foi nem será generosa. Mas preste atenção com paciência. Nas minhas palavras preciosas. Quem presta atenção se concentra. Pois quero que fiquem cientes. Que quando um rei sai outro entra. E é razão para ficarem contentes. Se preparem para ter nova vida. Uma vida sensacional. Chegou nova era, a velha já era (E a gente, onde fica?). Já tudo se explica! Por sua presença, terão recompensa. Quando eu ocupar o meu trono. Injustiças farei com que parem. Se preparem! É, preparados, vamos estar. Pra quê? Para morte do rei. Porque? Ele está doente? Não, bobo, vamos matá-lo e Simba também. Grande ideia! Quem quer o rei? Morram os reis! Idiotas, haverá um rei! Ué, mas você disse. Eu serei rei, fiquem comigo e jamais sentirão fome outra vez! Êee! Viva. Vida longa ao rei! Vida longa ao rei! O rei é um bom camarada. E o povo vai logo adorar. Vocês que serão mais amados. Farão tudo que eu tramar. Vou distribuir prêmios caros. Pra amigos que estejam a fim. Mas quero deixar muito claro. Não vão comer nada sem mim! Se preparem para o golpe do século. Se preparem para a trama sombria. Bem premeditada e bem calculada. E um rei rejeitado será coroado. Por isso eu disputo. E por isso eu luto. O trono terá que ser meu! Que os amigos não me desamparem. Se preparem! Que os amigos não me desamparem. Se preparem!',
      },
      {
        pathSong: 'assets/audio/4-hatuna-matata.mp3',
        lyric:
          'Hakuna Matata. É lindo dizer. Hakuna matata, sim vai entender. Os seus problemas você deve esquecer, isso é viver. É aprender hakuna matata. Hakuna matata? É , é o nosso lema. Lema? O que é isso? Nada, não confunda com lesma hahaha. Sabe garoto.. essas duas palavras resolvem. Todos os seus problemas. Tem razão, veja o Pumba por exemplo.... Ouça! Quando ele era um Filhote...Quando eu era um filhóóóóóte! É foi Bom Isso, hein? Obrigado! Sentiu que seu cheiro era de um porcalhão. Esvaziava a savana depois da refeição...Era Só Eu Chegar, e era um tormento. Quando via todo mundo sentar contra o vento. Ai que vexame!! Era um vexame. Quis mudar meu nome!!! Ah, que que tem o nome? Me sentia tão triste!! Se Sentia Triste. Cada vez que eu...Ei Pumba, na frente das crianças não.Ah, desculpe! Hakuna Matata, é lindo dizer. Hakuna Matata, sim vai entender. Os seus problemas, você deve esquecer. É isso aí garoto. Isso é viver. É aprender! Hakuna Matata. Hakuna Matata, Hakuna Matata, Hakuna Matata, Hakuna. Os seus problemas você deve esquecer. Isso é viver, é aprender...Hakuna matata. Hakuna matata. Hakuna matata. Hakuuuuuuuuna matata. Hakuna matata iiiiiiiié...',
      },
      {
        pathSong: 'assets/audio/5-nesta-noite-o-amor-chegou.mp3',
        lyric:
          'Veja o que acontece! O que? O que virá depois. O que? Estes pombinhos vão se apaixonar. Seremos só nós dois. Ah! A troca de carícias. A mágica no ar. Enquanto há romance entre os dois. Desastres vão chegar. Nesta noite o amor chegou. Chegou para ficar. E tudo está em harmonia e paz. Romance está no ar. São tantas coisas a dizer. Mas como lhe explicar? O que me aconteceu. Não vou contar. Senão vai me deixar. O que é que ele esconde. E não quer revelar? Pois dentro dele um rei existe. Mas que não quer mostrar. Nesta noite o amor chegou. Chegou pra ficar. E tudo está em harmonia e paz. Romance está no ar. Nesta noite o amor chegou. E bem neste lugar. Para os dois. Cansados de esperar. Para se encontrar. Final feliz escrito está. Que má situação! Sua liberdade está quase no fim. Domado está o leão',
      },
      {
        pathSong: 'assets/audio/6-as-terras-do-reino.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/7-e-de-matar.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/8-hienas.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/9-sob-a-luz-das-estrelas.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/10-soberano-da-pedra-do-rei.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/1-circle-of-life.mp3',
        lyric:
          "From the day we arrive on the planet. And blinking, step into the sun. There's more to be seen than can ever be seen. More to do than can ever be done. Some say eat or be eaten. Some say live and let live. But all are agreed as they join the stampede. You should never take more than you give. In the circle of life. It's the wheel of fortune. It's the leap of faith. It's the band of hope. Till we find our place. On the path unwinding. In the circle, the circle of life. Some of us fall by the wayside. And some of us soar to the stars. And some of us sail through our troubles. And some have to live with the scars. There's far too much to take in here. More to find than can ever be found. But the sun rolling high through the sapphire sky. Keeps great and small on the endless round. In the circle of life. It's the wheel of fortune. It's the leap of faith. It's the band of hope. Till we find our place. On the path unwinding. In the circle, the circle of life. It's the wheel of fortune, yeah. It's the leap of faith. It's the band of hope. Till we find our place. On the path unwinding, yeah. In the circle, the circle of life. On the path unwinding, yeah. In the circle, the circle of life",
      },
      {
        pathSong: 'assets/audio/2-just-cant-wait-to-be-king.mp3',
        lyric:
          "I'm gonna be a mighty king. So enemies, beware. Well, I've never seen a king of beasts. With quite so little hair. I'm gonna be the main event. Like no king was before. I'm brushing up on looking down. I'm working on my roar! This far, a rather uninspiring thing. Oh, I just can't wait to be king! You have rather a long way to go. Young master, if you think. No one saying: Do this. Now when I said that, I No one saying: Be there. What I meant was. No one saying: Stop that. Look, what you don't realize. No one saying: See here. Now see here! Free to run around all day. Well, that's definitely out. Free to do it all my way! I think it's time that you and I Arranged a heart to heart. Kings don't need advice. From little hornbills for a start. If this is where the monarchy is headed. Count me out! Out of service, out of Africa. I wouldn't hang about. This child is getting wildly out of wing. Oh, I just can't wait to be king! Everybody look left.Everybody look right. Everywhere you look I'm Standing in the spotlight! Not yet! Let every creature go for broke and sing. Let's hear it in the herd and on the wing. It's gonna be King Simba's finest fling. Oh, I just can't wait to be king! Oh, I just can't wait to be king! Oh, I just can't wait to be king!",
      },
      {
        pathSong: 'assets/audio/3-be-prepared.mp3',
        lyric:
          "I never thought hyenas essential. They're crude and unspeakably plain. But maybe they've a glimmer of potential. If allied to my vision and brain. I know that your powers of retention are as wet as a warthogs backside. But thick as you are, pay attention. My words are a matter of pride. It's clear from your vacant expressions. The lights aren't all on upstairs. But we're talking kings and successions. Even you can't be caught unawares. So prepare for a chance of a lifetime. Be prepared for sensational news. A shining new era. Is tiptoeing nearer. And where do we feature?Just listen to teacher. I know it sounds sordid. But you will be rewarded. When at last I am given my dues. And injustice deliciously squared. Be prepared. Yeah, be prepared, we'll be prepared For what? For the death of the king. Why is he sick? No fool, we're gonna kill him and Simba too. Great idea, who needs a king? No king, no king, la-la-la-la-la-la. Idiots, there will be a king.Eh, but you said...I will be king. Stick with me and you will never go hungry again. Yay, (alright) alright, long live the king. Long live the king. Long live the king. It's great that we'll soon be connected. With a king who will be all-time adored. Of course, quid pro quo, you're expected. To take certain duties on board. The future is littered with prizes. And though I am the main addressee. The point that I must emphasize is. You wont get a sniff without me. So prepare for the coup of the century. Be prepared for the murkiest scam. Meticulous planning. Tenacity spanning. Decades of denial. Is simply why I will be king undisputed. Respected, saluted. And seen for the wonder I am. Yes, my teeth and ambitions are bared. Be prepared. Yes, our teeth and ambitions are bared. Be prepared.",
      },
      {
        pathSong: 'assets/audio/4-hakuna-matata.mp3',
        lyric:
          "Hakuna matata! What a wonderful phrase! Hakuna matata! Ain't no passin' craze. It means no worries for the rest of your days. It's our problem-free philosophy. Hakuna matata! Why, when he was a young warthog...When I was a young warthog...Very nice. Thanks. He found his aroma lacked a certain appeal. He could clear the savannah after every meal. I'm a sensitive soul, though I seem thick-skinned. And it hurt that my friends never stood downwind. And, oh, the shame! He was ashamed! Thoughta changin' my name. Oh, what's in a name? And I got downhearted...How did you feel?...every time that I...Hey, Pumbaa, not in front of the kid! Oh, sorry. Hakuna matata! What a wonderful phrase! Hakuna matata! Ain't no passin' craze. It means no worries for the rest of your days! Yeah, sing it, kid! It's our problem-free philosophy! Hakuna matata! Hakuna matata! Hakuna matata! Hakuna matata! Hakuna...! It means no worries for the rest of your days! It's our problem-free philosophy. Hakuna matata! Hunka matata!",
      },
      {
        pathSong: 'assets/audio/5-feel-love-tonight.mp3',
        lyric:
          "I can see what's happening. What? And they don't have a clue. Who? They'll fall in love and here's the bottom line. Our trio's down to two. Oh. The sweet caress of twilight. There's magic everywhere. And with all this romantic atmosphere. Disaster's in the air. Can you feel the love tonight. The peace the evening brings. The world for once in perfect harmony. With all its living things. So many things to tell her. But how to make her see. The truth about my past, impossible. She'd turn away from me. He's holding back, he's hiding. But what, I can't decide. Why won't he be the king I know he is? The king I see inside? Can you feel the love tonight? The peace the evening brings. The world, for once, in perfect harmony. With all its living things. Can you feel the love tonight? You needn't look too far. Stealing through the night's uncertainties. Love is where they are. And if he feels the love tonight. In the way I do. It's enough for this restless wanderer. Just to be with you",
      },
      {
        pathSong: 'assets/audio/6-this-land.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/7-die-for.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/8-under-stars.mp3',
        lyric: 'Instrumental',
      },
      {
        pathSong: 'assets/audio/9-king-pride-rock.mp3',
        lyric: 'Instrumental',
      },
    ];

    this.pathSongsMap = this.allSongs.map(songPath => new Audio(songPath.pathSong));
    this.lyricSongMap = this.allSongs.map(songLyric => songLyric.lyric);
    this.disc = document.querySelector('.div-disc-playlist');

    this.dropDown = document.querySelector('.nav-dropdown-language-playlist');
    this.informationAboutCloseSoundtrack = document.querySelector('.div-button-open-soundtrack-information');

    this.closePlaylistButton = document.querySelector('.button-close-playlist');

    this.currentAudio = null;
    this.currentSongIndex = null;

    this.currentTimeSong = document.querySelector('#span-current-time');
    this.duration = document.querySelector('#span-duration');
    this.progressBar = document.querySelector('.div-progress-bar');
    this.progress = document.querySelector('.div-progress');
  }

  initPLayer() {
    this.playSongByLink();
    this.pauseSong();
    this.stopSong();
    this.playSongByButton();
    this.previousSong();
    this.nextSong();
    this.manipulateCurrentTime();
  }

  playSongByLink() {
    this.songs.forEach((song, index) => {
      song.addEventListener('click', () => {
        if (this.currentAudio) {
          stop(this.currentAudio);
        }
        this.disc.classList.add('spinner');
        this.playButton.classList.add('hide-play-song-button');
        this.pauseButton.classList.add('show-pause-song-button');
        this.dropDown.classList.add('disabled-link');
        this.informationAboutCloseSoundtrack.classList.add('show-information');
        this.openSoundtrackButton.classList.add('disabled-link');
        this.currentSongIndex = index;
        this.currentAudio = this.pathSongsMap[this.currentSongIndex];
        this.getSongName(song);
        this.getLyric(this.lyricSongMap[this.currentSongIndex]);
        play(this.currentAudio, 0.5);
        this.updateTime(this.currentAudio);
        this.onTimeUpdate(this.pathSongsMap);
      });
    });
  }

  pauseSong() {
    this.pauseButton.addEventListener('click', () => {
      if (this.currentAudio) {
        pause(this.currentAudio);
        this.disc.classList.remove('spinner');
      }
      this.dropDown.classList.remove('disabled-link');
      this.playButton.classList.remove('hide-play-song-button');
      this.pauseButton.classList.remove('show-pause-song-button');
    });
  }

  stopSong() {
    this.closePlaylistButton.addEventListener('click', () => {
      stop(this.currentAudio);
      this.disc.classList.remove('spinner');
      this.h2.forEach((h2, index) => {
        if (index === 0) return (h2.innerHTML = '');
        if (index === 1) return (h2.innerHTML = 'A LETRA DA MÚSICA VAI APARECER AQUI. DÊ O PLAY E CANTE JUNTO!');
      });
      this.p.innerHTML = '';
    });
  }

  playSongByButton() {
    this.playButton.addEventListener('click', () => {
      if (!this.currentAudio) return this.disc.classList.remove('spinner');
      this.disc.classList.add('spinner');
      this.playButton.classList.add('hide-play-song-button');
      this.pauseButton.classList.add('show-pause-song-button');
      this.openSoundtrackButton.classList.add('disabled-link');
      this.informationAboutCloseSoundtrack.classList.add('show-information');
      this.dropDown.classList.add('disabled-link');
      play(this.currentAudio);
    });
  }

  previousSong() {
    this.prevButton.addEventListener('click', () => {
      if (this.currentSongIndex > 0) {
        if (this.currentAudio) {
          stop(this.currentAudio);
        }
        this.playButton.classList.add('hide-play-song-button');
        this.pauseButton.classList.add('show-pause-song-button');
        this.currentSongIndex--;
        this.currentAudio = this.pathSongsMap[this.currentSongIndex];
        this.getSongName(this.songs[this.currentSongIndex]);
        this.getLyric(this.lyricSongMap[this.currentSongIndex]);
        play(this.currentAudio);
      }
    });
  }

  nextSong() {
    this.nextButton.addEventListener('click', () => {
      if (this.currentSongIndex < this.pathSongsMap.length - 1) {
        stop(this.currentAudio);
        this.currentSongIndex++;
      }
      this.playButton.classList.add('hide-play-song-button');
      this.pauseButton.classList.add('show-pause-song-button');
      this.currentAudio = this.pathSongsMap[this.currentSongIndex];
      this.getSongName(this.songs[this.currentSongIndex]);
      this.getLyric(this.lyricSongMap[this.currentSongIndex]);
      play(this.currentAudio);
    });
  }

  updateTime(track) {
    const currentMinutes = Math.floor(track.currentTime / 60);
    const currentSeconds = Math.floor(track.currentTime % 60);
    this.currentTimeSong.textContent = currentMinutes + ':' + this.zeroFormatter(currentSeconds);
    const durationFormatted = isNaN(track.duration) ? 0 : track.duration;
    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationSeconds = Math.floor(durationFormatted % 60);
    this.duration.textContent = durationMinutes + ':' + this.zeroFormatter(durationSeconds);

    const progressWidth = durationFormatted ? (track.currentTime / durationFormatted) * 100 : 0;
    this.progress.style.width = progressWidth + '%';
  }

  onTimeUpdate(track) {
    track.forEach(song => {
      song.ontimeupdate = () => this.updateTime(song);
    });
  }

  manipulateCurrentTime() {
    this.progressBar.addEventListener('click', e => {
      const newTime = (e.offsetX / this.progressBar.offsetWidth) * this.pathSongsMap[this.currentSongIndex].duration;
      this.pathSongsMap[this.currentSongIndex].currentTime = newTime;
    });
  }

  zeroFormatter(n) {
    return n < 10 ? '0' + n : n;
  }

  getSongName(song) {
    this.h2.forEach(h2 => {
      return (h2.innerHTML = song.innerHTML);
    });
  }

  getLyric(lyric) {
    return (this.p.innerHTML = lyric);
  }
}
const startSoundtrack = new Player();
startSoundtrack.initPLayer();
