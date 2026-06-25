/* ============================================================
   app.js — Spice & Stone  |  Day 13 JavaScript Interactions
   All interactions use querySelector / addEventListener only.
   Zero inline onclick attributes in HTML.
   ============================================================ */

/* ----------------------------------------------------------
   1. DARK / LIGHT MODE TOGGLE  (Stretch Goal 5)
      Saves preference to localStorage.
   ---------------------------------------------------------- */
(function initTheme() {
  const btn = document.querySelector('#theme-toggle');
  if (!btn) return;

  /* Apply saved preference on page load */
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️ Light Mode';
  }

  btn.addEventListener('click', function () {
    const isDark = document.body.classList.toggle('dark-mode');
    btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
})();


/* ----------------------------------------------------------
   2. BACK TO TOP BUTTON  (Option 2)
      Appears after scrolling 200 px, smooth-scrolls to top.
   ---------------------------------------------------------- */
(function initBackToTop() {
  const btn = document.querySelector('#back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ----------------------------------------------------------
   3. CHARACTER COUNTER on textarea  (Option 1)
      Turns red when over 300 characters.
   ---------------------------------------------------------- */
(function initCharCounter() {
  const textarea = document.querySelector('#special-request');
  const counter  = document.querySelector('#char-count');
  if (!textarea || !counter) return;

  const MAX = 300;

  textarea.addEventListener('input', function () {
    const len = textarea.value.length;
    counter.textContent = len + ' / ' + MAX + ' characters';

    if (len > MAX) {
      counter.classList.add('over-limit');
    } else {
      counter.classList.remove('over-limit');
    }
  });
})();


/* ----------------------------------------------------------
   4. PASSWORD SHOW / HIDE TOGGLE  (Option 3)
      Toggles type between "password" and "text".
   ---------------------------------------------------------- */
(function initPasswordToggle() {
  const toggle   = document.querySelector('#pwd-toggle');
  const pwdInput = document.querySelector('#password');
  if (!toggle || !pwdInput) return;

  toggle.addEventListener('click', function () {
    const isHidden = pwdInput.type === 'password';
    pwdInput.type  = isHidden ? 'text' : 'password';
    toggle.textContent = isHidden ? '🙈 Hide' : '👁️ Show';
    toggle.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  });
})();


/* ----------------------------------------------------------
   5. TAB SWITCHER  (Option 4)
      Three tabs; clicking each shows its panel, hides others.
   ---------------------------------------------------------- */
(function initTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length || !tabPanels.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.dataset.tab;

      /* Update buttons */
      tabBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      /* Update panels */
      tabPanels.forEach(function (panel) {
        if (panel.id === target) {
          panel.hidden = false;
        } else {
          panel.hidden = true;
        }
      });
    });
  });
})();


/* ----------------------------------------------------------
   6. NAV HIGHLIGHT via IntersectionObserver  (Stretch Goal 6)
      Highlights the nav link whose section is visible.
   ---------------------------------------------------------- */
(function initNavHighlight() {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  if (!navLinks.length) return;

  const sectionIds = Array.from(navLinks).map(function (link) {
    return link.dataset.section;
  });

  const sections = sectionIds
    .map(function (id) { return document.querySelector('#' + id); })
    .filter(Boolean);

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('nav-active');
          });
          const activeLink = document.querySelector(
            '.nav-link[data-section="' + entry.target.id + '"]'
          );
          if (activeLink) activeLink.classList.add('nav-active');
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();