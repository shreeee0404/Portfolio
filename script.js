(function () {
  "use strict";

  const header = document.querySelector('#header');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const preloader = document.querySelector('#preloader');
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function toggleScrolled() {
    if (window.scrollY > 100) {
      document.body.classList.add('scrolled');
      scrollTopBtn.style.display = 'block';
    } else {
      document.body.classList.remove('scrolled');
      scrollTopBtn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', () => {
    toggleScrolled();
    if (preloader) preloader.remove();
  });

  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  mobileNavToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  });

  // Animate skills bars on scroll
  document.querySelectorAll('.skills-animation').forEach((section) => {
    new Waypoint({
      element: section,
      offset: '80%',
      handler: function () {
        section.querySelectorAll('.progress-bar').forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  // AOS init
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

})();
