const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const slider = document.querySelectorAll('.testimonial');
const dotsContainer = document.getElementById('dots');
const searchForm = document.getElementById('search-form');
const yearEl = document.getElementById('year');

// Mobile nav toggle
navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

// Simple testimonial slider
let current = 0;

function renderDots() {
  slider.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Slide ${idx + 1}`);
    dot.classList.toggle('active', idx === current);
    dot.addEventListener('click', () => goTo(idx));
    dotsContainer?.appendChild(dot);
  });
}

function setActive(index) {
  slider.forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });
  [...dotsContainer.children].forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function goTo(index) {
  current = index;
  setActive(current);
}

function nextSlide() {
  current = (current + 1) % slider.length;
  setActive(current);
}

if (slider.length) {
  renderDots();
  setActive(current);
  setInterval(nextSlide, 5000);
}

// Mock submit handler
searchForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(searchForm);
  const destination = data.get('destination');
  alert(`Searching Trypsigo deals for ${destination || 'your next trip'}...`);
});

// Dynamic year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

