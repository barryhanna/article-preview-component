const shareBtn = document.getElementById('toggle-share-btn');
const shareMenu = document.getElementById('share-menu');
const shareMenuBtn = document.getElementById('share-menu-btn');

shareBtn.addEventListener('click', (e) => {
  if (window.innerWidth > 599) {
    shareMenu.style.left = `${e.screenX}px`;
    shareMenu.style.top = `${e.screenY - 190}px`;
  }
  shareMenu.classList.toggle('show');
});

shareMenuBtn.addEventListener('click', (e) => {
  shareMenu.classList.toggle('show');
});

function moveShareMenu() {
  const footer = document.querySelector('.article-footer');
  if (window.innerWidth > 599) {
    document.body.appendChild(shareMenu);
  } else {
    footer.appendChild(shareMenu);
  }
}

window.onresize = moveShareMenu;
window.onload = moveShareMenu;
