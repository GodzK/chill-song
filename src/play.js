const card = document.getElementById('card');
const audio = new Audio('lofi.mp3');

let isPlaying = false;

const smilingEmoji = document.createElement('img');
smilingEmoji.src = '<img src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/smiling-face-with-sunglasses_1f60e.gif">';
const pensiveEmoji = document.createElement('img');
pensiveEmoji.src = '<img src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif">';

card.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    card.innerHTML = '';
    card.appendChild(smilingEmoji);
  } else {
    audio.play();
    isPlaying = true;
    card.innerHTML = '';
    card.appendChild(pensiveEmoji);
  }
});

