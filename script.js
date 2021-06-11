const shareBtn = document.getElementById('toggle-share-btn');
const shareMenu = document.getElementById('share-menu');
const shareMenuBtn = document.getElementById('share-menu-btn');
console.log(shareBtn);

shareBtn.addEventListener('click', (e) => {
  shareMenu.classList.toggle('show');
});

shareMenuBtn.addEventListener('click', (e) => {
  shareMenu.classList.toggle('show');
});
