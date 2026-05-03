const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('[data-nav-link]') as NodeListOf<HTMLElement>;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('!text-black', isActive);
        link.classList.toggle('text-slate-500', !isActive);
        const underline = link.querySelector('span') as HTMLElement | null;
        if (underline) underline.style.width = isActive ? '100%' : '';
      });
    });
  },
  { rootMargin: '-10% 0px -50% 0px', threshold: 0 }
);

sections.forEach(section => observer.observe(section));
