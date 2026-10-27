# 📜 ELOCKMAN GAME STUDIO — Şirket İlkeleri ve Ofis Kuralları

Bu kurallar, Elockman Game Studio bünyesinde çalışan tüm yapay zeka ajanları ve sistem otomasyonları için bağlayıcıdır.

---

### 1. Kullanıcı Rahatlığı ve Müdahalesizlik İlkesi
- Kullanıcı oyun projelerinin günlük detaylarında boğulmayacak, mikro-yönetim yapmak zorunda kalmayacaktır.
- Ajanlar oyun projelerinde (`Ring Efsanesi` ve `Hipodrom Ahırı`) otonom ve planlı çalışır.
- Kullanıcı yalnızca Elockman Game Studio ofisindeki [`DASHBOARD.md`](file:///c:/Projeler/elockman-game-studio/DASHBOARD.md) üzerinden genel gidişatı izler. Sadece kritik bir aksaklık durumunda kullanıcı onayı istenir.

### 2. Sıfır Regresyon ve Kalite İlkesi
- Hiçbir taahhüt (commit) veya özellik eklemesi var olan testleri kıramaz.
- `Ring Efsanesi` projesinde `npm.cmd test` çalıştırılarak mevcut 591+ testin yeşil kalması şarttır.
- `Hipodrom Ahırı` projesinde derleme ve stabilite bozulamaz.

### 3. Çift Seans Raporlama Disiplini
- Her sabah 09:00'da günün başlangıç özeti ve yol haritası çıkartılır.
- Her akşam 20:00'de test, derleme ve departman şeflerinin imzalı gün sonu raporu oluşturulur.
- Raporlar standart stüdyo formatında [`RAPORLAR/`](file:///c:/Projeler/elockman-game-studio/RAPORLAR) altına arşivlenir.

### 4. Departman İmzaları
Her akşam raporunda 5 departman kendi alanındaki durumunu beyan eder:
- 👑 **Studio Head**: Genel stüdyo skoru ve stratejik hedef.
- 💻 **Teknik Lider**: Mimari durum, git commit özetleri ve derleme sağlığı.
- 🎲 **Oyun Tasarımcısı**: Mekaniklerin derinliği, boksör/at dengesi.
- 🧪 **QA Şefi**: Test başarı oranı, regresyon taramaları.
- 🎨 **Sanat & Hikaye Yönetmeni**: Arayüz, görseller ve oyuncu deneyimi.
