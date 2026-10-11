/**
 * ===================================================================
 * MOTOR OLLA - CREDIT CALCULATOR ENGINE (PERBAIKAN FOTO ASLI & RESPONSIF)
 * Pemrograman Visual - Pertemuan 4
 * 
 * Fitur & Standar Akademik:
 * 1. Master Data 8 Motor Populer Indonesia dengan Foto Asli per Varian Warna (Opsi B)
 * 2. Input Numerik dengan Validasi Logika Ekuivalen TryParse
 * 3. Logika Percabangan (if - else) Penentuan Suku Bunga Flat
 * 4. Logika Perulangan (for loop) Generator Jadwal Rincian Angsuran
 * 5. Formatting Mata Uang Standar Indonesia (Intl.NumberFormat)
 * 6. Responsif Penuh: Sinkronisasi Mobile Sticky Bar & Scroll Jump
 * ===================================================================
 */

// -------------------------------------------------------------------
// 1. MASTER DATA MOTOR INDONESIA DENGAN FOTO ASLI RESMI PER VARIAN WARNA
// -------------------------------------------------------------------
const motorData = [
  {
    id: "honda-beat",
    nama: "Honda BeAT Deluxe",
    kategori: "Matic",
    hargaOTR: 18900000,
    dpMinPersen: 15,
    warna: [
      { 
        nama: "Deluxe Matte Black", 
        hex: "#1F2022",
        foto: "assets/images/beat-black.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/03-10-26062026-031212.png"
      },
      { 
        nama: "Deluxe Matte Blue", 
        hex: "#1E3A8A",
        foto: "assets/images/beat-blue.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/02-11-26062026-031210.png"
      },
      { 
        nama: "Deluxe Matte Brown", 
        hex: "#78350F",
        foto: "assets/images/beat-brown.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/01-9-26062026-031206.png"
      },
      { 
        nama: "Jazz Glossy Black", 
        hex: "#09090B",
        foto: "assets/images/beat-cbs-black.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/07-4-26062026-031228.png"
      }
    ]
  },
  {
    id: "honda-scoopy",
    nama: "Honda Scoopy Prestige",
    kategori: "Matic",
    hargaOTR: 22500000,
    dpMinPersen: 15,
    warna: [
      { 
        nama: "Prestige White", 
        hex: "#F8FAFC",
        foto: "assets/images/scoopy-white.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-08-13112025-031225.png"
      },
      { 
        nama: "Prestige Black", 
        hex: "#18181B",
        foto: "assets/images/scoopy-black.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-09-13112025-031228.png"
      },
      { 
        nama: "Stylish Green", 
        hex: "#164E63",
        foto: "assets/images/scoopy-green.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-02-13112025-031208.png"
      },
      { 
        nama: "Prestige Red", 
        hex: "#991B1B",
        foto: "assets/images/scoopy-red.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-10-13112025-031231.png"
      }
    ]
  },
  {
    id: "honda-vario160",
    nama: "Honda Vario 160 CBS",
    kategori: "Matic",
    hargaOTR: 27600000,
    dpMinPersen: 15,
    warna: [
      { 
        nama: "Ultimate Matte Black", 
        hex: "#262626",
        foto: "assets/images/vario-black.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-abs-ultimate-matte-black-515x504px-24062026-030644.png"
      },
      { 
        nama: "Ultimate Matte White", 
        hex: "#EDEFEF",
        foto: "assets/images/vario-white.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-abs-ultimate-matte-white-515x504px-24062026-030640.png"
      },
      { 
        nama: "Ultimate Matte Red", 
        hex: "#B91C1C",
        foto: "assets/images/vario-red.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-abs-ultimate-matte-red-515x504px-24062026-030637.png"
      },
      { 
        nama: "Nitro Grey Lime", 
        hex: "#475569",
        foto: "assets/images/vario-grey.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-cbs-nitro-glossy-grey-lime-515x504px-24062026-030651.png"
      }
    ]
  },
  {
    id: "yamaha-nmax",
    nama: "Yamaha NMAX 155 Standard",
    kategori: "Maxi Scooter",
    hargaOTR: 32700000,
    dpMinPersen: 20,
    warna: [
      { 
        nama: "Black MAX", 
        hex: "#111827",
        foto: "assets/images/nmax-black.jpg",
        fallback: "https://www.yamahabrm.co.id/pics/images_600x600_060726/MAXI/nmax-turbo/nmax-turbo-Neo_MAX_Special_Livery-Black_MAX-600x600.jpg"
      },
      { 
        nama: "Matte Blue", 
        hex: "#1E3A8A",
        foto: "assets/images/nmax-blue.jpg",
        fallback: "https://www.yamahabrm.co.id/pics/images_600x600_060726/MAXI/nmax-turbo/nmax-turbo-Neo_Version-Matte_Blue-600x600.jpg"
      },
      { 
        nama: "Ceramic Grey", 
        hex: "#94A3B8",
        foto: "assets/images/nmax-grey.jpg",
        fallback: "https://www.yamahabrm.co.id/pics/images_600x600_060726/MAXI/nmax-turbo/nmax-turbo-TURBO_TECH_MAX-Ceramic_Grey-600x600.jpg"
      }
    ]
  },
  {
    id: "yamaha-aerox",
    nama: "Yamaha Aerox 155 Connected",
    kategori: "Maxi Scooter",
    hargaOTR: 28500000,
    dpMinPersen: 20,
    warna: [
      { 
        nama: "Metallic Red", 
        hex: "#DC2626",
        foto: "assets/images/aerox-red.jpg",
        fallback: "https://www.yamahabrm.co.id/pics/images_600x600_060726/MAXI/all-new-aerox155-connected/all-new-aerox155-connected-Standard-Metallic_Red-600x600.jpg"
      },
      { 
        nama: "Dull Blue Orange", 
        hex: "#1E293B",
        foto: "assets/images/aerox-blue.jpg",
        fallback: "https://www.yamahabrm.co.id/pics/images_600x600_060726/MAXI/all-new-aerox155-connected/all-new-aerox155-connected-Standard-Dull_Blue_Orange-600x600.jpg"
      },
      { 
        nama: "Elixir Dark Silver", 
        hex: "#64748B",
        foto: "assets/images/aerox-silver.jpg",
        fallback: "https://www.yamahabrm.co.id/pics/images_600x600_060726/MAXI/aerox-alpha/aerox-alpha-TURBO-Elixir_Dark_Silver-600x600.jpg"
      }
    ]
  },
  {
    id: "honda-pcx160",
    nama: "Honda PCX 160 CBS",
    kategori: "Maxi Scooter",
    hargaOTR: 33600000,
    dpMinPersen: 20,
    warna: [
      { 
        nama: "Exceptional Black", 
        hex: "#0F172A",
        foto: "assets/images/pcx-black.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-07-3-11022026-055551.png"
      },
      { 
        nama: "Phenomenal Blue", 
        hex: "#1E3A8A",
        foto: "assets/images/pcx-blue.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-01-2-11022026-055530.png"
      },
      { 
        nama: "Exceptional Red", 
        hex: "#991B1B",
        foto: "assets/images/pcx-red.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-05-3-11022026-055545.png"
      },
      { 
        nama: "Phenomenal Matte White", 
        hex: "#F1F5F9",
        foto: "assets/images/pcx-white.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/varian-warna-515x504-04-2-11022026-055538.png"
      }
    ]
  },
  {
    id: "honda-cbr150r",
    nama: "Honda CBR150R Standard",
    kategori: "Sport",
    hargaOTR: 38500000,
    dpMinPersen: 20,
    warna: [
      { 
        nama: "Victory Matte Black", 
        hex: "#171717",
        foto: "assets/images/cbr-black.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/ahm-cbr150r-matte-black-abs-515x504px-2-23102024-085905.png"
      },
      { 
        nama: "Honda Racing Tricolor", 
        hex: "#2563EB",
        foto: "assets/images/cbr-tricolor.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/ahm-cbr150r-tricolor-abs-515x504px-3-23102024-085855.png"
      },
      { 
        nama: "Honda Racing Red", 
        hex: "#DC2626",
        foto: "assets/images/cbr-red.png",
        fallback: "https://imagewebsite.astra-honda.com/uploads/product-draft/colors/ahm-cbr150r-red-racing-515x504px-1-23102024-070622.png"
      }
    ]
  },
  {
    id: "polytron-fox-r",
    nama: "Polytron Fox-R Electric",
    kategori: "Electric EV",
    hargaOTR: 20500000,
    dpMinPersen: 15,
    warna: [
      { 
        nama: "Crimson Red", 
        hex: "#B91C1C",
        foto: "assets/images/foxr-red.png",
        fallback: "https://cdn.polytron.co.id/public-assets/2023/08/Fox-R-image_motor-rilis-1024x683.png"
      },
      { 
        nama: "Matte Graphite", 
        hex: "#334155",
        foto: "assets/images/foxr-red.png",
        fallback: "https://cdn.polytron.co.id/public-assets/2023/08/Fox-R-image_motor-rilis-1024x683.png"
      },
      { 
        nama: "Bumblebee Yellow", 
        hex: "#EAB308",
        foto: "assets/images/foxr-red.png",
        fallback: "https://cdn.polytron.co.id/public-assets/2023/08/Fox-R-image_motor-rilis-1024x683.png"
      }
    ]
  }
];

