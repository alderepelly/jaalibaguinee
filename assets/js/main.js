// Navigation mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mainNav.classList.toggle('open');
  });

  // Ferme le menu après avoir cliqué sur un lien
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mainNav.classList.remove('open');
    });
  });
}

// Défilement doux
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: 'smooth',
      });
    }
  });
});

// Année dynamique dans le footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
