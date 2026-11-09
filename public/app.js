/**
 * Elockman Game Studio — Web Portal Client Script
 * 100% CSP 'self' Compliant (No inline scripts, no inline event handlers)
 */

(function () {
  'use strict';

  // --- Mobile Drawer Toggle ---
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', function () {
      mobileDrawer.classList.toggle('active');
    });

    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // --- Screenshot Lightbox System ---
  const GALLERIES = {
    garaj: {
      title: 'Garaj Efsanesi - Ekran Görüntüleri',
      images: [
        'assets/games/garaj/screenshots/screen1.png',
        'assets/games/garaj/screenshots/screen2.png',
        'assets/games/garaj/screenshots/screen3.png',
        'assets/games/garaj/screenshots/screen4.png'
      ]
    },
    kulup: {
      title: 'Kulüp Efsanesi - Ekran Görüntüleri',
      images: [
        'assets/games/kulup/screenshots/phone_screen1.png',
        'assets/games/kulup/screenshots/phone_screen2.png',
        'assets/games/kulup/screenshots/phone_screen3.png',
        'assets/games/kulup/screenshots/phone_screen4.png',
        'assets/games/kulup/screenshots/tablet_screen1.png',
        'assets/games/kulup/screenshots/tablet_screen2.png'
      ]
    },
    orbit: {
      title: 'Orbit Escape - Ekran Görüntüleri',
      images: [
        'assets/games/orbit/screenshots/phone_screen1.png',
        'assets/games/orbit/screenshots/phone_screen2.png',
        'assets/games/orbit/screenshots/phone_screen3.png',
        'assets/games/orbit/screenshots/phone_screen4.png',
        'assets/games/orbit/screenshots/tablet_screen1.png',
        'assets/games/orbit/screenshots/tablet_screen2.png'
      ]
    },
    ring: {
      title: 'Ring Tycoon - Ekran Görüntüleri',
      images: [
        'assets/games/ring/screenshots/phone_screen1.png',
        'assets/games/ring/screenshots/phone_screen2.png',
        'assets/games/ring/screenshots/phone_screen3.png',
        'assets/games/ring/screenshots/phone_screen4.png',
        'assets/games/ring/screenshots/tablet_screen1.png',
        'assets/games/ring/screenshots/tablet_screen2.png'
      ]
    },
    hipodrom: {
      title: 'Hipodrom Ahırı - Ekran Görüntüleri',
      images: [
        'assets/games/hipodrom/screenshots/screen1.png',
        'assets/games/hipodrom/screenshots/screen2.png',
        'assets/games/hipodrom/screenshots/screen3.png',
        'assets/games/hipodrom/screenshots/screen4.png',
        'assets/games/hipodrom/screenshots/screen5.png',
        'assets/games/hipodrom/screenshots/screen6.png'
      ]
    }
  };

  let activeGallery = null;
  let activeIndex = 0;

  const modal = document.getElementById('galleryModal');
  const modalTitle = document.getElementById('galleryTitle');
  const modalImg = document.getElementById('galleryMainImg');
  const modalCounter = document.getElementById('galleryCounter');
  const closeBtn = document.getElementById('galleryCloseBtn');
  const prevBtn = document.getElementById('galleryPrevBtn');
  const nextBtn = document.getElementById('galleryNextBtn');

  function openGallery(key) {
    if (!GALLERIES[key]) return;
    activeGallery = GALLERIES[key];
    activeIndex = 0;
    updateView();
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeGallery() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    activeGallery = null;
  }

  function updateView() {
    if (!activeGallery || !modalImg) return;
    modalTitle.innerText = activeGallery.title;
    modalImg.src = activeGallery.images[activeIndex];
    modalCounter.innerText = `Görsel ${activeIndex + 1} / ${activeGallery.images.length}`;
  }

  function prevImg() {
    if (!activeGallery) return;
    activeIndex = (activeIndex - 1 + activeGallery.images.length) % activeGallery.images.length;
    updateView();
  }

  function nextImg() {
    if (!activeGallery) return;
    activeIndex = (activeIndex + 1) % activeGallery.images.length;
    updateView();
  }

  // Attach gallery trigger buttons
  document.querySelectorAll('[data-gallery]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openGallery(btn.getAttribute('data-gallery'));
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeGallery);
  if (prevBtn) prevBtn.addEventListener('click', prevImg);
  if (nextBtn) nextBtn.addEventListener('click', nextImg);

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeGallery();
    });
  }

  window.addEventListener('keydown', function (e) {
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    }
  });

  // --- TR / EN Language Switcher ---
  const TRANSLATIONS = {
    tr: {
      nav_games: 'Oyunlarımız',
      nav_teaser: 'Tanıtım',
      nav_studio: 'Stüdyo',
      nav_testhub: 'Test Hub',
      nav_privacy: 'Gizlilik',
      nav_terms: 'Kullanım Şartları',
      nav_contact: 'İletişim',
      hero_badge: 'Google Play Resmi Geliştirici Stüdyosu',
      hero_title_1: 'Geleceğin',
      hero_title_accent: 'Mobil Oyun',
      hero_title_2: 'Deneyimlerini Üretiyoruz',
      hero_desc: 'Elockman Game Studio; milyonlarca oyuncu için sürükleyici simülasyon, derin strateji ve dinamik arcade dünyalar geliştirir. Yüksek grafik standartları, yerli vizyon ve global eğlence.',
      btn_explore: '🎮 Oyunlarımızı İnceleyin',
      btn_testhub: '⚡ Kapalı Teste Katılın',
      btn_store: 'Google Play Mağazası',
      metric_games: 'Aktif Oyun Projesi',
      metric_compat: 'Geniş Cihaz Uyumu',
      metric_android16: 'Android 16 Hazır',
      metric_compliance: 'Google Uyumlu Politika',
      teaser_badge: 'Resmi Stüdyo Tanıtımı',
      teaser_title: 'Elockman Universe: Sinematik Giriş',
      teaser_desc: 'Mobil dünyada kurduğumuz evrenlere ilk bakış. Garajlardan galaksilere, ringlerden hipodromlara uzanan macera.',
      showcase_eyebrow: 'Portföyümüz',
      showcase_title: 'Öne Çıkan Başlıklar',
      showcase_desc: 'Masaüstü ve mobil tarayıcıda hemen deneyebileceğiniz veya Google Play üzerinden doğrudan indirebileceğiniz resmi stüdyo yapımlarımız.',
      game_garaj_desc: 'Hurda otomobilleri bulun, Şükrü Usta ile motorlarını yenileyin, drag pistinde 400 metre yarışlarına katılın ve kârla açık artırmada satın!',
      game_kulup_desc: 'Kendi futbol kulübünüzü sıfırdan kurun. Stadyumunuzu büyütün, dünya çapında yıldız transferler yapın ve Avrupa şampiyonu olun!',
      game_orbit_desc: 'Yerçekimi mekanikleriyle donatılmış uzay geminizle asteroit yağmurlarından kaçın, kara deliklerden kurtulun ve yeni galaksileri fethedin.',
      game_ring_desc: 'Yeraltı ringlerinden profesyonel boks arenalarına! Boksörlerinizi antrene edin, menajerlik yapın ve dünya kemerini kazanın.',
      game_hipodrom_desc: 'Safkan yarış atı yetiştiriciliği, jokey antrenmanları ve nefes kesen derbi mücadeleleri. Şampiyon atlar sizin haranızda yetişsin!',
      testhub_card_title: "Elockman Test Hub'a Katılın",
      testhub_card_desc: 'Google Play 14 günlük kapalı test aşamasındaki oyunlarımızı ilk siz test edin! Hataları bildirin, geri bildirim verin, oyun içi VIP ödüller ve geliştirici kredisi kazanın.',
      studio_eyebrow: 'Vizyonumuz & Standartlarımız',
      studio_title: 'Teknoloji ve Eğlencenin Kesiştiği Nokta',
      studio_desc: 'Elockman Game Studio; mobil oyun geliştirme süreçlerinde en yeni Android standartlarını (minSdk 24, targetSdk 36) ve modern web teknolojilerini harmanlayarak oyunculara akıcı, sıfır gecikmeli ve yüksek görsel kalitede deneyimler sunar.',
      studio_feat1_title: 'Google Play Güvenlik ve Gizlilik Garantisi',
      studio_feat1_desc: 'Tüm oyunlarımız Google Play Geliştirici Program Politikaları, COPPA ve kullanıcı veri güvenliği standartlarına %100 tam uyumludur.',
      studio_feat2_title: 'Ultra Akıcı Performans & Pil Dostu Mimari',
      studio_feat2_desc: 'Hafif mimarimiz bellek tüketimini optimize eder ve cihazınızı aşırı ısıtmadan 60+ FPS kararlı kare hızı sağlar.',
      passport_title: 'Stüdyo Kimliği & İletişim',
      footer_bio: 'Google Play ekosisteminde milyonlarca oyuncuya yenilikçi mobil eğlence ve yüksek kaliteli simülasyon deneyimleri sunan bağımsız oyun stüdyosu.',
      footer_col_links: 'Hızlı Bağlantılar',
      footer_col_legal: 'Yasal & Uyumluluk',
      footer_coppa: 'Çocuk Güvenliği (COPPA)',
      footer_datasafety: 'Veri Güvenliği Beyanı'
    },
    en: {
      nav_games: 'Our Games',
      nav_teaser: 'Teaser',
      nav_studio: 'Studio',
      nav_testhub: 'Test Hub',
      nav_privacy: 'Privacy',
      nav_terms: 'Terms of Service',
      nav_contact: 'Contact',
      hero_badge: 'Official Google Play Developer Studio',
      hero_title_1: 'Crafting',
      hero_title_accent: 'Next-Gen Mobile',
      hero_title_2: 'Gaming Experiences',
      hero_desc: 'Elockman Game Studio develops immersive simulations, deep strategy engines, and dynamic arcade worlds for millions of global players. High visual fidelity, indie passion, and global fun.',
      btn_explore: '🎮 Explore Our Games',
      btn_testhub: '⚡ Join Closed Testing',
      btn_store: 'Google Play Store',
      metric_games: 'Active Game Titles',
      metric_compat: 'Wide Device Reach',
      metric_android16: 'Android 16 Ready',
      metric_compliance: 'Google Policy Compliant',
      teaser_badge: 'Official Studio Teaser',
      teaser_title: 'Elockman Universe: Cinematic Intro',
      teaser_desc: 'A first look into our gaming universes. From tuning garages to distant galaxies, boxing rings to equestrian derbies.',
      showcase_eyebrow: 'Our Portfolio',
      showcase_title: 'Featured Titles',
      showcase_desc: 'Official titles you can play instantly right in your mobile or desktop browser, or download directly on Google Play.',
      game_garaj_desc: 'Restore barn-find cars, tune engines with Master Sukru, race in 400m drag battles, and auction them off for big profit!',
      game_kulup_desc: 'Build your dream football club from scratch. Expand your stadium, sign world-class stars, and conquer European trophies!',
      game_orbit_desc: 'Master gravitational slingshots with your spaceship, dodge asteroid storms, escape black holes, and conquer new galaxies.',
      game_ring_desc: 'From underground fight clubs to world championship arenas! Train fighters, manage careers, and claim the world belt.',
      game_hipodrom_desc: 'Purebred racehorse breeding, jockey training routines, and breathtaking derby classics. Raise champion thoroughbreds!',
      testhub_card_title: 'Join the Elockman Test Hub',
      testhub_card_desc: 'Be the first to play our games in Google Play 14-day closed testing rings! Report bugs, give feedback, and earn VIP tester rewards.',
      studio_eyebrow: 'Our Vision & Standards',
      studio_title: 'Where Engineering Meets Entertainment',
      studio_desc: 'Elockman Game Studio merges bleeding-edge Android standards (minSdk 24, targetSdk 36) with modern web engines to deliver stutter-free, responsive 60+ FPS gameplay.',
      studio_feat1_title: 'Google Play Safety & Privacy Guarantee',
      studio_feat1_desc: 'All studio titles strictly adhere to Google Play Developer Program Policies, COPPA guidelines, and modern data security standards.',
      studio_feat2_title: 'Ultra-Fluid 60+ FPS & Battery-Friendly Engine',
      studio_feat2_desc: 'Our lightweight architecture prevents thermal throttling, optimizing RAM and GPU usage for maximum battery endurance.',
      passport_title: 'Studio Identity & Contact',
      footer_bio: 'Independent game development studio delivering innovative mobile entertainment and deep simulations to players worldwide on Google Play.',
      footer_col_links: 'Quick Links',
      footer_col_legal: 'Legal & Compliance',
      footer_coppa: "Children's Safety (COPPA)",
      footer_datasafety: 'Data Safety Declarations'
    }
  };

  let currentLang = 'tr';
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langCurrentLabel = document.getElementById('langCurrent');
  const langOtherLabel = document.getElementById('langOther');

  function setLanguage(lang) {
    currentLang = lang;
    if (langCurrentLabel) langCurrentLabel.innerText = lang.toUpperCase();
    if (langOtherLabel) langOtherLabel.innerText = lang === 'tr' ? 'EN' : 'TR';

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.tr;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });
    document.documentElement.lang = lang;
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      setLanguage(currentLang === 'tr' ? 'en' : 'tr');
    });
  }
})();
