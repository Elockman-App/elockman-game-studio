/* Elockman Game Studio — Official Dynamic Scripts (i18n, Lightbox, Navigation, Feedback Form) */
document.addEventListener('DOMContentLoaded', function () {
  // Backwards compatibility for old Turkish #stüdyo hash links
  if (window.location.hash && decodeURIComponent(window.location.hash) === '#stüdyo') {
    var targetStudyo = document.getElementById('studyo');
    if (targetStudyo) targetStudyo.scrollIntoView({ behavior: 'smooth' });
  }

  // Mobile menu close on click or tap
  var mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-menu__links a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.removeAttribute('open');
      });
    });
  }
  document.addEventListener('click', function (e) {
    if (mobileMenu && mobileMenu.hasAttribute('open') && !mobileMenu.contains(e.target)) {
      mobileMenu.removeAttribute('open');
    }
  });

  // Protect game banners, logos, and hero media from right-click context scraping
  document.querySelectorAll('.game-cover, .hero, .site-header img, .footer-brand img').forEach(function (el) {
    el.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  });

  // Unified TR / EN Language Switcher (persisted in localStorage)
  var langButtons = document.querySelectorAll('[data-language]');
  var copyElements = document.querySelectorAll('[data-copy-tr][data-copy-en]');

  function applyLanguage(lang) {
    if (lang !== 'tr' && lang !== 'en') lang = 'tr';
    document.documentElement.lang = lang;
    try { localStorage.setItem('elockman_site_lang', lang); } catch (e) {}

    copyElements.forEach(function (el) {
      var val = el.getAttribute('data-copy-' + lang);
      if (val !== null) el.textContent = val;
    });

    var titleEl = document.querySelector('title[data-title-tr][data-title-en]');
    if (titleEl) {
      document.title = titleEl.getAttribute('data-title-' + lang) || document.title;
    }

    langButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-language') === lang));
    });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-language'));
    });
  });

  var initialLang = 'tr';
  try {
    var saved = localStorage.getItem('elockman_site_lang');
    if (saved === 'en' || saved === 'tr') initialLang = saved;
  } catch (e) {}
  applyLanguage(initialLang);

  // Screenshot Lightbox Gallery
  var lightbox = document.getElementById('shotLightbox');
  var lightboxImg = document.getElementById('shotLightboxImg');
  var lightboxCap = document.getElementById('shotLightboxCaption');
  var lightboxClose = document.getElementById('shotLightboxClose');

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('is-open');
  }

  document.querySelectorAll('.shot-thumb').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = btn.getAttribute('data-full') || (btn.querySelector('img') && btn.querySelector('img').src);
      var cap = btn.getAttribute('data-caption-' + document.documentElement.lang) || btn.getAttribute('data-caption') || '';
      if (lightbox && lightboxImg && src) {
        lightboxImg.src = src;
        lightboxImg.alt = cap;
        if (lightboxCap) lightboxCap.textContent = cap;
        lightbox.classList.add('is-open');
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Structured Tester Feedback Form (Test Hub)
  var fbForm = document.getElementById('testerFeedbackForm');
  if (fbForm) {
    fbForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var game = (document.getElementById('fbGame') && document.getElementById('fbGame').value) || 'Elockman';
      var device = (document.getElementById('fbDevice') && document.getElementById('fbDevice').value) || '-';
      var os = (document.getElementById('fbOs') && document.getElementById('fbOs').value) || '-';
      var details = (document.getElementById('fbDetails') && document.getElementById('fbDetails').value) || '';
      var subject = encodeURIComponent('[' + game + '] Kapalı Test Geri Bildirimi');
      var body = encodeURIComponent(
        'Oyun / Game: ' + game + '\n' +
        'Cihaz / Device: ' + device + '\n' +
        'OS / Sürüm: ' + os + '\n\n' +
        'Detaylar / Details:\n' + details
      );
      window.location.href = 'mailto:contact@elockmangames.com?subject=' + subject + '&body=' + body;
    });
  }
});
