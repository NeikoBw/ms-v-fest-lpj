import Papa from "papaparse";

const PESERTA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=386675628&single=true&output=csv";

const TIKET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1279037821&single=true&output=csv";

const PARKIR_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=1063128070&single=true&output=csv";

const KEBERSIHAN_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFrjcixjHKhBuEljJgAGNXjsR_ZdSPcydRbaaveGwg9UEw_Tlgt3jXhKnkXyTf-Q/pub?gid=531723297&single=true&output=csv";

function rupiahToNumber(value) {
  if (!value) return 0;

  return Number(
    value
      .replace("Rp", "")
      .replace(/\./g, "")
      .replace(",", ".")
      .trim()
  );
}

async function parseCSV(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Gagal mengambil data");
  }

  const csv = await res.text();

  const parsed = Papa.parse(csv.trim(), {
    skipEmptyLines: true,
  });

  const rows = parsed.data;

  // Cari baris header yang diawali "No"
  const headerIndex = rows.findIndex(
    (row) => row[0]?.trim() === "No"
  );

  if (headerIndex === -1) {
    throw new Error("Header tidak ditemukan.");
  }

  const headers = rows[headerIndex];

  // Menghindari header ganda (Nominal, Nominal)
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

export async function getData() {
  const [peserta, tiket, parkir, kebersihan] = await Promise.all([
    parseCSV(PESERTA_URL),
    parseCSV(TIKET_URL),
    parseCSV(PARKIR_URL),
    parseCSV(KEBERSIHAN_URL),
  ]);

  const pesertaData = peserta.filter(
    (row) => row["No"] && row["No"] !== "Total"
  );

  const tiketTotal = tiket.find(
    (row) => row["No"] === "Total"
  );

  const parkirTotal = parkir.find(
    (row) => row["No"] === "Total"
  );

  const kebersihanTotal = kebersihan.find(
    (row) => row["No"] === "Total"
  );

  const grafikTiket = tiket
    .filter(
      (row) =>
        row["No"] &&
        row["No"] !== "Total"
    )
    .map((row) => ({
      tanggal: row["Tanggal"],
      tiket: Number(row["Jumlah Tiket Terjual"]),
    }));

  console.table(grafikTiket);

  return {
    peserta: pesertaData,

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