// -------------------------------------------------------------------
// 2. STATE MANAJEMEN APLIKASI
// -------------------------------------------------------------------
let state = {
  selectedMotorId: "honda-beat",
  selectedColorIndex: 0,
  activeCategory: "all",
  nominalDP: 0,
  selectedTenor: 11
};

// -------------------------------------------------------------------
// 3. ELEMEN DOM UTAMA
// -------------------------------------------------------------------
const motorGrid = document.getElementById("motorGrid");
const catalogCount = document.getElementById("catalogCount");
const categoryChips = document.querySelectorAll(".filter-chip");

// Header Selected Unit
const headerMotorThumb = document.getElementById("headerMotorThumb");
const headerCategory = document.getElementById("headerCategory");
const headerMotorName = document.getElementById("headerMotorName");
const headerColorName = document.getElementById("headerColorName");
const headerPriceOTR = document.getElementById("headerPriceOTR");

// Form Inputs
const inputDP = document.getElementById("inputDP");
const minDPHint = document.getElementById("minDPHint");
const dpError = document.getElementById("dpError");
const quickDPButtons = document.getElementById("quickDPButtons");
const tenorRadios = document.querySelectorAll('input[name="tenor"]');
const btnHitung = document.getElementById("btnHitung");

// Result Overview
const resTenorBadge = document.getElementById("resTenorBadge");
const resMonthlyInstallment = document.getElementById("resMonthlyInstallment");
const resLoanPrincipal = document.getElementById("resLoanPrincipal");
const resInterestRate = document.getElementById("resInterestRate");
const resTotalInterest = document.getElementById("resTotalInterest");
const resTotalLoan = document.getElementById("resTotalLoan");

