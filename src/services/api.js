import Papa from "papaparse";

// ==========================
// URL GOOGLE SHEET CSV
// ==========================

const PESERTA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=386675628&single=true&output=csv";

const TIKET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1279037821&single=true&output=csv";

const PARKIR_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1063128070&single=true&output=csv";

const KEBERSIHAN_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=531723297&single=true&output=csv";

const SPONSOR_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1714418899&single=true&output=csv";

const DONATUR_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1185311028&single=true&output=csv";

const KEUANGAN_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=23458124&single=true&output=csv";

const PENGELUARAN_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1443537991&single=true&output=csv";
// ==========================
// FORMAT RUPIAH
// ==========================

function rupiahToNumber(value) {
  if (!value) return 0;

  const angka = value
    .replace("Rp", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();

  return isNaN(Number(angka)) ? 0 : Number(angka);
}

// ==========================
// PARSE CSV
// ==========================

async function parseCSV(url) {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Gagal mengambil data");

  const csv = await res.text();

  const parsed = Papa.parse(csv.trim(), {
    skipEmptyLines: true,
  });

  const rows = parsed.data;

  const headerIndex = rows.findIndex(
    (row) => row[0]?.trim() === "No"
  );

  if (headerIndex === -1)
    throw new Error("Header tidak ditemukan.");

  const headers = rows[headerIndex];

  const uniqueHeaders = [];

  headers.forEach((header) => {
    let name = header.trim();

    if (uniqueHeaders.includes(name)) {
      let i = 1;

      while (uniqueHeaders.includes(`${name}_${i}`)) {
        i++;
      }

      name = `${name}_${i}`;
    }

    uniqueHeaders.push(name);
  });

  return rows
    .slice(headerIndex + 1)
    .filter((row) => row.length > 1)
    .map((row) => {
      const obj = {};

      uniqueHeaders.forEach((header, index) => {
        obj[header] = row[index] || "";
      });

      return obj;
    });
}

// ==========================
// GET DATA
// ==========================

export async function getData() {
  const [
    peserta,
    tiket,
    parkir,
    kebersihan,
    sponsors,
    donatur,
    keuangan,
    pengeluaran,
  ] = await Promise.all([
    parseCSV(PESERTA_URL),
    parseCSV(TIKET_URL),
    parseCSV(PARKIR_URL),
    parseCSV(KEBERSIHAN_URL),
    parseCSV(SPONSOR_URL),
    parseCSV(DONATUR_URL),
    parseCSV(KEUANGAN_URL),
    parseCSV(PENGELUARAN_URL),
  ]);

  // =====================
  // PESERTA
  // =====================

  const pesertaData = peserta.filter(
    (row) => row["No"] && row["No"] !== "Total"
  );

  // =====================
  // TIKET
  // =====================

  const tiketTotal = tiket.find(
    (row) => row["No"] === "Total"
  );

  // =====================
  // PARKIR
  // =====================

  const parkirTotal = parkir.find(
    (row) => row["No"] === "Total"
  );

  // =====================
  // KEBERSIHAN
  // =====================

  const kebersihanTotal = kebersihan.find(
    (row) => row["No"] === "Total"
  );

  // =====================
  // GRAFIK TIKET
  // =====================

  const grafikTiket = tiket
    .filter((row) => row["No"] && row["No"] !== "Total")
    .map((row) => ({
      tanggal: row["Tanggal"],
      tiket: Number(row["Jumlah Tiket Terjual"]),
    }));

  // =====================
  // SPONSOR
  // =====================

  const sponsorData = sponsors.filter(
    (row) =>
      row["No"] &&
      row["No"] !== "TOTAL"
  );
  const donaturData = donatur.filter(
    (row) => 
      row["No"] &&
      row["No"] !== "TOTAL"
  )
// =====================
// KEUANGAN
// =====================

const totalPemasukan = keuangan.find(
  (row) =>
    row["Sumber Dana"]?.toUpperCase() === "TOTAL"
);

const totalPengeluaran = keuangan.find(
  (row) =>
    row["Sumber Dana"]?.toUpperCase() ===
    "TOTAL PENGELUARAN"
);

const sisaSaldo = keuangan.find(
  (row) =>
    row["Sumber Dana"]?.toUpperCase() ===
    "SISA SALDO"
);

const kasMardisantoso = keuangan.find(
  (row) =>
    row["Sumber Dana"]?.toUpperCase() ===
    "KAS MARDISANTOSO"
);

const kasSatriaMuda = keuangan.find(
  (row) =>
    row["Sumber Dana"]?.toUpperCase() ===
    "KAS SATRIA MUDA"
);

// rincian pemasukan

const sumberDana = keuangan.filter(
  (row) =>
    row["No"] &&
    !isNaN(row["No"])
);

// rincian pengeluaran

const pengeluaranData = pengeluaran.filter(
  (row) =>
    row["No"] &&
    !isNaN(row["No"])
);

console.log("Keuangan :", keuangan);
console.log("Pengeluaran :", pengeluaran);

  return {
    peserta: pesertaData,
    sponsors: sponsorData,
    donatur: donaturData,
    keuangan:{
      totalPemasukan: rupiahToNumber(
        totalPemasukan?.["Jumlah"] || "0"
      ),
      totalPengeluaran: rupiahToNumber(
        totalPengeluaran?.["Jumlah"] || "0"
      ),
      saldo: rupiahToNumber(
        sisaSaldo?.["Jumlah"] || "0"
      ),
      kasMardisantoso: rupiahToNumber(
        kasMardisantoso?.["Jumlah"] || "0"
      ),
      kasSatriaMuda: rupiahToNumber(
        kasSatriaMuda?.["Jumlah"] || "0"
      ),
      sumberDana,
      pengeluaran: pengeluaranData,
    },

    statistik: {
      totalPenonton: Number(
        tiketTotal?.["Jumlah Tiket Terjual"] || 0
      ),

      tiketTerjual: Number(
        tiketTotal?.["Jumlah Tiket Terjual"] || 0
      ),

      pendapatanTiket: rupiahToNumber(
        tiketTotal?.["Nominal_1"] || "0"
      ),

      pendapatanParkir: rupiahToNumber(
        parkirTotal?.["Nominal"] || "0"
      ),

      danaKebersihan: rupiahToNumber(
        kebersihanTotal?.["Jumlah"] || "0"
      ),

      totalPertandingan: 26,

      grafikTiket,
    },
  };
}