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
      title: "Dana Dibekukan",
      value: data?.saldo || 0,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "🔒",
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

        {/* =========================
            HEADER
        ========================== */}

        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">
            KEUANGAN
          </span>

          <h2 className="text-5xl font-black text-[#1A1B5E]">
            Ringkasan Keuangan
          </h2>

          <p className="mt-4 text-slate-500">
            Transparansi pemasukan, pengeluaran dan
            pengelolaan dana kegiatan MS V-FEST 2026.
          </p>

        </div>

        {/* =========================
            CARDS
        ========================== */}

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

              <h3
                className={`text-4xl font-black mt-3 ${item.color}`}
              >
                Rp{" "}
                {Number(item.value).toLocaleString("id-ID")}
              </h3>

              <button className="mt-6 text-sky-600 font-semibold">
                Lihat Detail →
              </button>

            </div>

          ))}

        </div>

        {/* =========================
            PROGRESS PENGGUNAAN DANA
        ========================== */}

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
            Persentase dana yang telah digunakan dari total
            pemasukan kegiatan.
          </p>

        </div>

        {/* =========================
            INFORMASI DANA DIBEKUKAN
        ========================== */}

        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-3xl p-8">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm">
              🔒
            </div>

            <div>

              <h3 className="text-2xl font-black text-[#1A1B5E]">
                Dana Dibekukan untuk Kegiatan Berikutnya
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                Saldo akhir kegiatan tidak dibagikan kepada
                panitia maupun pihak lainnya. Dana tersebut
                dibekukan dan akan digunakan sebagai modal awal
                untuk mendukung penyelenggaraan kegiatan
                berikutnya.
              </p>

            </div>

          </div>

        </div>

        {/* =========================
            MODAL
        ========================== */}

        {selected && (

          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setSelected(null)}
          >

            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >

              {/* HEADER MODAL */}

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-black text-[#1A1B5E]">

                  {selected === "pemasukan" &&
                    "Detail Pemasukan"}

                  {selected === "pengeluaran" &&
                    "Detail Pengeluaran"}

                  {selected === "saldo" &&
                    "Detail Dana Dibekukan"}

                </h2>

                <button
                  className="text-3xl hover:text-red-500"
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>

              </div>

              {/* =========================
                  PEMASUKAN
              ========================== */}

              {selected === "pemasukan" && (

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-green-100">

                      <th className="p-3 text-left">
                        No
                      </th>

                      <th className="p-3 text-left">
                        Sumber Dana
                      </th>

                      <th className="p-3 text-right">
                        Jumlah
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {data.sumberDana.map((item, index) => (

                      <tr
                        key={index}
                        className="border-b hover:bg-slate-50"
                      >

                        <td className="p-3">
                          {item["No"]}
                        </td>

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

              {/* =========================
                  PENGELUARAN
              ========================== */}

              {selected === "pengeluaran" && (

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-red-100">

                      <th className="p-3 text-left">
                        No
                      </th>

                      <th className="p-3 text-left">
                        Nama
                      </th>

                      <th className="p-3 text-left">
                        Tanggal
                      </th>

                      <th className="p-3 text-right">
                        Nominal
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {data.pengeluaran.map((item, index) => (

                      <tr
                        key={index}
                        className="border-b hover:bg-slate-50"
                      >

                        <td className="p-3">
                          {item["No"]}
                        </td>

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

              {/* =========================
                  DANA DIBEKUKAN
              ========================== */}

              {selected === "saldo" && (

                <div className="space-y-5">

                  {/* STATUS DANA */}

                  <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-2xl">
                        🔒
                      </div>

                      <div>

                        <p className="text-sm text-slate-500">
                          Status Dana
                        </p>

                        <p className="text-xl font-black text-[#1A1B5E]">
                          Dibekukan
                        </p>

                      </div>

                    </div>

                    <p className="text-slate-600 mt-5 leading-relaxed">
                      Dana ini tidak dibagikan sebagai hasil
                      kegiatan. Seluruh saldo akhir ditetapkan
                      sebagai modal awal untuk mendukung
                      pelaksanaan kegiatan berikutnya.
                    </p>

                  </div>

                  {/* TOTAL DANA */}

                  <div className="flex justify-between items-center p-6 rounded-xl bg-blue-100">

                    <span className="font-black text-xl">
                      Saldo Akhir
                    </span>

                    <span className="font-black text-2xl text-blue-700">
                      Rp{" "}
                      {Number(
                        data.saldo || 0
                      ).toLocaleString("id-ID")}
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