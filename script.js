const envelope = document.getElementById('envelope');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function openLetter() {
  envelope.classList.add('open');
  setTimeout(() => overlay.style.display = 'flex', 600);
}

// Desktop click events
envelope.addEventListener('click', openLetter);

// Mobile touch events
envelope.addEventListener('touchstart', function(e) {
  e.preventDefault();
  openLetter();
}, { passive: false });

// Close functionality
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

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.style.display === 'flex') {
    overlay.style.display = 'none';
    envelope.classList.remove('open');
  }
});
