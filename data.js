// Yeni anket eklemek için SURVEYS dizisine bir nesne ekleyin.
// kind: "age" | "occupation" | "genel"   ·   type: "party" (parti oyu) | "president" (cumhurbaşkanlığı)
// a = AKP (party) ya da Erdoğan (president) %;  b = CHP (party) ya da rakip aday (president) %
const SURVEYS = [
  {
    id: "ankar-2025-11", pollster: "Ank-Ar", type: "party", date: "2025-11-02",
    title: "Genel seçim anketi, yaş kırılımı", n: null, fieldwork: "Haberde belirtilmemiş",
    url: "https://dokuz8haber.net/ank-ar-anketi-chp-hem-genc-hem-de-55-yas-ustu-secmende-akpyi-geride-birakti",
    source: "dokuz8HABER", bLabel: "CHP",
    segments: [
      { label: "18-29 yaş", kind: "age", a: 22.8, b: 35.2 },
      { label: "30-55 yaş", kind: "age", a: 37.6, b: 26.8 },
      { label: "55 yaş ve üzeri", kind: "age", a: 28.6, b: 39.0 }
    ]
  },
  {
    id: "ankar-2025-06", pollster: "Ank-Ar", type: "president", date: "2025-06-28",
    title: "Cumhurbaşkanlığı tercihi, yaş kırılımı (Erdoğan - İmamoğlu)", n: null, fieldwork: "Haberde belirtilmemiş",
    url: "https://www.cumhuriyet.com.tr/siyaset/ank-ar-arastirma-da-dikkat-ceken-anket-erdogan-hicbir-yas-grubunda-yuzde-50-yi-gecemedi-2413411",
    source: "Cumhuriyet", bLabel: "İmamoğlu",
    segments: [
      { label: "18-34 yaş", kind: "age", a: 26.2, b: 62.5 },
      { label: "34-55 yaş", kind: "age", a: 46.5, b: 42.8 },
      { label: "55 yaş ve üzeri", kind: "age", a: 34.7, b: 54.3 }
    ]
  },
  {
    id: "chp-myk-2026-01", pollster: "Belirtilmemiş (CHP MYK'de sunulan araştırma)", type: "party", date: "2026-01-20",
    title: "65 yaş üstü seçmen (haberde emeklilerle ilişkilendiriliyor)", n: null, fieldwork: "Belirtilmemiş",
    url: "https://www.sozcu.com.tr/amp/chp-akp-oy-farki-myk-toplantisinda-aciklandi-p285539",
    source: "Sözcü", bLabel: "CHP",
    note: "Rakamları CHP kurmayları açıkladı; araştırma şirketi, örneklem ve tarih haberde yer almıyor.",
    segments: [{ label: "65 yaş üstü", kind: "age", a: 19.0, b: 34.5 }]
  },
  {
    id: "orc-2025-09", pollster: "ORC Araştırma", type: "party", date: "2025-09-07",
    title: "Emekli seçmen anketi", n: null, fieldwork: "Eylül 2025 (yayın tarihi 7 Eylül)",
    url: "https://www.urfanatik.com/orc-arastirma-acikladi-emeklilerin-yeni-favori-partisi-belli-oldu",
    source: "Urfanatik", bLabel: "CHP",
    note: "Aynı ankette emeklilerin %58,1'i geçim sıkıntısı yaşadığını söylüyor.",
    segments: [{ label: "Emekli", kind: "occupation", a: 29.1, b: 34.2 }]
  },
  {
    id: "orc-2025-11", pollster: "ORC Araştırma", type: "party", date: "2025-11-09",
    title: "Emekli seçmen anketi (26 il)", n: 1400, fieldwork: "Kasım 2025 (haber tarihi 9 Kasım)",
    url: "https://www.guncelegitim.com/haber/emekliler-hangi-partiye-oy-verecek-28105.html",
    source: "Güncel Eğitim", bLabel: "CHP",
    segments: [{ label: "Emekli", kind: "occupation", a: 33.2, b: 35.0 }]
  },
  {
    id: "orc-2026-01", pollster: "ORC Araştırma", type: "party", date: "2026-01-22",
    title: "Emekli seçmen anketi", n: 1060, fieldwork: "20-22 Ocak 2026",
    url: "https://inegolyerelhaber.com/haber/emeklilerin_oy_tercihleri_belli_oldu-76875",
    source: "İnegöl Yerel Haber", bLabel: "CHP",
    segments: [{ label: "Emekli", kind: "occupation", a: 28.2, b: 34.7 }]
  },
  {
    id: "toplum-2025-06", pollster: "Toplum Çalışmaları Enstitüsü", type: "party", date: "2025-06-19",
    title: "Türkiye Seçmen Eğilimleri Araştırması (genel, kararsızlar dağıtılmış)", n: null, fieldwork: "Yayın: 19 Haziran 2025 (hata payı ±2,5)",
    url: "https://www.toplum.org.tr/wp-content/uploads/2025/06/Turkiye-Secmen-Egilimleri-Arastirmasi-19-Haziran-2025.pdf",
    source: "Toplum Çalışmaları Enstitüsü (PDF)", bLabel: "CHP",
    note: "Yaş ve meslek tabloları PDF'te görsel olarak yer aldığından otomatik okunamadı; yalnızca genel sonuç var. Aynı raporda ilk turda Erdoğan %35,7, İmamoğlu %32,6.",
    segments: [{ label: "Tüm seçmen (genel)", kind: "genel", a: 32.3, b: 30.5 }]
  },
  {
    id: "yenigun-orc", pollster: "ORC Araştırma", type: "party", date: null,
    title: "Emekli anketi: \"Geçiminizi sağlayabiliyor musunuz?\"", n: null, fieldwork: "-",
    url: "https://www.gazeteyenigun.com.tr/haber/23826981/orc-arastirmadan-dikkat-ceken-emekli-anketi-geciminizi-saglayabiliyor-musunuz",
    source: "Gazete Yeni Gün", bLabel: "CHP",
    note: "Site bot engeli nedeniyle sayfa okunamadı. Rakamları haberden bakıp segments alanına ekleyebilirsiniz.",
    segments: []
  }
];
