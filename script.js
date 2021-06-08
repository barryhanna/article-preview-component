const shareBtn = document.getElementById('show-share-menu-btn');
const shareMenuBtn = document.getElementById('share-menu-btn');

shareBtn.addEventListener('click', (e) => {
  document.location.href = '#share';
});

shareMenuBtn.addEventListener('click', (e) => {
  document.location.href = '';
  e.target.closest('.share').style.display = 'none';
});
