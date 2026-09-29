/* Formularz kontaktowy obsługuje komponent React (components/strona/formularz-kontaktowy.tsx). */

// Uruchom od razu, jeśli dokument jest już gotowy (w Next.js skrypt ładuje się po starcie Reacta).
function onReady(fn) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
  else fn();
}

// Navigation state follows the visible section; the original smooth-scroll handles anchors.
onReady(() => {
  const links = [...document.querySelectorAll('.reference-link')];
  const sections = links.map(link => document.querySelector(link.hash));
  let scheduled = false;
  function updateActive() {
    scheduled = false;
    let active = -1;
    sections.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= innerHeight * .4) active = i;
    });
    links.forEach((link, i) => {
      if (i === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateActive); }
  }, { passive: true });
  updateActive();
  const toggle = document.querySelector('.reference-menu-toggle');
  const menu = document.querySelector('[modal-menu="menu"]');
  if (toggle && menu) {
    toggle.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle.click(); }
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') toggle.click();
    });
    new MutationObserver(() => {
      const open = menu.style.display !== 'none';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    }).observe(menu, { attributes: true, attributeFilter: ['style'] });
  }
});
