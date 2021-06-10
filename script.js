const shareBtn = document.getElementById('toggle-share');
const shareMenu = document.getElementById('share');
console.log(shareBtn);

shareBtn.addEventListener('click', (e) => {
  const xPos = e.clientX;
  console.log(xPos);
  shareMenu.style.left = `${xPos}px`;
  console.log(`Share Menu Left: ${shareMenu.style.left}`);
});
