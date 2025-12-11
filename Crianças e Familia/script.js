// Slider funcional e responsivo (move por "página" baseada em cards visíveis)
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const viewport = document.querySelector('.slider-viewport');
const track = document.querySelector('.slider-track');
const cards = Array.from(document.querySelectorAll('.card'));

let currentTranslate = 0;

function getGap() {
  const style = getComputedStyle(track);
  return parseFloat(style.gap) || 0;
}

function getCardWidth() {
  if (!cards.length) return 0;
  const cardRect = cards[0].getBoundingClientRect();
  return cardRect.width;
}

function updateLimits() {
  const viewportWidth = viewport.clientWidth;
  const trackWidth = track.scrollWidth;
  const maxTranslate = Math.min(0, viewportWidth - trackWidth); // negative or 0
  return { viewportWidth, trackWidth, maxTranslate };
}

function calcStep() {
  // Move by the number of cards visible in the viewport (a "page")
  const cardW = getCardWidth();
  const gap = getGap();
  if (!cardW) return viewport.clientWidth * 0.8;
  const visibleCount = Math.max(1, Math.floor(viewport.clientWidth / (cardW + gap)));
  return 300;
}

function updateButtons() {
  const { maxTranslate } = updateLimits();
  prevBtn.disabled = currentTranslate === 0;
  nextBtn.disabled = currentTranslate <= maxTranslate;
}

function setTranslate(x) {
  currentTranslate = x;
  track.style.transform = `translateX(${currentTranslate}px)`;
  updateButtons();
}

// next
nextBtn.addEventListener('click', () => {
  const { maxTranslate } = updateLimits();
  const step = calcStep();
  let next = currentTranslate - step;
  if (next < maxTranslate) next = maxTranslate;
  setTranslate(next);
});

// prev
prevBtn.addEventListener('click', () => {
  const step = calcStep();
  let prev = currentTranslate + step;
  if (prev > 0) prev = 0;
  setTranslate(prev);
});

// on resize recompute limits and ensure translate inside limits
window.addEventListener('resize', () => {
  const { maxTranslate } = updateLimits();
  if (currentTranslate < maxTranslate) setTranslate(maxTranslate);
  updateButtons();
});

// initial
setTimeout(() => { // wait images to load width
  updateButtons();
}, 100);

function FiltrarFilmes(){
  const card = [...document.querySelectorAll(".card")];
  const infantil = cards.filter(card => card.dataset.tipo.includes("infantil"));


  card.forEach(s => {
    s.style.display = "none"
  });

  infantil.forEach(m => {
    m.style.display = "block"
  });
}

FiltrarFilmes()