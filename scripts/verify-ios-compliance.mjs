import fs from 'fs';
import path from 'path';

const GAMES_ROOT = 'c:\\Projeler\\games';

const GAMES = {
  'hipodrom-ahiri': {
    bundleId: 'com.elockman.hipodromahiri',
    hasCommittedIos: true,
    srcFiles: ['index.html', 'build.js', 'AdMobManager.js'],
    checkBetting: true,
    expectPortalHideInNative: false
  },
  'ring-tycoon': {
    bundleId: 'com.elockman.ringtycoon',
    hasCommittedIos: false,
    srcFiles: ['index.html', 'src/ui/components/topBar.js', 'src/ui/views/settingsModal.js'],
    checkBetting: false,
    expectPortalHideInNative: true
  },
  'orbit-escape': {
    bundleId: 'com.elockman.orbitescape',
    hasCommittedIos: false,
    srcFiles: ['www/index.html', 'www/game.js'],
    checkBetting: false,
    expectPortalHideInNative: true
  },
  'garaj-efsanesi': {
    bundleId: 'com.elockman.garajefsanesi',
    hasCommittedIos: false,
    srcFiles: ['src_build/html_body.js', 'src_build/script_game.js', 'build.js'],
    checkBetting: false,
    expectPortalHideInNative: true
  },
  'kulup-efsanesi': {
    bundleId: 'com.elockman.kulupefsanesi',
    hasCommittedIos: false,
    srcFiles: ['index.html', 'js/game.js', 'build.js'],
    checkBetting: false,
    expectPortalHideInNative: false
  }
};

function readIfExists(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

function walkJsHtml(dir, ignoreDirs = new Set(['node_modules', 'android', 'ios', 'www', 'dist', 'eski-surumler', 'reklam-malzemeleri', 'prototype-web', 'tests', 'test', '.build', '.git', '.godot'])) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) {
      if (!ignoreDirs.has(ent.name)) {
        out.push(...walkJsHtml(path.join(dir, ent.name), ignoreDirs));
      }
    } else if (/\.(js|mjs|html)$/i.test(ent.name)) {
      out.push(path.join(dir, ent.name));
    }
  }
  return out;
}