// Schedule CTA & Modal Dialog (Opsi C Terpilih)
const ctaTotalMonths = document.getElementById("ctaTotalMonths");
const scheduleTableBody = document.getElementById("scheduleTableBody");
const btnOpenScheduleModal = document.getElementById("btnOpenScheduleModal");
const scheduleModal = document.getElementById("scheduleModal");
const btnCloseScheduleModal = document.getElementById("btnCloseScheduleModal");
const btnModalCloseAction = document.getElementById("btnModalCloseAction");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalMonthlyInstallment = document.getElementById("modalMonthlyInstallment");
const modalLoanPrincipal = document.getElementById("modalLoanPrincipal");
const modalTotalLoan = document.getElementById("modalTotalLoan");

// Mobile Sticky Bar
const stickyUnitName = document.getElementById("stickyUnitName");
const stickyMonthlyVal = document.getElementById("stickyMonthlyVal");
const btnJumpCalc = document.getElementById("btnJumpCalc");
const btnStickySchedule = document.getElementById("btnStickySchedule");
const calculatorSection = document.getElementById("calculatorSection");

// -------------------------------------------------------------------
// 4. HELPER: FORMAT MATA UANG RUPIAH
// -------------------------------------------------------------------
const idrFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

function formatRupiah(number) {
  if (isNaN(number) || number === null || number === undefined) return "Rp 0";
  return idrFormatter.format(Math.round(number));
}

