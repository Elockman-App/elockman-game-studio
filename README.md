# 🎮 ELOCKMAN GAME STUDIO — Resmi Stüdyo & Portföy Genel Merkezi

[![Web Portal](https://img.shields.io/badge/Web_Portal-elockmangames.com-38bdf8?style=for-the-badge&logo=google-chrome)](https://elockmangames.com)
[![Google Play](https://img.shields.io/badge/Google_Play-Geliştirici_Profili-10b981?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/dev?id=6034929488947548242)
[![Test Hub](https://img.shields.io/badge/Test_Hub-Kapalı_Test_Merkezi-f59e0b?style=for-the-badge&logo=google)](https://elockmangames.com/test-hub.html)
[![Android Compatibility](https://img.shields.io/badge/Android-minSdk_24_|_targetSdk_36-a855f7?style=for-the-badge&logo=android)](https://developer.android.com)

**Elockman Game Studio**, mobil ve web ekosisteminde simülasyon, derin menajerlik stratejisi ve dinamik arcade dünyalar geliştiren bağımsız bir oyun stüdyosudur. Bu depo; stüdyo web portalını (`elockmangames.com`), kapalı test merkezini (`test-hub.html`) ve 5 aktif oyun projesinin merkezi yönetim standartlarını barındırır.

---

## 🏛️ Stüdyo Oyun Portföyü (5 Aktif Başlık)

| Oyun | Tür | Paket Adı | Web Sürümü | Google Play Kapalı Test |
| :--- | :--- | :--- | :--- | :--- |
| **🏎️ Garaj Efsanesi** | Simülasyon · Drag Yarışı | `com.elockman.garajefsanesi` | [Oyna ↗](https://garaj-efsanesi.onrender.com/) | [Teste Katıl ↗](https://play.google.com/apps/testing/com.elockman.garajefsanesi) |
| **⚽ Kulüp Efsanesi** | Spor · Futbol Menajerlik | `com.elockman.kulupefsanesi` | [Oyna ↗](https://kulup-efsanesi.onrender.com/) | [Teste Katıl ↗](https://play.google.com/apps/testing/com.elockman.kulupefsanesi) |
| **🚀 Orbit Escape** | Arcade · Fizik · Uzay | `com.elockman.orbitescape` | [Oyna ↗](https://orbit-escape-cprs.onrender.com/) | [Teste Katıl ↗](https://play.google.com/apps/testing/com.elockman.orbitescape) |
| **🥊 Ring Tycoon** | Boks Menajerliği · Tycoon | `com.elockman.ringtycoon` | [Oyna ↗](https://ring-tycoon.onrender.com/) | [Teste Katıl ↗](https://play.google.com/apps/testing/com.elockman.ringtycoon) |
| **🏇 Hipodrom Ahırı** | Atçılık · Yarış Simülasyonu | `com.hipodrom.ahiri` | [Oyna ↗](https://hipodrom-ahiri.onrender.com/) | [Teste Katıl ↗](https://play.google.com/apps/testing/com.hipodrom.ahiri) |

---

## 🌐 Stüdyo Mimarisi

```mermaid
graph TD
    HQ["🏛️ Elockman Game Studio (elockmangames.com)"]
    
    HQ --> TH["⚡ Test Hub (test-hub.html)"]
    HQ --> PRIV["🛡️ Gizlilik ve Veri Güvenliği (privacy.html)"]
    
    HQ --> G1["🏎️ Garaj Efsanesi (com.elockman.garajefsanesi)"]
    HQ --> G2["⚽ Kulüp Efsanesi (com.elockman.kulupefsanesi)"]
    HQ --> G3["🚀 Orbit Escape (com.elockman.orbitescape)"]
    HQ --> G4["🥊 Ring Tycoon (com.elockman.ringtycoon)"]
    HQ --> G5["🏇 Hipodrom Ahırı (com.hipodrom.ahiri)"]
```

---

## ⚡ 14 Günlük Google Play Kapalı Test Programı

Google Play'in 20 test kullanıcısı / 14 gün kesintisiz test gereksinimini koordine eden rehberli akış:
1. **Google Test Grubu**: [`elockman-testers@googlegroups.com`](https://groups.google.com/g/elockman-testers)
2. **Opt-in & Yükleme**: Her oyun için doğrudan Google Play test bağlantıları.
3. **Geri Bildirim Kanalı**: [`contact@elockmangames.com`](mailto:contact@elockmangames.com)

---

## 🛡️ Teknik & Politika Standartları
- **Android Uyumluluk**: `minSdk 24` (Android 7.0+ geniş erişim), `targetSdk 36` (Android 16 hazır).
- **Güvenlik & CSP**: `render.yaml` üzerinde `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options` kuralları aktiftir.
- **Sıfır Dış Bağımlılık**: Portal CSS ve JS varlıkları `self` kaynaklıdır; harici CDN kesintilerinden ve CSP engellemelerinden muaftır.
- **SEO & Schema**: Schema.org `Organization` ve 5 oyunluk `ItemList` (`VideoGame`) JSON-LD yapılandırılmış verisi entegredir.
- **İletişim**: `contact@elockmangames.com` | Geliştirici ID: `6034929488947548242`
