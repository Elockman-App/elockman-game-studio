#!/usr/bin/env node
/**
 * Elockman Game Studio — Yerel / LAN CEO COO Köprü Sunucusu (Faz 4)
 * Sıfır harici bağımlılıklı HTTP + Statik PWA + COO Komut API sunucusu.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STUDIO_DIR = __dirname;
const PUBLIC_DIR = path.join(STUDIO_DIR, 'public');
const PIN_CONFIG_PATH = path.join(STUDIO_DIR, '.ceo-pin.json');
const SNAPSHOT_PATH = path.join(PUBLIC_DIR, 'assets', 'ceo-snapshot.json');
const EMULATOR_SCREEN_PATH = path.join(PUBLIC_DIR, 'assets', 'emulator-latest.png');
const TESTERS_DATA_DIR = 'C:\\Projeler\\services\\elockman-testers\\data';
const ARCHIVES_RELEASE_DIR = 'C:\\Projeler\\archives\\PLAY_CONSOLE_YUKLEME_MERKEZI';
const REPORTS_DIR = path.join(STUDIO_DIR, 'RAPORLAR');
const SEND_REPORT_SCRIPT = path.join(STUDIO_DIR, 'send_daily_report.ps1');
const TESTERS_CLI = 'C:\\Projeler\\services\\elockman-testers\\cli.mjs';

const PORT = Number(process.env.CEO_PANEL_PORT || 19888);
const HOST = process.env.CEO_PANEL_HOST || '0.0.0.0';
const DEFAULT_PIN = '2026';

let commandInProgress = false;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon'
};

const GAME_CATALOG = [
  {
    id: 'hipodrom-ahiri',
    name: 'Hipodrom Ahırı: At Yarışı',
    packageId: 'com.hipodrom.ahiri',
    webUrl: 'https://hipodrom-ahiri.onrender.com/',
    webOptInUrl: 'https://play.google.com/apps/testing/com.hipodrom.ahiri',
    releaseFolder: '1_Hipodrom_Ahiri',
    fallbackAab: 'HipodromAhiri-v1.7-vc5-signed.aab',
    fallbackSizeMb: 21.79,
    defaultContinuousDays: 10,
    phaseStatus: 'Kapalı Testte (10/14 Gün)'
  },
  {
    id: 'ring-tycoon',
    name: 'Ring Tycoon: Boks Menajeri',
    packageId: 'com.elockman.ringtycoon',
    webUrl: 'https://ring-tycoon.onrender.com/',
    webOptInUrl: 'https://play.google.com/apps/testing/com.elockman.ringtycoon',
    releaseFolder: '2_Ring_Efsanesi',
    fallbackAab: 'RingTycoon-v1.0.2-API36-signed.aab',
    fallbackSizeMb: 28.55,
    defaultContinuousDays: 0,
    phaseStatus: "Google Play'de Yayında & Test Hub"
  },
  {
    id: 'orbit-escape',
    name: 'Orbit Escape 3D: Uzaydan Kaçış',
    packageId: 'com.elockman.orbitescape',
    webUrl: 'https://orbit-escape-cprs.onrender.com/',
    webOptInUrl: 'https://play.google.com/apps/testing/com.elockman.orbitescape',
    releaseFolder: '3_Orbit_Escape',
    fallbackAab: 'OrbitEscape-v1.1.0-API36-signed.aab',
    fallbackSizeMb: 12.27,
    defaultContinuousDays: 0,
    phaseStatus: 'v1.1.0 3D Güncellemesi İncelemede'
  },
  {
    id: 'kulup-efsanesi',
    name: 'Kulüp Efsanesi: Futbol Menajeri',
    packageId: 'com.elockman.kulupefsanesi',
    webUrl: 'https://kulup-efsanesi.onrender.com/',
    webOptInUrl: 'https://play.google.com/apps/testing/com.elockman.kulupefsanesi',
    releaseFolder: '4_Kulup_Efsanesi',
    fallbackAab: 'KulupEfsanesi-v1.0.0-API36-signed.aab',
    fallbackSizeMb: 9.1,
    defaultContinuousDays: 0,
    phaseStatus: 'Google Play İncelemesinde (Kapalı Test)'
  },
  {
    id: 'garaj-efsanesi',
    name: 'Garaj Efsanesi: Sokak Yarışı',
    packageId: 'com.elockman.garajefsanesi',
    webUrl: 'https://garaj-efsanesi.onrender.com/',
    webOptInUrl: 'https://play.google.com/apps/testing/com.elockman.garajefsanesi',
    releaseFolder: '5_Garaj_Efsanesi',
    fallbackAab: 'GarajEfsanesi-v1.0.0-API36-signed.aab',
    fallbackSizeMb: 8.81,
    defaultContinuousDays: 0,
    phaseStatus: 'Play Console Hazır & AdMob Entegre'
  }
];

function getExpectedPin() {
  if (process.env.CEO_PANEL_PIN && /^\d{4}$/.test(process.env.CEO_PANEL_PIN)) {
    return process.env.CEO_PANEL_PIN;
  }
  try {
    if (fs.existsSync(PIN_CONFIG_PATH)) {
      const parsed = JSON.parse(fs.readFileSync(PIN_CONFIG_PATH, 'utf8'));
      if (parsed && /^\d{4}$/.test(String(parsed.pin))) {
        return String(parsed.pin);
      }
    }
  } catch (_) {
    // Varsayılan PIN'e düş
  }
  return DEFAULT_PIN;
}

function isPinValid(req) {
  const provided = String(req.headers['x-ceo-pin'] || '').trim();
  const expected = getExpectedPin();
  if (!provided) return false;
  const a = crypto.createHash('sha256').update(provided).digest();
  const b = crypto.createHash('sha256').update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

function readJsonSafe(filePath, fallback) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (_) {
    // Sessiz yedek
  }
  return fallback;
}

function maskEmail(email) {
  if (!email || typeof email !== 'string') return '';
  if (email.includes('...')) return email;
  const parts = email.split('@');
  if (parts.length !== 2) return email;
  const local = parts[0];
  return `${local.slice(0, 1)}***@${parts[1]}`;
}

function cleanMembersList(rawMembers, revealEmails) {
  const list = Array.isArray(rawMembers) ? rawMembers : [];
  const fullEmails = list.filter((e) => typeof e === 'string' && e.includes('@') && !e.includes('...'));
  const unique = [...new Set(fullEmails)];
  if (revealEmails) return unique;
  return unique.map((e, idx) => (idx === 0 ? `${maskEmail(e)} (Kurucu)` : maskEmail(e)));
}

function findLatestAab(releaseFolder, fallbackAab, fallbackSizeMb) {
  const dir = path.join(ARCHIVES_RELEASE_DIR, releaseFolder);
  try {
    if (fs.existsSync(dir)) {
      const aabs = fs.readdirSync(dir)
        .filter((f) => f.toLowerCase().endsWith('.aab'))
        .map((f) => {
          const stat = fs.statSync(path.join(dir, f));
          return { name: f, sizeMb: Number((stat.size / (1024 * 1024)).toFixed(2)), mtimeMs: stat.mtimeMs };
        })
        .sort((a, b) => b.mtimeMs - a.mtimeMs);
      if (aabs.length > 0) return { aabFile: aabs[0].name, aabSizeMb: aabs[0].sizeMb };
    }
  } catch (_) {
    // Yedek boyutu kullan
  }
  return { aabFile: fallbackAab, aabSizeMb: fallbackSizeMb };
}

function resolveAdbExecutable() {
  const candidates = [
    process.env.ANDROID_HOME ? path.join(process.env.ANDROID_HOME, 'platform-tools', 'adb.exe') : '',
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Android', 'Sdk', 'platform-tools', 'adb.exe') : '',
    'adb'
  ].filter(Boolean);

  for (const cand of candidates) {
    if (cand === 'adb' || fs.existsSync(cand)) return cand;
  }
  return 'adb';
}

async function inspectEmulatorStatus() {
  const adb = resolveAdbExecutable();
  const baseInfo = {
    connected: false,
    deviceId: 'emulator-5554',
    screenshotUrl: '/assets/emulator-latest.png',
    capturedAt: null,
    partnerPackages: {
      'com.privatespace.app': true,
      'com.leondigital.docgen': true
    }
  };

  try {
    if (fs.existsSync(EMULATOR_SCREEN_PATH)) {
      baseInfo.capturedAt = fs.statSync(EMULATOR_SCREEN_PATH).mtime.toISOString();
    }
    const { stdout } = await execFileAsync(adb, ['devices'], { timeout: 2500 });
    const lines = stdout.split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('List of devices'));
    const online = lines.find((l) => l.endsWith('\tdevice'));
    if (online) {
      baseInfo.connected = true;
      baseInfo.deviceId = online.split('\t')[0];
    }
  } catch (_) {
    // Emülatör kapalıysa bağlı değil olarak dön
  }
  return baseInfo;
}

function inspectReportsSummary() {
  let latestReportFile = null;
  let outboxCount = 0;
  let latestOutboxFile = null;

  try {
    if (fs.existsSync(REPORTS_DIR)) {
      const mds = fs.readdirSync(REPORTS_DIR)
        .filter((f) => f.toLowerCase().endsWith('.md'))
        .map((f) => ({ name: f, mtimeMs: fs.statSync(path.join(REPORTS_DIR, f)).mtimeMs }))
        .sort((a, b) => b.mtimeMs - a.mtimeMs);
      if (mds.length > 0) latestReportFile = mds[0].name;
    }
    const outboxDir = path.join(REPORTS_DIR, 'OUTBOX');
    if (fs.existsSync(outboxDir)) {
      const txts = fs.readdirSync(outboxDir)
        .filter((f) => f.toLowerCase().endsWith('.txt'))
        .map((f) => ({ name: f, mtimeMs: fs.statSync(path.join(outboxDir, f)).mtimeMs }))
        .sort((a, b) => b.mtimeMs - a.mtimeMs);
      outboxCount = txts.length;
      if (txts.length > 0) latestOutboxFile = txts[0].name;
    }
  } catch (_) {
    // Yoksay
  }
  return { latestReportFile, outboxCount, latestOutboxFile };
}

async function buildSnapshot(revealEmails) {
  const roster = readJsonSafe(path.join(TESTERS_DATA_DIR, 'tester_roster.json'), {});
  const externalEmails = readJsonSafe(path.join(TESTERS_DATA_DIR, 'tester_emails.json'), []);
  const deals = readJsonSafe(path.join(TESTERS_DATA_DIR, 'tester_deals.json'), []);
  const readiness = readJsonSafe(path.join(TESTERS_DATA_DIR, 'production_readiness.json'), {});

  const readinessMap = new Map();
  if (Array.isArray(readiness.games)) {
    for (const g of readiness.games) {
      readinessMap.set(g.packageId, g);
    }
  }

  const games = GAME_CATALOG.map((g) => {
    const aab = findLatestAab(g.releaseFolder, g.fallbackAab, g.fallbackSizeMb);
    const liveAudit = readinessMap.get(g.packageId);
    const continuousDays = Math.max(g.defaultContinuousDays, Number(liveAudit?.continuousDays || 0));
    return {
      id: g.id,
      name: g.name,
      packageId: g.packageId,
      webUrl: g.webUrl,
      webOptInUrl: g.webOptInUrl,
      aabFile: aab.aabFile,
      aabSizeMb: aab.aabSizeMb,
      continuousDays,
      requiredDays: 14,
      admob: 'Hibrit (Banner + Geçiş + Ödüllü)',
      phaseStatus: g.phaseStatus
    };
  });

  const emu = await inspectEmulatorStatus();
  const reports = inspectReportsSummary();

  const dealsArray = Array.isArray(deals) ? deals : [];
  const optedInDeals = dealsArray.filter((d) => d && d.optedInPlay).length;
  const reciprocalOfferedDeals = dealsArray.filter((d) => d && d.status === 'reciprocal_offer_posted').length;

  const basePayload = {
    generatedAt: new Date().toISOString(),
    mode: 'local-coo-bridge',
    studio: {
      name: 'Elockman Game Studio',
      devId: '6034929488947548242',
      googleGroupEmail: 'elockman-testers@googlegroups.com',
      googleGroupUrl: 'https://groups.google.com/g/elockman-testers',
      minimumTestersRequired: 12,
      targetTesterCount: 15,
      requiredDays: 14
    },
    testers: {
      memberCount: Number(roster.memberCount || cleanMembersList(roster.members, true).length || 0),
      members: cleanMembersList(roster.members, false),
      externalEmailsCount: Array.isArray(externalEmails) ? externalEmails.length : 0,
      totalDeals: dealsArray.length,
      optedInDeals,
      reciprocalOfferedDeals,
      installedPartnerApps: [
        { name: 'Private Space', packageId: 'com.privatespace.app', status: 'Emülatörde Kurulu' },
        { name: 'Doc Gen', packageId: 'com.leondigital.docgen', status: 'Emülatörde Kurulu' }
      ],
      updatedAt: roster.updatedAt || null
    },
    games,
    emulator: emu,
    reports
  };

  // Statik bulut anlık görüntüsünü maskeli üye e-postaları ile güncel tut
  try {
    const publicSnapshot = { ...basePayload, mode: 'cloud-snapshot' };
    fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(publicSnapshot, null, 2), 'utf8');
  } catch (_) {
    // Yazma hatasında isteği kesme
  }

  if (revealEmails) {
    basePayload.testers.members = cleanMembersList(roster.members, true);
  }
  return basePayload;
}

function sendJson(res, statusCode, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-ceo-pin'
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', (chunk) => {
      total += chunk.length;
      if (total > 64 * 1024) {
        reject(new Error('Body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function handleScanCommand() {
  const logs = [];
  if (fs.existsSync(TESTERS_CLI)) {
    try {
      const { stdout, stderr } = await execFileAsync('node', [TESTERS_CLI, '--sync'], {
        timeout: 30000,
        windowsHide: true
      });
      if (stdout) logs.push(stdout.trim());
      if (stderr) logs.push(stderr.trim());
    } catch (err) {
      logs.push(`Google Group canlı senkron notu: ${err.message}`);
      if (err.stdout) logs.push(String(err.stdout).trim());
      if (err.stderr) logs.push(String(err.stderr).trim());
      logs.push('Not: Yerel veri dosyaları (tester_roster.json / tester_deals.json) üzerinden mevcut tarama durumu okundu.');
    }
  } else {
    logs.push('elockman-testers CLI bulunamadı.');
  }

  const snapshot = await buildSnapshot(true);
  logs.push(`Aktif Grup Üyesi: ${snapshot.testers.memberCount} | Reddit Teklifi: ${snapshot.testers.totalDeals}`);
  return { ok: true, output: logs.join('\n'), snapshot };
}

async function handleReportCommand() {
  const { stdout, stderr } = await execFileAsync(
    'powershell',
    ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', SEND_REPORT_SCRIPT],
    { timeout: 30000, windowsHide: true }
  );
  const output = [stdout, stderr].filter(Boolean).join('\n').trim();
  const snapshot = await buildSnapshot(true);
  return { ok: true, output: output || 'Günlük yönetici raporu üretildi.', snapshot };
}

async function handleScreenshotCommand() {
  const adb = resolveAdbExecutable();
  const { stdout: devOut } = await execFileAsync(adb, ['devices'], { timeout: 5000, windowsHide: true });
  const deviceLine = devOut.split(/\r?\n/).map((l) => l.trim()).find((l) => l.endsWith('\tdevice'));
  if (!deviceLine) {
    return { ok: false, error: 'Aktif bir Android emülatör/cihaz (adb device) bulunamadı.' };
  }
  const deviceId = deviceLine.split('\t')[0];

  const { stdout: pngBuf } = await execFileAsync(adb, ['-s', deviceId, 'exec-out', 'screencap', '-p'], {
    encoding: 'buffer',
    maxBuffer: 25 * 1024 * 1024,
    timeout: 15000,
    windowsHide: true
  });

  if (!Buffer.isBuffer(pngBuf) || pngBuf.length < 16 || pngBuf[0] !== 0x89 || pngBuf[1] !== 0x50) {
    return { ok: false, error: 'Emülatör ekran görüntüsü geçerli PNG başlığı dönmedi.' };
  }

  fs.writeFileSync(EMULATOR_SCREEN_PATH, pngBuf);
  const { stdout: pkgOut } = await execFileAsync(adb, ['-s', deviceId, 'shell', 'pm', 'list', 'packages'], {
    timeout: 5000,
    windowsHide: true
  });
  const hasPrivateSpace = pkgOut.includes('com.privatespace.app');
  const hasDocGen = pkgOut.includes('com.leondigital.docgen');

  const snapshot = await buildSnapshot(true);
  return {
    ok: true,
    screenshotUrl: `/assets/emulator-latest.png?t=${Date.now()}`,
    output: [
      `Cihaz: ${deviceId} — Canlı ekran yakalandı (${Math.round(pngBuf.length / 1024)} KB PNG).`,
      `Partner Paket Kontrolü -> com.privatespace.app: ${hasPrivateSpace ? 'KURULU ✅' : 'EKSİK'}, com.leondigital.docgen: ${hasDocGen ? 'KURULU ✅' : 'EKSİK'}`
    ].join('\n'),
    snapshot
  };
}

function serveStaticFile(reqPath, res) {
  const cleanRel = decodeURIComponent(reqPath.split('?')[0]).replace(/^\/+/, '');
  const relPath = cleanRel === '' ? 'index.html' : cleanRel;
  const resolved = path.resolve(PUBLIC_DIR, relPath);

  if (!resolved.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  let filePath = resolved;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': mime,
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  fs.createReadStream(filePath).pipe(res);
}

function getLanAddresses() {
  const nets = os.networkInterfaces();
  const ips = [];
  for (const iface of Object.values(nets)) {
    if (!iface) continue;
    for (const cfg of iface) {
      if (cfg.family === 'IPv4' && !cfg.internal) {
        ips.push(cfg.address);
      }
    }
  }
  return ips;
}

const server = http.createServer(async (req, res) => {
  const urlPath = (req.url || '/').split('?')[0];

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-ceo-pin'
    });
    res.end();
    return;
  }

  try {
    if (req.method === 'GET' && urlPath === '/api/health') {
      sendJson(res, 200, { ok: true, mode: 'local-coo-bridge', port: PORT });
      return;
    }

    if (req.method === 'GET' && urlPath === '/api/status') {
      const snapshot = await buildSnapshot(isPinValid(req));
      sendJson(res, 200, snapshot);
      return;
    }

    if (req.method === 'POST' && urlPath === '/api/auth/verify') {
      if (!isPinValid(req)) {
        sendJson(res, 401, { ok: false, error: 'Geçersiz CEO PIN kodu.' });
        return;
      }
      sendJson(res, 200, { ok: true, mode: 'local-coo-bridge' });
      return;
    }

    if (req.method === 'POST' && urlPath === '/api/auth/pin') {
      if (!isPinValid(req)) {
        sendJson(res, 401, { ok: false, error: 'Mevcut CEO PIN kodu hatalı.' });
        return;
      }
      const raw = await readRequestBody(req);
      const body = JSON.parse(raw || '{}');
      const nextPin = String(body.newPin || '').trim();
      if (!/^\d{4}$/.test(nextPin)) {
        sendJson(res, 400, { ok: false, error: 'Yeni PIN 4 rakamdan oluşmalıdır.' });
        return;
      }
      fs.writeFileSync(PIN_CONFIG_PATH, JSON.stringify({ pin: nextPin, updatedAt: new Date().toISOString() }, null, 2), 'utf8');
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === 'POST' && urlPath.startsWith('/api/command/')) {
      if (!isPinValid(req)) {
        sendJson(res, 401, { ok: false, error: 'Yetkisiz istek: geçerli x-ceo-pin gerekli.' });
        return;
      }
      if (commandInProgress) {
        sendJson(res, 409, { ok: false, error: 'Başka bir COO komutu şu anda çalışıyor, lütfen bekleyin.' });
        return;
      }

      commandInProgress = true;
      try {
        if (urlPath === '/api/command/scan') {
          sendJson(res, 200, await handleScanCommand());
          return;
        }
        if (urlPath === '/api/command/report') {
          sendJson(res, 200, await handleReportCommand());
          return;
        }
        if (urlPath === '/api/command/screenshot') {
          const result = await handleScreenshotCommand();
          sendJson(res, result.ok ? 200 : 500, result);
          return;
        }
        sendJson(res, 404, { ok: false, error: 'Bilinmeyen COO komutu.' });
        return;
      } finally {
        commandInProgress = false;
      }
    }

    serveStaticFile(urlPath, res);
  } catch (err) {
    sendJson(res, 500, { ok: false, error: err.message || 'Sunucu hatası' });
  }
});

server.listen(PORT, HOST, () => {
  console.log('==========================================================');
  console.log(' [ELOCKMAN COO] CEO Mobil PWA & Köprü Sunucusu Başlatıldı');
  console.log('==========================================================');
  console.log(` Yerel PC   : http://localhost:${PORT}/ceo-panel.html`);
  for (const ip of getLanAddresses()) {
    console.log(` Telefon Wi-Fi: http://${ip}:${PORT}/ceo-panel.html`);
  }
  console.log(' Çıkmak için Ctrl+C tuşlarına basın.');
});
