'use strict';

(() => {
  window.addEventListener('load', (event) => {
    const list = document.querySelector('ul');
    for (let i = 0; i < count; i++) {
      list.appendChild(document.createElement('li')).textContent = message;
    }
  });
})();
