import { useState } from "react";

const FinanceSummary = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const cards = [
    {
      title: "Total Pemasukan",
      value: data?.totalPemasukan || 0,
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "💰",
      type: "pemasukan",
    },
    {
      title: "Total Pengeluaran",
      value: data?.totalPengeluaran || 0,
      color: "text-red-600",
      bg: "bg-red-50",
      icon: "💸",
      type: "pengeluaran",
    },
    {
      title: "Saldo Akhir",
      value: data?.saldo || 0,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "🏦",
      type: "saldo",
    },
  ];

  const persen =
    data?.totalPemasukan > 0
      ? (
          (data.totalPengeluaran / data.totalPemasukan) *
          100
        ).toFixed(1)
      : 0;

  return (
    <section
      id="keuangan"
      className="py-24 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">
            KEUANGAN
          </span>

          <h2 className="text-5xl font-black text-[#1A1B5E]">
            Ringkasan Keuangan
          </h2>

          <p className="mt-4 text-slate-500">
            Transparansi pemasukan, pengeluaran dan saldo
            kegiatan MS V-FEST 2026.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((item) => (

            <div
              key={item.type}
              onClick={() => setSelected(item.type)}
              className="bg-white rounded-3xl shadow-lg p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl duration-300"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.bg}`}
              >
                {item.icon}
              </div>

              <p className="text-slate-500 mt-6">
                {item.title}
              </p>

              <h3 className={`text-4xl font-black mt-3 ${item.color}`}>
                Rp{" "}
                {Number(item.value).toLocaleString("id-ID")}
              </h3>

              <button className="mt-6 text-sky-600 font-semibold">
                Lihat Detail →
              </button>

            </div>

          ))}

        </div>

        {/* Progress */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-12">

          <div className="flex justify-between mb-4">

            <h3 className="text-2xl font-bold text-[#1A1B5E]">
              Penggunaan Dana
            </h3>

            <span className="font-bold text-red-600">
              {persen}%
            </span>

          </div>

          <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-green-500 to-red-500 rounded-full"
              style={{
                width: `${persen}%`,
              }}
            />

          </div>

          <p className="text-slate-500 mt-3">
            Dana yang telah digunakan dari total pemasukan.
          </p>

        </div>

{/* Modal */}

{selected && (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
    onClick={() => setSelected(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-[#1A1B5E]">
          {selected === "pemasukan" && "Detail Pemasukan"}
          {selected === "pengeluaran" && "Detail Pengeluaran"}
          {selected === "saldo" && "Detail Saldo"}
        </h2>

        <button
          className="text-3xl hover:text-red-500"
          onClick={() => setSelected(null)}
        >
          ×
        </button>
      </div>

      {/* ======================= */}
      {/* PEMASUKAN */}
      {/* ======================= */}

      {selected === "pemasukan" && (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Sumber Dana</th>
              <th className="p-3 text-right">Jumlah</th>
            </tr>
          </thead>

          <tbody>
            {data.sumberDana.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-3">{item["No"]}</td>

                <td className="p-3">
                  {item["Sumber Dana"]}
                </td>

                <td className="p-3 text-right font-semibold text-green-600">
                  {item["Jumlah"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ======================= */}
      {/* PENGELUARAN */}
      {/* ======================= */}

      {selected === "pengeluaran" && (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-100">
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-right">Nominal</th>
            </tr>
          </thead>

          <tbody>
            {data.pengeluaran.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-3">{item["No"]}</td>

                <td className="p-3">
                  {item["Nama"]}
                </td>

                <td className="p-3">
                  {item["Tanggal"]}
                </td>

                <td className="p-3 text-right font-semibold text-red-600">
                  {item["Nominal"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selected === "saldo" && (
        <div className="space-y-5">

          <div className="flex justify-between p-5 rounded-xl bg-slate-100">
            <span className="font-semibold">
              Kas Mardisantoso
            </span>

            <span className="font-bold text-blue-700">
              Rp{" "}
              {data.kasMardisantoso.toLocaleString(
                "id-ID"
              )}
            </span>
          </div>

          <div className="flex justify-between p-5 rounded-xl bg-slate-100">
            <span className="font-semibold">
              Kas Satria Muda
            </span>

            <span className="font-bold text-blue-700">
              Rp{" "}
              {data.kasSatriaMuda.toLocaleString(
                "id-ID"
              )}
            </span>
          </div>

          <div className="flex justify-between p-6 rounded-xl bg-blue-100 text-2xl">
            <span className="font-black">
              Total Saldo
            </span>

            <span className="font-black text-blue-700">
              Rp{" "}
              {data.saldo.toLocaleString("id-ID")}
            </span>
          </div>

        </div>
      )}
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default FinanceSummary;