function auditGame(slug) {
  const cfg = GAMES[slug];
  if (!cfg) {
    console.error(`Unknown game slug: ${slug}`);
    return { slug, errors: [`Unknown game: ${slug}`], warnings: [] };
  }
  const gameDir = path.join(GAMES_ROOT, slug);
  const errors = [];
  const warnings = [];
  const passes = [];

  // 1. PrivacyInfo.xcprivacy
  const privRel = cfg.hasCommittedIos ? 'ios/App/App/PrivacyInfo.xcprivacy' : 'ios-compliance/PrivacyInfo.xcprivacy';
  const privPath = path.join(gameDir, privRel);
  const privXml = readIfExists(privPath);
  if (!privXml) {
    errors.push(`Missing ${privRel}`);
  } else {
    const reqKeys = [
      'NSPrivacyTracking',
      'NSPrivacyCollectedDataTypeDeviceID',
      'NSPrivacyCollectedDataTypeAdvertisingData',
      'NSPrivacyAccessedAPICategoryUserDefaults',
      'CA92.1'
    ];
    for (const k of reqKeys) {
      if (!privXml.includes(k)) errors.push(`${privRel} missing ${k}`);
    }
    if (!errors.some(e => e.includes(privRel))) passes.push(`${privRel} valid`);
  }

  // 2. GitHub Workflow (.github/workflows/ios-build.yml)
  const wfRel = '.github/workflows/ios-build.yml';
  const wf = readIfExists(path.join(gameDir, wfRel));
  if (!wf) {
    errors.push(`Missing ${wfRel}`);
  } else {
    if (!wf.includes('macos-26')) errors.push(`${wfRel} does not use runs-on: macos-26`);
    if (!wf.includes('Xcode*.app')) errors.push(`${wfRel} missing dynamic Xcode 26+ selection step`);
    if (!wf.includes('15.0')) errors.push(`${wfRel} does not enforce iOS 15.0 deployment target`);
    if (!wf.includes('TARGETED_DEVICE_FAMILY') && !cfg.hasCommittedIos) {
      errors.push(`${wfRel} missing TARGETED_DEVICE_FAMILY = 1 enforcement`);
    }
    if (!wf.includes('ITSAppUsesNonExemptEncryption') && !cfg.hasCommittedIos) {
      errors.push(`${wfRel} missing ITSAppUsesNonExemptEncryption = false enforcement`);
    }
    if (!wf.includes('NSUserTrackingUsageDescription')) errors.push(`${wfRel} missing NSUserTrackingUsageDescription`);
    if (!wf.includes('SKAdNetwork') && !cfg.hasCommittedIos) errors.push(`${wfRel} missing SKAdNetworkItems`);
    if (!wf.includes('PrivacyInfo.xcprivacy')) errors.push(`${wfRel} does not verify/embed PrivacyInfo.xcprivacy`);
    if (!wf.includes('len(certs) >= 3')) errors.push(`${wfRel} missing safe certificate pruning (len(certs) >= 3)`);
    if (!wf.includes('IOS_APP_STORE')) errors.push(`${wfRel} missing automated IOS_APP_STORE provisioning via ASC API`);
    if (!wf.includes(cfg.bundleId)) errors.push(`${wfRel} does not reference expected bundleId ${cfg.bundleId}`);
  }

  // 3. Committed iOS Xcode project checks (Hipodrom)
  if (cfg.hasCommittedIos) {
    const pbx = readIfExists(path.join(gameDir, 'ios/App/App.xcodeproj/project.pbxproj'));
    const podfile = readIfExists(path.join(gameDir, 'ios/App/Podfile'));
    const plist = readIfExists(path.join(gameDir, 'ios/App/App/Info.plist'));
    if (!pbx) errors.push('Missing ios/App/App.xcodeproj/project.pbxproj');
    else {
      if (pbx.includes('IPHONEOS_DEPLOYMENT_TARGET = 14.0')) errors.push('project.pbxproj still has IPHONEOS_DEPLOYMENT_TARGET = 14.0 (must be 15.0)');
      if (!pbx.includes('IPHONEOS_DEPLOYMENT_TARGET = 15.0')) errors.push('project.pbxproj missing IPHONEOS_DEPLOYMENT_TARGET = 15.0');
      if (!pbx.includes('TARGETED_DEVICE_FAMILY = 1')) errors.push('project.pbxproj missing TARGETED_DEVICE_FAMILY = 1');
      if (!pbx.includes(`PRODUCT_BUNDLE_IDENTIFIER = ${cfg.bundleId}`)) errors.push(`project.pbxproj PRODUCT_BUNDLE_IDENTIFIER != ${cfg.bundleId}`);
      if (!pbx.includes('PrivacyInfo.xcprivacy')) errors.push('project.pbxproj missing PrivacyInfo.xcprivacy resource reference');
    }
    if (!podfile) errors.push('Missing ios/App/Podfile');
    else if (!podfile.includes("platform :ios, '15.0'")) errors.push("ios/App/Podfile missing platform :ios, '15.0'");

    if (!plist) errors.push('Missing ios/App/App/Info.plist');
    else {
      if (!/<key>ITSAppUsesNonExemptEncryption<\/key>\s*<false\/>/m.test(plist)) errors.push('Info.plist missing ITSAppUsesNonExemptEncryption=false');
      if (!plist.includes('NSUserTrackingUsageDescription')) errors.push('Info.plist missing NSUserTrackingUsageDescription');
      if (!plist.includes('SKAdNetworkIdentifier')) errors.push('Info.plist missing SKAdNetworkItems');
    }
  }

  // 4. Source code content scans
  const filesToScan = slug === 'orbit-escape'
    ? [path.join(gameDir, 'www/index.html'), path.join(gameDir, 'www/game.js')]
    : walkJsHtml(gameDir);

  let combinedSrc = '';
  for (const f of filesToScan) {
    const c = readIfExists(f);
    if (!c) continue;
    combinedSrc += '\n' + c;

    // Broken onrender.com URL check
    if (c.includes('onrender.com')) {
      errors.push(`${path.relative(gameDir, f)} contains legacy onrender.com URL`);
    }

    // Hipodrom betting check
    if (cfg.checkBetting && /\bsetbet\b|Ganyan Kazanc[ıi]|bahis\s*miktar/i.test(c)) {
      errors.push(`${path.relative(gameDir, f)} contains removed betting/ganyan reference`);
    }

    // "coming soon" / "mağaza sürümünde gelecek" / placeholder copy
    if (/mağaza sürümünde gelecek|coming soon in store|gelecek sürümde/i.test(c)) {
      errors.push(`${path.relative(gameDir, f)} contains placeholder "coming soon" store text`);
    }

    // Exposed cheat/debug panels (exclude benign variables/tests)
    if (/(?:\bid=|data-act=)["'][^"']*(?:debugPanel|devPanel|cheatBtn|addGoldBtn|addCashBtn)/i.test(c)) {
      errors.push(`${path.relative(gameDir, f)} exposes debug/cheat UI element`);
    }
  }

  const expectedPrivacyUrl = `https://elockmangames.com/privacy/${slug}/`;
  const expectedSupportUrl = `https://elockmangames.com/support.html`;
  if (!combinedSrc.includes(expectedPrivacyUrl)) {
    errors.push(`Game source missing in-game privacy link: ${expectedPrivacyUrl}`);
  } else {
    passes.push(`In-game privacy link present (${expectedPrivacyUrl})`);
  }
  if (!combinedSrc.includes(expectedSupportUrl)) {
    errors.push(`Game source missing in-game support link: ${expectedSupportUrl}`);
  } else {
    passes.push(`In-game support link present (${expectedSupportUrl})`);
  }

  // Native portal trap check
  if (cfg.expectPortalHideInNative) {
    const portalFiles = cfg.srcFiles.map(rel => ({ rel, content: readIfExists(path.join(gameDir, rel)) })).filter(x => x.content);
    const hasPortalLink = portalFiles.some(x => x.content.includes('https://elockmangames.com"') || x.content.includes("https://elockmangames.com'"));
    const hasNativeGuard = portalFiles.some(x => x.content.includes('isNativePlatform'));
    if (hasPortalLink && !hasNativeGuard) {
      errors.push('External elockmangames.com portal link is not guarded for Capacitor native iOS (risk of Guideline 4.2/browser trap)');
    }
  }

  return { slug, errors, warnings, passes };
}

const args = process.argv.slice(2);
let targets = [];
if (args.includes('--all') || args.length === 0) {
  targets = Object.keys(GAMES);
} else {
  const idx = args.indexOf('--game');
  if (idx !== -1 && args[idx + 1]) targets = [args[idx + 1]];
  else targets = args.filter(a => !a.startsWith('-'));
}

let totalErrors = 0;
console.log('=== Elockman Game Studio — App Store iOS Compliance Audit ===\n');
for (const slug of targets) {
  const res = auditGame(slug);
  console.log(`[${res.slug}] ${res.errors.length === 0 ? '✅ PASS' : `❌ FAIL (${res.errors.length} errors)`}`);
  for (const p of res.passes) console.log(`  ✓ ${p}`);
  for (const w of res.warnings) console.log(`  ⚠ ${w}`);
  for (const e of res.errors) console.log(`  ✗ ${e}`);
  console.log('');
  totalErrors += res.errors.length;
}

if (totalErrors > 0) {
  console.error(`Audit completed with ${totalErrors} total compliance error(s).`);
  process.exit(1);
}
console.log('ALL AUDITED GAMES PASSED APP STORE COMPLIANCE CHECKS!');
