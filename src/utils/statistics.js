export function getStatistics(data) {
  if (!data) {
    return {
      totalTim: 0,
      totalPertandingan: 26,
      totalPanitia: 65,
      totalPenonton: 0,
    };
  }

  // ===========================
  // Total Tim
  // ===========================
  const peserta = data.peserta || [];

  const totalTim = peserta.filter((row) => {
    return (
      typeof row[0] === "number"
    );
  }).length;

  // ===========================
  // Total Penonton
  // ===========================
  const tiket = data.tiketMasuk || [];

  const totalRow = tiket.find(
    (row) => row[0] === "Total"
  );

  const totalPenonton = totalRow ? Number(totalRow[1]) : 0;

  return {
    totalTim,
    totalPertandingan: 26,
    totalPanitia: 65,
    totalPenonton,
  };
}