function formatRibuan(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseRibuan(str) {
  if (typeof str === "number") return str;
  if (!str) return 0;
  const cleaned = str.toString().replace(/[^0-9]/g, "");
  return parseInt(cleaned, 10) || 0;
}

// -------------------------------------------------------------------
// 5. LOGIKA PERCABANGAN (IF - ELSE): SUKU BUNGA FLAT PER TAHUN
// -------------------------------------------------------------------
/**
 * Menentukan suku bunga kredit tahunan berdasarkan durasi tenor (bulan)
 * Menggunakan struktur kontrol percabangan if-else sesuai spesifikasi akademik
 * 
 * Aturan Bunga:
 * - Tenor <= 12 Bulan : 7.0% (0.070) -> contoh: 11 bulan
 * - Tenor <= 24 Bulan : 8.0% (0.080) -> contoh: 23 bulan
 * - Tenor <= 36 Bulan : 9.5% (0.095) -> contoh: 29 & 35 bulan
 * - Tenor > 36 Bulan  : 10.0% (0.100)
 */
function tentukanSukuBungaFlat(tenorBulan) {
  const tenor = parseInt(tenorBulan, 10);
  
  if (tenor <= 12) {
    return 0.070; // 7.0% per tahun
  } else if (tenor <= 24) {
    return 0.080; // 8.0% per tahun
  } else if (tenor <= 36) {
    return 0.095; // 9.5% per tahun
  } else {
    return 0.100; // 10.0% per tahun
  }
}

// -------------------------------------------------------------------
// 6. LOGIKA VALIDASI NUMERIK (EKUIVALEN TRYPARSE)
// -------------------------------------------------------------------
/**
 * Memvalidasi parsing input DP (Uang Muka)
 * Memeriksa kekosongan, format numerik murni, dan batas range nilai
 * 
 * @param {string|number} rawDP - Nilai mentah dari input pengguna
 * @param {number} hargaOTR - Harga OTR motor yang sedang aktif
 * @param {number} dpMinPersen - Persentase minimum DP motor terpilih
 * @returns {object} { isValid: boolean, nominal: number, pesan: string }
 */
function tryParseDP(rawDP, hargaOTR, dpMinPersen) {
  const parsedValue = parseRibuan(rawDP);
  const minNominalDP = Math.round(hargaOTR * (dpMinPersen / 100));

  // 1. Cek Kekosongan
  if (rawDP === "" || rawDP === null || rawDP === undefined) {
    return {
      isValid: false,
      nominal: 0,
      pesan: "Nominal DP tidak boleh kosong."
    };
  }

  // 2. Cek Numerik Murni (TryParse NaN check)
  if (isNaN(parsedValue)) {
    return {
      isValid: false,
      nominal: 0,
      pesan: "DP harus berupa angka yang valid (numerik murni)."
    };
  }

  // 3. Cek Batas Negatif
  if (parsedValue < 0) {
    return {
      isValid: false,
      nominal: 0,
      pesan: "Nominal DP tidak boleh bernilai negatif."
    };
  }

  // 4. Cek Batas Minimal Persentase DP
  if (parsedValue < minNominalDP) {
    return {
      isValid: false,
      nominal: parsedValue,
      pesan: `DP minimal untuk motor ini adalah ${dpMinPersen}% (${formatRupiah(minNominalDP)}).`
    };
  }

  // 5. Cek Batas Maksimal (DP tidak boleh melebihi atau sama dengan OTR)
  if (parsedValue >= hargaOTR) {
    return {
      isValid: false,
      nominal: parsedValue,
      pesan: "Nominal DP tidak boleh sama dengan atau melebihi harga OTR motor."
    };
  }

  return {
    isValid: true,
    nominal: parsedValue,
    pesan: ""
  };
}

// -------------------------------------------------------------------
// 7. RUMUS FINANSIAL & SIMULASI KREDIT
// -------------------------------------------------------------------
function hitungSimulasiKredit(hargaOTR, nominalDP, tenorBulan) {
  const pokokPinjaman = hargaOTR - nominalDP;
  const sukuBunga = tentukanSukuBungaFlat(tenorBulan);
  const tenorTahun = tenorBulan / 12;

  // Rumus Flat Rate: Total Bunga = Pokok * Suku Bunga Flat * Tenor Tahun
  const totalBunga = Math.round(pokokPinjaman * sukuBunga * tenorTahun);
  const totalUtang = pokokPinjaman + totalBunga;
  const angsuranBulanan = Math.round(totalUtang / tenorBulan);

  return {
    pokokPinjaman,
    sukuBunga,
    tenorTahun,
    totalBunga,
    totalUtang,
    angsuranBulanan,
    tenorBulan
  };
}

// -------------------------------------------------------------------
// 8. LOGIKA PERULANGAN (FOR LOOP): JADWAL ANGSURAN BULANAN
// -------------------------------------------------------------------
/**
 * Menghasilkan baris tabel rincian jadwal cicilan menggunakan 'for' loop
 * Wajib tampil penuh langsung dan terupdate otomatis tanpa error
 */
function renderJadwalAngsuran(simulasi) {
  const { pokokPinjaman, totalBunga, tenorBulan, angsuranBulanan } = simulasi;
  
  const pokokPerBulan = Math.round(pokokPinjaman / tenorBulan);
  const bungaPerBulan = Math.round(totalBunga / tenorBulan);
  
  if (scheduleTableBody) {
    scheduleTableBody.innerHTML = "";
  }
  if (ctaTotalMonths) {
    ctaTotalMonths.textContent = tenorBulan;
  }

  let sisaPokok = pokokPinjaman;

  // LOGIKA PERULANGAN: for loop dari bulan 1 sampai bulan = tenorBulan
  for (let bulan = 1; bulan <= tenorBulan; bulan++) {
    sisaPokok = Math.max(0, sisaPokok - pokokPerBulan);
    
    // Pada bulan terakhir, sisa pokok dipastikan tepat Rp 0
    if (bulan === tenorBulan) {
      sisaPokok = 0;
    }

    if (scheduleTableBody) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="text-center font-semibold">Ke-${bulan}</td>
        <td>${formatRupiah(pokokPerBulan)}</td>
        <td>${formatRupiah(bungaPerBulan)}</td>
        <td class="font-semibold text-accent">${formatRupiah(angsuranBulanan)}</td>
        <td>${formatRupiah(sisaPokok)}</td>
      `;
      scheduleTableBody.appendChild(tr);
    }
  }
}

// -------------------------------------------------------------------
// 8B. KONTROL MODAL DIALOG JADWAL ANGSURAN (OPSI C TERPILIH)
// -------------------------------------------------------------------
function openScheduleModal() {
  if (!scheduleModal) return;
  scheduleModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  if (btnCloseScheduleModal) {
    btnCloseScheduleModal.focus();
  }
}

function closeScheduleModal() {
  if (!scheduleModal) return;
  scheduleModal.style.display = "none";
  document.body.style.overflow = "";
}

// -------------------------------------------------------------------
// 9. RENDERING KATALOG MOTOR DENGAN FOTO ASLI (ASPECT RATIO 1:1)
// -------------------------------------------------------------------
function renderKatalog() {
  const filtered = state.activeCategory === "all" 
    ? motorData 
    : motorData.filter(m => m.kategori.toLowerCase() === state.activeCategory.toLowerCase());

  catalogCount.textContent = `${filtered.length} Model Tersedia`;
  motorGrid.innerHTML = "";

  filtered.forEach(motor => {
    const isSelected = motor.id === state.selectedMotorId;
    const activeColor = isSelected ? motor.warna[state.selectedColorIndex] : motor.warna[0];

    const card = document.createElement("article");
    card.className = `motor-card ${isSelected ? "active" : ""}`;
    card.setAttribute("data-id", motor.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Pilih motor ${motor.nama}`);

    const badgeClass = motor.kategori.includes("Electric") ? "card-badge electric" : "card-badge";

    card.innerHTML = `
      <div class="card-top">
        <span class="${badgeClass}">${motor.kategori}</span>
        <span class="selected-indicator">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Dipilih
        </span>
      </div>

      <!-- Container Foto Motor Asli 1:1 -->
      <div class="motor-visual-container" id="visual-${motor.id}">
        <img 
          src="${activeColor.foto}" 
          alt="Foto Asli ${motor.nama} ${activeColor.nama}" 
          class="motor-photo-img" 
          id="img-${motor.id}"
          loading="lazy"
          onerror="this.onerror=null; this.src='${activeColor.fallback}';"
        >
      </div>

      <div class="card-info">
        <h4 class="card-title">${motor.nama}</h4>
        <p class="card-price-value">${formatRupiah(motor.hargaOTR)}</p>
      </div>

      <!-- Palet Swatches Pilihan Warna (Opsi B: Mengganti Foto) -->
      <div class="card-swatches-row">
        <span class="swatch-label-text" id="color-label-${motor.id}">${activeColor.nama}</span>
        <div class="swatches-list" role="radiogroup" aria-label="Pilihan warna motor">
          ${motor.warna.map((col, idx) => {
            const isColorActive = isSelected && idx === state.selectedColorIndex;
            return `
              <button 
                type="button"
                class="swatch-circle ${isColorActive ? "active" : ""}" 
                style="background-color: ${col.hex};" 
                data-motor-id="${motor.id}"
                data-color-index="${idx}"
                title="${col.nama}"
                aria-label="Warna ${col.nama}"
              ></button>
            `;
          }).join("")}
        </div>
      </div>
    `;

    // Event listener memilih kartu motor & swatch
    card.addEventListener("click", (e) => {
      const swatchBtn = e.target.closest(".swatch-circle");
      if (swatchBtn) {
        const colorIdx = parseInt(swatchBtn.getAttribute("data-color-index"), 10);
        selectColor(motor.id, colorIdx);
        return;
      }
      selectMotor(motor.id);
    });

    motorGrid.appendChild(card);
  });
}

