// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form action
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent to PathSarathi.');
});
