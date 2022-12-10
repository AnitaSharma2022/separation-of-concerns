'use strict';

const actual = (color, url) => {
  const divEl = document.createElement('div');
  divEl.className = 'thumbnail-container';

  const aEl = document.createElement('a');
  aEl.className = 'to-the-right';
  aEl.target = '_blank';
  aEl.href = "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png";
  divEl.appendChild(aEl);

  const imgEl = document.createElement('img');
  imgEl.className = 'thumbnail';
  imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png";
  imgEl.alt = `the color ${color}`;
  aEl.appendChild(imgEl);

  return divEl;
};