// -------------------------------------------------------------------
// 10. INTERAKSI: MEMILIH MOTOR & MENGGANTI FOTO PER WARNA (OPSI B)
// -------------------------------------------------------------------
function selectMotor(motorId) {
  if (state.selectedMotorId === motorId) return;

  state.selectedMotorId = motorId;
  state.selectedColorIndex = 0; // reset ke varian warna pertama

  const motor = motorData.find(m => m.id === motorId);
  if (!motor) return;

  // Set default DP 20%
  const defaultDP = Math.round(motor.hargaOTR * 0.20);
  state.nominalDP = defaultDP;
  inputDP.value = formatRibuan(defaultDP);

  // Update header panel kanan
  updateHeaderSelectedUnit(motor);

  // Hapus pesan error jika ada
  hideError();

  // Re-render katalog
  renderKatalog();

  // Hitung ulang simulasi
  eksekusiHitungSimulasi();
}

/**
 * Memilih warna motor: Mengubah foto asli motor di kartu secara real-time (Opsi B)
 */
function selectColor(motorId, colorIndex) {
  const motor = motorData.find(m => m.id === motorId);
  if (!motor) return;

  if (state.selectedMotorId !== motorId) {
    state.selectedMotorId = motorId;
    state.nominalDP = Math.round(motor.hargaOTR * 0.20);
    inputDP.value = formatRibuan(state.nominalDP);
  }

  state.selectedColorIndex = colorIndex;
  const col = motor.warna[colorIndex];

  // 1. Update gambar foto motor pada kartu yang bersangkutan
  const imgElement = document.getElementById(`img-${motor.id}`);
  const colorLabel = document.getElementById(`color-label-${motor.id}`);
  
  if (imgElement) {
    imgElement.src = col.foto;
    imgElement.onerror = () => { imgElement.src = col.fallback; };
    imgElement.alt = `Foto Asli ${motor.nama} ${col.nama}`;
  }
  if (colorLabel) {
    colorLabel.textContent = col.nama;
  }

  // 2. Update header unit terpilih & thumbnail mini
  updateHeaderSelectedUnit(motor);

  // 3. Re-render katalog untuk memperbarui ring swatch yang aktif
  renderKatalog();

  // 4. Hitung ulang simulasi
  eksekusiHitungSimulasi();
}

