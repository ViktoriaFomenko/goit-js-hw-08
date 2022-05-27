import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key = 'videoplayer-current-time';

const onPlay = data => {
  localStorage.setItem(key, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(key))
  .then(function (seconds) {
    seconds = data.seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
