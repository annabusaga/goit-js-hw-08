import Player from '@vimeo/player';

const player = new Player(document.querySelector('#vimeo-player'));

player.on('timeupdate', function ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)

});


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")|| 0);








