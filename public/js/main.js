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

// Project tab filtering
(function() {
  const tabs = document.querySelectorAll('[role="tab"]');
  const cards = document.querySelectorAll('[data-category]');

  if (!tabs.length) return;

  function activateTab(tab) {
    const filter = tab.dataset.filter;

    // Update tab states
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
      t.classList.remove('text-heading');
      t.classList.add('text-subtitle');
    });
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    tab.classList.remove('text-subtitle');
    tab.classList.add('text-heading');
    tab.focus();

    // Filter cards
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
  });

  // Keyboard navigation: arrow keys move between tabs (WAI-ARIA tab pattern)
  const tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    // Set initial tabindex: only selected tab is in tab order
    tabs.forEach(tab => {
      if (tab.getAttribute('aria-selected') === 'true') {
        tab.setAttribute('tabindex', '0');
      } else {
        tab.setAttribute('tabindex', '-1');
      }
    });

    tablist.addEventListener('keydown', (e) => {
      const tabArray = Array.from(tabs);
      const current = tabArray.indexOf(document.activeElement);
      if (current === -1) return;

      let next;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        next = (current + 1) % tabArray.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        next = (current - 1 + tabArray.length) % tabArray.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        next = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        next = tabArray.length - 1;
      }

      if (next !== undefined) {
        activateTab(tabArray[next]);
      }
    });
  }
})();
