/**
 * Reconstructs an email address from data attributes to prevent scraping.
 * @param el - The HTMLElement containing data-e1 and data-e2 attributes.
 * @returns The full email address string.
 */
const buildEmail = (el: HTMLElement): string => {
  const e1 = el.dataset.e1 ?? '';
  const e2 = el.dataset.e2 ?? '';
  return `${e1}@${e2}`;
};

const gridCopyBtn = document.getElementById('grid-copy-email') as HTMLElement | null;
const gridTooltip = document.getElementById('grid-copy-tooltip');

if (gridCopyBtn && gridTooltip) {
  const email = buildEmail(gridCopyBtn);
  const displayGrid = document.getElementById('email-display-grid');
  if (displayGrid) displayGrid.textContent = email;

  gridCopyBtn.addEventListener('mouseenter', () => {
    if (gridTooltip.innerText === 'Copy to clipboard') {
      gridTooltip.classList.remove('opacity-0');
    }
  });
  gridCopyBtn.addEventListener('mouseleave', () => {
    gridTooltip.classList.add('opacity-0');
  });
  gridCopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      gridTooltip.innerText = 'Email Copied! ✅';
      gridTooltip.classList.replace('bg-slate-900', 'bg-green-600');
      gridTooltip.classList.remove('opacity-0');

      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
      } catch (e) {}

      setTimeout(() => {
        gridTooltip.innerText = 'Copy to clipboard';
        gridTooltip.classList.replace('bg-green-600', 'bg-slate-900');
        gridTooltip.classList.add('opacity-0');
      }, 2000);
    });
  });
}
