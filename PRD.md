# Product Requirement Document (PRD): Motor Ola Credit Calculator

Dokumen spesifikasi teknis dan fungsional ini disusun sebagai acuan pengkodean (*prompting/instruction*) untuk Codex atau AI coding assistant menggunakan **HTML5, CSS3, dan Vanilla JavaScript**.

---

## 1. Ringkasan & Tujuan Produk

* **Nama Produk**: Motor Ola - Interactive Credit Calculator
* **Platform**: Web Responsif (Desktop-first Split Screen, Mobile Stacked)
* **Tujuan**: Membantu calon pembeli memilih lini motor Motor Ola, memilih varian warna, dan mensimulasikan rencana cicilan bulanan secara transparan berbasis bunga tetap (*flat rate*).
* **Kebutuhan Akademik**: Memenuhi standar struktur kontrol visual (minimal 2 input, 1 button, validasi parsing angka, 1 percabangan, dan 1 perulangan untuk menghasilkan tabel rincian jadwal angsuran).

---

## 2. Arsitektur Teknis & Stack

* **HTML5**: Struktur semantik (`<main>`, `<section>`, `<article>`, `<form>`, `<table>`).
* **CSS3**: Modern Flexbox & Grid, CSS Variables, Glassmorphism accents (`backdrop-filter: blur()`), transisi interaktif.
* **JavaScript (ES6+)**: Vanilla DOM manipulation, event-driven architecture, validasi numerik murni tanpa library eksternal.

---

## 3. Desain UI/UX & Ketentuan Tampilan

### Tata Letak Responsif

* **Desktop ($\ge 1024\text{px}$)**:
* Sistem *Split Screen* 2 kolom (rasio 6:6 atau 7:5).
* **Kolom Kiri**: Katalog kartu motor (independently scrollable).
* **Kolom Kanan**: Form kalkulator dan ringkasan cicilan (*sticky/fixed position*).


* **Mobile & Tablet ($< 1024\text{px}$)**:
* Tata letak bertingkat vertikal (*stacked layout*).
* Bagian atas: Katalog motor.
* Bagian bawah: Panel kalkulator dan rincian angsuran.



### Panduan Visual & Gaya

* **Aesthetic**: 80% Flat Minimalist + 20% Glassmorphism.
* **Elemen Solid/Flat**: Seluruh elemen kritis seperti input form, label, tombol utama, dan teks data wajib solid (kontras tinggi, bebas blur).
* **Elemen Glassmorphism**: Khusus kartu ringkasan hasil (*Results Overview Card*) dan kontainer non-kritis menggunakan `background: rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255, 255, 255, 0.4)`, serta bayangan lembut.
* **Palet Warna**:
* Base Background: `#F8FAFC` (Slate 50)
* Card Surface: `#FFFFFF`
* Text Primary: `#0F172A` (Slate 900)
* Text Secondary: `#64748B` (Slate 500)
* Brand Accent: `#2563EB` (Cobalt Blue) atau `#F97316` (Sunset Orange)
* Border Stroke: `#E2E8F0`



---

## 4. Struktur Data

Mock data motor disimpan dalam struktur JavaScript Object/Array:

```javascript
const motorData = [
  {
    id: "ola-glide",
    nama: "Motor Ola Glide 125",
    kategori: "Matic",
    hargaOTR: 21500000,
    dpMinPersen: 15,
    warna: [
      { nama: "Matte Black", hex: "#1E1E1E" },
      { nama: "Pearl White", hex: "#F3F4F6" },
      { nama: "Racing Red", hex: "#DC2626" }
    ]
  },
  {
    id: "ola-hyper",
    nama: "Motor Ola Hyper 160",
    kategori: "Sport Matic",
    hargaOTR: 32800000,
    dpMinPersen: 20,
    warna: [
      { nama: "Midnight Blue", hex: "#1E3A8A" },
      { nama: "Titanium Silver", hex: "#94A3B8" }
    ]
  },
  {
    id: "ola-volt",
    nama: "Motor Ola Volt-X EV",
    kategori: "Electric",
    hargaOTR: 26000000,
    dpMinPersen: 15,
    warna: [
      { nama: "Emerald Green", hex: "#059669" },
      { nama: "Cyber Yellow", hex: "#EAB308" },
      { nama: "Frost White", hex: "#FFFFFF" }
    ]
  }
];

```

---

## 5. Spesifikasi Fungsional & Logika Kontrol

### A. State Aplikasi

* `selectedMotorId`: Unit motor yang sedang aktif (default: item pertama).
* `selectedColor`: Warna yang dipilih di dalam kartu motor.
* `inputDP`: Nominal Down Payment dalam Rupiah.
* `selectedTenor`: Pilihan durasi cicilan (misal: 11, 23, 29, 35 bulan).

### B. Validasi Input (Logika Ekuivalen `TryParse`)

Dipicu saat tombol **"Hitung Simulasi"** ditekan atau saat input berubah:

1. **Cek Kekosongan & Format**: Memastikan input DP tidak kosong, bukan string alfabet, dan bernilai numerik murni (`!isNaN(parsedDP)`).
2. **Cek Batas (Range)**:
* Nilai DP tidak boleh negatif ($< 0$).
* Nilai DP minimal harus memenuhi persentase minimum DP motor terpilih ($\text{DP} \ge \text{OTR} \times \text{dpMinPersen} / 100$).
* Nilai DP tidak boleh melebihi atau sama dengan harga OTR motor.


3. **Pesan Kesalahan**: Jika tidak valid, hentikan eksekusi (`return`), render pesan error teks merah di bawah input, dan beri *border alert* pada input field.

### C. Percabangan (`if - else` / `switch`)

Digunakan untuk menentukan skema suku bunga flat per tahun berdasarkan jangka waktu kredit (*tenor*):

* `tenor <= 12`: Bunga flat = 7.0% per tahun.
* `tenor <= 24`: Bunga flat = 8.0% per tahun.
* `tenor <= 36`: Bunga flat = 9.5% per tahun.
* Nilai di luar itu: Bunga flat = 10.0% per tahun.

### D. Rumus Perhitungan Kredit Bunga Flat

$$\text{Pokok Pinjaman} = \text{Harga OTR} - \text{Nominal DP}$$

$$\text{Tenor Tahun} = \frac{\text{Tenor Bulan}}{12}$$

$$\text{Total Bunga} = \text{Pokok Pinjaman} \times \text{Suku Bunga Flat} \times \text{Tenor Tahun}$$

$$\text{Total Utang} = \text{Pokok Pinjaman} + \text{Total Bunga}$$

$$\text{Angsuran Bulanan} = \frac{\text{Total Utang}}{\text{Tenor Bulan}}$$

### E. Perulangan (`for` Loop)

Digunakan untuk mengenerate **Jadwal Rencana Pembayaran Cicilan**:

* Loop berjalan dari `bulan = 1` sampai `bulan = selectedTenor`.
* Setiap iterasi menghitung:
* Pokok per bulan: $\text{Pokok Pinjaman} / \text{Tenor}$
* Bunga per bulan: $\text{Total Bunga} / \text{Tenor}$
* Sisa pokok pinjaman yang berkurang tiap bulan.


* Output loop dirender ke dalam baris tabel `<tbody>` rincian angsuran.

---

## 6. Rincian Komponen Antarmuka

### Kolom Kiri: Katalog Kartu Motor

* **Daftar Kartu Motor**:
* Thumbnail siluet motor dengan status *badge* kategori.
* Label nama motor dan harga OTR terformat Rupiah (`Intl.NumberFormat`).
* **Palet Warna Swatches**: Kumpulan lingkaran warna mini ($20\text{px} \times 20\text{px}$) di dalam kartu. Mengklik bulatan warna memperbarui state warna motor tanpa menghilangkan pilihan kartu.
* Kartu yang aktif memiliki indikator border biru tebal dan teks "Dipilih".



### Kolom Kanan: Form Kredit & Widget Ringkasan

1. **Form Input (Solid Container)**:
* Header kartu menampilkan unit dan warna motor yang terpilih saat ini.
* Input `Nominal Uang Muka (DP)`: Text field dengan prefix `Rp` otomatis.
* Quick DP Selector: Tombol chip persentase cepat (20%, 30%, 40%) yang otomatis mengisi field DP jika diklik.
* Selektor Tenor: Radio button berbentuk pill button bertingkat (11 Bulan, 23 Bulan, 29 Bulan, 35 Bulan).
* Tombol Aksi: `<button id="btnHitung">` solid dengan teks **"Hitung Simulasi"**.


2. **Results Overview Card (Aksen Glassmorphism)**:
* Tampilan nominal **"Angsuran per Bulan"** berukuran besar.
* Grid rincian: Pokok Pinjaman, Suku Bunga Flat, Total Bunga, Total Pembayaran.


3. **Bagian Tabel Jadwal Angsuran**:
* Tabel yang menampilkan kolom: `Bulan Ke`, `Angsuran Pokok`, `Bunga`, `Total Cicilan`, `Sisa Pinjaman`.
* Bersifat collapsable (accordion) atau tampil langsung di bawah kartu ringkasan.



---

## 7. Kriteria Penerimaan (Acceptance Criteria)

* [ ] Saat motor atau varian warna diklik di katalog, judul dan harga OTR pada panel kanan terupdate secara instan.
* [ ] Memasukkan huruf atau angka DP di bawah batas minimum memunculkan notifikasi validasi dan tidak merusak aplikasi (*no runtime error / NaN*).
* [ ] Logika percabangan berhasil menentukan bunga yang sesuai dengan tenor yang dipilih.
* [ ] Perulangan `for` berhasil menghasilkan baris tabel jadwal pembayaran sebanyak jumlah bulan tenor yang dipilih.
* [ ] Seluruh format nominal mata uang tertulis rapi dalam standar format Indonesia (contoh: `Rp 21.500.000`).
* [ ] Tampilan desktop berada dalam mode *split-screen*, dan otomatis menjadi satu kolom memanjang (*stacked*) saat ukuran layar diperkecil ke ukuran mobile.