function updateHeaderSelectedUnit(motor) {
  const color = motor.warna[state.selectedColorIndex] || motor.warna[0];
  headerCategory.textContent = motor.kategori;
  headerMotorName.textContent = motor.nama;
  headerColorName.textContent = color.nama;
  headerPriceOTR.textContent = formatRupiah(motor.hargaOTR);

  // Update thumbnail mini pada header form
  if (headerMotorThumb) {
    headerMotorThumb.src = color.foto;
    headerMotorThumb.onerror = () => { headerMotorThumb.src = color.fallback; };
    headerMotorThumb.alt = `${motor.nama} ${color.nama}`;
  }
  
  const minDP = Math.round(motor.hargaOTR * (motor.dpMinPersen / 100));
  minDPHint.textContent = `Min DP: ${formatRupiah(minDP)} (${motor.dpMinPersen}%)`;

  // Update sticky bottom bar pada mobile
  if (stickyUnitName) {
    stickyUnitName.textContent = `${motor.nama} (${color.nama})`;
  }
}

// -------------------------------------------------------------------
// 11. ERROR STATE MANAGEMENT
// -------------------------------------------------------------------
function showError(pesan) {
  dpError.textContent = pesan;
  dpError.style.display = "flex";
  inputDP.classList.add("input-error");
}

