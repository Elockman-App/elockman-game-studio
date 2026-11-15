/* Elockman Game Studio — CEO Kontrol Merkezi PWA İstemcisi */
(function () {
  'use strict';

  const STORAGE_PIN_KEY = 'elockman_ceo_pin_v1';
  const STORAGE_BRIDGE_KEY = 'elockman_ceo_bridge_url_v1';
  const SESSION_UNLOCKED_KEY = 'elockman_ceo_session_pin_v1';
  const DEFAULT_PIN = '2026';

  const state = {
    enteredDigits: '',
    activePin: '',
    snapshot: null,
    localBridgeAvailable: false,
    bridgeBaseUrl: '',
    deferredPrompt: null,
    busyCommand: false
  };

  const dom = {};

  function cacheDom() {
    const ids = [
      'pin-lock-screen', 'pin-dots', 'pin-error', 'ceo-app',
      'connection-badge', 'btn-install-pwa', 'btn-open-pin-modal', 'btn-lock-panel',
      'sync-meta-text', 'btn-refresh-status',
      'hipodrom-days-badge', 'hipodrom-progress-fill', 'hipodrom-remaining-days',
      'hipodrom-percent', 'fleet-admob-count',
      'tester-count-badge', 'tester-progress-fill', 'tester-min-val',
      'tester-target-val', 'tester-deals-val', 'partner-apps-list', 'roster-list',
      'bridge-mode-note', 'cloud-fallback-hint',
      'btn-cmd-scan', 'btn-cmd-report', 'btn-cmd-emulator',
      'emulator-device-badge', 'emulator-preview-img', 'emulator-captured-at',
      'btn-zoom-emulator', 'coo-console-output', 'btn-clear-log',
      'games-list', 'btn-ping-all',
      'pin-modal', 'btn-close-pin-modal', 'bridge-url-input',
      'current-pin-input', 'new-pin-input', 'confirm-pin-input',
      'modal-feedback', 'btn-save-bridge', 'btn-save-pin',
      'emulator-lightbox', 'emulator-lightbox-img', 'btn-close-lightbox',
      'btn-pin-clear', 'btn-pin-backspace'
    ];
    for (const id of ids) {
      dom[id] = document.getElementById(id);
    }
  }

  function getStoredLocalPin() {
    return localStorage.getItem(STORAGE_PIN_KEY) || DEFAULT_PIN;
  }

  function getApiBase() {
    const saved = (localStorage.getItem(STORAGE_BRIDGE_KEY) || '').trim().replace(/\/+$/, '');
    if (saved) return saved;
    return window.location.origin;
  }

  function appendLog(line) {
    if (!dom['coo-console-output']) return;
    const now = new Date().toLocaleTimeString('tr-TR', { hour12: false });
    const entry = `[${now}] ${line}`;
    const existing = dom['coo-console-output'].textContent || '';
    dom['coo-console-output'].textContent = existing ? `${existing}\n${entry}` : entry;
    dom['coo-console-output'].scrollTop = dom['coo-console-output'].scrollHeight;
  }

  function renderPinDots() {
    const dots = dom['pin-dots'] ? dom['pin-dots'].querySelectorAll('.pin-dot') : [];
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-filled', idx < state.enteredDigits.length);
    });
  }

  function triggerPinError(message) {
    if (dom['pin-error']) dom['pin-error'].textContent = message;
    if (dom['pin-dots']) {
      dom['pin-dots'].classList.remove('is-shake');
      void dom['pin-dots'].offsetWidth;
      dom['pin-dots'].classList.add('is-shake');
    }
    state.enteredDigits = '';
    renderPinDots();
  }

  async function verifyPinWithBridgeOrLocal(pin) {
    const apiBase = getApiBase();
    try {
      const res = await fetch(`${apiBase}/api/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-ceo-pin': pin
        },
        body: JSON.stringify({ check: true })
      });
      if (res.status === 401) {
        return { ok: false, reason: 'Hatalı stüdyo PIN kodu.' };
      }
      if (res.ok) {
        state.localBridgeAvailable = true;
        return { ok: true, bridge: true };
      }
    } catch (_) {
      // Yerel COO köprüsü yoksa statik istemci PIN kontrolüne düş
    }
    return { ok: pin === getStoredLocalPin(), bridge: false, reason: 'Hatalı PIN kodu.' };
  }

  async function attemptUnlock(pin) {
    if (pin.length !== 4) return;
    if (dom['pin-error']) dom['pin-error'].textContent = 'Doğrulanıyor...';
    const check = await verifyPinWithBridgeOrLocal(pin);
    if (!check.ok) {
      triggerPinError(check.reason || 'PIN doğrulanamadı.');
      return;
    }

    state.activePin = pin;
    sessionStorage.setItem(SESSION_UNLOCKED_KEY, pin);
    if (dom['pin-error']) dom['pin-error'].textContent = '';
    if (dom['pin-lock-screen']) dom['pin-lock-screen'].hidden = true;
    if (dom['ceo-app']) {
      dom['ceo-app'].classList.remove('is-locked');
      dom['ceo-app'].setAttribute('aria-hidden', 'false');
    }

    appendLog('CEO oturumu açıldı.');
    await loadDashboardData();
    await pingAllGames();
  }

  function lockPanel() {
    state.enteredDigits = '';
    state.activePin = '';
    sessionStorage.removeItem(SESSION_UNLOCKED_KEY);
    renderPinDots();
    if (dom['pin-error']) dom['pin-error'].textContent = '';
    if (dom['ceo-app']) {
      dom['ceo-app'].classList.add('is-locked');
      dom['ceo-app'].setAttribute('aria-hidden', 'true');
    }
    if (dom['pin-lock-screen']) dom['pin-lock-screen'].hidden = false;
  }

  function handleDigitInput(digit) {
    if (!/^\d$/.test(digit) || state.enteredDigits.length >= 4) return;
    state.enteredDigits += digit;
    renderPinDots();
    if (dom['pin-error']) dom['pin-error'].textContent = '';
    if (state.enteredDigits.length === 4) {
      void attemptUnlock(state.enteredDigits);
    }
  }

  function setConnectionMode(isLocal, baseUrl) {
    state.localBridgeAvailable = isLocal;
    state.bridgeBaseUrl = baseUrl;
    const badge = dom['connection-badge'];
    const modeTag = dom['bridge-mode-note'];
    const hint = dom['cloud-fallback-hint'];
    if (!badge || !modeTag || !hint) return;

    if (isLocal) {
      badge.className = 'status-pill status-pill--local';
      badge.textContent = 'Yerel COO Köprüsü Aktif';
      modeTag.textContent = `Bağlı: ${baseUrl}`;
      hint.hidden = true;
    } else {
      badge.className = 'status-pill status-pill--cloud';
      badge.textContent = 'Bulut Vitrin Modu';
      modeTag.textContent = 'Statik Anlık Görüntü';
      hint.hidden = false;
    }
  }

  function createChip(text, isOk) {
    const span = document.createElement('span');
    span.className = isOk ? 'chip chip--ok' : 'chip';
    span.textContent = text;
    return span;
  }

  function renderDashboard(data) {
    state.snapshot = data;
    const studio = data.studio || {};
    const testers = data.testers || {};
    const games = Array.isArray(data.games) ? data.games : [];

    const syncDate = data.generatedAt ? new Date(data.generatedAt).toLocaleString('tr-TR') : 'Bilinmiyor';
    if (dom['sync-meta-text']) {
      dom['sync-meta-text'].textContent = `Son güncelleme: ${syncDate} · Play Dev ID: ${studio.devId || '6034929488947548242'}`;
    }

    // 14 Günlük Hipodrom sayacı
    const hipodrom = games.find((g) => g.id === 'hipodrom-ahiri') || { continuousDays: 10, requiredDays: 14 };
    const reqDays = hipodrom.requiredDays || 14;
    const curDays = Number(hipodrom.continuousDays || 0);
    const pct = Math.min(100, Math.round((curDays / reqDays) * 100));
    const remaining = Math.max(0, reqDays - curDays);

    dom['hipodrom-days-badge'].textContent = `${curDays} / ${reqDays} Gün`;
    dom['hipodrom-progress-fill'].style.width = `${pct}%`;
    dom['hipodrom-remaining-days'].textContent = remaining === 0 ? 'Başvuruya Hazır!' : `${remaining} Gün`;
    dom['hipodrom-percent'].textContent = `%${pct}`;
    dom['fleet-admob-count'].textContent = `${games.length}/${games.length} AdMob + API 36`;

    // Testçi Havuzu
    const minT = studio.minimumTestersRequired || 12;
    const targetT = studio.targetTesterCount || 15;
    const curT = Number(testers.memberCount || 0);
    const tPct = Math.min(100, Math.round((curT / targetT) * 100));

    dom['tester-count-badge'].textContent = `${curT} / ${targetT}`;
    dom['tester-progress-fill'].style.width = `${tPct}%`;
    dom['tester-min-val'].textContent = `${minT} Testçi`;
    dom['tester-target-val'].textContent = `${targetT} Testçi`;
    dom['tester-deals-val'].textContent = `${testers.totalDeals || 0} / ${testers.optedInDeals || 0}`;

    if (dom['partner-apps-list']) {
      dom['partner-apps-list'].replaceChildren();
      const partners = Array.isArray(testers.installedPartnerApps) ? testers.installedPartnerApps : [];
      partners.forEach((app) => {
        dom['partner-apps-list'].appendChild(createChip(`✅ ${app.name} (${app.packageId})`, true));
      });
    }

    if (dom['roster-list']) {
      dom['roster-list'].replaceChildren();
      const members = Array.isArray(testers.members) ? testers.members : [];
      if (members.length === 0) {
        dom['roster-list'].appendChild(createChip('Henüz kayıtlı üye verisi yok', false));
      } else {
        members.forEach((m) => dom['roster-list'].appendChild(createChip(m, false)));
      }
    }

    // Emülatör
    const emu = data.emulator || {};
    if (dom['emulator-device-badge']) {
      dom['emulator-device-badge'].textContent = emu.connected ? `${emu.deviceId || 'emulator'} · Çevrimiçi` : 'Bağlı Değil';
    }
    if (dom['emulator-preview-img'] && emu.screenshotUrl) {
      const bustUrl = `${emu.screenshotUrl}${emu.screenshotUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;
      dom['emulator-preview-img'].src = bustUrl;
      if (dom['emulator-lightbox-img']) dom['emulator-lightbox-img'].src = bustUrl;
    }
    if (dom['emulator-captured-at']) {
      const capText = emu.capturedAt ? new Date(emu.capturedAt).toLocaleString('tr-TR') : 'Kayıtlı anlık görüntü';
      dom['emulator-captured-at'].textContent = `Ekran görüntüsü: ${capText} (Büyütmek için dokunun)`;
    }

    // 5 Oyun Kartları
    renderGamesList(games);
  }

  function renderGamesList(games) {
    if (!dom['games-list']) return;
    dom['games-list'].replaceChildren();

    for (const game of games) {
      const card = document.createElement('article');
      card.className = 'game-card';
      card.dataset.gameId = game.id;

      const top = document.createElement('div');
      top.className = 'game-card__top';

      const titleWrap = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.className = 'game-card__title';
      h3.textContent = game.name;
      const pkg = document.createElement('div');
      pkg.className = 'game-card__pkg';
      pkg.textContent = game.packageId;
      titleWrap.append(h3, pkg);

      const pingBadge = document.createElement('span');
      pingBadge.className = 'game-ping';
      pingBadge.id = `ping-${game.id}`;
      pingBadge.textContent = 'Kontrol ediliyor';

      top.append(titleWrap, pingBadge);

      const meta = document.createElement('div');
      meta.className = 'game-card__meta';
      meta.append(
        createChip(game.phaseStatus || 'Kapalı Test', game.continuousDays >= 10),
        createChip(`📦 ${game.aabSizeMb || '?'} MB (API 36)`, false),
        createChip(`💰 ${game.admob || 'AdMob'}`, true)
      );

      const pTrack = document.createElement('div');
      pTrack.className = 'progress-track';
      const pFill = document.createElement('div');
      const gPct = Math.min(100, Math.round(((game.continuousDays || 0) / (game.requiredDays || 14)) * 100));
      pFill.className = 'progress-fill progress-fill--gold';
      pFill.style.width = `${gPct}%`;
      pTrack.appendChild(pFill);

      const actions = document.createElement('div');
      actions.className = 'game-card__actions';

      const webLink = document.createElement('a');
      webLink.className = 'btn btn--quiet btn--sm';
      webLink.href = game.webUrl;
      webLink.target = '_blank';
      webLink.rel = 'noopener noreferrer';
      webLink.textContent = "Web'de Aç ↗";

      const testLink = document.createElement('a');
      testLink.className = 'btn btn--gold btn--sm';
      testLink.href = game.webOptInUrl;
      testLink.target = '_blank';
      testLink.rel = 'noopener noreferrer';
      testLink.textContent = 'Test Katılım ↗';

      actions.append(webLink, testLink);
      card.append(top, meta, pTrack, actions);
      dom['games-list'].appendChild(card);
    }
  }

  async function loadDashboardData() {
    const apiBase = getApiBase();
    try {
      const res = await fetch(`${apiBase}/api/status`, {
        headers: { 'x-ceo-pin': state.activePin || getStoredLocalPin() },
        cache: 'no-store'
      });
      if (res.ok) {
        const json = await res.json();
        setConnectionMode(true, apiBase);
        renderDashboard(json);
        return;
      }
    } catch (_) {
      // Statik snapshot fallback
    }

    setConnectionMode(false, apiBase);
    try {
      const snapRes = await fetch('/assets/ceo-snapshot.json', { cache: 'no-store' });
      if (snapRes.ok) {
        const snap = await snapRes.json();
        renderDashboard(snap);
      }
    } catch (err) {
      appendLog(`HATA: Anlık görüntü okunamadı (${err.message})`);
    }
  }

  async function pingSingleGame(game) {
    const badge = document.getElementById(`ping-${game.id}`);
    if (!badge || !game.webUrl) return;

    badge.className = 'game-ping';
    badge.textContent = 'Ping atılıyor...';

    const start = performance.now();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 9000);

    try {
      await fetch(game.webUrl, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-store',
        signal: controller.signal
      });
      const elapsed = Math.round(performance.now() - start);
      if (elapsed > 3500) {
        badge.className = 'game-ping game-ping--warn';
        badge.textContent = `🟡 Uyandı · ${elapsed} ms`;
      } else {
        badge.className = 'game-ping game-ping--ok';
        badge.textContent = `🟢 Çevrimiçi · ${elapsed} ms`;
      }
    } catch (_) {
      badge.className = 'game-ping game-ping--fail';
      badge.textContent = '🔴 Yanıt Yok / Zaman Aşımı';
    } finally {
      clearTimeout(timer);
    }
  }

  async function pingAllGames() {
    const games = state.snapshot?.games || [];
    if (games.length === 0) return;
    appendLog('5 oyun web sunucusuna canlı ping gönderiliyor...');
    await Promise.all(games.map((g) => pingSingleGame(g)));
    appendLog('5 oyun ping taraması tamamlandı.');
  }

  async function runCooCommand(endpoint, label, buttonEl) {
    if (state.busyCommand) return;
    const apiBase = getApiBase();
    state.busyCommand = true;
    if (buttonEl) buttonEl.disabled = true;
    appendLog(`Komut başlatıldı: ${label}`);

    try {
      const res = await fetch(`${apiBase}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-ceo-pin': state.activePin || getStoredLocalPin()
        },
        body: JSON.stringify({ requestedAt: new Date().toISOString() })
      });

      const payload = await res.json().catch(() => ({ ok: false, error: 'Geçersiz JSON yanıtı' }));
      if (!res.ok || !payload.ok) {
        appendLog(`UYARI (${res.status}): ${payload.error || 'Komut başarısız oldu.'}`);
        if (res.status === 401) lockPanel();
        return;
      }

      if (payload.output) {
        appendLog(`${label} tamamlandı:\n${payload.output.trim()}`);
      } else {
        appendLog(`${label} başarıyla tamamlandı.`);
      }

      if (payload.snapshot) {
        renderDashboard(payload.snapshot);
      } else {
        await loadDashboardData();
      }
    } catch (_) {
      appendLog(`BULUT MODU: "${label}" komutu için bilgisayarınızda CEO_PANEL_BASLAT.bat çalışıyor olmalıdır.`);
      setConnectionMode(false, apiBase);
    } finally {
      state.busyCommand = false;
      if (buttonEl) buttonEl.disabled = false;
    }
  }

  function registerPwaAndInstall() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      state.deferredPrompt = e;
      if (dom['btn-install-pwa']) {
        dom['btn-install-pwa'].textContent = '📲 Uygulamayı Kur';
      }
    });

    dom['btn-install-pwa']?.addEventListener('click', async () => {
      if (state.deferredPrompt) {
        state.deferredPrompt.prompt();
        const choice = await state.deferredPrompt.userChoice;
        state.deferredPrompt = null;
        appendLog(`PWA kurulum yanıtı: ${choice.outcome}`);
      } else {
        appendLog('İPUCU: Tarayıcı menüsünden (⋮ veya Paylaş) "Ana Ekrana Ekle" seçeneğini kullanın.');
      }
    });
  }

  function bindEvents() {
    document.querySelectorAll('.numpad-btn[data-digit]').forEach((btn) => {
      btn.addEventListener('click', () => handleDigitInput(btn.dataset.digit));
    });

    dom['btn-pin-clear']?.addEventListener('click', () => {
      state.enteredDigits = '';
      renderPinDots();
      if (dom['pin-error']) dom['pin-error'].textContent = '';
    });

    dom['btn-pin-backspace']?.addEventListener('click', () => {
      state.enteredDigits = state.enteredDigits.slice(0, -1);
      renderPinDots();
    });

    document.addEventListener('keydown', (e) => {
      if (dom['pin-lock-screen'] && !dom['pin-lock-screen'].hidden) {
        if (/^\d$/.test(e.key)) handleDigitInput(e.key);
        else if (e.key === 'Backspace') {
          state.enteredDigits = state.enteredDigits.slice(0, -1);
          renderPinDots();
        } else if (e.key === 'Escape') {
          state.enteredDigits = '';
          renderPinDots();
        }
      }
    });

    dom['btn-lock-panel']?.addEventListener('click', lockPanel);
    dom['btn-refresh-status']?.addEventListener('click', () => {
      void loadDashboardData();
      void pingAllGames();
    });
    dom['btn-ping-all']?.addEventListener('click', () => void pingAllGames());
    dom['btn-clear-log']?.addEventListener('click', () => {
      if (dom['coo-console-output']) dom['coo-console-output'].textContent = '[COO] Günlük temizlendi.';
    });

    dom['btn-cmd-scan']?.addEventListener('click', () =>
      void runCooCommand('/api/command/scan', 'Testçileri Tara ve Eşitle', dom['btn-cmd-scan'])
    );
    dom['btn-cmd-report']?.addEventListener('click', () =>
      void runCooCommand('/api/command/report', 'Günlük Rapor Gönder', dom['btn-cmd-report'])
    );
    dom['btn-cmd-emulator']?.addEventListener('click', () =>
      void runCooCommand('/api/command/screenshot', 'Emülatörü Kontrol Et', dom['btn-cmd-emulator'])
    );

    // Ayarlar & PIN modalı
    dom['btn-open-pin-modal']?.addEventListener('click', () => {
      if (dom['bridge-url-input']) {
        dom['bridge-url-input'].value = localStorage.getItem(STORAGE_BRIDGE_KEY) || '';
      }
      if (dom['modal-feedback']) dom['modal-feedback'].textContent = '';
      dom['pin-modal']?.showModal();
    });

    dom['btn-close-pin-modal']?.addEventListener('click', () => dom['pin-modal']?.close());

    dom['btn-save-bridge']?.addEventListener('click', async () => {
      const val = (dom['bridge-url-input']?.value || '').trim().replace(/\/+$/, '');
      if (val && !/^https?:\/\//i.test(val)) {
        dom['modal-feedback'].textContent = 'Geçerli bir http:// veya https:// adresi girin.';
        return;
      }
      if (val) localStorage.setItem(STORAGE_BRIDGE_KEY, val);
      else localStorage.removeItem(STORAGE_BRIDGE_KEY);
      dom['modal-feedback'].textContent = 'Köprü adresi kaydedildi. Yeniden bağlanılıyor...';
      await loadDashboardData();
    });

    dom['btn-save-pin']?.addEventListener('click', async () => {
      const cur = (dom['current-pin-input']?.value || '').trim();
      const next = (dom['new-pin-input']?.value || '').trim();
      const conf = (dom['confirm-pin-input']?.value || '').trim();

      if (!/^\d{4}$/.test(next) || next !== conf) {
        dom['modal-feedback'].textContent = 'Yeni PIN 4 rakamdan oluşmalı ve eşleşmelidir.';
        return;
      }
      if (cur !== (state.activePin || getStoredLocalPin())) {
        dom['modal-feedback'].textContent = 'Mevcut PIN hatalı.';
        return;
      }

      if (state.localBridgeAvailable) {
        try {
          const res = await fetch(`${getApiBase()}/api/auth/pin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-ceo-pin': cur
            },
            body: JSON.stringify({ newPin: next })
          });
          if (!res.ok) {
            dom['modal-feedback'].textContent = 'Sunucu PIN güncellemesini reddetti.';
            return;
          }
        } catch (_) {
          // Devam
        }
      }

      localStorage.setItem(STORAGE_PIN_KEY, next);
      sessionStorage.setItem(SESSION_UNLOCKED_KEY, next);
      state.activePin = next;
      dom['current-pin-input'].value = '';
      dom['new-pin-input'].value = '';
      dom['confirm-pin-input'].value = '';
      dom['modal-feedback'].textContent = 'CEO PIN başarıyla güncellendi!';
      appendLog('Güvenlik PIN kodu güncellendi.');
    });

    // Emülatör lightbox
    dom['btn-zoom-emulator']?.addEventListener('click', () => dom['emulator-lightbox']?.showModal());
    dom['btn-close-lightbox']?.addEventListener('click', () => dom['emulator-lightbox']?.close());
  }

  document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    bindEvents();
    registerPwaAndInstall();

    const sessionPin = sessionStorage.getItem(SESSION_UNLOCKED_KEY);
    if (sessionPin && /^\d{4}$/.test(sessionPin)) {
      void attemptUnlock(sessionPin);
    }
  });
})();
