const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function toggleEnvelope() {
  envelope.classList.toggle('open');
}

function showFullLetter() {
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFullLetter() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  envelope.classList.remove('open');
}

// Event Listeners
envelope.addEventListener('click', () => {
  if (!envelope.classList.contains('open')) {
    toggleEnvelope();
    setTimeout(showFullLetter, 800);
  }
});

openBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!envelope.classList.contains('open')) {
    toggleEnvelope();
    setTimeout(showFullLetter, 800);
  }
});

closeBtn.addEventListener('click', closeFullLetter);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeFullLetter();
});

// Touch Support
envelope.addEventListener('touchstart', (e) => {
  e.preventDefault();
  if (!envelope.classList.contains('open')) {
    toggleEnvelope();
    setTimeout(showFullLetter, 800);
  }
}, { passive: false });

// Keyboard Support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.style.display === 'flex') {
    closeFullLetter();
  }
});
