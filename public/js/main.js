// SporckLiving — main.js

// Mobile navigation
(function() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuClose = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');

  if (!menuBtn || !menu) return;

  function openMenu() {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
  }

  function closeMenu() {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuBtn.focus();
  }

  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  // Focus trap
  menu.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = menu.querySelectorAll('a, button');
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

// Active nav state
(function() {
  const path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (path === href || (path === '/' && href === '/') || (path.endsWith(href) && href !== '/')) {
      link.classList.remove('text-nav');
      link.classList.add('text-heading');
    }
  });
})();
