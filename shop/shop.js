// Halver shop shell — order drawer.
//
// Kept separate from nav.js so the shop can add behaviour without touching
// a file the marketing pages share. nav.js still runs first on every shop
// page and owns the mobile drawer and the scroll reveal.
//
// The drawer's closed state lives in CSS (`visibility: hidden`), which
// already removes it from the tab order and the accessibility tree, so
// this file only toggles a class and manages focus. If the script fails
// to load, the drawer stays closed and covers nothing: no content is
// hidden by JavaScript here.
(() => {
  const panel = document.getElementById('orderPanel');
  const scrim = document.getElementById('orderScrim');
  const toggle = document.getElementById('orderToggle');
  const closeBtn = document.getElementById('orderClose');
  if (!panel || !scrim || !toggle) return;

  // Any control that should open the drawer, including in-page buttons.
  const openers = [toggle, ...document.querySelectorAll('[data-order-open]')];
  let lastFocused = null;

  function setOpen(open) {
    panel.classList.toggle('is-open', open);
    scrim.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    // The panel is aria-modal and traps focus, so the page behind it must
    // not scroll. Compensating for the scrollbar's width keeps the sticky
    // header from jumping sideways as the gutter disappears.
    const root = document.documentElement;
    if (open) {
      const gutter = window.innerWidth - root.clientWidth;
      root.style.overflow = 'hidden';
      if (gutter > 0) root.style.paddingRight = gutter + 'px';
    } else {
      root.style.overflow = '';
      root.style.paddingRight = '';
    }
    if (open) {
      lastFocused = document.activeElement;
      if (closeBtn) closeBtn.focus();
    } else if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }

  const isOpen = () => panel.classList.contains('is-open');

  openers.forEach((el) => {
    el.addEventListener('click', () => {
      // The header control toggles; the in-page button only opens.
      setOpen(el === toggle ? !isOpen() : true);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));
  scrim.addEventListener('click', () => setOpen(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });

  // Keep focus inside the drawer while it is open. Three tabbables in the
  // shipped markup, so a simple wrap is enough; no focus-trap library.
  panel.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = panel.querySelectorAll('button, [href], input, select, textarea');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
})();
