# 🔬 ELOCKMAN GAME STUDIO — Açık Kaynak AR-GE Kataloğu & Kütüphane Arşivi

Bu belge, stüdyomuzun oyun projelerinde (**Ring Efsanesi** ve **Hipodrom Ahırı**) kullanabileceğimiz, GitHub üzerinde açık kaynaklı, yüksek yıldızlı ve ticari kullanıma uygun (**MIT License / Unlicense**) depoların analizini ve indirilen kütüphaneleri içerir.

---

## 📜 Açık Kaynak ve MIT Lisansı Nedir? Ticari Oyunlarda Kullanılabilir mi?

### 1. MIT Lisansı Nedir?
Dünyadaki en özgürlükçü ve iş dünyası dostu lisans türüdür. Lisans metni tek bir sayfadır ve özetle şunu söyler:
> *"Bu yazılımı ve kaynak kodlarını dilediğiniz gibi kullanabilir, kopyalayabilir, değiştirebilir, birleştirebilir, yayınlayabilir, dağıtabilir, alt lisanslayabilir ve **satabilirsiniz**."*

### 2. Ticari Oyunlar İçin Güvenli mi?
* **%100 Yasaldır:** Kendi kodunuzun içine gömebilir, ticari APK/AAB üretebilir, Google Play'de ve App Store'da satabilir veya oyun içi reklam/IAP ile gelir elde edebilirsiniz.
* **GPL gibi "bulaşıcı" değildir:** Kodlarınızı açık kaynak yapma zorunluluğu getirmez. Stüdyomuzun kendi özel algoritmaları ve ticari sırları tamamen gizli kalır.
* **Telif / Royalty Ücreti Yoktur:** Milyonlarca indirmeye ulaşsanız bile yazara 1 kuruş ödemeniz gerekmez.

---

## 📦 İndirilen ve AR-GE İncelemesine Alınan İlk Repolar (`AR-GE/repolar/`)

Aşağıdaki 4 kritik repo `c:/Projeler/elockman-game-studio/AR-GE/repolar/` dizinine yerel olarak indirilmiş ve incelenmeye başlanmıştır:

| Kütüphane / Repo | Lisans | GitHub Yıldızı | Hedef Alan | Stüdyo Oyunlarındaki Kullanım Senaryosu |
| :--- | :--- | :--- | :--- | :--- |
| **[`break_infinity.js`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/break_infinity.js)** | MIT | 500+ ⭐ | Tycoon / Idle Matematik Motoru | **Ring Efsanesi & Hipodrom:** Standart JS float limitini ($10^{308}$) aşan boksör nakit ödülleri, at çiftliği gelirleri, çarpanlar ve prestij (rebirth) sistemlerinde taşma/NaN hatalarını sıfırlar. |
| **[`isocity`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/isocity)** | MIT | 1.500+ ⭐ | İzometrik Canvas Simülasyon Motoru | **Hipodrom Ahırı & Spor Salonu:** Saf HTML5 Canvas ile çalışan harita, bina yerleşimi, ahır odaları ve izometrik boks salonu genişletme simülasyonları için hazır motor mantığı. |
| **[`easystarjs`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/easystarjs)** | MIT | 1.700+ ⭐ | A* Asenkron Yol Bulma (Pathfinding) | **Yapay Zeka & Hareket:** Hipodrom pistinde koşan atların kulvar geçişleri ve boks antrenman salonunda personellerin/boksörlerin serbestçe dolaşmasını sağlayan hafif A* motoru. |
| **[`jsfxr`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/jsfxr)** | Unlicense (Public Domain) | 800+ ⭐ | Web Audio Prosedürel Ses Sentezleyici | **Mobil Performans & Ses:** Ağır MP3/WAV ses dosyaları yerine tarayıcı içinde milisaniyede dinamik yumruk sesleri, gong/zil sesleri, madeni para şıkırtısı ve alkış üreten ultra hafif motor. |

---

## 🔍 Kütüphane Detayları ve Entegrasyon Kılavuzu

### 1. `break_infinity.js` (Ekonomi & Tycoon Matematiği)
* **Kaynak:** [Patashu/break_infinity.js](https://github.com/Patashu/break_infinity.js)
* **Dosya Konumu:** [`AR-GE/repolar/break_infinity.js`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/break_infinity.js)
* **Öne Çıkan Özellik:** `Decimal` sınıfı ile `1.79e308` üzerindeki devasa sayıları bile hatasız toplama, çarpma, üstel büyüme hesaplama.
* **Örnek Kullanım:**
  ```typescript
  import Decimal from './break_infinity';
  let boxerSalary = new Decimal("1e15"); // 1 Katrilyon Lira
  let gymBonus = new Decimal("1.25");
  let totalRevenue = boxerSalary.times(gymBonus);
  console.log(totalRevenue.toExponential(2));
  ```

### 2. `isocity` (İzometrik Şehir / Ahır / Salon Düzeni)
* **Kaynak:** [victorqribeiro/isocity](https://github.com/victorqribeiro/isocity)
* **Dosya Konumu:** [`AR-GE/repolar/isocity`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/isocity)
* **Öne Çıkan Özellik:** Harici hiçbir ağır kütüphane gerektirmeyen, temiz matematik dönüşümlü (2D ekrandan izometrik koordinata) piksel hassasiyetinde simülasyon motoru.

### 3. `easystarjs` (Pist Kulvarı ve Salon A* Navigasyonu)
* **Kaynak:** [prettymuchbryce/easystarjs](https://github.com/prettymuchbryce/easystarjs)
* **Dosya Konumu:** [`AR-GE/repolar/easystarjs`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/easystarjs)
* **Öne Çıkan Özellik:** Grid tabanlı haritalarda engelleri hesaba katarak en kısa ve en akıcı yolu UI thread'ini dondurmadan hesaplar.

### 4. `jsfxr` (Kod ile Anlık Ses Efekti Üretimi)
* **Kaynak:** [grumdrig/jsfxr](https://github.com/grumdrig/jsfxr)
* **Dosya Konumu:** [`AR-GE/repolar/jsfxr`](file:///c:/Projeler/elockman-game-studio/AR-GE/repolar/jsfxr)
* **Öne Çıkan Özellik:** Sıfır asset ağırlığı. Sadece 1 satır sayısal parametre dizisiyle retro/arcade dövüş ve yarış ses efektlerini doğrudan Web Audio API ile hoparlöre verir.

---

## 🚀 Sırada Araştırılacak İkinci Dalga Repolar

1. **Kenney Game Assets (Public Domain / CC0)**: Karakter sprite'ları, UI butonları, spor ve at yarışı ikonları.
2. **BitECS (Entity Component System)**: Yüzlerce atı ve seyirciyi 60 FPS'te akıcı simüle etmek için yüksek performanslı veri odaklı ECS mimarisi.
3. **Phaser / PixiJS Shaders**: Ring zemininde ışıklandırma ve hipodrom pistinde yağmur/çamur hava durumu efektleri.
