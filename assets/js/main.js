// Skill bars animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.style.width; // trigger reflow
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#skills').forEach(el => observer.observe(el));

// Animate skill bars on load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const target = bar.getAttribute('style').match(/width:(\d+)%/);
      if (target) {
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = target[1] + '%'; }, 300);
      }
    });
  }, 500);
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.style.padding = '0.5rem 0';
  } else {
    nav.style.padding = '1rem 0';
  }
});
