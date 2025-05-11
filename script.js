const wrapper = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function openLetter() {
  wrapper.classList.add('open');
  setTimeout(() => overlay.style.display = 'flex', 600);
}

openBtn.addEventListener('click', e => {
  e.stopPropagation();
  openLetter();
});
wrapper.addEventListener('click', openLetter);

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  wrapper.classList.remove('open');
});
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    wrapper.classList.remove('open');
  }
});

// Touch support
wrapper.addEventListener('touchstart', () => {
  openLetter();
});
