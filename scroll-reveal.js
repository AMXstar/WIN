
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.reveal, .reveal-right, .reveal-left, .reveal-zoom, .reveal-icon'
  );

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
         
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));
});