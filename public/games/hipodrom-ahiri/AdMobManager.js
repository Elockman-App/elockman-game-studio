/**
 * Elockman Game Studio — Ortak Hibrit AdMob & UMP Yonetim Katmani (Capacitor AdMob v7)
 * Tum HTML5 / Capacitor oyunlari icin UMP onay akisi, Odullu Reklam (Rewarded),
 * Seyrek Gecis Reklami (Interstitial), Opsiyonel Banner, ses kisici (Audio Duck/Mute)
 * ve Web tarayici test simülasyonu saglar.
 */
(function (root, factory) {
  const api = factory(root);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.ElockmanAdMob = api;
  }
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';

  const TEST_IDS = {
    android: {
      rewarded: 'ca-app-pub-3940256099942544/5224354917',
      interstitial: 'ca-app-pub-3940256099942544/1033173712',
      banner: 'ca-app-pub-3940256099942544/6300978111'
    },
    ios: {
      rewarded: 'ca-app-pub-3940256099942544/1712485313',
      interstitial: 'ca-app-pub-3940256099942544/4411468910',
      banner: 'ca-app-pub-3940256099942544/2934735716'
    }
  };

  function getTodayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function detectCapacitor() {
    const cap = root && root.Capacitor ? root.Capacitor : null;
    const platform = cap && typeof cap.getPlatform === 'function' ? cap.getPlatform() : 'web';
    const isNative = !!(
      cap &&
      (typeof cap.isNativePlatform === 'function'
        ? cap.isNativePlatform()
        : platform === 'android' || platform === 'ios')
    );
    const plugin = cap && cap.Plugins && cap.Plugins.AdMob ? cap.Plugins.AdMob : null;
    return { cap, platform, isNative: isNative && !!plugin, plugin };
  }

  function resolveUnit(unitConfig, fallbackTestUnit, platform, useTest) {
    const plat = platform === 'ios' ? 'ios' : 'android';
    if (useTest) {
      return fallbackTestUnit[plat];
    }
    if (!unitConfig) return '';
    if (typeof unitConfig === 'string') return unitConfig;
    return unitConfig[plat] || unitConfig.android || unitConfig.ios || '';
  }

  function createManager(initialConfig) {
    const state = {
      initialized: false,
      initPromise: null,
      listenersBound: false,
      consentOk: false,
      consentStatus: 'idle',
      rwReady: false,
      inReady: false,
      busy: false,
      rwGot: false,
      bannerVisible: false,
      lastInterAt: 0,
      closeResolver: null
    };

    const config = Object.assign(
      {
        gameKey: 'studio',
        test: false,
        dailyMax: 6,
        interEvery: 3,
        interMinRuns: 3,
        interGapMs: 180000,
        simulateOnWeb: true,
        webDelayMs: 40,
        rewarded: null,
        interstitial: null,
        banner: null,
        onAudioMute: null,
        onStateChange: null,
        getDailyRecord: null,
        setDailyRecord: null
      },
      initialConfig || {}
    );

    const storageKey = 'elockman-admob-daily-' + config.gameKey;
    let memoryDailyRecord = { date: getTodayKey(), count: 0 };

    function readDailyRecord() {
      if (typeof config.getDailyRecord === 'function') {
        try {
          const rec = config.getDailyRecord();
          if (rec && typeof rec === 'object') return rec;
        } catch (e) {}
      }
      try {
        if (root && root.localStorage) {
          const raw = root.localStorage.getItem(storageKey);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') return parsed;
          }
        }
      } catch (e) {}
      return memoryDailyRecord;
    }

    function writeDailyRecord(rec) {
      memoryDailyRecord = rec;
      if (typeof config.setDailyRecord === 'function') {
        try {
          config.setDailyRecord(rec);
        } catch (e) {}
      }
      try {
        if (root && root.localStorage) {
          root.localStorage.setItem(storageKey, JSON.stringify(rec));
        }
      } catch (e) {}
    }

    function getUsedToday() {
      const today = getTodayKey();
      const rec = readDailyRecord();
      if (!rec || rec.date !== today) {
        return 0;
      }
      return Math.max(0, Number(rec.count || 0));
    }

    function incrementDaily() {
      const today = getTodayKey();
      const rec = readDailyRecord();
      const nextCount = rec && rec.date === today ? Number(rec.count || 0) + 1 : 1;
      writeDailyRecord({ date: today, count: nextCount });
      emitState();
    }

    function adsLeftToday() {
      return Math.max(0, Number(config.dailyMax || 0) - getUsedToday());
    }

    function getEnv() {
      return detectCapacitor();
    }

    function emitState() {
      if (typeof config.onStateChange === 'function') {
        try {
          config.onStateChange(getStatus());
        } catch (e) {}
      }
    }

    function notifyAudioMute(muted) {
      if (typeof config.onAudioMute === 'function') {
        try {
          config.onAudioMute(!!muted);
        } catch (e) {}
      }
      const { plugin, isNative } = getEnv();
      if (isNative && plugin && typeof plugin.setApplicationMuted === 'function') {
        try {
          Promise.resolve(plugin.setApplicationMuted({ muted: !!muted })).catch(function () {});
        } catch (e) {}
      }
    }

    function resolvePendingAd(result) {
      if (state.closeResolver) {
        const fn = state.closeResolver;
        state.closeResolver = null;
        fn(result);
      }
    }

    async function prepareRewarded() {
      const { isNative, plugin, platform } = getEnv();
      if (!isNative || !plugin || !state.consentOk) return false;
      const adId = resolveUnit(
        config.rewarded,
        { android: TEST_IDS.android.rewarded, ios: TEST_IDS.ios.rewarded },
        platform,
        !!config.test
      );
      if (!adId || /KULUP_|REPLACE_|TODO/i.test(adId)) return false;
      try {
        await plugin.prepareRewardVideoAd({ adId: adId, isTesting: !!config.test });
        return true;
      } catch (e) {
        state.rwReady = false;
        emitState();
        return false;
      }
    }

    async function prepareInterstitial() {
      const { isNative, plugin, platform } = getEnv();
      if (!isNative || !plugin || !state.consentOk) return false;
      const adId = resolveUnit(
        config.interstitial,
        { android: TEST_IDS.android.interstitial, ios: TEST_IDS.ios.interstitial },
        platform,
        !!config.test
      );
      if (!adId || /KULUP_|REPLACE_|TODO/i.test(adId)) return false;
      try {
        await plugin.prepareInterstitial({ adId: adId, isTesting: !!config.test });
        return true;
      } catch (e) {
        state.inReady = false;
        emitState();
        return false;
      }
    }

    function bindListeners(plugin) {
      if (state.listenersBound || !plugin || typeof plugin.addListener !== 'function') return;
      state.listenersBound = true;

      try {
        plugin.addListener('onRewardedVideoAdLoaded', function () {
          state.rwReady = true;
          emitState();
        });
        plugin.addListener('onRewardedVideoAdFailedToLoad', function () {
          state.rwReady = false;
          emitState();
        });
        plugin.addListener('onRewardedVideoAdReward', function () {
          state.rwGot = true;
        });
        plugin.addListener('onRewardedVideoAdDismissed', function () {
          state.rwReady = false;
          resolvePendingAd('dismissed');
          prepareRewarded();
        });
        plugin.addListener('onRewardedVideoAdFailedToShow', function () {
          state.rwReady = false;
          resolvePendingAd('failed');
          prepareRewarded();
        });

        plugin.addListener('interstitialAdLoaded', function () {
          state.inReady = true;
          emitState();
        });
        plugin.addListener('interstitialAdFailedToLoad', function () {
          state.inReady = false;
          emitState();
        });
        plugin.addListener('interstitialAdDismissed', function () {
          state.inReady = false;
          resolvePendingAd('dismissed');
          prepareInterstitial();
        });
        plugin.addListener('interstitialAdFailedToShow', function () {
          state.inReady = false;
          resolvePendingAd('failed');
          prepareInterstitial();
        });
      } catch (e) {}
    }

    async function init(overrides) {
      if (overrides && typeof overrides === 'object') {
        Object.assign(config, overrides);
      }
      if (state.initPromise) return state.initPromise;

      state.initPromise = (async function () {
        const { isNative, plugin } = getEnv();
        if (!isNative || !plugin) {
          state.consentOk = !!config.simulateOnWeb;
          state.consentStatus = config.simulateOnWeb ? 'web-sim' : 'web-disabled';
          state.rwReady = !!config.simulateOnWeb;
          state.inReady = false;
          state.initialized = true;
          emitState();
          return getStatus();
        }

        try {
          if (getEnv().platform === 'ios') {
            try {
              if (typeof plugin.trackingAuthorizationStatus === 'function') {
                const attStatus = await plugin.trackingAuthorizationStatus();
                if (
                  attStatus &&
                  attStatus.status === 'notDetermined' &&
                  typeof plugin.requestTrackingAuthorization === 'function'
                ) {
                  await plugin.requestTrackingAuthorization();
                }
              }
            } catch (attErr) {}
          }

          try {
            let consentInfo = await plugin.requestConsentInfo();
            if (consentInfo && consentInfo.isConsentFormAvailable && consentInfo.status === 'REQUIRED') {
              consentInfo = await plugin.showConsentForm();
            }
            const ok = Boolean(
              consentInfo &&
                (consentInfo.canRequestAds === true ||
                  (consentInfo.canRequestAds !== false &&
                    (consentInfo.status === 'OBTAINED' || consentInfo.status === 'NOT_REQUIRED')))
            );
            state.consentOk = ok;
            state.consentStatus = ok ? 'ok' : String((consentInfo && consentInfo.status) || 'no-consent');
          } catch (consentErr) {
            state.consentOk = true;
            state.consentStatus = 'consent-fallback';
          }

          await plugin.initialize({ initializeForTesting: !!config.test });
          bindListeners(plugin);

          if (state.consentOk) {
            await Promise.all([prepareRewarded(), prepareInterstitial()]);
          }
        } catch (err) {
          state.consentOk = false;
          state.consentStatus = 'err: ' + ((err && err.message) || err);
        }

        state.initialized = true;
        emitState();
        return getStatus();
      })();

      return state.initPromise;
    }

    function canReward() {
      if (state.busy || adsLeftToday() <= 0) return false;
      const { isNative } = getEnv();
      if (!isNative) {
        return !!config.simulateOnWeb;
      }
      return state.consentOk && state.rwReady;
    }

    async function showRewarded(onReward, onFail) {
      if (state.busy || adsLeftToday() <= 0) {
        if (typeof onFail === 'function') onFail('limit_or_busy');
        return false;
      }

      const { isNative, plugin } = getEnv();

      if (!isNative) {
        if (!config.simulateOnWeb) {
          if (typeof onFail === 'function') onFail('web_disabled');
          return false;
        }
        state.busy = true;
        emitState();
        notifyAudioMute(true);
        try {
          if (config.webDelayMs > 0) {
            await new Promise(function (resolve) {
              setTimeout(resolve, config.webDelayMs);
            });
          }
          incrementDaily();
          if (typeof onReward === 'function') onReward();
          return true;
        } finally {
          state.busy = false;
          notifyAudioMute(false);
          emitState();
        }
      }

      if (!plugin || !state.consentOk || !state.rwReady) {
        if (typeof onFail === 'function') onFail('not_ready');
        return false;
      }

      state.busy = true;
      state.rwGot = false;
      emitState();
      notifyAudioMute(true);

      let safetyTimer = null;
      try {
        const closePromise = new Promise(function (resolve) {
          state.closeResolver = resolve;
          safetyTimer = setTimeout(function () {
            resolvePendingAd('timeout');
          }, 120000);
        });
        await plugin.showRewardVideoAd();
        await closePromise;
        if (state.rwGot) {
          incrementDaily();
          if (typeof onReward === 'function') onReward();
          return true;
        }
        if (typeof onFail === 'function') onFail('dismissed_without_reward');
        return false;
      } catch (err) {
        if (typeof onFail === 'function') onFail(err);
        return false;
      } finally {
        if (safetyTimer) clearTimeout(safetyTimer);
        state.closeResolver = null;
        state.busy = false;
        notifyAudioMute(false);
        emitState();
      }
    }

    async function maybeInterstitial(runCount, opts) {
      const options = opts || {};
      const minRuns = Number(options.minRuns != null ? options.minRuns : config.interMinRuns);
      const every = Math.max(1, Number(options.every != null ? options.every : config.interEvery));
      const gapMs = Number(options.gapMs != null ? options.gapMs : config.interGapMs);
      const count = Number(runCount || 0);

      if (count < minRuns || count % every !== 0) return false;
      const now = Date.now();
      if (now - state.lastInterAt < gapMs) return false;
      if (state.busy) return false;

      const { isNative, plugin } = getEnv();
      if (!isNative || !plugin || !state.consentOk || !state.inReady) {
        return false;
      }

      state.busy = true;
      state.lastInterAt = now;
      emitState();
      notifyAudioMute(true);

      let safetyTimer = null;
      try {
        const closePromise = new Promise(function (resolve) {
          state.closeResolver = resolve;
          safetyTimer = setTimeout(function () {
            resolvePendingAd('timeout');
          }, 90000);
        });
        await plugin.showInterstitial();
        await closePromise;
        return true;
      } catch (err) {
        return false;
      } finally {
        if (safetyTimer) clearTimeout(safetyTimer);
        state.closeResolver = null;
        state.busy = false;
        notifyAudioMute(false);
        emitState();
      }
    }

    async function showBanner(opts) {
      const options = opts || {};
      const { isNative, plugin, platform } = getEnv();
      if (!isNative || !plugin || !state.consentOk) return false;
      const adId = resolveUnit(
        options.adId || config.banner,
        { android: TEST_IDS.android.banner, ios: TEST_IDS.ios.banner },
        platform,
        options.isTesting != null ? !!options.isTesting : !!config.test
      );
      if (!adId) return false;
      try {
        await plugin.showBanner({
          adId: adId,
          adSize: options.adSize || 'ADAPTIVE_BANNER',
          position: options.position || 'BOTTOM_CENTER',
          margin: Number(options.margin || 0),
          isTesting: options.isTesting != null ? !!options.isTesting : !!config.test
        });
        state.bannerVisible = true;
        emitState();
        return true;
      } catch (e) {
        return false;
      }
    }

    async function hideBanner() {
      const { isNative, plugin } = getEnv();
      if (!isNative || !plugin || !state.bannerVisible) return false;
      try {
        if (typeof plugin.hideBanner === 'function') {
          await plugin.hideBanner();
        }
        state.bannerVisible = false;
        emitState();
        return true;
      } catch (e) {
        return false;
      }
    }

    async function removeBanner() {
      const { isNative, plugin } = getEnv();
      if (!isNative || !plugin) return false;
      try {
        if (typeof plugin.removeBanner === 'function') {
          await plugin.removeBanner();
        }
        state.bannerVisible = false;
        emitState();
        return true;
      } catch (e) {
        return false;
      }
    }

    async function showPrivacyOptions() {
      const { isNative, plugin } = getEnv();
      if (!isNative || !plugin || typeof plugin.showPrivacyOptionsForm !== 'function') return false;
      try {
        await plugin.showPrivacyOptionsForm();
        return true;
      } catch (e) {
        return false;
      }
    }

    function getStatus() {
      const { isNative, platform } = getEnv();
      return {
        gameKey: config.gameKey,
        platform: platform,
        isNative: isNative,
        initialized: state.initialized,
        consentOk: state.consentOk,
        consentStatus: state.consentStatus,
        rewardedReady: isNative ? state.rwReady : !!config.simulateOnWeb,
        interstitialReady: state.inReady,
        bannerVisible: state.bannerVisible,
        busy: state.busy,
        usedToday: getUsedToday(),
        leftToday: adsLeftToday(),
        dailyMax: config.dailyMax
      };
    }

    return {
      config: config,
      init: init,
      canReward: canReward,
      adsLeftToday: adsLeftToday,
      getUsedToday: getUsedToday,
      showRewarded: showRewarded,
      maybeInterstitial: maybeInterstitial,
      prepareRewarded: prepareRewarded,
      prepareInterstitial: prepareInterstitial,
      showBanner: showBanner,
      hideBanner: hideBanner,
      removeBanner: removeBanner,
      showPrivacyOptions: showPrivacyOptions,
      getStatus: getStatus
    };
  }

  let defaultInstance = null;

  return {
    TEST_IDS: TEST_IDS,
    create: createManager,
    init: function (opts) {
      defaultInstance = createManager(opts);
      return defaultInstance.init();
    },
    getInstance: function () {
      if (!defaultInstance) defaultInstance = createManager();
      return defaultInstance;
    },
    canReward: function () {
      return defaultInstance ? defaultInstance.canReward() : false;
    },
    adsLeftToday: function () {
      return defaultInstance ? defaultInstance.adsLeftToday() : 0;
    },
    showRewarded: function (onReward, onFail) {
      return defaultInstance ? defaultInstance.showRewarded(onReward, onFail) : Promise.resolve(false);
    },
    maybeInterstitial: function (runCount, opts) {
      return defaultInstance ? defaultInstance.maybeInterstitial(runCount, opts) : Promise.resolve(false);
    },
    showBanner: function (opts) {
      return defaultInstance ? defaultInstance.showBanner(opts) : Promise.resolve(false);
    },
    hideBanner: function () {
      return defaultInstance ? defaultInstance.hideBanner() : Promise.resolve(false);
    },
    removeBanner: function () {
      return defaultInstance ? defaultInstance.removeBanner() : Promise.resolve(false);
    },
    showPrivacyOptions: function () {
      return defaultInstance ? defaultInstance.showPrivacyOptions() : Promise.resolve(false);
    },
    getStatus: function () {
      return defaultInstance ? defaultInstance.getStatus() : null;
    }
  };
});
