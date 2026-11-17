# Elockman Game Studio — NotebookLM & Gemini Deep Research Prompt Kütüphanesi

## 1. NotebookLM Promptları (`notebooklm.google.com`)
Bu klasördeki `.md` dosyalarını NotebookLM'de yeni bir deftere kaynak olarak ekledikten sonra aşağıdaki promptları doğrudan yapıştırabilirsiniz:

### A) Play Console Üretim Erişimi Anketi
```text
Kaynaklardaki test sürecini ve oyun özelliklerini kullanarak Google Play "Üretim erişimi başvurusu" için şu 3 soruya İngilizce, dürüst ve somut cevaplar yaz (her biri en fazla 300 karakter):
1) Testçileri nasıl buldunuz?
2) Testçiler uygulamayı nasıl kullandı?
3) Geri bildirime göre ne değiştirdiniz?
Kaynakta olmayan hiçbir iddiayı ekleme; eksik bilgi varsa "EKSİK:" diye listele.
```

### B) Tasarım ve Ekonomi Tutarlılık Denetimi
```text
Bu oyunun tüm belgelerini karşılaştır. Birbiriyle çelişen sayıları, eksik mekanikleri veya oyuncuyu sıkabilecek darboğazları tablo halinde listele.
```

### C) Mağaza Vitrin & ASO Metni Geliştirme
```text
Kaynaklardaki 10 araç, 4 şehir ve 3 yarış modunu öne çıkaran, Play Store algoritmasına uyumlu (drag, rolling, modifiye, sanayi anahtar kelimeli) yüksek dönüşümlü 1 Türkçe, 1 İngilizce mağaza açıklaması yaz.
```

---

## 2. Gemini Deep Research Promptu (`gemini.google.com`)
Model menüsünden **Deep Research** seçip çalıştırın, çıkan raporu `c:\Projeler\studio\elockman-game-studio\AI-GELEN\` içine kaydedin:

```text
Türkiye ve global Google Play'de 2025-2026 döneminde "drag racing / araba modifiye" türündeki en başarılı 10 mobil oyunu analiz et (CSR Racing 2, Pixel Car Racer, Drag Racing Classic vb.).
Her biri için: monetizasyon modeli, ilk 5 dakika onboarding akışı, ödüllü reklam yerleşimi, D1/D7 elde tutma stratejileri ve ekran görüntüsü vitrin kurgusunu çıkar.
Son bölümde küçük bir indie stüdyo (Garaj Efsanesi) için hemen uygulanabilecek 10 somut öneri ver.
```
