document.addEventListener('DOMContentLoaded', () => {
  // Dynamically set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Interactive mouse glow movement
  const blob = document.querySelector('.blob-bg');
  window.addEventListener('pointermove', (e) => {
    if (blob) {
      blob.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 1600, fill: 'forwards', easing: 'ease-out' }
      );
    }
  });

  // Contact form submission simulation with validation feedback
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        status.textContent = '✨ Message sent successfully! I will get back to you soon.';
        form.reset();
        setTimeout(() => { status.textContent = ''; }, 5000);
      }, 900);
    });
  }

  // Active navigation link highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 140;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  console.log('%c🚀 Tripti Portfolio Loaded Successfully!', 'color: #06b6d4; font-weight: bold; font-size: 13px;');
});