function hideError() {
  dpError.textContent = "";
  dpError.style.display = "none";
  inputDP.classList.remove("input-error");
}

// -------------------------------------------------------------------
// 12. PROSES EKSEKUSI PERHITUNGAN SIMULASI
// -------------------------------------------------------------------
function eksekusiHitungSimulasi() {
  const motor = motorData.find(m => m.id === state.selectedMotorId);
  if (!motor) return;

  // 1. Validasi Input DP dengan TryParse
  const validation = tryParseDP(inputDP.value, motor.hargaOTR, motor.dpMinPersen);

  if (!validation.isValid) {
    showError(validation.pesan);
    return;
  }

  hideError();
  state.nominalDP = validation.nominal;

  // 2. Ambil Tenor Terpilih
  let tenor = 11;
  const checkedRadio = document.querySelector('input[name="tenor"]:checked');
  if (checkedRadio) {
    tenor = parseInt(checkedRadio.value, 10);
  }
  state.selectedTenor = tenor;

  // 3. Jalankan Rumus Simulasi Kredit (Bunga Flat)
  const hasil = hitungSimulasiKredit(motor.hargaOTR, state.nominalDP, state.selectedTenor);

  // 4. Render Hasil ke Tampilan Ringkasan (Glassmorphism Card)
  resTenorBadge.textContent = `${hasil.tenorBulan} Bulan`;
  resMonthlyInstallment.textContent = formatRupiah(hasil.angsuranBulanan);
  resLoanPrincipal.textContent = formatRupiah(hasil.pokokPinjaman);
  resInterestRate.textContent = `${(hasil.sukuBunga * 100).toFixed(1)}% / th`;
  resTotalInterest.textContent = formatRupiah(hasil.totalBunga);
  resTotalLoan.textContent = formatRupiah(hasil.totalUtang);

  // Update Data Ringkasan Modal Dialog (Opsi C)
  const activeColor = motor.warna[state.selectedColorIndex] || motor.warna[0];
  if (modalSubtitle) {
    modalSubtitle.textContent = `Unit: ${motor.nama} (${activeColor.nama}) • Tenor: ${hasil.tenorBulan} Bulan`;
  }
  if (modalMonthlyInstallment) {
    modalMonthlyInstallment.textContent = formatRupiah(hasil.angsuranBulanan);
  }
  if (modalLoanPrincipal) {
    modalLoanPrincipal.textContent = formatRupiah(hasil.pokokPinjaman);
  }
  if (modalTotalLoan) {
    modalTotalLoan.textContent = formatRupiah(hasil.totalUtang);
  }

  // 5. Update nilai cicilan di sticky bottom bar mobile
  if (stickyMonthlyVal) {
    stickyMonthlyVal.textContent = `${formatRupiah(hasil.angsuranBulanan)}/bln`;
  }

  // 6. Render Tabel Jadwal Angsuran menggunakan Loop for (ke dalam modal)
  renderJadwalAngsuran(hasil);
}

