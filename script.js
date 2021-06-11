const shareBtn = document.getElementById('toggle-share-btn');
const shareMenu = document.getElementById('share-menu');
const shareMenuBtn = document.getElementById('share-menu-btn');

shareBtn.addEventListener('click', (e) => {
  shareMenu.clientRight = e.clientX - shareMenu.style.width / 2;
  console.log(shareMenu.clientRight);
  shareMenu.classList.toggle('show');
});

shareMenuBtn.addEventListener('click', (e) => {
  shareMenu.classList.toggle('show');
});

function moveShareMenu() {
  const article = shareMenu.closest('article');
  const footer = article.querySelector('.article-footer');
  if (window.innerWidth > 599) {
    article.appendChild(shareMenu);
  } else {
    footer.appendChild(shareMenu);
  }
}

window.onresize = moveShareMenu;
