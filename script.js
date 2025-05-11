const envelope = document.getElementById('envelope');
const openBtn  = document.getElementById('openBtn');
const overlay  = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function openLetter() {
  envelope.classList.add('open');
  overlay.style.display = 'flex';
}

openBtn.addEventListener('click', e => {
  e.stopPropagation();
  openLetter();
});
envelope.addEventListener('click', openLetter);

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  envelope.classList.remove('open');
});
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    envelope.classList.remove('open');
  }
});