// -------------------------------------------------------------------
// 13. EVENT LISTENERS
// -------------------------------------------------------------------
function initEventListeners() {
  // A. Filter Kategori
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryChips.forEach(c => {
        c.classList.remove("active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("active");
      chip.setAttribute("aria-selected", "true");
      
      state.activeCategory = chip.getAttribute("data-category");
      renderKatalog();
    });
  });

  // B. Input DP: Auto-format ribuan saat mengetik
  inputDP.addEventListener("input", (e) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, "");
    if (rawVal === "") {
      e.target.value = "";
      hideError();
      return;
    }
    const num = parseInt(rawVal, 10);
    e.target.value = formatRibuan(num);
    hideError();
  });

  inputDP.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      eksekusiHitungSimulasi();
    }
  });

  // C. Quick DP Chips (20%, 30%, 40%)
  quickDPButtons.addEventListener("click", (e) => {
    const btn = e.target.closest(".quick-btn");
    if (!btn) return;
    
    const percent = parseInt(btn.getAttribute("data-percent"), 10);
    const motor = motorData.find(m => m.id === state.selectedMotorId);
    if (!motor) return;

    const quickNominal = Math.round(motor.hargaOTR * (percent / 100));
    inputDP.value = formatRibuan(quickNominal);
    hideError();
    eksekusiHitungSimulasi();
  });

  // D. Pilihan Radio Tenor
  tenorRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      eksekusiHitungSimulasi();
    });
  });

  // E. Tombol Hitung Simulasi
  btnHitung.addEventListener("click", () => {
    eksekusiHitungSimulasi();
  });

  // F. Tombol Lompat ke Form Kalkulator di Mobile/Tablet
  if (btnJumpCalc && calculatorSection) {
    btnJumpCalc.addEventListener("click", () => {
      calculatorSection.scrollIntoView({ behavior: "smooth", block: "start" });
      inputDP.focus();
    });
  }

  // G. Pemicu Modal Jadwal Angsuran (Opsi C Terpilih)
  if (btnOpenScheduleModal) {
    btnOpenScheduleModal.addEventListener("click", openScheduleModal);
  }
  if (btnStickySchedule) {
    btnStickySchedule.addEventListener("click", openScheduleModal);
  }
  if (btnCloseScheduleModal) {
    btnCloseScheduleModal.addEventListener("click", closeScheduleModal);
  }
  if (btnModalCloseAction) {
    btnModalCloseAction.addEventListener("click", closeScheduleModal);
  }
  if (scheduleModal) {
    scheduleModal.addEventListener("click", (e) => {
      if (e.target === scheduleModal) {
        closeScheduleModal();
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && scheduleModal && scheduleModal.style.display === "flex") {
      closeScheduleModal();
    }
  });
}

// -------------------------------------------------------------------
// 14. INISIALISASI APLIKASI
// -------------------------------------------------------------------
function initApp() {
  const initialMotor = motorData[0];
  state.selectedMotorId = initialMotor.id;
  state.selectedColorIndex = 0;
  
  // Set default DP 20%
  const initialDP = Math.round(initialMotor.hargaOTR * 0.20);
  state.nominalDP = initialDP;
  inputDP.value = formatRibuan(initialDP);

  // Render katalog foto asli 1:1
  renderKatalog();

  // Update header unit
  updateHeaderSelectedUnit(initialMotor);

  // Inisialisasi event listeners
  initEventListeners();

  // Eksekusi perhitungan awal & jadwal angsuran
  eksekusiHitungSimulasi();

  // Dukungan deep-link / hash untuk membuka modal jadwal angsuran secara langsung
  if (window.location.search.includes("modal=1") || window.location.hash === "#jadwal") {
    openScheduleModal();
  }
}

// Jalankan aplikasi saat DOM siap
document.addEventListener("DOMContentLoaded", initApp);
