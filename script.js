const shareBtn = document.getElementById('toggle-share');
const shareMenu = document.getElementById('share');
const shareMenuBtn = document.getElementById('share-menu-btn');
console.log(shareBtn);

shareBtn.addEventListener('click', (e) => {
  const xPos = e.clientX;
  const viewportWidth = window.innerWidth;
  const right = viewportWidth - xPos;
  console.log(`Right: ${right}`);
  console.log(xPos);
  shareMenu.style.right = `${right}px`;
  shareMenu.classList.toggle('show');
  console.log(`Share Menu Left: ${shareMenu.style.right}`);
});

shareMenuBtn.addEventListener('click', (e) => {
  shareMenu.classList.toggle('show');
});
