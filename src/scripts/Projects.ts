const cards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
const featuredGrid = document.querySelector('[aria-label="Featured projects"]') as HTMLElement | null;

// --- 3D tilt effect ---
cards.forEach(card => {
  card.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transition = 'none';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.1s ease-out';
  });
});

// --- Filter logic ---
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button styles
    filterBtns.forEach(b => {
      b.classList.remove('bg-slate-900', 'text-white', 'shadow-md', 'shadow-slate-900/20');
      b.classList.add('bg-white/50', 'text-slate-500');
    });
    btn.classList.remove('bg-white/50', 'text-slate-500');
    btn.classList.add('bg-slate-900', 'text-white', 'shadow-md', 'shadow-slate-900/20');

    const filter = (btn as HTMLElement).dataset.filter || 'all';

    cards.forEach(card => {
      const categories = card.dataset.categories || '';
      const isMatch = filter === 'all' || categories.includes(filter);

      // Lab cards live inside a <li> — hide the whole <li> so the grid collapses.
      // Featured cards are direct children of the grid — hide the <article> itself.
      const wrapper = (card.closest('li') ?? card) as HTMLElement;
      wrapper.style.display = isMatch ? '' : 'none';
      card.style.pointerEvents = isMatch ? 'auto' : 'none';
    });

    // Hide the entire featured section if none of its cards match
    if (featuredGrid) {
      const featuredCards = Array.from(
        featuredGrid.querySelectorAll('.project-card')
      ) as HTMLElement[];
      const anyFeaturedVisible = featuredCards.some(card => {
        const cats = card.dataset.categories || '';
        return filter === 'all' || cats.includes(filter);
      });
      featuredGrid.style.display = anyFeaturedVisible ? '' : 'none';
    }
  });
});
